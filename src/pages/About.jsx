import github from "../assets/github-about.svg";
import linkedin from "../assets/linkedin-about.svg";
import ig from "../assets/ig-about.svg";
import email from "../assets/email-about.svg";
import { Spinner } from "@material-tailwind/react";
import { useQuery } from "react-query";
import axios from "axios";
import { useEffect } from "react";

function About() {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "about",
    () => {
      return axios.get(
        "https://my-json-server.typicode.com/Dzahabi84/aqila-profile-db/about"
      );
    },
    {
      cacheTime: 300000,
    }
  );

  useEffect(() => {
    document.title = "About";
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-[85vh] w-full items-center justify-center">
        <Spinner className="w-12 h-12 md:w-16 md:h-16" color="orange" />
      </div>
    );
  }

  if (isError) {
    throw new Error();
  }

  return (
    <div className="transition-all ease-in-out duration-[50ms] opacity-100 w-[80%] flex justify-center flex-col items-center m-auto xl:w-[1000px]">
      <img
        className="my-5 mt-10 w-48 rounded-full border-[6px] border-[#da6220] bg-cover"
        src={data?.data[0].img}
        alt="Author"
      />
      <h1 className="mt-3 text-gray-900 dark:text-gray-200 text-4xl tracking-wider font-['Bebas_Neue']">
        AQILA RIZA DZAHABI
      </h1>
      <h2 className="text-[#da6220] mb-8 text-sm md:text-base text-center font-bold">
        Front End Developer | Newbie Developer | Web Developer
      </h2>
      <p className="mb-8 dark:text-white text-black text-center">
        {data?.data[0].desc}
      </p>
      <div className="flex pb-10">
        <a href={data?.data[0].github}>
          <img
            className="bg-gray-800 hover:-mt-1 duration-100 rounded-full mx-1 p-2 w-12"
            src={github}
            alt="Github"
          />
        </a>
        <a href={`mailto:${data?.data[0].email}`}>
          <img
            className="bg-gray-800 hover:-mt-1 duration-100 rounded-full mx-1 p-2 w-12"
            src={email}
            alt="Email"
          />
        </a>
        <a href={data?.data[0].ig}>
          <img
            className="bg-gray-800 hover:-mt-1 duration-100 rounded-full mx-1 p-2 w-12"
            src={ig}
            alt="IG"
          />
        </a>
        <a href={data?.data[0].linkedin}>
          <img
            className="bg-gray-800 hover:-mt-1 duration-100 rounded-full mx-1 p-2 w-12"
            src={linkedin}
            alt="Linkedin"
          />
        </a>
      </div>
    </div>
  );
}

export default About;
