import Image from "next/image";

import HeroImage from "/public/images/hero.png";

import * as motion from "motion/react-client";

export default function HeroBlock() {
  return (
    <header className="px-10 max-sm:px-4 flex flex-col gap-8 items-center">
      <motion.div className="w-full h-[60vh] md:h-[85vh] relative">
        <Image
          aria-hidden
          src={HeroImage}
          quality={100}
          alt="Elegant interior with ornate mirror and classical artifacts"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-textColor-secondary font-medium"
      >
        Fireplaces | Lighting | Furniture | Journal
      </motion.span>
    </header>
  );
}
