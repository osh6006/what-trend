import axios from "axios";

export async function getSearchShoppingTrends() {
  let asdf;
  axios
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
    .then(res => {
      asdf = res.data;
    });

  if (asdf) {
    return asdf;
  } else return null;
}

export const getAllShoppingTrends = async () => {
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

  const res = await axios.post("/v1/datalab/shopping/categories", {
    headers: {
      "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_SECRET,
      "Content-Type": "application/json",
      "Content-Length": 360,
    },
    request_body: JSON.stringify(request_body),
  });

  return res;
};

export const getShppingSearchData = async () => {
  const search = await getSearchShoppingTrends().then(data => data);
  console.log(search);
  return true;
};
