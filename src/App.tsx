import { useEffect, useState } from "react";

import Navigation from "@components/Navigation/Navigation";

import { backgroundConfig, BREAKPOINTS_PX } from "./const";
import { useRouterState } from "@tanstack/react-router";
import { BackgroundPaths } from "./types/app";

interface AppProps {
  children: React.ReactNode;
}

/* It's a small website made just to test new technologies so I keep this logic in App. Normally I'd create a separate view file. */
const App: React.FC<AppProps> = ({ children }) => {
  const [homeBgUrl, setHomeBgUrl] = useState("");

  const location = useRouterState({ select: (s) => s.location.pathname });

  const getCurrentPath = (): BackgroundPaths => {
    let path = "home";

    if (location.includes("destination")) {
      path = "destination";
    } else if (location.includes("crew")) {
      path = "crew";
    } else if (location.includes("technology")) {
      path = "technology";
    }

    return path as BackgroundPaths;
  };

  useEffect(() => {
    const handleResize = () => {
      const path = getCurrentPath();

      if (window.innerWidth >= BREAKPOINTS_PX.LG) {
        // Desktop breakpoint
        setHomeBgUrl(`${backgroundConfig?.[path]}desktop.jpg`);
      } else if (
        window.innerWidth >= BREAKPOINTS_PX.MD &&
        window.innerWidth < BREAKPOINTS_PX.LG
      ) {
        // Tablet breakpoint
        setHomeBgUrl(`${backgroundConfig?.[path]}tablet.jpg`);
      } else {
        // Mobile
        setHomeBgUrl(`${backgroundConfig?.[path]}mobile.jpg`);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial setup

    return () => window.removeEventListener("resize", handleResize);
  }, [location, getCurrentPath]);

  return (
    <div
      className={`min-h-[100dvh] bg-no-repeat bg-cover relative lg:py-400 lg:flex lg:flex-col `}
      style={{
        backgroundImage: `url(${homeBgUrl})`,
      }}
    >
      <Navigation />
      {children}
    </div>
  );
};

export default App;
