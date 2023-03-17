import axios from "axios";
import * as cheerio from "cheerio";

export interface SoccerPlayerRank {
  name: string;
  team: string;
  play?: string;
  teamImg?: string;
  coef?: string;
  img?: string;
  goal?: string;
  save?: string;
  assist?: string;
  id?: string;
  allPlay?: string;
  allTime?: string;
  year?: string;
  country?: string;
  countryImg?: string;
  height?: string;
  weight?: string;
  value?: string;
  cleanSheets?: string;
  conceded?: string;
  shirtnum?: string;
  elo?: string;
}

export interface SoccerPlayerObj {
  [key: string]: SoccerPlayerRank;
}

async function fetchSoccerPlayersData(kind: string, position: string) {
  const API_URL = `/competition/rankings/${kind}/2023/${position}`;
  const data = await axios.get(API_URL, {
    withCredentials: true,
  });
  return data;
}

async function fetchPlayerData(id?: string) {
  if (id) {
    const data = await axios.get(`/player/${id}`, {
      withCredentials: true,
    });
    return data;
  }
}

async function commonParsing(kind: string, position: string) {
  // 위에서 추출한 HTML 전체 가져오기
  const html = await fetchSoccerPlayersData(kind, position);
  const $ = cheerio.load(html.data);

  const $ranks = $("#ranking_table > tr");
  const playerRankArr: SoccerPlayerRank[] = [];

  $ranks.each((idx, node) => {
    const name = $(node).find("td.ta-l > a > p > b").text();
    const team = $(node).find("td.ta-l > a > span").text();
    const img = $(node).find("td:nth-child(2) > img").attr("src");
    const teamImg = $(node).find("td.ta-l > a > img").attr("src");
    const id = $(node).find("td.ta-l > a").attr("href")?.split("/")[4];
    const play = $(node).find("td:nth-child(5)").text();
    const coef = $(node).find("td:nth-child(6)").text();
    if (position === "best-goalkeepers") {
      const save = $(node).find("td:nth-child(4) > b").text();
      playerRankArr.push({ name, team, img, teamImg, play, coef, id, save });
    } else {
      playerRankArr.push({ name, team, img, teamImg, play, coef, id });
    }
  });

  await getPlayerDetail(playerRankArr, position);
  return playerRankArr;
}

function getPlayerDetail(arr: SoccerPlayerRank[], position: string): any {
  arr.forEach((el: SoccerPlayerRank, i: number) => {
    Promise.all([fetchPlayerData(el.id)]).then((data: any) => {
      const $ = cheerio.load(data[0].data);
      const $performanceInfo = $(
        "#mod_player_season > div > div.panel-body.item-column-list.ph0"
      );

      const $playerInfo = $(
        "#mod_player_stats > div > div.panel-body.stat-list.jc-sa.ph5"
      );

      const allPlay = $performanceInfo
        .find("div:nth-child(1) > div.main-line")
        .text();
      const allTime = $performanceInfo
        .find("div:nth-child(2) > div.main-line")
        .text();
      // 실점
      const goal = $performanceInfo
        .find("div:nth-child(3) > div.main-line")
        .text();
      // 클린시트
      const assist = $performanceInfo
        .find("div:nth-child(4) > div.main-line")
        .text();
      const year = $playerInfo.find("div:nth-child(1) > div.big-row").text();
      const country = $playerInfo
        .find("div:nth-child(1) > div:nth-child(4)")
        .text();
      const countryImg = $playerInfo
        .find("div:nth-child(1) > div.round-row.mb5 > img")
        .attr("src");
      const weight = $playerInfo.find("div:nth-child(2) > div.big-row").text();
      const height = $playerInfo.find("div:nth-child(3) > div.big-row").text();
      const value = $playerInfo.find("div:nth-child(4) > div.big-row").text();
      const shirtnum = $playerInfo
        .find("div:nth-child(3) > div.round-row.mb5.black > span")
        .text();
      const elo = $playerInfo
        .find("div:nth-child(4) > div.round-row.mb5.green > span")
        .text();

      el.allPlay = allPlay;
      el.allTime = allTime;
      el.country = country;
      el.weight = weight;
      el.height = height;
      el.value = value;
      el.year = year;
      el.countryImg = countryImg;
      el.shirtnum = shirtnum;
      el.elo = elo;

      if (position === "best-goalkeepers") {
        el.cleanSheets = assist;
        el.conceded = goal;
      } else {
        el.goal = goal;
        el.assist = assist;
      }
    });
  });
}

// 파싱
export const premierPlayerParsing = async (): Promise<any> => {
  const player = await commonParsing("premier_league", "top-scorers");
  const goalkeeper = await commonParsing("premier_league", "best-goalkeepers");

  return { player, goalkeeper };
};
