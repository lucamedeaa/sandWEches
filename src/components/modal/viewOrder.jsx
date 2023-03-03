import React from "react";
import { Modal, Text, Row, Spacer } from "@nextui-org/react";
import OrangeButton from "../orange_button";
import DisabledTextField from "../disabledTextField";
import DisabledSelectPickup from "../disabledSelectPickup";
import DisabledDateInput from "../disabledDateInput";
import DisabledSelectMultipleProducts from "../disabledSelectMultipleProducts";
import DisabledSelectStatus from "../selectStatus";

export default function ViewOrder({
  width,
  height,
  user,
  description,
  price,
  quantity,
  time,
  status,
  products,
  close,
  show,
}) {
  return (
    <Modal
      style={{ height }}
      width={width}
      closeButton
      aria-labelledby="modal-title"
      open={show}
      onClose={close}
    >
      <Text size={24} weight="bold">
        View Order
      </Text>
      <Modal.Body>
        <Row justify="center" xs={12} alignItems="baseline">
          <DisabledTextField label="User" width="300px" initialValue={user} />
          <Spacer x="6" />
          <DisabledTextField
            label="Description"
            width="300px"
            initialValue={description} />
        </Row>
        <Spacer y="0" />
        <Row
        style={{paddingRight:"140px"}}
          justify="center"
          xs={12}
          display="flex"
          alignItems="center"
          align="top"
        >
          <DisabledTextField label="Price(€)" width="300px" initialValue={price} />
          <Spacer x="6" />
          <DisabledDateInput width="300px" height="40px" date={time} label="Time" />
        </Row>
        <Spacer y="1" />
        <Row
          justify="center"
          xs={12}
          display="flex"
          alignItems="center"
        >
      <DisabledSelectPickup
            width="300px"
            height="40px"
            quantity={quantity}
            label="Pickup"
          />
      <Spacer x="7" />
          <DisabledSelectMultipleProducts
            width="300px"
            height="40px"
            product="Panino al salame"
          />
        </Row>
        <Spacer y="1" />

        <Row justify="center" xs={12} alignItems="center">
          <DisabledSelectStatus width="330px" height="40px" boolStatus={status} />
        </Row>
      </Modal.Body>
      <Modal.Footer
        style={{
          justifyContent: "center",
          display: "flex",
          paddingBottom: "2vw",
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
            width="120px"
            text="Submit"
            textsize="20"
          />
        </div>
      </Modal.Footer>
    </Modal>
  );
}
