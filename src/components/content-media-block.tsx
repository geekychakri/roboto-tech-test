import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";

import type { ContentMediaBlockType } from "@/types";

import * as motion from "motion/react-client";

import { staggerChildren, fadeInUp } from "@/animations/variants";

export default function ContentMediaBlock({ data }: ContentMediaBlockType) {
  console.log({ data });

  return (
    <section
      className={cn(
        "py-16 md:px-16 md:py-24",
        data.backgroundColor === "tertiary" && "bg-backgroundColor-tertiary"
      )}
    >
      <motion.div className="container px-4 md:px-6">
        <div
          className={cn(
            "grid gap-8 lg:grid-cols-2 lg:gap-16 items-center",
            data.image.position === "left" && "md:[&>div:first-child]:order-1"
          )}
        >
          <motion.div
            className={cn("space-y-4 md:space-y-6")}
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {data.eyebrowText && (
              <motion.h2 variants={fadeInUp}>
                {data.eyebrowText.toLocaleUpperCase("en-US")}
              </motion.h2>
            )}
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl tracking-tight"
            >
              {data.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-textColor-secondary leading-relaxed"
            >
              {data.description}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link
                href={data.links.primaryLink.url}
                className="inline-flex items-center justify-center border border-textColor-primary-action px-4 py-2 text-sm font-medium text-textColor-primary-action"
              >
                {data.links.primaryLink.text}
              </Link>
              {data.links.secondaryLink && (
                <Link
                  href={data.links.secondaryLink.url}
                  className="inline-flex items-center justify-center border border-textColor-primary-action px-4 py-2 text-sm font-medium text-textColor-primary-action"
                >
                  {data.links.secondaryLink.text}
                </Link>
              )}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative aspect-[4/5] w-full overflow-hidden"
          >
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
