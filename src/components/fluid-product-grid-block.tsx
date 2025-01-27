import Image from "next/image";

import { fluidGridData } from "@/data";

import * as motion from "motion/react-client";

import { staggerChildren, fadeIn, easing } from "@/animations/variants";

export default function FluidProductGridBlock() {
  return (
    <section className="py-8 px-12 text-center">
      <motion.h2
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: easing }}
        viewport={{ once: true, amount: 0.5 }}
        className="font-medium text-xl mb-12"
      >
        Our latest furniture
      </motion.h2>
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-14 px-8"
      >
        {fluidGridData.products.map((product, i) => (
          <motion.div key={i} variants={fadeIn} className="text-center">
            <div className="relative w-full aspect-[3/3] overflow-hidden mb-4">
              <Image
                src={product.image.src}
                alt={`Image ${i + 1}`}
                quality={100}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                // className="object-contain"
              />
            </div>
            <p>{product.title}</p>
            <p className="text-textColor-secondary">{product.subTitle}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
