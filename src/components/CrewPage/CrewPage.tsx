import { useState } from "react";

import { crew, crewConfig } from "@/const";
import CrewTabs from "../CrewTabs.tsx/CrewTabs";

const CrewPage = () => {
  const [crewMember, setCrewMember] = useState(crew[0]);
  const currentMember = crewConfig.find(
    ({ name }) => name.toLowerCase() === crewMember.toLowerCase()
  );
  return (
    <div className="flex flex-col items-center text-white mt-300">
      <h2 className="text-preset-6 tracking-[0.2rem] md:self-start md:ml-600 lg:ml-1600 lg:mb-1000 mb-400">
        <span className="mx-2 text-headingNumber mr-300 font-bold font-barlow_condensed">
          02
        </span>
        MEET YOUR CREW
      </h2>

      <div className="flex flex-col gap-300 mt-400 px-800 items-center justify-around lg:flex-row lg:gap-400">
        <CrewTabs crewMember={crewMember} setCrewMember={setCrewMember} />
        <div>
          <img src={currentMember?.imgPath} />
        </div>
      </div>
    </div>
  );
};

export default CrewPage;
