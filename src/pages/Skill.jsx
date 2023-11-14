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

  if (isLoading) {
    return (
      <div className="flex h-[85vh] w-full items-center justify-center">
        <Spinner className="w-12 h-12 md:w-16 md:h-16" color="orange" />
      </div>
    );
  }

  if (isError) {
    throw new Error()
  }
  if (data) {
    return (
    <div className="transition-all fade-in duration-[100ms] w-[90%] lg:w-[1000px] m-auto">
          <div className=" mt-5 mb-32 flex flex-row justify-center flex-wrap">
        {data?.data?.map((item) => (
            <div key={item.id} className="p-2">
              <CardSkill img={item.poster} title={item.title} />  
            </div>
        ))}
    </div>  
    </div>


    );
  }
}

export default Skill;
