import { useEffect, useState } from "react";

import Navigation from "@components/Navigation/Navigation";

import { BREAKPOINTS_PX } from "./const";

interface AppProps {
  children: React.ReactNode
}

/* It's a small website made just to test new technologies so I keep this logic in App. Normally I'd create a separate view file. */
const App: React.FC<AppProps> = ({ children }) => {
  const [homeBgUrl, setHomeBgUrl] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= BREAKPOINTS_PX.LG) {
        // Desktop breakpoint
        setHomeBgUrl("/backgrounds/background-home-desktop.jpg");
      } else if (
        window.innerWidth >= BREAKPOINTS_PX.MD &&
        window.innerWidth < BREAKPOINTS_PX.LG
      ) {
        // Tablet breakpoint
        setHomeBgUrl("/backgrounds/background-home-tablet.jpg");
      } else {
        // Mobile
        setHomeBgUrl("/backgrounds/background-home-mobile.jpg");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial setup

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`min-h-[100dvh] bg-no-repeat bg-cover relative `}
      style={{
        backgroundImage: `url(${homeBgUrl})`,
      }}
    >
      <Navigation />
      <div>
        {children}
      </div>
    </div>
  );
}

export default App;
