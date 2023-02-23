import React from "react";
import { Modal, Text } from "@nextui-org/react";
import OrangeButton from "./../components/orangeButton";

const App = ({width, height, show, close}) => {
  return (
    <div>
      <Modal
        closeButton
        open={show}
        onClose={close}
        width={width}
        style={{
            height: height
        }}
      >
       <Modal.Header style={{
        marginTop: "10vh"
       }}>
          <Text 
            style={{
              font: "menu",
              fontSize: "34px",
              fontWeight: "bold"
          }}>Privacy Policy</Text>
       </Modal.Header>
       <Modal.Body style={{
        marginLeft: "8vw",
        marginRight: "8vw",
        justifyContent: "center",
        textAlign: "center"
       }}>
          <Text 
            size={20}
            style={{
              font: "menu",
              fontSize: "18px",
              fontWeight: "200",
              paddingLeft: "0.5vw"}}>
                Raccogliamo dati per offrire servizi migliori a tutti i nostri utenti, 
                ad esempio per capire elementi fondamentali come la lingua che parli 
                oppure elementi più complessi come quali annunci potrebbero esserti più utili, 
                le persone che potrebbero interessarti di più online o quali video di YouTube 
                potrebbero piacerti. Le informazioni raccolte da Google e il modo in cui esse 
                vengono utilizzate dipendono da come utilizzi i nostri servizi e da come gestisci 
                i controlli per la privacy. Quando non esegui l'accesso a un account Google, 
                archiviamo le informazioni che raccogliamo tramite identificatori univoci legati 
                al browser, all'applicazione o al dispositivo che stai utilizzando. Ciò ci consente, 
                tra le altre cose, di mantenere le stesse preferenze tra una sessione di navigazione 
                e l'altra, ad esempio la tua lingua preferita o se visualizzare o meno annunci o 
                risultati di ricerca più pertinenti in base alle tue attività.
          </Text>
       </Modal.Body>
       <Modal.Footer style={{
        justifyContent: "center",
        marginBottom: "8vh"
       }}>
          <OrangeButton text="Confirm" width="200px" height="64px" textSize={18} />
       </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;