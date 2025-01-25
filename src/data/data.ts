import sectionOneImage from "/public/images/section-1.png";
import sectionTwoImage from "/public/images/section-2.png";
import sectionThreeImage from "/public/images/section-3.png";

import grid1Image from "/public/images/grid-1-image.png";
import grid2Image from "/public/images/grid-2-image.png";

export const contentMediaData1 = {
  eyebrowText: "",
  title: "Fireplaces1",
  description:
    "Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam.",
  links: {
    primaryLink: {
      text: "Explore our Fireplaces",
      url: "#",
    },
    secondaryLink: {
      text: "Sell an Antique Chimneypiece",
      url: "#",
    },
  },
  image: {
    src: sectionOneImage.src,
    alt: "Classic fireplace with ornate gold-framed mirror",
    position: "right",
  },
};

export const contentMediaData2 = {
  eyebrowText: "",
  title: "Lighting",
  description:
    "Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam.",
  links: {
    primaryLink: {
      text: "Explore our Lighting",
      url: "#",
    },
  },
  image: {
    src: sectionTwoImage.src,
    alt: "Elegant pendant light fixture above staircase",
    position: "left",
  },
};

export const contentMediaData3 = {
  eyebrowText: "Journal",
  title: "The Grand Collection",
  description:
    "Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam.",
  links: {
    primaryLink: {
      text: "Discover More",
      url: "#",
    },
  },
  image: {
    src: sectionThreeImage.src,
    alt: "Classic fireplace with ornate gold-framed mirror",
    position: "right",
  },
};

export const gridData1 = {
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

export const gridData2 = {
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
