import { NavLink } from "react-router-dom";
import hero from "../assets/hero.png";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { useQuery } from "react-query";
import axios from "axios";

function Home() {
  const author = useRef();
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "landing-page",
    () => {
      return axios.get(
        "https://my-json-server.typicode.com/Dzahabi84/aqila-profile-db/landing-page"
      );
    }
  );

  console.log({ isFetching: isFetching, isLoading: isFetching });

  useEffect(() => {
    const typed = new Typed(author.current, {
      strings: ["AQILA RIZA DZAHABI"],
      typeSpeed: 100,
      autoInsertCss: true,
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div
      className={`bg-white h-screen dark:text-white dark:bg-black  sm:pt-0 pt-16`}
    >
      <div
        className={`transition-all ease-in-out duration-[50ms] m-auto h-[90vh] items-center flex-col md:flex-row flex justify-around w-[80%] xl:w-[1000px] ${
          !isLoading ? "opacity-100" : "opacity-0"
        }`}
      >
        <aside className="md:w-[55%] w-[80%]">
          <p className="mb-2">HELLO THERE 👋, I'M</p>
          <h1
            ref={author}
            className="inline text-3xl md:text-4xl lg:text-5xl font-['Noto_Serif_Display']"
          />
          <h3 className="text-2xl mt-6 mb-4 text-[#da6220] font-['Bebas_Neue']">
            {data?.data[0].content.role}
          </h3>
          <p>{data?.data[0].content.quotes[0]}</p>
          <NavLink
            to="about"
            className="hover:bg-black dark:hover:bg-white dark:hover:text-black mt-5 duration-75 h-10 w-28 rounded-full text-xs dark:border-white font-bold flex items-center justify-center hover:text-white border-black border-2"
          >
            See More
          </NavLink>
        </aside>
        <div className="group relative sm:pt-0 sm:pb-0 pt-14 pb-40">
          <img
            className="md:group-hover:top-[-5px] duration-300 z-20 w-44 md:w-52 absolute h-[260px] md:h-[308px]"
            src={hero}
            alt="Aqila Riza Dzahabi picture"
          />
          <div className="group-hover:rotate-[-25deg] duration-150 rotate-[25deg] w-40 md:w-52 absolute z-10 bg-[#da6220] h-[260px] md:h-[308px]"></div>
          <div className="group-hover:rotate-[10deg] duration-150 rotate-[-10deg] w-40 md:w-52 dark:bg-white bg-[#000000] h-[260px] md:h-[308px]"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
