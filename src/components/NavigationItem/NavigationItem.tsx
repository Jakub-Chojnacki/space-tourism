import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import { NavigationItemProps } from "./types";
import { BREAKPOINTS_PX } from "@/const";
import { Link } from "@tanstack/react-router";

const NavigationItem: React.FC<NavigationItemProps> = ({
  text = "",
  href = "",
  index = 0,
}) => {
  const isMobile = window.innerWidth <= BREAKPOINTS_PX.SM;
  const noNumber = !isMobile && index === 0;

  return (
    <NavigationMenu.Item>
      <Link
        className="flex items-center gap-150 text-preset-8 border-transparent md:border-b-[3px] active:border-white py-400  hover:border-tabsHoverBg"
        to={href}
      >
        {!noNumber && <span className="font-bold">0{index}</span>}
        <span>{text.toUpperCase()}</span>
      </Link>

    </NavigationMenu.Item>
  );
};

export default NavigationItem;
