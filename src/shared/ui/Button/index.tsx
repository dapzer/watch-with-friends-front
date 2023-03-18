import React, { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  customClass?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const { customClass, ...rest } = props;
  return (
    <button
      className={clsx(
        "rounded-xl border bg-transparent px-7 py-1 text-1.25sm text-white outline-0 hover:enabled:border-blue-700 hover:enabled:bg-blue-700 disabled:opacity-75",
        {
          [customClass as string]: customClass,
        }
      )}
      {...rest}
    />
  );
};
