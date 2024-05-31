import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalSubirAnuncio = (props) => {

    const handleClick = () => {
        props.openSubirAnuncio();
    };

    const handleUpload = (idTipo) => {
        props.openFormAnuncio(idTipo);
        props.openSubirAnuncio();
    }
      
      let v = 1;
      let g = 2;
      let T = 3;
      let t = 4;
      return (
        <div>
          <Modal isOpen={props.isOpen}>
            <ModalHeader >Selecciona el tipo de propiedad</ModalHeader>
            <ModalBody id='modalBotones'>
                <Button color='primary'  onClick={() => handleUpload(v)} >Vivienda</Button>
                <Button color='danger'  onClick={() => handleUpload(g)} >Garaje</Button>
                <Button color='success'  onClick={() => handleUpload(T)} >Trastero</Button>
                <Button color='info'  onClick={() => handleUpload(t)} >Terreno</Button>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={handleClick}>
                Cerrar
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      );
}

export default ModalSubirAnuncio;