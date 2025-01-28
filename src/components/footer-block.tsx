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
    <footer className="flex flex-col gap-8 bg-backgroundColor-secondary px-5 py-20 md:px-11">
      <div className="grid grid-rows-3 gap-2 text-textColor-secondary md:gap-x-12 lg:grid-cols-5">
        <div className="row-span-3 grid grid-rows-subgrid items-center">
          <span>{data.contactInfo.phone}</span>
          <span>{data.contactInfo.address.street}</span>
          <span className="flex gap-1">
            <span>{data.contactInfo.address.city}</span>
            <span>{data.contactInfo.address.postcode}</span>
          </span>
        </div>
        <div className="row-span-3 grid grid-rows-subgrid items-center">
          {data.contactInfo.email}
        </div>
        <div className="hidden md:block"></div>
        <form className="col-span-2 row-span-3 grid grid-rows-subgrid items-center">
          <p>{data.newsletter.heading}</p>
          <div className="flex flex-1 flex-col gap-2 sm:flex-row">
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
              className="border border-borderColor-primary px-4 py-2 text-textColor-secondary"
            >
              {data.newsletter.submitButton.text}
            </button>
          </div>
          <div className="flex items-center gap-1">
            <label htmlFor="agree" className="sr-only">
              Agree
            </label>
            <input type="radio" id="agree" />
            <p>{data.newsletter.consentText}</p>
          </div>
        </form>
      </div>

      <div className="parent grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
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
            className="flex flex-col gap-4 border-t border-divider py-8"
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
    <div className="flex flex-col gap-4 border-t border-divider py-8">
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
