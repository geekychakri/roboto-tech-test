import Image from "next/image";

import HeroImage from "/public/images/hero.png";

export default function HeroBlock() {
  return (
    <header className="px-10 max-sm:px-4 flex flex-col gap-8 items-center">
      <div className="w-full h-[60vh] md:h-[85vh] relative">
        <Image
          aria-hidden
          src={HeroImage}
          quality={100}
          alt="Elegant interior with ornate mirror and classical artifacts"
          fill
          priority
          className="object-cover"
        />
      </div>

      <span className="text-textColor-secondary font-medium">
        Fireplaces | Lighting | Furniture | Journal
      </span>
    </header>
  );
}
