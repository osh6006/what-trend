import { useNavigate } from "react-router-dom";
import { SportsLayout } from "../../components/sports/SportsLayout";
import { week } from "../../util/weather";

export default function Soccer() {
  const navigate = useNavigate();

  return (
    <SportsLayout>
      <header className="text-5xl font-bold uppercase xl:text-8xl ">
        soccer trends
      </header>
      <div className="mt-5 rounded-lg bg-secondaryBg px-5 py-2 text-3xl text-white 2xl:text-6xl">
        {`${
          week[new Date(new Date().getDay()).getDay()]
        } ${new Intl.DateTimeFormat("en-US", {
          dateStyle: "long",
        }).format(new Date())}`}
      </div>
      <div className="mt-10 flex max-w-2xl flex-col items-center justify-center gap-2 sm:flex-row">
        <div className="flex w-96 flex-col items-center gap-5">
          <div
            onClick={() => {
              navigate("/sports/soccer/team");
            }}
            className="relative aspect-square w-56 cursor-pointer rounded-full border-8 border-black bg-team bg-cover bg-center bg-no-repeat transition-all hover:opacity-50 2xl:w-96"
          ></div>
          <div className="text-3xl font-bold">Team</div>
        </div>
        <h2 className=" hidden text-3xl font-bold uppercase sm:block">or</h2>
        <div className="flex w-96 flex-col items-center gap-3">
          <div
            onClick={() => {
              navigate("/sports/soccer/player");
            }}
            className="relative aspect-square w-56 cursor-pointer rounded-full border-8 border-black bg-player bg-cover bg-center bg-no-repeat transition-all hover:opacity-50 2xl:w-96"
          ></div>
          <div className="text-3xl font-bold">Player</div>
        </div>
      </div>
      <div className="mt-9 rounded-md bg-black px-5 py-2 text-center text-3xl font-bold text-white">
        Find out the best team or best player.
      </div>
    </SportsLayout>
  );
}
