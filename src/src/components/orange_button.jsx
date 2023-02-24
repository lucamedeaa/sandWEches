import { Button } from "@nextui-org/react";

const orangeButton = ({ height, width, text, onPress, textSize }) => {
  return (
    <Button
      style={{
        height: height,
        width: width,
        background: "#E9642C",
        color: "white",
        fontWeight: "bolder",
        fontSize: textSize,
        borderRadius: "50px",
        minWidth: "0",
      }}
      onPress={onPress}
    >
      {text}
    </Button>
  );
};

export default orangeButton;
