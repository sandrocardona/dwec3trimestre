import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ModalPropiedad(props) {

  const handleClick = () => {
    props.openVer();
  };

  const handleContactar = (idPropiedad) =>{
    props.openVer();
    props.contactar(idPropiedad);
  }

  let propAux = props.data && props.data.propiedades ? props.data.propiedades : [];
  const propiedad = propAux.find(x => x.id_propiedad === props.idPropiedad);
  let idPropiedad = props.idPropiedad;

  return (

    <div>
      <Modal isOpen={props.isOpen}>
        <ModalHeader >{propiedad ? propiedad.titulo : 'Propiedad no encontrada'}</ModalHeader>
        <ModalBody>
        {propiedad ? propiedad.informacion : 'No se encontró la información de la propiedad.'}
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => handleContactar(idPropiedad)}
          >
            Contactar
          </Button>{' '}
          <Button color="secondary" onClick={handleClick}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalPropiedad;