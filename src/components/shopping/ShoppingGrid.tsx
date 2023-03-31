import React from "react";

const div: string = "space-y-3";

export const ShoppingGrid = () => {
  return (
    <section className="mt-20 grid w-full grid-cols-3 gap-4 px-5">
      <div className={div}>
        <h1 className="text-center text-lg font-bold uppercase text-green-500">
          Naver
        </h1>
        <ul className="space-y-4 border-4 p-5">
          <li className="flex items-center justify-around gap-2">
            <p className="">1</p>
            <p>첼로</p>
            <p>Fill</p>
          </li>
          <li className="flex items-center justify-around gap-2">
            <p className="">1</p>
            <p>첼로</p>
            <p>Fill</p>
          </li>
          <li className="flex items-center justify-around gap-2">
            <p className="">1</p>
            <p>첼로</p>
            <p>Fill</p>
          </li>
        </ul>
      </div>
      <div className={div}>
        <h1 className="text-center text-lg font-bold uppercase text-amber-500">
          Kakao
        </h1>
        <ul className="border-4 p-5">
          <li className="flex items-center justify-around gap-2">
            <p className="">1</p>
            <p>첼로</p>
            <p>Fill</p>
          </li>
          <li className="flex items-center justify-around gap-2">
            <p className="">1</p>
            <p>첼로</p>
            <p>Fill</p>
          </li>
          <li className="flex items-center justify-around gap-2">
            <p className="">1</p>
            <p>첼로</p>
            <p>Fill</p>
          </li>
        </ul>
      </div>
      <div className={div}>
        <h1 className="text-center text-lg font-bold uppercase text-rose-500">
          Cupang
        </h1>
        <ul className="border-4 p-5">
          <li className="flex items-center justify-around gap-2">
            <p className="">1</p>
            <p>첼로</p>
            <p>Fill</p>
          </li>
          <li className="flex items-center justify-around gap-2">
            <p className="">1</p>
            <p>첼로</p>
            <p>Fill</p>
          </li>
          <li className="flex items-center justify-around gap-2">
            <p className="">1</p>
            <p>첼로</p>
            <p>Fill</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
