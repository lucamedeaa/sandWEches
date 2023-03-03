import React from "react";
import { Dropdown } from "@nextui-org/react";

export default function DisabledSelectStatus({width, height,boolStatus}) {
  const [selected, setSelected] = React.useState(new Set([boolStatus]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <Dropdown>
      <Dropdown.Button flat color="#EBEDF0" 
      css={{ tt: "capitalize", width:width, height:height, background:"#EBEDF0", borderColor:"#EBEDF0", borderRadius:"3px", fontWeight:"bold"}}
       bordered borderWeight="light">
        Status: 
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
      disabledKeys={["Delivered", "Non Delivered"]}
        aria-label="Single selection actions"
        color="#EBEDF0"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Dropdown.Item key="Delivered">Delivered</Dropdown.Item>
        <Dropdown.Item key=" Non Delivered">Non Delivered</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}