import { Button } from "@nextui-org/react";

 const yellowButton = ({height, width, text, onPress}) => {
  return <Button style={{ 
    height: height, 
    width: width, 
    fontWeight: "regular", 
    background:"#FDEC8B", 
    color: "#394144", 
    borderRadius: "60px",
    fontSize: "15px"
  }} onPress={onPress} >{text}</Button>;
}

export default yellowButton;