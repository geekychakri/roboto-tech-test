import Image from "next/image";
import { cn } from "@/utils/cn";
import * as motion from "motion/react-client";

import OutlinedLinkButton from "./ui/outlined-link-button";
import type { ContentMediaBlockType } from "@/types";
import { staggerChildren, fadeInUp } from "@/animations/variants";

export default function ContentMediaBlock({ data }: ContentMediaBlockType) {
  return (
    <section
      className={cn(
        "py-16 md:px-16 md:py-24",
        data.backgroundColor === "tertiary" && "bg-backgroundColor-tertiary",
      )}
    >
      <motion.div className="container px-4 md:px-6">
        <div
          className={cn(
            "grid items-center gap-8 lg:grid-cols-2 lg:gap-16",
            data.image.position === "left" && "md:[&>div:first-child]:order-1",
          )}
        >
          <motion.div
            className={cn("space-y-4 md:space-y-6")}
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                {data.eyebrowText && (
                  <motion.h2 variants={fadeInUp}>
                    {data.eyebrowText.toLocaleUpperCase()}
                  </motion.h2>
                )}
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl font-medium tracking-tight md:text-4xl"
                >
                  {data.title}
                </motion.h2>
              </div>
              <motion.p
                variants={fadeInUp}
                className="leading-relaxed text-textColor-secondary"
              >
                {data.description}
              </motion.p>
            </div>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col gap-4 pt-2 sm:flex-row"
            >
              <OutlinedLinkButton href="/">
                {data.links.primaryLink.text}
              </OutlinedLinkButton>
              {data.links.secondaryLink && (
                <OutlinedLinkButton href="/">
                  {data.links.secondaryLink.text}
                </OutlinedLinkButton>
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
