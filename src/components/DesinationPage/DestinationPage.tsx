import { useState } from "react";

import DestinationTabs from "../DestinationTabs/DestinationTabs";

import { destinationTabsConfig } from "@/const";

const DestinationPage = () => {
  const [destination, setDestination] = useState(destinationTabsConfig[0].name);

  const destinationData = destinationTabsConfig.find(
    (elem) => elem.name.toLowerCase() === destination.toLowerCase()
  );

  return (
    <div className="flex flex-col items-center text-white mt-300">
      <h2 className="text-preset-6 tracking-[0.2rem] md:self-start md:ml-600 lg:ml-1600 lg:mb-1000">
        <span className="mx-2 text-headingNumber mr-300 font-bold font-barlow_condensed">
          01
        </span>
        PICK YOUR DESTINATION
      </h2>
      <div className="p-300 flex flex-col items-center gap-400 lg:flex-row lg:justify-center">
        <div className="max-w-[50%] lg:max-w-max">
          <img src={destinationData?.imgPath} />
        </div>
        <DestinationTabs
          destination={destination}
          setDestination={setDestination}
        />
      </div>
    </div>
  );
};

export default DestinationPage;
