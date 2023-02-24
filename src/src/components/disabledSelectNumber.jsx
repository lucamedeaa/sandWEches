import React from 'react';
import { Input } from "@nextui-org/react";

export default function selectNumber({width,height,quantity,label}){
  return(
    <Input style={{width:width, height:height, background:"#EBEDF0", borderRadius:"3px"}}
    initialValue={quantity}
    borderWeight="light"
    label={label}
    type="number" 
    disabled
    />
  );
}
