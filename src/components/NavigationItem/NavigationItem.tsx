import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import { NavigationItemProps } from "./types";

const NavigationItem: React.FC<NavigationItemProps> = ({
  text = "",
  href = "",
  index = 0,
}) => {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link className="flex items-center gap-150 text-preset-8" href={href}>
        <span className="font-bold">0{index}</span>
        <span>{text}</span>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
};

export default NavigationItem;
