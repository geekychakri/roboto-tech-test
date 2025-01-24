import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";

interface ContentMediaBlockProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  primaryButtonLink: string;
  secondaryButtonLink?: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}

export default function ContentMediaBlock({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonLink,
  secondaryButtonLink,
  imageSrc,
  imageAlt,
  imagePosition = "right",
}: ContentMediaBlockProps) {
  return (
    <section className="py-16 md:px-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div
          className={cn(
            "grid gap-8 lg:grid-cols-2 lg:gap-16 items-center",
            imagePosition === "left" && "md:[&>div:first-child]:order-1"
          )}
        >
          <div className={cn("space-y-4 md:space-y-6")}>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight">
              {title}
            </h2>
            <p className="text-textColor-secondary leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href={primaryButtonLink}
                className="inline-flex items-center justify-center border border-textColor-primary-action px-4 py-2 text-sm font-medium text-textColor-primary-action"
              >
                {primaryButtonText}
              </Link>
              {secondaryButtonText && secondaryButtonLink && (
                <Link
                  href={secondaryButtonLink}
                  className="inline-flex items-center justify-center border border-textColor-primary-action px-4 py-2 text-sm font-medium text-textColor-primary-action"
                >
                  {secondaryButtonText}
                </Link>
              )}
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
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
