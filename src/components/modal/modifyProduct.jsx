import React, { useState, useEffect } from "react";
import { Modal, Text, Row, Spacer } from "@nextui-org/react";
import OrangeButton from "./../orange_button";
import TextField from "./../textfield";
import DisabledTextField from "./../disabledTextField";
import SelectNumber from "./../selectNumber";
import ReactLoading from "react-loading";
import SelectCategory from "./../selectDropdown";
import DisabledSelectActive from "./../disabledDropdown";
import { getProduct } from "../../data/api";
import { useQuery } from "react-query";

export default function ModifyProduct({
  width,
  height,
  show,
  close,
  productId,
}) {
  const [selectedCategory, setSelectedCategory] = useState(
    new Set(["Category"])
  );

  const product = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
  });

  if (product.status === "loading")
    return (
      <ReactLoading
        type="spinningBubbles"
        color="#E9642C"
        width={100}
        height={50}
        style={{
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
        }}
      />
    );

  if (product.status === "error") return;

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
          <TextField
            label="Name"
            width="300px"
            initialValue={product.data["name"]}
          />
          <Spacer x="6" />
          <TextField
            label="Description"
            width="300px"
            initialValue={product.data["description"]}
          />
        </Row>
        <Row justify="center" xs={12} alignItems="center">
          <TextField
            label="Price(€)"
            width="300px"
            initialValue={product.data["price"]}
          />
          <Spacer x="6" />
          <SelectNumber
            width="300px"
            height="40px"
            label="Quantity"
            quantity={product.data["quantity"]}
          />
        </Row>
        <Spacer y="0.3" />
        <Row justify="center" xs={12} alignItems="baseline">
          <h5>Category</h5>
          <SelectCategory
            width="330px"
            height="40px"
            elements={[
              {
                key: "1",
                name: "Panino",
              },
              {
                key: "2",
                name: "Piadina",
              },
              {
                key: "3",
                name: "Snack",
              },
              {
                key: "4",
                name: "Dolce",
              },
              {
                key: "5",
                name: "Bibita",
              },
            ]}
            selected={selectedCategory}
            setSelected={setSelectedCategory}
            defaultValue={product.data["category"]}
            selectionMode="single"
          />
          <Spacer x="6" />
          <h5>Active</h5>
          <DisabledSelectActive
            width="330px"
            height="40px"
            boolActive={product.data["active"]}
          />
        </Row>

        <Row justify="center" xs={12} alignItems="baseline">
          <Text size={20} weight="bold">
            Nutritional Values
          </Text>
        </Row>
        <Row justify="center" xs={12} alignItems="baseline">
          <DisabledTextField
            label="Kcal"
            width="100px"
            placeholder={product.data["nutritional value"]["kcal"]}
          />
          <Spacer x="3" />
          <DisabledTextField
            label="Fats"
            width="100px"
            placeholder={product.data["nutritional value"]["fats"]}
          />
          <Spacer x="3" />
          <DisabledTextField
            label="Satured Fats"
            width="100px"
            placeholder={product.data["nutritional value"]["saturated_fats"]}
          />
          <Spacer x="3" />
          <DisabledTextField
            label="Carbohydrates"
            width="100px"
            placeholder={product.data["nutritional value"]["carbohydrates"]}
          />
        </Row>
        <Spacer y="0.3" />
        <Row justify="center" xs={12} alignItems="baseline">
          <DisabledTextField
            label="Sugars"
            width="100px"
            placeholder={product.data["nutritional value"]["sugars"]}
          />
          <Spacer x="3" />
          <DisabledTextField
            label="Proteins"
            width="100px"
            placeholder={product.data["nutritional value"]["proteins"]}
          />
          <Spacer x="3" />
          <DisabledTextField
            label="Fibers"
            width="100px"
            placeholder={product.data["nutritional value"]["fiber"]}
          />
          <Spacer x="3" />
          <DisabledTextField
            label="Salt"
            width="100px"
            placeholder={product.data["nutritional value"]["salt"]}
          />
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
