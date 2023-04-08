import React, { FC } from "react";
import { Typography } from "@/shared/ui/Typography";
import Link from "next/link";
import { pageList } from "@/shared/ui/Layout/model/header";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <div className="mb-6 w-full shadow-2xl">
      <div className="ali container flex w-full items-center justify-between gap-2 py-5">
        <Typography as={Link} href="/" variant="title4">
          WWF
        </Typography>

        <div className="flex gap-3">
          {pageList.map((el, index) => (
            <Typography key={index} as={Link} href={el.url} variant="link" className="no-underline">
              {el.title}
            </Typography>
          ))}
        </div>
      </div>
    </div>
  );
};
