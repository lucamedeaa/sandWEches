import { Button } from "@nextui-org/react";

 const orangeButton = ({height, width, text, onPress}) => {
  return <Button style={{ 
    height: height, 
    width: width, 
    background:"#E9642C", 
    color: "white", 
    fontWeight: "bolder",
    fontSize: "17px",
    borderRadius: "50px"
  }} onPress={onPress} >{text}</Button>;
}

export default orangeButton;