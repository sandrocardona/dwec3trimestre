import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalFormAnuncio = (props) => {
    let idTipo = props.idTipo;
    const handleClick = () => {
        props.openFormAnuncio(null);
    };

      return (
        <div>
          <Modal isOpen={props.isOpen}>
            <ModalHeader ></ModalHeader>
            <ModalBody>
                {idTipo == 1 ? <><p>es vivienda</p></> : 
                  <><p>otros</p></>  
                }
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

export default ModalFormAnuncio;