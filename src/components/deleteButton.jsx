import { Button } from "@nextui-org/react";

const deleteButton = ({ height, width, text, onPress, textSize }) => {
  return (
    <Button
      style={{
        height: height,
        width: width,
        background: "white",
        color: "black",
        fontWeight: "bolder",
        fontSize: textSize,
        borderRadius: "50px",
        borderColor:"#FDEB8B",
        minWidth: "0",
      }}
      onPress={onPress}
      bordered
      borderWeight="light"
    >
    {text}
    </Button>
  );
};

export default deleteButton;