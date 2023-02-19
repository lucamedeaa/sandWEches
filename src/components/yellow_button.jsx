import { Button } from "@nextui-org/react";

const yellowButton = ({ height, width, text, textSize, onPress }) => {
  return (
    <Button
      style={{
        height: height,
        width: width,
        fontWeight: "regular",
        background: "#FDEC8B",
        color: "#394144",
        fontSize: textSize,
        borderRadius: "60px",
        minWidth: "0",
      }}
      onPress={onPress}
    >
      {text}
    </Button>
  );
};

export default yellowButton;
