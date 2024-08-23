import { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import UnstyledButton from "../UnstyledButton/UnstyledButton";

import logo from "@assets/shared/logo.svg";
import hamburgerIcon from "@assets/shared/icon-hamburger.svg";
import closeIcon from "@assets/shared/icon-close.svg";
import NavigationItem from "../NavigationItem/NavigationItem";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Destination",
    href: "/destination",
  },
  {
    text: "Crew",
    href: "/crew",
  },
  {
    text: "Technology",
    href: "/technology",
  },
];
const Navigation = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleShowMobileNav = (): void => setShowMobileNav((prev) => !prev);
  return (
    <header className="flex w-full justify-between items-center text-white relative h-1000 md:h-1200">
      <img
        src={logo}
        alt="space-tourism-logo"
        className="ml-600 mr-300 md:h-600 md:w-600"
      />
      {!showMobileNav && (
        <UnstyledButton onClick={toggleShowMobileNav} className="z-10 mr-300">
          <img src={hamburgerIcon} alt="open-nav-icon" className="md:hidden" />
        </UnstyledButton>
      )}
      {showMobileNav && (
        <UnstyledButton onClick={toggleShowMobileNav} className="z-10 mr-300">
          <img src={closeIcon} alt="close-nav-icon" className="md:hidden" />
        </UnstyledButton>
      )}
      {showMobileNav && (
        <NavigationMenu.Root
          orientation="vertical"
          className="md:hidden w-[66.7vw] bg-transparent absolute right-0 top-0 h-[100dvh] z-0 pl-400 pt-1200 backdrop-blur-2xl"
        >
          <NavigationMenu.List className="flex flex-col gap-400">
            {menuItems.map(({ text, href }, index) => (
              <NavigationItem
                text={text}
                href={href}
                index={index}
                key={text}
              />
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      )}
      <NavigationMenu.Root className="fix-radix-wrapper hidden md:flex md:bg-tabletNavBg md:w-full md:justify-around md:gap-600 md:items-center md:self-stretch backdrop-blur-4xl relative lg:max-w-[50%]">
        <span className="hidden absolute left-400 w-[75%] h-[1px] translate-x-[-100%] bg-navLine lg:inline"></span>
        <NavigationMenu.List className="flex gap-400 md:self-stretch md:items-center">
          {menuItems.map(({ text, href }, index) => (
            <NavigationItem text={text} href={href} index={index} key={text} />
          ))}
        </NavigationMenu.List>
      </NavigationMenu.Root>
   
    </header>
  );
};

export default Navigation;
