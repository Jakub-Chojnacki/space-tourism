import { getRouteApi } from "@tanstack/react-router";
import DestinationTabs from "../DestinationTabs/DestinationTabs";
import { destinationTabsConfig } from "@/const";

const route = getRouteApi("/destination/$destinationName");

const DestinationPage = () => {
  const { destinationName } = route.useParams();

  const destinationData = destinationTabsConfig.find(
    (elem) => elem.name.toLowerCase() === destinationName
  );

  return (
    <div className="flex flex-col items-center text-white">
      <h2 className="text-preset-6"><span className="mx-2">01</span>PICK YOUR DESTINATION</h2>
      <div className="p-300">
        <img src={destinationData?.imgPath} />
        <DestinationTabs />
      </div>
    </div>
  );
};

export default DestinationPage;
