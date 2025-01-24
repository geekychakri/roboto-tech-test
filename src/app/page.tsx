import sectionOneImage from "/public/images/section-1.png";
import sectionTwoImage from "/public/images/section-2.png";

import HeroBlock from "@/components/hero-block";
import ContentMediaBlock from "@/components/content-media-block";

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
    </>
  );
}
