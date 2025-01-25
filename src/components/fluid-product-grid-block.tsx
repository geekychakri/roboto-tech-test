import Image from "next/image";

import fluidImage1 from "/public/images/fluid-image-1.png";
import fluidImage2 from "/public/images/fluid-image-2.png";
import fluidImage3 from "/public/images/fluid-image-3.png";
import fluidImage4 from "/public/images/fluid-image-4.png";
import fluidImage5 from "/public/images/fluid-image-5.png";

const data = {
  heading: "Our latest furniture",
  products: [
    {
      title: "Lorem Ipsum",
      subTitle: "Subtitle",
      image: {
        alt: "chair",
        src: fluidImage1.src,
        width: fluidImage1.width,
        height: fluidImage1.height,
      },
    },
    {
      title: "Lorem Ipsum",
      subTitle: "Subtitle",
      image: {
        alt: "chair",
        src: fluidImage2.src,
        width: fluidImage2.width,
        height: fluidImage2.height,
      },
    },
    {
      title: "Lorem Ipsum",
      subTitle: "Subtitle",
      image: {
        alt: "chair",
        src: fluidImage3.src,
        width: fluidImage3.width,
        height: fluidImage3.height,
      },
    },
    {
      title: "Lorem Ipsum",
      subTitle: "Subtitle",
      image: {
        alt: "chair",
        src: fluidImage4.src,
        width: fluidImage4.width,
        height: fluidImage4.height,
      },
    },
    {
      title: "Lorem Ipsum",
      subTitle: "Subtitle",
      image: {
        alt: "chair",
        src: fluidImage5.src,
        width: fluidImage5.width,
        height: fluidImage5.height,
      },
    },
  ],
};

export default function FluidProductGridBlock() {
  return (
    <section className="py-8 px-12 text-center border border-red-300">
      <h1 className="font-medium text-xl mb-12">Our latest furniture</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-14 px-8">
        {data.products.map((product, i) => (
          <div key={i} className="text-center">
            <div className="relative w-full aspect-[3/3] overflow-hidden mb-4">
              <Image
                src={product.image.src || "/placeholder.svg"}
                alt={`Image ${i + 1}`}
                quality={100}
                fill
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
