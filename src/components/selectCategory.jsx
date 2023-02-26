import React, { useMemo } from "react";
import { Dropdown } from "@nextui-org/react";

export default function CategoryDropdown({
  width,
  height,
  elements,
  setSelected,
  selected,
}) {
  const selectedValue = useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <Dropdown>
      <Dropdown.Button
        flat
        color="orange"
        css={{
          tt: "capitalize",
          width: width,
          height: height,
          background: "white",
          borderColor: "Orange",
          borderRadius: "3px",
          fontWeight: "bold",
        }}
        bordered
        borderWeight="light"
      >
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="white"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        {elements.map((item) => {
          return <Dropdown.Item key={item.key}>{item.name}</Dropdown.Item>;
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}
