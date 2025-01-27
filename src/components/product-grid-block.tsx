import Image from "next/image";

import { cn } from "@/utils/cn";
import { gridProductCount } from "@/utils/gridProductCount";

import type { GridBlockProps } from "@/types";

import * as motion from "motion/react-client";

import { staggerChildren, fadeIn, easing } from "@/animations/variants";

export default function ProductGridBlock({ data }: GridBlockProps) {
  return (
    <section className="py-8 px-12 text-center bg-backgroundColor-secondary">
      <motion.h2
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: easing }}
        viewport={{ once: true, amount: 0.5 }}
        className="font-medium text-xl mb-12"
      >
        {data.heading}
      </motion.h2>
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center",
          gridProductCount(data.products.length)
        )}
      >
        {data.products.map((product, i) => (
          <motion.div
            key={i}
            className="flex flex-col gap-4 items-center w-full"
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
