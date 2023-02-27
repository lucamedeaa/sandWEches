import React, { useState } from "react";
import { Modal, Text } from "@nextui-org/react";
import TextField from "./../textfield";
import OrangeButton from "./../orange_button";
import { deleteAccount } from "../../data/api";

const App = ({ width, height, show, close }) => {
  const [pass, setPass] = useState();
  const [cmpPass, setCmpPass] = useState();

  return (
    <div>
      <Modal
        closeButton
        open={show}
        onClose={close}
        width={width}
        style={{
          height: height,
          left: "-16vw",
        }}
      >
        <Modal.Header
          style={{
            marginTop: "10vh",
          }}
        >
          <Text
            style={{
              font: "menu",
              fontSize: "34px",
              fontWeight: "bold",
            }}
          >
            Delete Account
          </Text>
        </Modal.Header>
        <Modal.Body
          style={{
            marginLeft: "10vw",
            marginRight: "10vw",
            justifyContent: "center",
          }}
        >
          <Text
            size={20}
            style={{
              font: "menu",
              fontSize: "18px",
              fontWeight: "600",
              paddingLeft: "0.5vw",
            }}
          >
            Email
          </Text>
          <TextField />
          <Text
            size={20}
            style={{
              font: "menu",
              fontSize: "18px",
              fontWeight: "600",
              paddingLeft: "0.5vw",
            }}
          >
            Password
          </Text>
          <TextField handleChange={(e) => setPass(e.target.value)} />
          <Text
            size={20}
            style={{
              font: "menu",
              fontSize: "18px",
              fontWeight: "600",
              paddingLeft: "0.5vw",
            }}
          >
            Confirm Password
          </Text>
          <TextField handleChange={(e) => setCmpPass(e.target.value)} />
        </Modal.Body>
        <Modal.Footer
          style={{
            justifyContent: "center",
            marginBottom: "8vh",
          }}
        >
          <OrangeButton
            text="Submit"
            width="200px"
            height="64px"
            textSize={18}
            onPress={() => {
              if (cmpPass != pass) {
                alert("Password error.");
                return;
              }

              deleteAccount(localStorage.getItem("id"));
              close();
            }}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;
