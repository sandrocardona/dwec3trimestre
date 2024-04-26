import React, { Component, useState } from "react";
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const VentanaModal = (props) => {
  const {
    className
  } = props;

  return (
    <div>
      <Modal isOpen={props.mostrar} toggle={props.toggle} className={className} onEnter={() => {}}>
        <ModalHeader toggle={props.toggle}>{props.titulo}</ModalHeader>
        <ModalBody>

          <FormGroup row>
            <Label sm={2} > Nombre: </Label>
            <Col sm={10}>
              <Input 
                id="nombre"
                name="nombre"
                type="Text" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2} > Teléfono: </Label>
            <Col sm={10}>
              <Input 
                id="telefono"
                name="telefono"
                type="Text" />
            </Col>
          </FormGroup>

        </ModalBody>
        <ModalFooter>
            <p id="p-error">{props.error}</p>
            {/* Boton Añadir */}
          <Button color="primary" onClick={() => {
            const nombre = document.getElementById('nombre').value;
            const telefono = document.getElementById('telefono').value;

            props.annadir(nombre, telefono);
            }}>
                {props.aceptar}
            </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </ModalFooter>
      </Modal>
    </div>

  );
}

export default VentanaModal;