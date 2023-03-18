import React, { FC, InputHTMLAttributes } from "react";
import clsx from "clsx";
import { Typography } from "@/shared/ui/Typography";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  customClass?: string;
  error?: string;
  ref?: React.ForwardedRef<HTMLInputElement>;
}

export const Input: FC<InputProps> = React.forwardRef(function Input(props) {
  const { customClass, label, error, ref, ...rest } = props;

  return (
    <div className="flex flex-col gap-1.5">
      <label>
        <Typography className="pb-1" as="p" variant="text">
          {label}
        </Typography>
        <input
          className={clsx("rounded-xl border bg-transparent px-3 py-1 text-1.25sm text-white outline-0", {
            [customClass as string]: customClass,
          })}
          ref={ref}
          {...rest}
        />
      </label>

      {!!error?.length && (
        <Typography className="!text-red-600" variant="textSmall">
          {error}
        </Typography>
      )}
    </div>
  );
});
