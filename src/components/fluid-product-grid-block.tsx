import Image from "next/image";

import { fluidGridData } from "@/data";

export default function FluidProductGridBlock() {
  return (
    <section className="py-8 px-12 text-center">
      <h1 className="font-medium text-xl mb-12">Our latest furniture</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-14 px-8">
        {fluidGridData.products.map((product, i) => (
          <div key={i} className="text-center">
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
          </div>
        ))}
      </div>
    </section>
  );
}
