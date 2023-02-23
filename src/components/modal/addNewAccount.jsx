import React from "react";
import { Modal, Button, Text, Grid, Input, Row, Checkbox, Spacer } from "@nextui-org/react";
import YellowButton from "./../components/yellowButton";
import OrangeButton from "./../components/orangeButton";
import TextField from "./../components/textField";
import ArrowButton from "./../components/arrowButton";
export default function AddNewAccount({width,height}) 
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
          text="Add Account"
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
        <Modal.Body>
        <Spacer y="3"/>
        <Row justify="center" xs={12} alignItems='baseline'> 
        <Text size={24} weight="bold" >Add New Account</Text>
        </Row>
        <Row justify="center" xs={12} alignItems='baseline'> 
        <Text size={18} weight="medium" color="grey"> The new client’s password will be sent to his mailbox.</Text>
        </Row>
          <Row justify="center" xs={12} alignItems='baseline'> 
        <TextField label="Name" width="300px" handleChange={handleChange}/>
        <Spacer x='6'/>
        <TextField label="Surname" width="300px" handleChange={handleChange}/>
      </Row>
      <Spacer y="1"/>
      <Row justify="center" xs={12} display='flex' alignItems='center' align="top"> 
        <TextField label="Email" width="300px" handleChange={handleChange}/>
        <Spacer x='6'/>
        <TextField label="Confirm Email" width="300px" handleChange={handleChange}/>
      </Row>
     
        </Modal.Body>
        <Modal.Footer style={{justifyContent:'center', display:'flex', paddingLeft:'4vw', paddingBottom:'12vw'}} >
          <div style={{justifyContent:'center', display:'flex', alignItems:'center'}}>
          <OrangeButton height='60px' width="140px" text="Submit" textsize='20' onPress={closeHandler}/>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
