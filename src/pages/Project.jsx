import { Spinner } from "@material-tailwind/react";
import CardProject from "../components/CardProject";
import { useQuery } from "react-query";
import axios from "axios";
import { useEffect } from "react";

function Project() {
  useEffect(() => {
    document.title = "Project"
  }, [])
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "project",
    () => {
      return axios.get(
        "https://my-json-server.typicode.com/Dzahabi84/aqila-profile-db/project"
      );
    },
    {
      cacheTime: 300000,
    }
  );

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
    <div className="transition-all ease-in-out duration-[50ms] pt-5 mb-5">
      <main className="pb-10">
        {data?.data.map((item) => (
          <CardProject
            key={item.id}
            title={item.title}
            poster={item.preview}
            desc={item.desc}
            year={item.year}
            techStack={item.techStack}
            directLink={item.directLink}
            githubLink={item.github}
          />
        ))}
      </main>
      <p className="text-3xl font-['Bebas_Neue'] tracking-widest text-center font-bold text-[#da6220]">
        STILL CONTINUE XD
      </p>
    </div>
  );
}

export default Project;
