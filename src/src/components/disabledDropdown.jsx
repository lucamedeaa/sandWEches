import React from "react";
import { Dropdown } from "@nextui-org/react";

export default function DisabledActiveDropdown({width, height,boolActive}) {
  const [selected, setSelected] = React.useState(new Set([boolActive]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <Dropdown>
      <Dropdown.Button flat color="#EBEDF0" 
      css={{ tt: "capitalize", width:width, height:height, background:"#EBEDF0", borderColor:"#EBEDF0", borderRadius:"3px", fontWeight:"bold"}}
       bordered borderWeight="light">
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
      disabledKeys={["Active", "Non Active"]}
        aria-label="Single selection actions"
        color="#EBEDF0"
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