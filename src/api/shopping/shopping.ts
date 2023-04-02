import axios from "axios";

export async function getSearchShoppingTrends() {
  return axios
    .get("/v1/search/shop.json", {
      params: {
        query: "정장",
        display: 20,
      },
      headers: {
        "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
        "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_SECRET,
      },
    })
    .then(res => res.data);
}

export const getNaverShoppingTrends = async () => {
  const request_body = {
    startDate: "2017-08-01",
    endDate: "2017-09-30",
    timeUnit: "month",
    category: [
      { name: "패션의류", param: ["50000000"] },
      { name: "화장품/미용", param: ["50000002"] },
    ],
    device: "pc",
    ages: ["20", "30"],
    gender: "f",
  };

  return axios
    .post("/v1/datalab/shopping/categories", {
      headers: {
        "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
        "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_SECRET,
        "Content-Type": "application/json",
        "Content-Length": 360,
      },
      request_body: JSON.stringify(request_body),
    })
    .then(res => res.data);
};

export const getShoppingSearchData = async () => {
  const search = await getSearchShoppingTrends();
  return search;
};

export const getAllShoppingTrends = async () => {
  const naver = await getNaverShoppingTrends();
  console.log(naver);
  return naver;
};
