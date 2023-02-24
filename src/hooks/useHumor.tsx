import axios from "axios";
import * as cheerio from "cheerio";

export default function useHumor() {
  async function fetchdata() {
    const API_URL = "/ranking";
    const data = await axios.get(API_URL);
    return data;
  }
  // 파싱
  const parsing = async () => {
    // 위에서 추출한 HTML 전체 가져오기
    const html = await fetchdata();
    const $ = cheerio.load(html.data);

    console.log(html.data);
  };
  parsing();
  return true;
}
