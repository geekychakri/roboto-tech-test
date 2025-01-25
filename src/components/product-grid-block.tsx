import Image from "next/image";

import { cn } from "@/utils/cn";
import { gridProductCount } from "@/utils/gridProductCount";

interface GridBlockProps {
  data: {
    heading: string;
    products: {
      title: string;
      subTitle: string;
      image: {
        src: string;
        width: number;
        height: number;
      };
    }[];
  };
}

export default function ProductGridBlock({ data }: GridBlockProps) {
  return (
    <section className="py-8 px-12 text-center bg-backgroundColor-secondary">
      <h2 className="font-medium text-xl mb-12">{data.heading}</h2>
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center",
          gridProductCount(data.products.length)
        )}
      >
        {data.products.map((product, i) => (
          <div key={i} className="flex flex-col gap-4 items-center w-full">
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
          </div>
        ))}
      </div>
    </section>
  );
}
