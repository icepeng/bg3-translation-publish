"use client";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as React from "react";

import { cx, sva } from "../../styled-system/css";
import { styled } from "../../styled-system/jsx";

const recipe = sva({
  slots: ["group", "item", "control", "icon", "label", "description"],
  base: {
    group: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: 4,
    },
    item: {
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

      borderRadius: "full",
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
      borderRadius: "100%",
      width: "12px",
      height: "12px",
      backgroundColor: "white",
      _groupDisabled: {
        backgroundColor: "gray.200",
      },
    },
    label: {
      ml: 2,
      fontSize: 16,
      fontWeight: "semibold",
      color: "gray.900",
    },
    description: {
      ml: 8,
      fontSize: 14,
      color: "gray.600",
    },
  },
});

const radio = recipe();

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cx(radio.group, className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export interface RadioProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label: string;
  description: string;
}

const Radio = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioProps
>(({ className, label, description, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cx("group", radio.item, className)}
      {...props}
    >
      <styled.div display="flex" alignItems="center">
        <div className={radio.control}>
          <RadioGroupPrimitive.Indicator className={radio.icon} />
        </div>
        <span className={radio.label}>{label}</span>
      </styled.div>
      <div className={radio.description}>{description}</div>
    </RadioGroupPrimitive.Item>
  );
});
Radio.displayName = RadioGroupPrimitive.Item.displayName;

export { Radio, RadioGroup };
