import sectionOneImage from "/public/images/section-1.png";
import sectionTwoImage from "/public/images/section-2.png";

import HeroBlock from "@/components/hero-block";
import ContentMediaBlock from "@/components/content-media-block";
import ProductGridBlock from "@/components/product-grid-block";

import grid1Image from "/public/images/grid-1-image.png";
import grid2Image from "/public/images/grid-2-image.png";

import FluidProductGridBlock from "@/components/fluid-product-grid-block";

const gridData1 = {
  heading: "Our latest chimneypieces",
  products: [
    {
      title: "Lorem Ipsum",
      subTitle: "Subtitle",
      image: {
        alt: "marble",
        src: grid1Image.src,
        width: grid1Image.width,
        height: grid1Image.height,
      },
    },
    {
      title: "Lorem Ipsum",
      subTitle: "Subtitle",
      image: {
        alt: "marble",
        src: grid1Image.src,
        width: grid1Image.width,
        height: grid1Image.height,
      },
    },
    {
      title: "Lorem Ipsum",
      subTitle: "Subtitle",
      image: {
        alt: "marble",
        src: grid1Image.src,
        width: grid1Image.width,
        height: grid1Image.height,
      },
    },
    {
      title: "Lorem Ipsum",
      subTitle: "Subtitle",
      image: {
        alt: "marble",
        src: grid1Image.src,
        width: grid1Image.width,
        height: grid1Image.height,
      },
    },
  ],
};

const gridData2 = {
  heading: "Our latest lighting",
  products: [
    {
      title: "Lorem Ipsum",
      subTitle: "Subtitle",
      image: {
        alt: "dish-light",
        src: grid2Image.src,
        width: grid2Image.width,
        height: grid2Image.height,
      },
    },
    {
      title: "Lorem Ipsum",
      subTitle: "Subtitle",
      image: {
        alt: "dish-light",
        src: grid2Image.src,
        width: grid2Image.width,
        height: grid2Image.height,
      },
    },
    {
      title: "Lorem Ipsum",
      subTitle: "Subtitle",
      image: {
        alt: "dish-light",
        src: grid2Image.src,
        width: grid2Image.width,
        height: grid2Image.height,
      },
    },
    {
      title: "Lorem Ipsum",
      subTitle: "Subtitle",
      image: {
        alt: "dish-light",
        src: grid2Image.src,
        width: grid2Image.width,
        height: grid2Image.height,
      },
    },
    {
      title: "Lorem Ipsum",
      subTitle: "Subtitle",
      image: {
        alt: "dish-light",
        src: grid2Image.src,
        width: grid2Image.width,
        height: grid2Image.height,
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <HeroBlock />
      <ContentMediaBlock
        title="Fireplaces"
        description="Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam."
        primaryButtonText="Explore our Fireplaces"
        primaryButtonLink="#"
        secondaryButtonText="Sell an Antique Chimneypiece"
        secondaryButtonLink="#"
        imageSrc={sectionOneImage.src}
        imageAlt="Classic fireplace with ornate gold-framed mirror"
      />
      <ContentMediaBlock
        title="Lighting"
        description="Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam."
        primaryButtonText="Explore our Lighting"
        primaryButtonLink="#"
        imageSrc={sectionTwoImage.src}
        imageAlt="Elegant pendant light fixture above staircase"
        imagePosition="left"
      />
      <ProductGridBlock data={gridData1} />
      <ProductGridBlock data={gridData2} />
      <FluidProductGridBlock />
    </>
  );
}
