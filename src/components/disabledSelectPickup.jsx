import React from "react";
import { Dropdown } from "@nextui-org/react";

export default function CategoryDropdown({width, height,pickup}) {
  const [selected, setSelected] = React.useState(new Set([pickup]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <Dropdown>
      <Dropdown.Button flat color="orange" 
      css={{ tt: "capitalize", width:width, height:height, background:"#EBEDF0", borderColor:"#EBEDF0", borderRadius:"3px", fontWeight:"bold"}}
       bordered borderWeight="light">
        Pickup:
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="white"
        disabledKeys={["Atrio Settore A", "Atrio Settore B"]}
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Dropdown.Item key="Atrio Settore A">Atrio Settore A</Dropdown.Item>
        <Dropdown.Item key="Atrio Settore B">Atrio Settore B</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}