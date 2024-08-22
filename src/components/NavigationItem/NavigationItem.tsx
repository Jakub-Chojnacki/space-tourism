import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import { NavigationItemProps } from "./types";
import { BREAKPOINTS_PX } from "@/const";

const NavigationItem: React.FC<NavigationItemProps> = ({
  text = "",
  href = "",
  index = 0,
}) => {
  const isMobile = window.innerWidth <= BREAKPOINTS_PX.SM;
  const noNumber = !isMobile && index === 0;

  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link
        className="flex items-center gap-150 text-preset-8 border-transparent md:border-b-[3px] active:border-white py-400  hover:border-tabsHoverBg"
        href={href}
        active
      >
        {!noNumber && <span className="font-bold">0{index}</span>}
        <span>{text.toUpperCase()}</span>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
};

export default NavigationItem;
