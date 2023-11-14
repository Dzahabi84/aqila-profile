import { Carousel, IconButton } from "@material-tailwind/react";
import link from "../assets/link.svg";
import github from "../assets/github.svg";

export default function CardProject({
  title,
  poster,
  desc,
  year,
  techStack,
  directLink,
  githubLink,
}) {
  return (
    <div className="w-[80%] rounded-2xl m-auto flex flex-col md:flex-row justify-between items-center md:h-[300px] xl:w-[1000px] bg-gray-200 dark:bg-gray-900">
      <Carousel className="md:ml-6 bg-black w-fit md:w-[40%] rounded-xl  h-[260px]">
        {poster.map(item => (
                    <img
                    className="h-full w-full object-cover"
                    src={item}
                    alt=""
                  />
        ))}
      </Carousel>
      <main className="dark:text-white py-5 w-[90%] px-5 md:w-[55%]">
        <h1 className="text-[#da6220] font-bold text-3xl tracking-widest font-['Bebas_Neue']">
          {title}
        </h1>
        <p className="mb-4">{desc}</p>
        <p>Year : {year}</p>
        <p className="">Created by : {techStack}</p>
        <div className="mt-4">
          <button className="bg-gray-400 dark:bg-gray-800 p-1.5 rounded-full">
            <a href={directLink}>
               <img className="w-6" src={link} alt="Direct Link" /> 
            </a>
          </button>
          <button className="bg-gray-400 dark:bg-gray-800 p-1.5 rounded-full ml-3">
            <a href={githubLink}>
               <img className="w-6" src={github} alt="Direct Link" /> 
            </a>
          </button>
        </div>
      </main>
    </div>
  );
}
