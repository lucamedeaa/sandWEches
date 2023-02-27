import { Input } from "@nextui-org/react";
import "./disabledTextField.css";
export default function DisabledTextField({
  placeholder,
  width,
  height,
  label,
}) {
  return (
    <Input
      disabled
      style={{ width, background: "#EBEDF0", height, color: "black", paddingLeft: "15px"}}
      label={label}
      placeholder={placeholder}
    />
  );
}
