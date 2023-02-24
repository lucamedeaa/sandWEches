import React from "react";
import { Input } from "@nextui-org/react";
import './dateInput.css';

export default function dateInput({width, height, date,label}) {
    return(
        <Input style={{width:width, height:height,borderColor:"orange", background:"white", borderRadius:"3px"}}
        width="186px" 
        label={label}
        type="date" 
        initialValue={date}
        borderWeight="light"
        bordered 
      />
    );

}