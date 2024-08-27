import React from "react";
import * as RadixTabs from "@radix-ui/react-tabs";
import { TabsProps } from "./types";
import { destinations, destinationTabsConfig } from "@/const";
import { Link } from "@tanstack/react-router";

const DestinationTabs: React.FC<TabsProps> = () => {
  return (
    <RadixTabs.Root
      className="text-white"
      defaultValue={destinationTabsConfig[0]?.name}
    >
      <RadixTabs.List
        className="flex gap-400 text-preset-8 text-blue-300 items-center justify-center"
        aria-label="Choose your destination"
      >
        {destinations.map((name) => (
          <RadixTabs.Trigger
            className="active:border-b-[3px] border-white"
            value={name}
            key={name}
          >
            <Link to={`/destination/${name.toLowerCase()}`}>{name}</Link>
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>
      {destinationTabsConfig.map(
        ({ name, description, avgDistance, travelTime }) => (
          <RadixTabs.Content value={name} key={name}>
            <h2 className="text-preset-2 text-center">{name.toUpperCase()}</h2>
            <p className="text-preset-9 text-blue-300 text-center">
              {description}
            </p>
            <div className="flex flex-col justify-center items-center my-400 gap-300">
              <div className="flex flex-col justify-center items-center">
                <span className="text-preset-7 text-blue-300">
                  AVG. DISTANCE
                </span>
                <span className="text-preset-6">{avgDistance}</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="text-preset-7 text-blue-300">
                  EST. TRAVEL TIME
                </span>
                <span className="text-preset-6">{travelTime}</span>
              </div>
            </div>
          </RadixTabs.Content>
        )
      )}
    </RadixTabs.Root>
  );
};

export default DestinationTabs;
