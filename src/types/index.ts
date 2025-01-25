export interface ContentMediaBlockType {
  data: {
    eyebrowText?: string;
    title: string;
    description: string;
    links: {
      primaryLink: {
        text: string;
        url: string;
      };
      secondaryLink?: {
        text: string;
        url: string;
      };
    };

    image: {
      src: string;
      alt: string;
      position: string;
    };
  };
}

export interface GridBlockProps {
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
