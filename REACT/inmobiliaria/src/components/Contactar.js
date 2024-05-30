import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ModalContactar(props){
  let idPropiedad = props.idPropiedad;

    //cerrar modal
    const handleClick = () => {
        props.contactar();
    }

    //enviar datos de usuario
    const handleEnviar = () => {
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
      props.enviarContacto(nombre, telefono, idPropiedad);
      props.contactar();
    }

    return(
    <div>
        <Modal isOpen={props.isOpen}>
          <ModalHeader ></ModalHeader>
          <ModalBody>
            propiedad: {idPropiedad}
            <h3 id='h3contacto'>Introduce tus datos</h3>
            <form id="dataForm">
              <input type="text" id="nombre" name="nombre" placeholder="Nombre" required /><br/>
              <input type="text" id="telefono" name="telefono" placeholder="Telefono" required /><br/>
              <Button
              color="primary"
              onClick={() => handleEnviar()}
            >
              Enviar
            </Button>
           </form>
          </ModalBody>
          <ModalFooter>

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