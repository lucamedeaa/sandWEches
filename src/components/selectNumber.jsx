import React from "react";
import { Input } from "@nextui-org/react";

export default function selectNumber({
  width,
  height,
  quantity,
  label,
  onChange,
}) {
  return (
    <Input
      style={{
        width: width,
        height: height,
        borderColor: "orange",
        background: "white",
        borderRadius: "3px",
      }}
      initialValue={quantity}
      borderWeight="light"
      label={label}
      type="number"
      bordered
      onChange={onChange}
    />
  );
}
