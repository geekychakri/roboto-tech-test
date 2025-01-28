import Image from "next/image";
import * as motion from "motion/react-client";

import HeroImage from "/public/images/hero.png";

export default function HeroBlock() {
  return (
    <header className="flex flex-col items-center gap-8 px-5 md:px-11">
      <motion.div className="relative h-[60vh] w-full md:h-[85vh]">
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
        className="font-medium text-textColor-secondary"
      >
        Fireplaces | Lighting | Furniture | Journal
      </motion.span>
    </header>
  );
}
