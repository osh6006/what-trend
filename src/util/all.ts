import axios from "axios";

export async function fetchHTMLData(url: string) {
  const data = await axios.get(url);
  return data;
}
