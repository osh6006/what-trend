import React, { useState } from "react";
import useOTT from "../../hooks/useOTT";
import { RankItem } from "./RankItem";

interface Tab {
  title: string;
}

interface TabsProps {
  tabs?: Tab[];
}

const activeTabs: string =
  "active rounded-t-lg border-b-2 border-secondaryBg p-4 text-secondaryBg transition-all text-lg cursor-pointer select-none";
const passiveTabs: string =
  "rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 transition-all text-lg cursor-pointer select-none";

export const OTTTabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const handleTabs = (index: number): void => {
    setActiveTab(index);
  };
  const { homeNeflixQuery, homeDisneyQuery, homeAmazonQuery } = useOTT();

  return (
    <>
      <div className="border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400 ">
        {/* tabhead */}
        <ul className="-mb-px flex w-full flex-wrap justify-around">
          {tabs?.map((el: Tab, i: number) => (
            <li
              key={i}
              className={activeTab === i ? activeTabs : passiveTabs}
              onClick={() => {
                handleTabs(i);
              }}
            >
              {el.title}
            </li>
          ))}
        </ul>
      </div>
      {/* contents */}
      <ul className="mt-3 w-full rounded-b-lg border-2 ">
        <li className="flex w-full gap-5 bg-black px-5 py-3 text-white">
          <div>Rank</div>
          <div className="flex-1 text-center">Title</div>
          <div>Points</div>
        </li>
        {tabs &&
        tabs[activeTab].title === "Netflix" &&
        (homeNeflixQuery?.data?.movieTop10?.length ?? 0) > 0
          ? homeNeflixQuery?.data?.movieTop10?.map(el => (
              <RankItem
                key={el.rank}
                title={el.title}
                rank={el.rank}
                point={el.point}
              />
            ))
          : tabs &&
            tabs[activeTab].title === "Netflix" && (
              <div className="mt-[50%] h-72 text-center text-xl text-gray-400">
                서비스 점검중
              </div>
            )}
        {tabs &&
          tabs[activeTab].title === "Disney +" &&
          homeDisneyQuery?.data?.movieTop10?.map(el => (
            <RankItem
              key={el.rank}
              title={el.title}
              rank={el.rank}
              point={el.point}
            />
          ))}
        {tabs &&
          tabs[activeTab].title === "Amazon P" &&
          homeAmazonQuery?.data?.movieTop10?.map(el => (
            <RankItem
              key={el.rank}
              title={el.title}
              rank={el.rank}
              point={el.point}
            />
          ))}
      </ul>
    </>
  );
};
