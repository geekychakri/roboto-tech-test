import {
  contentMediaData1,
  contentMediaData2,
  contentMediaData3,
  contentMediaData4,
  gridData1,
  gridData2,
  gridData3,
  footerData,
} from "@/data";

import HeroBlock from "@/components/hero-block";
import ContentMediaBlock from "@/components/content-media-block";
import ProductGridBlock from "@/components/product-grid-block";
import FluidProductGridBlock from "@/components/fluid-product-grid-block";
import Footer from "@/components/footer-block";

export default function Home() {
  return (
    <>
      <HeroBlock />
      <ContentMediaBlock data={contentMediaData1} />
      <ContentMediaBlock data={contentMediaData2} />
      <ProductGridBlock data={gridData1} />
      <ProductGridBlock data={gridData2} />
      <FluidProductGridBlock />
      <ContentMediaBlock data={contentMediaData3} />
      <ProductGridBlock data={gridData3} />
      <ContentMediaBlock data={contentMediaData4} />
      <Footer data={footerData} />
    </>
  );
}
