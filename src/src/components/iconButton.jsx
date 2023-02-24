import { Button, Text } from "@nextui-org/react";

const App = ({ height, width, text, onPress, icon, iconSize }) => {
  return (
    <Button
      bordered
      style={{
        justifyContent: "initial",
        borderWidth: "light",
        background: "white",
        borderColor: "#524F4F",
        width: width,
        height: height,
        position: "relative",
        display: "flex",
        borderRadius: "7px",
      }}
      onPress={onPress}
    >
      <img
        src={icon}
        alt="icon"
        height={iconSize}
        style={{
          paddingLeft: "0.5vw",
        }}
      />
      <Text
        style={{
          font: "menu",
          fontSize: "22px",
          fontWeight: "300",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {text}
      </Text>
    </Button>
  );
};

export default App;
