import React from "react";

interface ButtonProps {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="rounded-md bg-neutral-900 px-3 py-2 text-base text-white transition-colors hover:bg-neutral-700"
    >
      {title}
    </button>
  );
};
