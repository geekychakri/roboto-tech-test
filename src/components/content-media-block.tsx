import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";

import type { ContentMediaBlockType } from "@/types";
export default function ContentMediaBlock({ data }: ContentMediaBlockType) {
  console.log({ data });
  return (
    <section
      className={cn(
        "py-16 md:px-16 md:py-24",
        data.backgroundColor === "tertiary" && "bg-backgroundColor-tertiary"
      )}
    >
      <div className="container px-4 md:px-6">
        <div
          className={cn(
            "grid gap-8 lg:grid-cols-2 lg:gap-16 items-center",
            data.image.position === "left" && "md:[&>div:first-child]:order-1"
          )}
        >
          <div className={cn("space-y-4 md:space-y-6")}>
            {data.eyebrowText && (
              <h2>{data.eyebrowText.toLocaleUpperCase("en-US")}</h2>
            )}
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight">
              {data.title}
            </h2>
            <p className="text-textColor-secondary leading-relaxed">
              {data.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
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
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
