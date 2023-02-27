import React, { useState } from "react";
import { Modal, Text, Row, Spacer } from "@nextui-org/react";
import OrangeButton from "../orange_button";
import TextField from "../textfield";
import SelectNumber from "../selectNumber";
import Select from "../selectDropdown";
import { addProduct } from "../../data/api";

export default function AddNewProduct({ width, height, show, close }) {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [category, setCategory] = useState(new Set(["1"]));
  const [ingredients, setIngredients] = useState(new Set(["1"]));
  const [tags, setTags] = useState(new Set(["1"]));
  const [kcal, setKcal] = useState();
  const [fats, setFats] = useState();
  const [saturatedFats, setSaturatedFats] = useState();
  const [carbo, setCarbo] = useState();
  const [sugar, setSugar] = useState();
  const [protein, setProtein] = useState();
  const [fiber, setFiber] = useState();
  const [salt, setSalt] = useState();

  const handleText = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <Modal
      style={{ height: height }}
      width={width}
      closeButton
      aria-labelledby="modal-title"
      open={show}
      onClose={close}
    >
      <Text size={24} weight="bold">
        Add New Product
      </Text>
      <Modal.Body>
        <Row justify="center" xs={12}>
          <TextField
            label="Name"
            width="300px"
            handleChange={(e) => setName(e.target.value)}
          />
          <Spacer x="6" />
          <TextField
            label="Description"
            width="300px"
            handleChange={(e) => setDescription(e.target.value)}
          />
        </Row>
        <Row justify="center" xs={12} display="flex" align="top">
          <TextField
            label="Price(€)"
            width="300px"
            handleChange={(e) => setPrice(e.target.value)}
          />
          <Spacer x="6" />
          <SelectNumber
            width="300px"
            height="40px"
            label="Quantity"
            onChange={handleText}
          />
        </Row>
        <Spacer y="0.3" />
        <Row justify="center" xs={12}>
          <h5>Category</h5>
          <Select
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
            setSelected={setCategory}
            selected={category}
            selectionMode="single"
          />
          <Spacer x="3" />
          <h5>Ingredients</h5>
          <Select
            width="330px"
            height="40px"
            elements={[
              {
                key: "3",
                name: "Pane",
              },
              {
                key: "6",
                name: "Prosciutto Cotto",
              },
              {
                key: "1",
                name: "Salame",
              },
              {
                key: "4",
                name: "Bresaola",
              },
              {
                key: "8",
                name: "Pomodoro",
              },
            ]}
            setSelected={setIngredients}
            selected={ingredients}
            selectionMode="multiple"
          />
          <Spacer x="3" />
          <h5>Tags</h5>
          <Select
            width="330px"
            height="40px"
            elements={[
              {
                key: "1",
                name: "Vegano",
              },
              {
                key: "2",
                name: "Gluten Free",
              },
              {
                key: "3",
                name: "Senza Lattosio",
              },
            ]}
            setSelected={setTags}
            selected={tags}
            selectionMode="multiple"
          />
        </Row>

        <Row justify="center" xs={12}>
          <Text size={20} weight="bold">
            Nutritional Values
          </Text>
        </Row>
        <Row justify="center" xs={12}>
          <TextField
            label="Kcal"
            width="100px"
            handleChange={(e) => setKcal(e.target.value)}
          />
          <Spacer x="3" />
          <TextField
            label="Fats"
            width="100px"
            handleChange={(e) => setFats(e.target.value)}
          />
          <Spacer x="3" />
          <TextField
            label="Satured Fats"
            width="100px"
            handleChange={(e) => setSaturatedFats(e.target.value)}
          />
          <Spacer x="3" />
          <TextField
            label="Carbohydrates"
            width="100px"
            handleChange={(e) => setCarbo(e.target.value)}
          />
        </Row>
        <Spacer y="0.3" />
        <Row justify="center" xs={12}>
          <TextField
            label="Sugar"
            width="100px"
            handleChange={(e) => setSugar(e.target.value)}
          />
          <Spacer x="3" />
          <TextField
            label="Protein"
            width="100px"
            handleChange={(e) => setProtein(e.target.value)}
          />
          <Spacer x="3" />
          <TextField
            label="Fiber"
            width="100px"
            handleChange={(e) => setFiber(e.target.value)}
          />
          <Spacer x="3" />
          <TextField
            label="Salt"
            width="100px"
            handleChange={(e) => setSalt(e.target.value)}
          />
        </Row>
      </Modal.Body>
      <Modal.Footer
        style={{
          justifyContent: "center",
          display: "flex",
          paddingBottom: "3vw",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <OrangeButton
            height="60px"
            width="120px"
            text="Submit"
            textsize="20"
            onPress={() => {
              let nutritial_values = [
                kcal,
                fats,
                saturatedFats,
                carbo,
                sugar,
                protein,
                fiber,
                salt,
              ];
              addProduct(
                name,
                price,
                description,
                quantity,
                category["currentKey"],
                ingredients,
                tags,
                nutritial_values
              );
            }}
          />
        </div>
      </Modal.Footer>
    </Modal>
  );
}
