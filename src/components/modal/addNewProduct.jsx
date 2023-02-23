import React from "react";
import { Modal, Button, Text, Grid, Input, Row, Checkbox, Spacer } from "@nextui-org/react";
import YellowButton from "./../components/yellowButton";
import OrangeButton from "./../components/orangeButton";
import TextField from "./../components/textField";
import SelectNumber from "./../components/selectNumber";
import SelectActive from "./../components/select";
import SelectCategory from "./../components/selectCategory";
export default function AddNewProduct({width,height}) 
{
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const handleChange = (event) => {
    console.log(event.target.value);}

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");}

  return (
    <div>
      <YellowButton    
          height="30px"
          width="80px"
          text="Add"
          textSize={12}
         auto shadow 
         onPress={handler}>
      </YellowButton>

    
      <Modal style={{ height:`${height}px`}}
      width={width}
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Text size={24} weight="bold" >Add New Product</Text>
        <Modal.Body>
          <Row justify="center" xs={12} alignItems='baseline'> 
        <TextField label="Name" width="300px" handleChange={handleChange}/>
        <Spacer x='6'/>
        <TextField label="Description" width="300px" handleChange={handleChange}/>

      </Row>
      <Row justify="center" xs={12} display='flex' alignItems='center' align="top"> 
        <TextField label="Price(€)" width="300px" handleChange={handleChange}/>
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
    <TextField label="Kcal" width="100px" handleChange={handleChange}/>
        <Spacer x='3'/>
        <TextField label="Fats" width="100px" handleChange={handleChange}/>
        <Spacer x='3'/>
        <TextField label="Satured Fats" width="100px" handleChange={handleChange}/>
        <Spacer x='3'/>
        <TextField label="Carbohydrates" width="100px" handleChange={handleChange}/>

    </Row>
    <Spacer y='0.3'/>
    <Row justify="center" xs={12} alignItems='baseline'>
    <TextField label="Sugar" width="100px" handleChange={handleChange}/>
        <Spacer x='3'/>
        <TextField label="Protein" width="100px" handleChange={handleChange}/>
        <Spacer x='3'/>
        <TextField label="Fiber" width="100px" handleChange={handleChange}/>
        <Spacer x='3'/>
        <TextField label="Salt" width="100px" handleChange={handleChange}/>

    </Row>

        </Modal.Body>
        <Modal.Footer style={{justifyContent:'center', display:'flex', paddingLeft:'4vw', paddingBottom:'3vw'}} >
          <div style={{justifyContent:'center', display:'flex', alignItems:'center'}}>
          <OrangeButton height='60px' width="120px" text="Submit" textsize='20' onPress={closeHandler}/>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
