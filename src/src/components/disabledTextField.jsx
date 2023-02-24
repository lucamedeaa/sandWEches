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
      style={{ width, background: "#EBEDF0", height, borderRadius: "10px" }}
      label={label}
      placeholder={placeholder}
    />
  );
}
