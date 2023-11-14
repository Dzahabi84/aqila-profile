import { Spinner } from "@material-tailwind/react";
import CardProject from "../components/CardProject";
import { useQuery } from "react-query";
import axios from "axios";

function Project() {
    const { isLoading, data, isError, error, isFetching } = useQuery(
        "project",
        () => {
          return axios.get(
            "https://my-json-server.typicode.com/Dzahabi84/aqila-profile-db/project"
          );
        },
        {
            cacheTime: 300000
        }
      );

      if(isLoading) {
        return (
            <div className="flex h-[85vh] w-full items-center justify-center">
                <Spinner className="w-12 h-12 md:w-16 md:h-16" color="orange" />
            </div>
        )
      }

      if (isError) {
        return (
            <div className="flex items-center w-full h-[85vh] justify-center text-3xl font-bold">
                <h1 className="dark:text-white text-black">SOMETHING HAPPENED</h1>
            </div>
        )
      }

    return (
        <div className="transition-all ease-in-out duration-[50ms] pt-5 mb-12">
            <main className=" pb-[120px]">
              {data?.data.map(item => (
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
            
        </div>
    );
}

export default Project;