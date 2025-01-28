import Image from "next/image";

import * as motion from "motion/react-client";

import { cn } from "@/utils/cn";
import { gridProductCount } from "@/utils/gridProductCount";
import { staggerChildren, fadeIn, easing } from "@/animations/variants";
import type { GridBlockProps } from "@/types";

export default function ProductGridBlock({ data }: GridBlockProps) {
  return (
    <section className="bg-backgroundColor-secondary px-5 py-8 text-center md:px-11">
      <motion.h2
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: easing }}
        viewport={{ once: true, amount: 0.5 }}
        className="mb-12 text-xl font-medium"
      >
        {data.heading}
      </motion.h2>
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={cn(
          "grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2",
          gridProductCount(data.products.length),
        )}
      >
        {data.products.map((product, i) => (
          <motion.div
            key={i}
            className="flex w-full flex-col items-center gap-4"
            variants={fadeIn}
          >
            <div
              className="relative w-full"
              style={{
                maxWidth: `${product.image.width}px`,
                aspectRatio: `${product.image.width}/${product.image.height}`,
              }}
            >
              <Image
                alt="marble"
                src={product.image.src}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-contain"
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
