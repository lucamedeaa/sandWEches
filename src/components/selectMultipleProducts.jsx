import React from "react";
import { Dropdown } from "@nextui-org/react";

export default function MultipleProductsDropdown({width, height,product}) {
  const [selected, setSelected] = React.useState(new Set([product]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <Dropdown>
      <Dropdown.Button flat color="orange" 
      css={{ tt: "capitalize", minWidth:width, height:height, maxWidth:width, background:"white", borderColor:"Orange", borderRadius:"3px", fontWeight:"bold"}}
       bordered borderWeight="light">
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Multiple selection actions"
        color="white"
        disallowEmptySelection
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Dropdown.Item key="Panino al salame">Panino al salame</Dropdown.Item>
        <Dropdown.Item key="Piadina al cotto">Piadina al cotto</Dropdown.Item>
        <Dropdown.Item key="M&M's">M&M's</Dropdown.Item>
        <Dropdown.Item key="Torta della nonna">Torta della nonna</Dropdown.Item>
        <Dropdown.Item key="Coca-Cola">Coca-Cola</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}