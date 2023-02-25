import React, { useState } from "react";

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

export const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const handleTabs = (index: number): void => {
    setActiveTab(index);
  };

  return (
    <div className="mt-5 border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400 ">
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
      {/* contents */}
    </div>
  );
};
