import React, { useState } from "react";
import { Modal, Text, Row, Spacer } from "@nextui-org/react";
import OrangeButton from "./../orange_button";
import TextField from "./../textField";
import { addAccount } from "../../data/api";

export default function AddNewAccount({ width, height, close, show }) {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [confEmail, setConfEmail] = useState();

  return (
    <Modal
      style={{ height: `${height}px` }}
      width={width}
      closeButton
      aria-labelledby="modal-title"
      open={show}
      onClose={close}
    >
      <Modal.Body>
        <Spacer y="3" />
        <Row justify="center" xs={12} alignItems="baseline">
          <Text size={24} weight="bold">
            Add New Account
          </Text>
        </Row>
        <Row justify="center" xs={12} alignItems="baseline">
          <Text size={18} weight="medium" color="grey">
            {" "}
            The new client’s password will be sent to his mailbox.
          </Text>
        </Row>
        <Row justify="center" xs={12} alignItems="baseline">
          <TextField
            label="Name"
            width="300px"
            handleChange={(e) => setName(e.target.value)}
          />
          <Spacer x="6" />
          <TextField
            label="Surname"
            width="300px"
            handleChange={(e) => setSurname(e.target.value)}
          />
        </Row>
        <Spacer y="1" />
        <Row
          justify="center"
          xs={12}
          display="flex"
          alignItems="center"
          align="top"
        >
          <TextField
            label="Email"
            width="300px"
            handleChange={(e) => setEmail(e.target.value)}
          />
          <Spacer x="6" />
          <TextField
            label="Confirm Email"
            width="300px"
            handleChange={(e) => setConfEmail(e.target.value)}
          />
        </Row>
      </Modal.Body>
      <Modal.Footer
        style={{
          justifyContent: "center",
          display: "flex",
          paddingLeft: "4vw",
          paddingBottom: "12vw",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <OrangeButton
            height="60px"
            width="140px"
            text="Submit"
            textsize="20"
            onPress={() => {
              console.log(`${email} ${confEmail}`);
              if (email != confEmail) {
                alert("Email error.");
                return;
              }
              addAccount(name, surname, email);
              close();
            }}
          />
        </div>
      </Modal.Footer>
    </Modal>
  );
}
