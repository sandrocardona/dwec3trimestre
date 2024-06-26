import React, { useState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Alert, Row, Col, UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label
} from 'reactstrap';
import { FARMACOS } from './componentes/datos';

const VentanaModalDiccionario = (props) => {
  const {
    className
  } = props;

  const [filtro, setFiltro] = useState('');
  const [seleccion, setSeleccion] = useState(undefined);

  const handleChange = (event) => {
    //cogemos el input
    const target = event.target;
    //si el input es el filtro
    if (target.name == "filtro") {
      //asignamos el valor en mayusculas al hook filtro
      setFiltro(target.value.toUpperCase())
    }
    //si el input es el option con los fármacos
    if (target.name == "selectMulti") {
      //asignamos el farmaco seleccionado al hook seleccion
      setSeleccion(target.value);
    }
  }

  //Traemos data del archivo datos.js
  const getData = () => {
    //Si la estado diccionario es FARMACOS
    if (props.diccionario == "FARMACOS") {
      //si el usuario escribe en el filtro
      if (filtro != "") {
        //realizamos un filter a farmacos y despues buscamos el valor guardado en el hook filtro. Entonces le hacemos un map para devolver un option con cada valor que coincida con lo introducido por el usuario
        return (FARMACOS.filter(f => f.descATC.search(filtro) >= 0).map(e => <option>{e.codATC}|{e.descATC}</option>))
      }
      //si el usuario no introduce nada, devolvemos un option por cada fármaco
      return (FARMACOS.map(e =>
        <option>{e.codATC}|{e.descATC}</option>))
    }
  }

  return (
    <div>
      <Modal isOpen={props.mostrar} toggle={props.toggle} className={className} onEntering={() => { setFiltro(""); getData(); setSeleccion(undefined) }}>
        <ModalHeader
          toggle={props.toggle}>{props.titulo}</ModalHeader>
        <ModalBody>
          <FormGroup row>
            <Label sm={2} > Filtrar: </Label>
            <Col sm={10}>
              <Input onChange={handleChange}
                id="filtro"
                name="filtro"
                type="Text" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={12}>
              <Input onChange={handleChange}
                onClick={handleChange}
                id="selectMulti"
                name="selectMulti"
                type="select"
              >
                {getData()}
              </Input>
            </Col>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          {seleccion != undefined ? seleccion + " " :
            ""}<Button color="primary" onClick={() => {
              props.add(seleccion); setFiltro(""); setSeleccion("")
            }}>{props.aceptar}</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </ModalFooter>
      </Modal>
    </div>
  );
}

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      diccionario: "FARMACOS",
      donde: "",
      rxseleccionar: "",
      rxenmascarar: "",
    }
  }

  handleChange = (event) => {
    //capturamos quien ha activado handleChange
    const target = event.target;
    //si es rxseleccionar
    if (target.name == "rxseleccionar") {
      //llama a setRxseleccionar con el valor del target
      this.setRxseleccionar(target.value)
    }
    //si es rxenmascarar
    if (target.name == "rxenmascarar") {
      //llama a setRxenmascarar con el valor del target
      this.setRxenmascarar(target.value)
    }
  }

  setRxseleccionar(d) {
    if (d == undefined) return;
    //asigna el valor d al estado rxseleccionar
    this.setState({ rxseleccionar: d })
  }

  setRxenmascarar(d) {
    if (d == undefined) return;
    //asigna el valor d al estado rxenmascarar
    this.setState({ rxenmascarar: d })
  }

  setDonde(d) {
    if (d == undefined) return;
    //asigna al estado donde se ha clicado rxseleccionar o rxenmascarar
    this.setState({ donde: d })
  }

  add(datos) {
    //en caso que donde sea rxseleccionar y haya datos distintos de undefined
    if (this.state.donde == "RXSELECCIONAR" && datos != undefined && datos.length > 0) {
      let d = datos.split("|")
      //si aun no hay datos, añadir d[0]
      this.state.rxseleccionar.length == 0 ?
        this.setRxseleccionar(d[0]) :
        //si ya hay datos concatenar d[0]
        this.setRxseleccionar(this.state.rxseleccionar + "," + d[0])
    }
    //en caso que donde sea rxenmascarar y haya datos distintos de undefined
    if (this.state.donde == "RXENMASCARAR" && datos != undefined && datos.length > 0) {
      let d = datos.split("|")
      this.state.rxenmascarar.length == 0 ?
        //si aun no hay datos, añadir d[0]
        this.setRxenmascarar(d[0]) :
        //si ya hay datos concatenar d[0]
        this.setRxenmascarar(this.state.rxenmascarar + "," + d[0])
    }

    this.toggleModal();
  }

  setIsOpen(d) {
    //booleano. Asigna el opuesto para abrir o cerrar el Modal
    if (d == undefined) return;
    this.setState({ isOpen: d })
  }

  toggleModal() { this.setIsOpen(!this.state.isOpen); }
  
  render() {
    return (
      <>
        <div>
          <UncontrolledAccordion
            defaultOpen={[
              '1'
            ]}
            stayOpen
          >
            <AccordionItem>
              <AccordionHeader targetId="1">
                GESTION DE FARMACOS
              </AccordionHeader>
              <AccordionBody accordionId="1">
                <Row>
                  <Col>
                    <Alert color="info">
                      Incluir X Medicamentos:
                      <Input type="textarea"
                        name="rxseleccionar" onChange={this.handleChange.bind(this)} value={this.state.rxseleccionar} />
                      <Button onClick={() => {
                        this.setDonde("RXSELECCIONAR"); this.toggleModal()
                      }} color="info">Add</Button>
                      {" "}<Button color="info"
                        onClick={() => this.setRxseleccionar("")}>Clear</Button> </Alert>
                  </Col>
                  <Col>
                    <Alert color="danger">
                      Excluir X Medicamentos:
                      <Input type="textarea"
                        name="rxenmascarar" onChange={this.handleChange.bind(this)} value={this.state.rxenmascarar} />
                      <Button onClick={() => {
                        this.setDonde("RXENMASCARAR"); this.toggleModal()
                      }}
                        color="danger">Add</Button>
                      {" "}<Button color="danger"
                        onClick={() => this.setRxenmascarar("")}>Clear</Button> </Alert>
                  </Col>
                </Row>
              </AccordionBody>
            </AccordionItem>
          </UncontrolledAccordion>
        </div>
        <VentanaModalDiccionario
          diccionario={this.state.diccionario} add={(datos) => this.add(datos)} mostrar={this.state.isOpen} aceptar={"Añadir"} toggle={() => this.toggleModal()} titulo={"Add " + this.state.diccionario} /> <br />
      </>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Filter />
      </div>
    );
  }
}
export default App;