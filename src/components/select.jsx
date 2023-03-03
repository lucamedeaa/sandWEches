import React from "react";
import { Dropdown } from "@nextui-org/react";

export default function ActiveDropdown({width, height,boolActive}) {
  const [selected, setSelected] = React.useState(new Set([boolActive]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <Dropdown>
      <Dropdown.Button flat color="orange" 
      css={{ tt: "capitalize", width:width, height:height, background:"white", borderColor:"Orange", borderRadius:"3px", fontWeight:"bold"}}
       bordered borderWeight="light">
        Active: 
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
        <Dropdown.Item key="Active">Active</Dropdown.Item>
        <Dropdown.Item key="Non Active">Non Active</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}