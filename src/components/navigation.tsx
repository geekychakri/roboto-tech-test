import Image from "next/image";

import logo from "/public/logo.svg";

import { SearchIcon, MailIcon, HamburgerIcon } from "./ui/icons";

export default function Navigation() {
  return (
    <nav className="bg-background flex justify-between px-5 py-8 md:px-11">
      <Image aria-hidden src={logo} alt="Jamb logo" priority />
      <div className="flex gap-8">
        <button aria-label="search">
          <SearchIcon />
        </button>
        <button aria-label="newsletter">
          <MailIcon />
        </button>
        <button aria-label="menu">
          <HamburgerIcon />
        </button>
      </div>
    </nav>
  );
}
