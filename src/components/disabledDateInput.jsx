import React from "react";
import { Input } from "@nextui-org/react";
import "./dateInput.css";
export default function DisabledDateInput({width, height, date,label}) {
    return(
        <Input style={{width:width, height:height, background:"#EBEDF0" }}
        width="186px" 
        label={label}
        type="date" 
        initialValue={date}
        disabled
      />
    );

}