import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../common/Button";
import { Tabs } from "../common/Tabs";

export const HomeOTT = () => {
  const nav = useNavigate();
  const handleClick = (e: React.MouseEvent): void => {
    nav("/ott");
  };

  const defaultTab = [
    { title: "Netflix" },
    { title: "Disney +" },
    { title: "Amazon P" },
  ];

  return (
    <>
      <div className="mt-5 flex w-full items-center justify-between">
        <div>
          <h1 className="text-xl font-medium">OTT Trends</h1>
        </div>
        <Button title="more view" onClick={handleClick} />
      </div>
      <Tabs tabs={defaultTab} />
    </>
  );
};
