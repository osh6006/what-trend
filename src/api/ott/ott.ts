import axios from "axios";
import * as cheerio from "cheerio";
import { cloneDeep } from "lodash";

export interface OttRank {
  name: string;
  id: string;
  point: string;
  desc?: string;
  img?: string;
  country?: string;
  imdb?: string;
  rotten?: string;
  genre?: string;
}

export interface OttDetailObj {
  name?: string;
  img?: string;
  country?: string;
  imdb?: string;
  rotten?: string;
  genre?: string;
  desc?: string;
  director?: string;
  weather?: string;
}

export interface OttRankOpts {
  kind?: string;
  country?: string;
}

export interface OttRankObj {
  movie: OttRank[];
  serise: OttRank[];
}

async function fetchRankData(ottopts: OttRankOpts) {
  if (ottopts.kind) {
    const API_URL = `/top10/${ottopts?.kind}/`;
    const data = await axios.get(API_URL);
    return data;
  } else {
    return undefined;
  }
}

async function fetchVideoDetail(title?: string) {
  const API_URL = `/title/${title}/`;
  const data = await axios.get(API_URL);
  return data;
}

async function helpParsing(ottopts: OttRankOpts) {
  const html = await fetchRankData(ottopts);
  const $ = cheerio.load(html?.data);
  let $movieTop10;
  let $seriseTop10;
  const ottRankArrObj: OttRankObj = {
    movie: [],
    serise: [],
  };

  if (ottopts.country === "world") {
    $movieTop10 = $(
      `#${ottopts.kind}-1 > div.-mx-content > div > div > table > tbody > tr`
    );

    $seriseTop10 = $(
      `#${ottopts.kind}-2 > div.-mx-content > div > div > table > tbody > tr`
    );

    $movieTop10.each((idx, node) => {
      pushArr($, node, ottRankArrObj.movie);
    });
    $seriseTop10.each((idx, node) => {
      pushArr($, node, ottRankArrObj.serise);
    });

    return ottRankArrObj;
  } else {
  }
}

function pushArr(root: cheerio.Root, node: cheerio.Element, array: OttRank[]) {
  const id = root(node).find("td > a").attr("href")?.split("/")[2];
  const name = root(node).find("td > a > div:nth-child(2)").text().trim();
  const point = root(node)
    .find("td.table-td.w-12.text-right.text-gray-400.font-semibold")
    .text();
  const img = root(node)
    .find("td > a > div.table-poster-1 > div > picture > img")
    .attr("src");

  if (id) {
    array?.push({ name, point, id, img: "https://flixpatrol.com/" + img });
  }
}

export async function getOttDetail(id?: string) {
  const html = await fetchVideoDetail(id);
  const $ = cheerio.load(html.data);

  const OttDetailObj: OttDetailObj = {};

  const $desc = $(
    "body > div > div > div > div > div:nth-child(1) > div.card > div:nth-child(1)"
  )
    .text()
    .trim();
  const $genre = `${$(
    "body > div.content > div > div > div.mb-6 > div > div > span:nth-child(9)"
  ).text()} | ${$(
    "body > div.content > div > div > div.mb-6 > div > div > span:nth-child(11)"
  ).text()}`;
  const $rotten = $(
    "body > div.content.mt-4 > div > div.flex-grow > div.justify-between > div:nth-child(1) > div.flex.flex-wrap.justify-around.text-center > div.px-2.py-4.w-40 > div.mb-1.text-2xl.text-gray-400"
  )
    .text()
    .trim();
  const $imdb = $(
    "body > div.content.mt-4 > div > div.flex-grow > div.justify-between > div:nth-child(1) > div.flex.flex-wrap.justify-around.text-center > div.px-2.py-4.w-32 > div.mb-1.text-2xl.text-gray-400"
  )
    .text()
    .trim();
  const $country = $(
    "body > div> div > div> div > div > div > span:nth-child(3)"
  )
    .text()
    .trim();

  const $img = $(
    "body > div.content.mt-4 > div > div.w-40 > div > picture > img"
  ).attr("src");

  const $director = $(
    "body > div.content.mt-4 > div > div > div > div:nth-child(1) > div.card.-mx-content > div.card-body.space-y-2.text-sm > div:nth-child(2) > div:nth-child(2)"
  ).text();

  const $name = $(
    "body > div.content.mt-4 > div > div > div.mb-6 > div.justify-between > h1"
  ).text();

  const $weather = $(
    "body > div.content.mt-4 > div > div > div.mb-6 > div > div > span:nth-child(5)"
  ).text();

  OttDetailObj.desc = $desc;
  OttDetailObj.genre = $genre;
  OttDetailObj.rotten = $rotten;
  OttDetailObj.imdb = $imdb;
  OttDetailObj.country = $country;
  OttDetailObj.img = $img;
  OttDetailObj.director = $director;
  OttDetailObj.weather = $weather;
  OttDetailObj.name = $name;

  return OttDetailObj;
}

export const ottRankParsing = async (ottopts: OttRankOpts): Promise<any> => {
  const ottRank = await helpParsing(ottopts);

  return ottRank;
};

export const ottDetailParsing = async (id?: string): Promise<any> => {
  const ottDetail = await getOttDetail(id);
  console.log(ottDetail);

  return ottDetail;
};
