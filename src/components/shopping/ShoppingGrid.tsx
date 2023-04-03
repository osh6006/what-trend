import React from "react";

interface colorPicker {
  naver: string;
  kakao: string;
  coupang: string;
}

const color: colorPicker = {
  naver: "text-green-500",
  kakao: "text-amber-500",
  coupang: "text-rose-500",
};

const border: colorPicker = {
  naver: "border-green-500",
  kakao: "border-amber-500",
  coupang: "border-rose-500",
};

const div: string = "space-y-3";
const ul: string = "space-y-3 border-4 p-5 rounded-md";
const li: string = "flex items-center justify-around";
const h1: string = "text-center text-lg font-bold uppercase";

export const ShoppingGrid = () => {
  return (
    <section className="mt-20 grid w-full grid-cols-3 gap-4 px-5">
      <div className={div}>
        <h1 className={`${h1} ${color["naver"]}`}>Naver</h1>
        <ul className={`${ul} ${border["naver"]}`}>
          <li className={li}>
            <p className="">1</p>
            <p>첼로</p>
            <p>Fill</p>
          </li>
          <li className={li}>
            <p className="">1</p>
            <p>첼로</p>
            <p>Fill</p>
          </li>
          <li className={li}>
            <p className="">1</p>
            <p>첼로</p>
            <p>Fill</p>
          </li>
        </ul>
      </div>
      <div className={div}>
        <h1 className={`${h1} ${color["kakao"]}`}>Kakao</h1>
        <ul className={`${ul} ${border["kakao"]}`}>
          <li className={li}>
            <p className="">1</p>
            <p>첼로</p>
            <p>Fill</p>
          </li>
          <li className={li}>
            <p className="">1</p>
            <p>첼로</p>
            <p>Fill</p>
          </li>
          <li className={li}>
            <p className="">1</p>
            <p>첼로</p>
            <p>Fill</p>
          </li>
        </ul>
      </div>
      <div className={div}>
        <h1 className={`${h1} ${color["coupang"]}`}>Coupang</h1>
        <ul className={`${ul} ${border["coupang"]}`}>
          <li className={li}>
            <p className="">1</p>
            <p>첼로</p>
            <p>Fill</p>
          </li>
          <li className={li}>
            <p className="">1</p>
            <p>첼로</p>
            <p>Fill</p>
          </li>
          <li className={li}>
            <p className="">1</p>
            <p>첼로</p>
            <p>Fill</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
