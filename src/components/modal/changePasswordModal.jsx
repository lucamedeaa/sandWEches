import React, { useState } from "react";
import { Modal, Text } from "@nextui-org/react";
import TextField from "../textfield";
import OrangeButton from "../orange_button";
import { changePassword } from "../../data/api";
import { Close } from "@mui/icons-material";

const App = ({ width, height, show, close }) => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [newPass, setNewPass] = useState();

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
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Change your Password
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
          <TextField handleChange={(e) => setEmail(e.target.value)} />
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
            New Password
          </Text>
          <TextField handleChange={(e) => setNewPass(e.target.value)} />
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
            onPress={() => {changePassword(email, pass, newPass); close()}}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;
