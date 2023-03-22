import React from "react";

const th = "py-4 px-6 sticky top-0 bg-gray-200";
const td = "whitespace-nowrap py-3 px-6 ";
const tdimg = `${td} flex items-center gap-3 text-center`;
const thimg = `${th} text-left`;

export const OttTable = () => {
  return (
    <div className="mt-5">
      <table className="w-full table-auto text-center font-bold">
        <thead>
          <tr className="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
            <th className={th}>Rank</th>
            <th className={thimg}>name</th>
            <th className={th}>Matches</th>
            <th className={th}>Win</th>
            <th className={th}>Draw</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className={td}>gd</td>
            <td className={tdimg}>
              <span>asdf</span>
            </td>
            <td className={td}>asdf</td>
            <td className={td}>asdf</td>
            <td className={td}>asdf</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
