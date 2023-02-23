import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox, Spacer} from "@nextui-org/react";
import YellowButton from "./yellowButton";
import DeleteButton from "./deleteButton";

export default function Popup({height,width}) {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div>
      <YellowButton    
          height="30px"
          width="80px"
          text="Delete"
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
        <Spacer y="1"/>
        <Text size={18} weight="normal">Do you want to delete this account?</Text>
        <Modal.Body>
        </Modal.Body>
        <Modal.Footer style={{justifyContent:'center', display:'flex', paddingLeft:'4vw'}} >
        <Row justify="center" xs={12} alignItems="center">
          <YellowButton height="45px" width="120px" text="Back" textSize="14" onPress={closeHandler}/>
          <Spacer x="1.5"/>
          <DeleteButton height="45px" width="120px" text="Delete" textSize="14"/>
          </Row>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
