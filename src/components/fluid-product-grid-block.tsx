import Image from "next/image";

import * as motion from "motion/react-client";

import { fluidGridData } from "@/data";
import { staggerChildren, fadeIn, easing } from "@/animations/variants";

export default function FluidProductGridBlock() {
  return (
    <section className="bg-backgroundColor-secondary px-12 py-8 text-center">
      <motion.h2
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: easing }}
        viewport={{ once: true, amount: 0.5 }}
        className="mb-12 text-xl font-medium"
      >
        Our latest furniture
      </motion.h2>
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-14 px-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {fluidGridData.products.map((product, i) => (
          <motion.div
            key={i}
            variants={fadeIn}
            className="flex w-full flex-col items-center gap-4"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src={product.image.src}
                alt={product.image.alt}
                quality={100}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                // className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p>{product.title}</p>
              <p className="text-textColor-secondary">{product.subTitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
