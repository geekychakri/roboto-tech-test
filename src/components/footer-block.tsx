import Link from "next/link";

import { Column, FooterData } from "@/types";

type FooterBlockProps = {
  data: FooterData;
};

type ColumnProps = {
  column: Column;
};

export default function Footer({ data }: FooterBlockProps) {
  return (
    <footer className="bg-backgroundColor-secondary px-5 py-20 flex flex-col gap-8">
      <div className="text-textColor-secondary grid lg:grid-cols-5 gap-2 md:gap-x-12 grid-rows-3">
        <div className="grid items-center grid-rows-subgrid row-span-3">
          <span>{data.contactInfo.phone}</span>
          <span>{data.contactInfo.address.street}</span>
          <span>
            <span>{data.contactInfo.address.city}</span>
            <span>{data.contactInfo.address.postcode}</span>
          </span>
        </div>
        <div className="grid items-center grid-rows-subgrid row-span-3">
          {data.contactInfo.email}
        </div>
        <div className="hidden md:block"></div>
        <form className="col-span-2 grid items-center grid-rows-subgrid row-span-3">
          <p>{data.newsletter.heading}</p>
          <div className="flex-1 flex-col sm:flex-row flex gap-2">
            <label htmlFor="email" className="sr-only">
              {data.newsletter.label}
            </label>
            <input
              type="email"
              className="flex-1 px-2 py-2"
              placeholder={data.newsletter.emailPlaceholder}
              name={data.newsletter.emailPlaceholder.toLocaleLowerCase()}
              id={data.newsletter.emailPlaceholder.toLocaleLowerCase()}
            />
            <button
              type="submit"
              className="bg-backgroundColor-tertiary text-textColor-primary border border-borderColor-primary px-4 py-2"
            >
              {data.newsletter.submitButton.text}
            </button>
          </div>
          <div className="flex gap-1 items-center">
            <input type="radio" />
            <p>{data.newsletter.consentText}</p>
          </div>
        </form>
      </div>

      <div className="parent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
        {data.columns.map((column, i) => (
          <div key={i}>
            <FooterColumnContent column={column} />
          </div>
        ))}
      </div>
    </footer>
  );
}

const FooterColumnContent = ({ column }: ColumnProps) => {
  if (column.sections) {
    return (
      <div className="flex flex-col gap-8">
        {column.sections.map((section, i) => (
          <div
            key={i}
            className="border-t border-black py-8 flex flex-col gap-4"
          >
            <h2 className="font-medium">{section.heading}</h2>

            <ul className="flex flex-col gap-2 text-textColor-secondary">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link href={link.url} className="text-textColor-secondary">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="border-t border-black flex flex-col gap-4 py-8">
      <h2 className="font-medium">{column.heading}</h2>
      <ul className="flex flex-col gap-2 text-textColor-secondary">
        {column.links?.map((link, i) => (
          <li key={i}>
            <Link href={link.url} className="text-textColor-secondary">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
