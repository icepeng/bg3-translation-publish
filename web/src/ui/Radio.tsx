"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as React from "react";

import { cx, sva } from "../../styled-system/css";
import { styled } from "../../styled-system/jsx";

const recipe = sva({
  slots: ["group", "item", "control", "check_control", "icon", "check_icon", "label", "description", "image"],
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
    check_control: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      borderRadius: "20%",
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
      borderRadius: "full",
      width: "12px",
      height: "12px",
      backgroundColor: "white",
      _groupDisabled: {
        backgroundColor: "gray.200",
      },
    },
    check_icon: {
      borderRadius: "10%",
      width: "12px",
      height: "12px",
      backgroundColor: "white",
      _groupDisabled: {
        backgroundColor: "gray.200",
      },
    },
    label: {
      ml: 2,
      fontSize: 18,
      fontWeight: "semibold",
      color: "gray.900",
    },
    description: {
      mt: 2,
      fontSize: 16,
      color: "gray.900",
    },
    image: {
      mt: 4,
      borderRadius: 8,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "left",
    }
  },
});

const selector = recipe();

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cx(selector.group, className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export interface RadioProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label: string;
  description?: string | React.ReactNode;
  image_url?: string;
}

const Radio = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioProps
>(({ className, label, description, image_url, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cx("group", selector.item, className)}
      {...props}
    >
      <styled.div display="flex" alignItems="center">
        <div className={selector.control}>
          <RadioGroupPrimitive.Indicator className={selector.icon} />
        </div>
        <span className={selector.label}>{label}</span>
      </styled.div>
      {image_url && <img className={selector.image} src={image_url} />}
      <div className={selector.description}>{description}</div>
    </RadioGroupPrimitive.Item>
  );
});
Radio.displayName = RadioGroupPrimitive.Item.displayName;

export interface CheckProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Checkbox> {
  label: string;
  description?: string;
  image_url?: string;
}

const Check = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Checkbox>,
  CheckProps
>(({ className, label, description, image_url, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Checkbox
      ref={ref}
      className={cx("group", selector.item, className)}
      {...props}
    >
      <styled.div display="flex" alignItems="center">
        <div className={selector.check_control}>
          <CheckboxPrimitive.Indicator className={selector.check_icon} />
        </div>
        <span className={selector.label}>{label}</span>
      </styled.div>
      {image_url && <img className={selector.image} src={image_url} />}
      {description && <div className={selector.description}>{description}</div>}
    </CheckboxPrimitive.Checkbox>
  );
});
Check.displayName = CheckboxPrimitive.Checkbox.displayName;

export { Radio, RadioGroup, Check };
