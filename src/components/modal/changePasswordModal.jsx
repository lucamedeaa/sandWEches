import React from "react";
import { Modal, Text } from "@nextui-org/react";
import TextField from "./../components/textfield";
import OrangeButton from "./../components/orangeButton";

const App = ({width, height, show, close}) => {
  return (
    <div>
      <Modal
        closeButton
        open={show}
        onClose={close}
        width={width}
        style={{
            height: height
        }}
      >
       <Modal.Header style={{
        marginTop: "10vh"
       }}>
          <Text 
            style={{
              font: "menu",
              fontSize: "30px",
              fontWeight: "bold"
          }}>Change your Password</Text>
       </Modal.Header>
       <Modal.Body style={{
        marginLeft: "10vw",
        marginRight: "10vw",
        justifyContent: "center"
       }}>
          <Text 
            size={20}
            style={{
              font: "menu",
              fontSize: "18px",
              fontWeight: "600",
              paddingLeft: "0.5vw"
          }}>Email</Text>
          <TextField />
          <Text 
            size={20}
            style={{
              font: "menu",
              fontSize: "18px",
              fontWeight: "600",
              paddingLeft: "0.5vw"
          }}>Password</Text>
          <TextField />
          <Text 
            size={20}
            style={{
              font: "menu",
              fontSize: "18px",
              fontWeight: "600",
              paddingLeft: "0.5vw"
          }}>Confirm Password</Text>
          <TextField />
       </Modal.Body>
       <Modal.Footer style={{
        justifyContent: "center",
        marginBottom: "8vh"
       }}>
          <OrangeButton text="Submit" width="200px" height="64px" textSize={18} />
       </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;