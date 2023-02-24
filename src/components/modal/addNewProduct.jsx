import React from "react";
import { Modal, Text, Row, Spacer } from "@nextui-org/react";
import OrangeButton from "../orange_button";
import TextField from "../textfield";
import SelectNumber from "../selectNumber";
import SelectActive from "../select";
import SelectCategory from "../selectCategory";
export default function AddNewProduct({width,height, show, close}) 
{
  return (
      <Modal style={{ height: height}}
        width={width}
        closeButton
        aria-labelledby="modal-title"
        open={show}
        onClose={close}
      >
        <Text size={24} weight="bold" >Add New Product</Text>
        <Modal.Body>
          <Row justify="center" xs={12} alignItems='baseline'> 
        <TextField label="Name" width="300px"/>
        <Spacer x='6'/>
        <TextField label="Description" width="300px"/>

      </Row>
      <Row justify="center" xs={12} display='flex' alignItems='center' align="top"> 
        <TextField label="Price(€)" width="300px"/>
        <Spacer x='6'/>
        <SelectNumber width="300px" height="40px" label="Quantity"  />
      </Row>
      <Spacer y='0.3'/>
      <Row justify="center" xs={12} alignItems='baseline'> 
        <SelectCategory width="330px" height="40px" category="Category"/>
        <Spacer x='6'/>
        <SelectActive width="330px"height="40px" boolActive="Active"/>
      </Row>

    <Row justify="center" xs={12} alignItems='baseline'>
    <Text size={20} weight="bold" >Nutritional Values</Text>
    </Row>
    <Row justify="center" xs={12} alignItems='baseline'>
    <TextField label="Kcal" width="100px"/>
        <Spacer x='3'/>
        <TextField label="Fats" width="100px"/>
        <Spacer x='3'/>
        <TextField label="Satured Fats" width="100px"/>
        <Spacer x='3'/>
        <TextField label="Carbohydrates" width="100px"/>

    </Row>
    <Spacer y='0.3'/>
    <Row justify="center" xs={12} alignItems='baseline'>
    <TextField label="Sugar" width="100px"/>
        <Spacer x='3'/>
        <TextField label="Protein" width="100px"/>
        <Spacer x='3'/>
        <TextField label="Fiber" width="100px"/>
        <Spacer x='3'/>
        <TextField label="Salt" width="100px"/>
    </Row>
        </Modal.Body>
        <Modal.Footer style={{justifyContent:'center', display:'flex', paddingBottom:'3vw'}} >
          <div style={{justifyContent:'center', display:'flex', alignItems:'center'}}>
          <OrangeButton height='60px' width="120px" text="Submit" textsize='20'/>
          </div>
        </Modal.Footer>
      </Modal>
  );
}
