import { useState } from "react";

export const Forecast = () => {
  const data = [
    {
      id: 0,
      title: "HTML",
      description:
        "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).",
    },
    {
      id: 1,
      title: "CSS",
      description:
        "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
    },
    {
      id: 2,
      title: "JavaScript",
      description:
        "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.",
    },
  ];
  return (
    <div className="mt-10 flex">
      {/* <ul className={styles.tabMenu}>
        {data.map(item => (
          <li
            key={item.id}
            className={index === item.id ? styles.active : null}
            onClick={() => setIndex(item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>
      {data
        .filter(item => index === item.id)
        .map(item => (
          <div className={styles.tabContent}>{item.description}</div>
        ))} */}
    </div>
  );
};
