import React from "react";
import { Modal, Text, Row, Spacer } from "@nextui-org/react";
import OrangeButton from "./../orange_button";
import TextField from "./../textfield";
import DisabledTextField from "./../disabledTextField";
import SelectNumber from "./../selectNumber";
import SelectCategory from "./../selectCategory";
import DisabledSelectActive from "./../disabledDropdown";

export default function ModifyProduct({
  width,
  height,
  show,
  close,
  name,
  description,
  price,
  quantity,
  category,
  boolActive,
  kcal,
  fats,
  satured_fats,
  carbohydrates,
  sugars,
  proteins,
  fibers,
  salt,
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
        Modify Product
      </Text>
      <Modal.Body>
        <Row justify="center" xs={12} alignItems="baseline">
          <TextField label="Name" width="300px" initialValue={name} />
          <Spacer x="6" />
          <TextField
            label="Description"
            width="300px"
            initialValue={description}
          />
        </Row>
        <Row justify="center" xs={12} alignItems="center">
          <TextField label="Price(€)" width="300px" initialValue={price} />
          <Spacer x="6" />
          <SelectNumber
            width="300px"
            height="40px"
            label="Quantity"
            quantity={quantity}
          />
        </Row>
        <Spacer y="0.3" />
        <Row justify="center" xs={12} alignItems="baseline">
          <SelectCategory width="330px" height="40px" category={category} />
          <Spacer x="6" />
          <DisabledSelectActive
            width="330px"
            height="40px"
            boolActive={boolActive}
          />
        </Row>

        <Row justify="center" xs={12} alignItems="baseline">
          <Text size={20} weight="bold">
            Nutritional Values
          </Text>
        </Row>
        <Row justify="center" xs={12} alignItems="baseline">
          <DisabledTextField label="Kcal" width="100px" placeholder={kcal} />
          <Spacer x="3" />
          <DisabledTextField label="Fats" width="100px" placeholder={fats} />
          <Spacer x="3" />
          <DisabledTextField
            label="Satured Fats"
            width="100px"
            placeholder={satured_fats}
          />
          <Spacer x="3" />
          <DisabledTextField
            label="Carbohydrates"
            width="100px"
            placeholder={carbohydrates}
          />
        </Row>
        <Spacer y="0.3" />
        <Row justify="center" xs={12} alignItems="baseline">
          <DisabledTextField
            label="Sugars"
            width="100px"
            placeholder={sugars}
          />
          <Spacer x="3" />
          <DisabledTextField
            label="Proteins"
            width="100px"
            placeholder={proteins}
          />
          <Spacer x="3" />
          <DisabledTextField
            label="Fibers"
            width="100px"
            placeholder={fibers}
          />
          <Spacer x="3" />
          <DisabledTextField label="Salt" width="100px" placeholder={salt} />
        </Row>
      </Modal.Body>
      <Modal.Footer
        style={{
          justifyContent: "center",
          display: "flex",
          paddingLeft: "4vw",
          paddingBottom: "3vw",
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
