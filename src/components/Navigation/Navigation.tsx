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
    href: "",
  },
  {
    text: "Destination",
    href: "",
  },
  {
    text: "Crew",
    href: "",
  },
  {
    text: "Technology",
    href: "",
  },
];
const Navigation = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleShowMobileNav = (): void => setShowMobileNav((prev) => !prev);
  return (
    <header className="flex w-full justify-between items-center text-white relative p-300">
      <img src={logo} alt="space-tourism-logo" />
      {!showMobileNav && (
        <UnstyledButton onClick={toggleShowMobileNav} className="z-10">
          <img src={hamburgerIcon} alt="open-nav-icon" className="md:hidden" />
        </UnstyledButton>
      )}
      {showMobileNav && (
        <UnstyledButton onClick={toggleShowMobileNav} className="z-10">
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
      <nav className="hidden md:flex">tablet and desktop</nav>
    </header>
  );
};

export default Navigation;
