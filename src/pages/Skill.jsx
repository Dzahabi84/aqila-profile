import CardSkill from "../components/CardSkill";
import { Spinner } from "@material-tailwind/react";
import { useQuery } from "react-query";
import axios from "axios";

function Skill() {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "skill",
    () => {
      return axios.get(
        "https://my-json-server.typicode.com/Dzahabi84/aqila-profile-db/skill"
      );
    },
    {
      cacheTime: 300000,
    }
  );

  console.log(data);

  if (isLoading) {
    return (
      <div className="flex h-[85vh] w-full items-center justify-center">
        <Spinner className="w-12 h-12 md:w-16 md:h-16" color="orange" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center w-full h-[85vh] justify-center text-3xl font-bold">
        <h1 className="dark:text-white text-black">SOMETHING HAPPENED</h1>
      </div>
    );
  }
  if (data) {
    return (
    <div className="w-[90%] lg:w-[1000px] m-auto">
          <div className=" mt-5 mb-32 flex flex-row justify-center flex-wrap">
        {data?.data?.map((item) => (
            <div className="p-2">
              <CardSkill img={item.poster} title={item.title} />  
            </div>
        ))}
    </div>  
    </div>


    );
  }
}

export default Skill;
