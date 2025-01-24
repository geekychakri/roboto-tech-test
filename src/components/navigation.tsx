import Image from "next/image";

import navIcon1 from "/public/icons/nav-icon-1.svg";
import navIcon2 from "/public/icons/nav-icon-2.svg";
import navIcon3 from "/public/icons/nav-icon-3.svg";

export default function Navigation() {
  return (
    <nav className="flex justify-between bg-background px-11 py-8">
      <Image
        aria-hidden
        src="/logo.svg"
        alt="Jamb logo"
        width={108}
        height={45}
      />
      <div className="flex gap-8">
        <Image aria-hidden src={navIcon1} alt="navIcon1" />
        <Image aria-hidden src={navIcon2} alt="navIcon2" />
        <Image aria-hidden src={navIcon3} alt="navIcon3" />
      </div>
    </nav>
  );
}
