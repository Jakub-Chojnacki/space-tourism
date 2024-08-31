import React from "react";
import * as RadixTabs from "@radix-ui/react-tabs";
import { useRouterState } from "@tanstack/react-router";

import { destinations, destinationTabsConfig } from "@/const";
import { TabsProps } from "./types";

const DestinationTabs: React.FC<TabsProps> = ({
  destination,
  setDestination,
}) => {
  const location = useRouterState({ select: (s) => s.location.pathname });

  return (
    <RadixTabs.Root
      className="text-white md:px-1200 lg:max-w-[35%] lg:pr-0"
      value={destination}
      onValueChange={setDestination}
    >
      <RadixTabs.List
        className="flex gap-400 text-preset-8 text-blue-300 items-center justify-center lg:justify-start"
        aria-label="Choose your destination"
      >
        {destinations.map((name) => {
          const isActive = location.includes(name.toLowerCase());

          return (
            <RadixTabs.Trigger
              className={`border-b-[3px] border-transparent active:border-white ${isActive && "border-b-[3px]"}`}
              value={name}
              key={name}
            >
              {name}
            </RadixTabs.Trigger>
          );
        })}
      </RadixTabs.List>
      {destinationTabsConfig.map(
        ({ name, description, avgDistance, travelTime }) => (
          <RadixTabs.Content value={name} key={name}>
            <h2 className="text-preset-2 text-center my-300 lg:text-left">
              {name.toUpperCase()}
            </h2>
            <p className="text-preset-9 text-blue-300 text-center lg:text-left">
              {description}
            </p>
            <div className="hidden w-full h-[1px] bg-white opacity-25 md:block my-300"></div>
            <div className="flex flex-col justify-center items-center my-400 gap-300 md:flex-row md:justify-evenly  lg:justify-start">
              <div className="flex flex-col justify-center items-center ">
                <span className="text-preset-7 text-blue-300">
                  AVG. DISTANCE
                </span>
                <span className="text-preset-6-desktop mt-150">
                  {avgDistance}
                </span>
              </div>
              <div className="w-full h-[1px] bg-white opacity-25 md:hidden"></div>
              <div className="flex flex-col justify-center items-center">
                <span className="text-preset-7 text-blue-300 ">
                  EST. TRAVEL TIME
                </span>
                <span className="text-preset-6-desktop mt-150">
                  {travelTime}
                </span>
              </div>
            </div>
          </RadixTabs.Content>
        )
      )}
    </RadixTabs.Root>
  );
};

export default DestinationTabs;
