import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Weather from "./pages/Weather";
import { SearchWeather } from "./pages/weather/SearchWeather";
import Community from "./pages/Community";
import Sports from "./pages/Sports";
import Soccer from "./pages/sports/Soccer";
import SoccerPlayer from "./pages/sports/SoccerPlayer";
import SoccerTeam from "./pages/sports/SoccerTeam";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/weather", element: <Weather /> },
      { path: "/weather/:id", element: <SearchWeather /> },
      { path: "/sports", element: <Sports /> },
      { path: "/sports/soccer/", element: <Soccer /> },
      { path: "/sports/soccer/player/", element: <SoccerPlayer /> },
      { path: "/sports/soccer/team/", element: <SoccerTeam /> },
      { path: "/humor", element: <Community /> },
      { path: "/ott", element: <Weather /> },
      { path: "/sns", element: <Weather /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
