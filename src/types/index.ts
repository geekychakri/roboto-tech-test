export type ContentMediaBlockType = {
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
    backgroundColor?: string;
  };
};

export type GridBlockProps = {
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
};

type Link = {
  title: string;
  url: string;
};
export type Column =
  | {
      sections: Section[];
      heading?: never;
      links?: never;
    }
  | {
      sections?: never;
      heading: string;
      links: Link[];
    };
type Section = {
  heading: string;
  links: Link[];
};

type Address = {
  street: string;
  city: string;
  postcode: string;
};

type ContactInfo = {
  phone: string;
  email: string;
  address: Address;
};

type NewsLetter = {
  heading: string;
  label: string;
  emailPlaceholder: string;
  submitButton: {
    text: string;
  };
  consentText: string;
};

export type FooterData = {
  contactInfo: ContactInfo;
  newsletter: NewsLetter;
  columns: Column[];
};
