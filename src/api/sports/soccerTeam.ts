import axios from "axios";
import * as cheerio from "cheerio";

export interface teamRank {
  draw: string;
  img: string;
  form: string;
  gd: string;
  lose: string;
  name: string;
  rank: string;
  play: string;
  point: string;
  win: string;
}

async function fetchSoccerTeamData(kind: string, key: string) {
  const API_URL = `/en/${kind}/table/${key}`;
  const data = await axios.get(API_URL);
  return data;
}

async function commonParsing(kind: string, key: string) {
  // 위에서 추출한 HTML 전체 가져오기
  const html = await fetchSoccerTeamData(kind, key);
  const $ = cheerio.load(html.data);

  const $ranks = $(".widget-match-standings__table tbody tr");
  const teamRankArr: teamRank[] = [];

  $ranks.each((idx, node) => {
    const rank = $(node).children().first().text().trim();
    const img = $(node).data("team-id");
    const name = $(node)
      .find(
        ".widget-match-standings__team > .widget-match-standings__link > .widget-match-standings__team--full-name"
      )
      .text()
      .trim();
    const play = $(node)
      .find(".widget-match-standings__matches-played")
      .text()
      .trim();
    const win = $(node)
      .find(".widget-match-standings__matches-won")
      .text()
      .trim();
    const draw = $(node)
      .find(".widget-match-standings__matches-drawn")
      .text()
      .trim();
    const lose = $(node)
      .find(".widget-match-standings__matches-lost")
      .text()
      .trim();
    const gd = $(node)
      .find(".widget-match-standings__goals-diff")
      .text()
      .trim();
    const point = $(node).find(".widget-match-standings__pts").text().trim();
    const form: string[] = [];

    $(node)
      .find(".widget-match-standings__last-five > a")
      .each((i, n) => {
        form.push($(n).text().trim());
      });

    if (img) {
      teamRankArr.push({
        rank,
        img,
        name,
        play,
        win,
        draw,
        lose,
        gd,
        point,
        form: form.join(""),
      });
    }
  });
  return teamRankArr;
}

// 파싱
export const premierLeagueParsing = async (): Promise<teamRank[]> => {
  return commonParsing("premier-league", "2kwbbcootiqqgmrzs6o5inle5");
};

export const serieaLeagueParsing = async (): Promise<teamRank[]> => {
  return commonParsing("serie-a", "1r097lpxe0xn03ihb7wi98kao");
};

export const primeraLeagueParsing = async (): Promise<teamRank[]> => {
  return commonParsing("primera-divisi%C3%B3n", "34pl8szyvrbwcmfkuocjm3r6t");
};

export const bundesligaLeagueParsing = async (): Promise<teamRank[]> => {
  return commonParsing("bundesliga", "6by3h89i2eykc341oz7lv1ddd");
};

export const ligue1LeagueParsing = async (): Promise<teamRank[]> => {
  return commonParsing("ligue-1", "dm5ka0os1e3dxcp3vh05kmp33");
};

export const allLeagueParsing = async (): Promise<teamRank[]> => {
  return commonParsing("ligue-1", "dm5ka0os1e3dxcp3vh05kmp33");
};
