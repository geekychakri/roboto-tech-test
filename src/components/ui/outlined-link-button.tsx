import Link from "next/link";
import { ReactNode } from "react";

import { cn } from "@/utils/cn";

interface OutlinedLinkButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const OutlinedLinkButton = ({
  href,
  children,
  className = "",
}: OutlinedLinkButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "border border-textColor-primary-action px-4 py-2 text-center text-sm font-medium text-textColor-primary-action",
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default OutlinedLinkButton;
