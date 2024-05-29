import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ModalContactar(props){

    const handleClick = () => {
        props.contactar();
    }

    let idPropiedad = props.idPropiedad;

    return(
    <div>
        <Modal isOpen={props.isOpen}>
          <ModalHeader ></ModalHeader>
          <ModalBody>
            propiedad: {idPropiedad}
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
            >
              Enviar
            </Button>{' '}
            <Button
                color="secondary"
                onClick={() => handleClick()}
            >
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
    </div>
    )
}

export default ModalContactar;