import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Table} from 'reactstrap';
const ModalContactos = (props) => {

    let contactosAux = props.contactos?.contactos || [];

    let contactos = contactosAux.map(x => x);
    
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
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        Mark
      </td>
      <td>
        Otto
      </td>
      <td>
        @mdo
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        Jacob
      </td>
      <td>
        Thornton
      </td>
      <td>
        @fat
      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
        Larry
      </td>
      <td>
        the Bird
      </td>
      <td>
        @twitter
      </td>
    </tr>
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