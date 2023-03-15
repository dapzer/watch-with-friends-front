import React from "react";

type PolymorphicProps<Element extends React.ElementType, Props> = Props &
  Omit<React.ComponentProps<Element>, "as"> & {
    as?: Element;
  };

interface TypographyProps {
  // myProp: number;
}

export const Typography = <Element extends React.ElementType = React.ElementType>(props: PolymorphicProps<Element, TypographyProps>) => {
  const { as: Component = "div", ...rest } = props;
  return <Component {...rest}>Hello</Component>;
};
