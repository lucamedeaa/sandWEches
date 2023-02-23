import { User } from "@nextui-org/react";

const App = ({ text }) => {
  return (
    <User
      size="xl"
      src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png"
      name={text}
      style={{
        background: "transparent",
        font: "menu",
        color: "#2F373A",
        fontWeight: "500",
        
      }}
    />
  );
}

export default App;