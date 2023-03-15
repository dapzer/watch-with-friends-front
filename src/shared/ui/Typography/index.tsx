import React from "react";
import clsx from "clsx";

type PolymorphicProps<Element extends React.ElementType, Props> = Props &
  Omit<React.ComponentProps<Element>, "as"> & {
    as?: Element;
  };

interface TypographyProps {
  className?: string;
  variant?: "text" | "title" | "title2" | "title3" | "title4" | "link" | "textSmall";
}

export const Typography = <Element extends React.ElementType = React.ElementType>(props: PolymorphicProps<Element, TypographyProps>) => {
  const { as: Component = "div", variant = "text", className, ...rest } = props;
  return (
    <Component
      className={clsx("text-125sm font-medium text-white", {
        "text-5xl !font-bold": variant == "title",
        "text-45xl !font-bold": variant == "title2",
        "text-35xl !font-bold": variant == "title3",
        "text-2xl !font-bold": variant == "title4",
        "text-default !font-normal": variant == "textSmall",
        "cursor-pointer hover:text-blue-600": variant == "link",
        [`${className}`]: className,
      })}
      {...rest}
    />
  );
};
