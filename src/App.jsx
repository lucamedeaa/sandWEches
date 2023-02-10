import NavBar from "./components/navbar";
import YellowButton from "./components/yellow_button";
import OrangeButton from "./components/orange_button";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <YellowButton
        text="Cipollotto"
        onClick={() => alert("Ciao")}
        height="100px"
      />
      <OrangeButton
        text="Cipollotto"
        onClick={() => alert("Ciao")}
        height="100px"
      />
    </>
  );
}

export default App;
