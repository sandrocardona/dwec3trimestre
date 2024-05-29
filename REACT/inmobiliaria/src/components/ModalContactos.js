import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Table} from 'reactstrap';
const ModalContactos = (props) => {

    let contactosAux = props.contactos?.contactos || [];

    let contactos = contactosAux.map(x => {
        return(
        <tr>
            <th scope="row">
            {x.id_contacto}
            </th>
            <td>
            {x.id_propiedad}
            </td>
            <td>
            {x.nombre}
            </td>
            <td>
            {x.telefono}
            </td>
        </tr>
      )
    });
    
    console.log(contactos);

    const handleClick = () => {
        props.openContactos();
    };

    return (
    <Modal isOpen={props.isOpen} fullscreen>
        <ModalHeader ></ModalHeader>
        <ModalBody>
        <Table
>
  <thead>
    <tr>
      <th>
        id Contacto
      </th>
      <th>
        id Propiedad
      </th>
      <th>
        Nombre
      </th>
      <th>
        Teléfono
      </th>
    </tr>
  </thead>
  <tbody>
    {contactos}
  </tbody>
</Table>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
          >
            Contactar
          </Button>{' '}
          <Button onClick={handleClick}>
            Cerrar
          </Button>
        </ModalFooter>
    </Modal>
    )
}

export default ModalContactos;