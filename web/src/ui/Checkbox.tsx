"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";

import { cx, sva } from "../../styled-system/css";
import { styled } from "../../styled-system/jsx";
import { CheckIcon } from "lucide-react";

const recipe = sva({
  slots: ["root", "control", "icon", "label"],
  base: {
    root: {
      all: "unset",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      padding: 4,
      borderRadius: 16,
      border: "1px solid",
      borderColor: "gray.300",
      minH: 180,
      _hover: {
        backgroundColor: "gray.100",
      },
      _active: {
        backgroundColor: "gray.200",
      },
      _focusVisible: {
        outline: "none",
        boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.2)",
      },
      _checked: {
        backgroundColor: "gray.100",
        borderColor: "gray.500",
      },
    },
    control: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      borderRadius: "sm",
      borderWidth: 1,
      borderColor: "gray.600",
      width: "24px",
      height: "24px",

      _groupChecked: {
        backgroundColor: "gray.900",
        borderWidth: 0,
      },
      _groupDisabled: {
        backgroundColor: "none",
        borderColor: "gray.300",
      },
    },
    icon: {
      width: "20px",
      height: "20px",
      color: "white",
      _groupDisabled: {
        color: "gray.200",
      },
    },
    label: {
      ml: 2,
      fontSize: 16,
      fontWeight: "semibold",
      color: "gray.900",
    },
  },
});

const checkbox = recipe();

export interface CheckProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Checkbox> {
  label: string;
  children?: React.ReactElement;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Checkbox>,
  CheckProps
>(({ className, label, children, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Checkbox
      ref={ref}
      className={cx("group", checkbox.root, className)}
      {...props}
    >
      <styled.div display="flex" alignItems="center">
        <div className={checkbox.control}>
          <CheckboxPrimitive.Indicator>
            <CheckIcon className={checkbox.icon} />
          </CheckboxPrimitive.Indicator>
        </div>
        <span className={checkbox.label}>{label}</span>
      </styled.div>
      {children}
    </CheckboxPrimitive.Checkbox>
  );
});
Checkbox.displayName = CheckboxPrimitive.Checkbox.displayName;

export { Checkbox };
