import React from "react";
import * as RadixTabs from "@radix-ui/react-tabs";

import { crew, crewConfig } from "@/const";
import { CrewProps } from "./types";

const CrewTabs: React.FC<CrewProps> = ({ crewMember, setCrewMember }) => {
  return (
    <RadixTabs.Root
      className="text-white md:px-1200 lg:pr-0 lg:flex lg:flex-col lg:justify-between lg:gap-1200 lg:max-w-[40%] lg:flex-1"
      value={crewMember}
      onValueChange={setCrewMember}
    >
      {crewConfig.map(({ name, role, description }) => (
        <RadixTabs.Content value={name} key={name}>
          <span className="text-center inline-block w-full text-preset-4 opacity-50 lg:text-left">
            {role.toUpperCase()}
          </span>
          <h2 className="text-preset-2 text-center my-300 lg:text-left lg:text-[56px]">
            {name.toUpperCase()}
          </h2>
          <p className="text-preset-9 text-blue-300 text-center lg:text-left leading-8">
            {description}
          </p>
          <div className="flex flex-col justify-center items-center my-400 gap-300 md:flex-row md:justify-evenly  lg:justify-between lg:pr-400"></div>
        </RadixTabs.Content>
      ))}
      <RadixTabs.List
        className="flex gap-400 text-preset-8 text-blue-300 items-center justify-center lg:justify-start lg:flex-1"
        aria-label="Meet your crew members"
      >
        {crew.map((name) => {
          const isActive = crewMember === name;

          return (
            <RadixTabs.Trigger value={name} key={name}>
              <div
                className={`w-[10px] h-[10px] md:w-4 md:h-4 rounded-full bg-navLine active:bg-white hover:bg-white ${isActive && "bg-white"}`}
              ></div>
            </RadixTabs.Trigger>
          );
        })}
      </RadixTabs.List>
    </RadixTabs.Root>
  );
};

export default CrewTabs;
