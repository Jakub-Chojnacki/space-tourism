import { useEffect, useState } from "react";
import Navigation from "@components/Navigation/Navigation";
import { BREAKPOINTS_PX } from "./const";

function App() {
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
    </div>
  );
}

export default App;
