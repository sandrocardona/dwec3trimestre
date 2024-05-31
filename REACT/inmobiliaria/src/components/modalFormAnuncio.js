import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { useState, useEffect } from 'react';

const ModalFormAnuncio = (props) => {
    let idTipo = props.idTipo;

    const [idViviendas, setIdViviendas] = useState(1);
    const [idVenta, setIdVenta] = useState(1);
    const [localidad, setLocalidad] = useState("Estepona");
    const [estado, setEstado] = useState("Segunda mano");
    const [titulo, setTitulo] = useState('');
    const [informacion, setInformacion] = useState('');
    const [metros, setMetros] = useState();
    const [precio, setPrecio] = useState();
    //
    const [habitaciones, setHabitaciones] = useState(0);
    const [baños, setBaños] = useState(0);
    const [piscina, setPiscina] = useState("no");
    const [garaje, setGaraje] = useState("no");
    const [trastero, setTrastero] = useState(0.00);
    //
    const [foto, setFoto] = useState();
    const [telefono, setTelefono] = useState();
    const [nombre, setNombre] = useState();

    //cerrar modal
    const handleClick = () => {
        props.openFormAnuncio(null);
    };

    //subirAnuncio

    const handleSubirAnuncio = () => {
      props.subirAnuncio(
        idTipo,
        idViviendas,
        idVenta,
        localidad,
        estado,
        titulo,
        informacion,
        metros,
        precio,
        habitaciones,
        baños,
        piscina,
        garaje,
        trastero,
        foto,
        nombre,
        telefono
      )
    }

    //hooks

    const handleFotoChange = () =>{

    }

    const handleIdViviendasChange = (event) => {
      setIdViviendas(Number(event.target.value));
    };

    const handleIdVentasChange = (event) => {
      setIdVenta(Number(event.target.value));
    };

    const handleLocalidadChange = (event) => {
      setLocalidad(event.target.value);
    };

    const handleEstadoChange = (event) => {
      setEstado(event.target.value);
    };

    const handleTituloChange = (event) => {
      setTitulo(event.target.value);
    };

    const handleInformacionChange = (event) => {
      setInformacion(event.target.value);
    };

    const handleMetrosChange = (event) => {
      const value = event.target.value;
      const regex = /^\d{0,4}(\.\d{0,2})?$/;

      if (regex.test(value)) {
          setMetros(value);
      }
    };

    const handlePrecioChange = (event) => {
      const value = event.target.value;
      const regex = /^\d{0,8}(\.\d{0,2})?$/;

      if (regex.test(value)) {
          setPrecio(value);
      }
    };

    const handleHabitacionesChange = (event) => {
      const value = Number(event.target.value);
      if (value >= 1 && value <= 9) {
          setHabitaciones(value);
      }
    };

    const handleBañosChange = (event) => {
      const value = Number(event.target.value);
      if (value >= 1 && value <= 9) {
          setBaños(value);
      }
    };

    const handlePiscinaChange = (event) => {
      setPiscina(event.target.value);
    };

    const handleGarajeChange = (event) => {
      setGaraje(event.target.value);
    };

    const handleTrasteroChange = (event) => {
      const value = event.target.value;
      const regex = /^\d{0,3}(\.\d{0,2})?$/;

      if (regex.test(value)) {
          setTrastero(value);
      }
    };

    const handleNombreChange = (event) => {
      setNombre(event.target.value);
    };

    const handleTelefonoChange = (event) => {
      const value = event.target.value;
      const regex = /^\d{0,9}$/;

      if (regex.test(value)) {
          setTelefono(value);
      }
    };

      return (
        <div>
          <Modal isOpen={props.isOpen} fullscreen>
            <ModalHeader ></ModalHeader>
            <ModalBody>
                {idTipo == 1 ? <>
                {/* formulario para vivienda */}
                <form>
                  <h3>Subir vivienda</h3>
                  <p>
                  <label>Tipo vivienda</label><br/>
                    <select value={idViviendas} onChange={handleIdViviendasChange}>
                      <option value={1}>Piso</option>
                      <option value={2}>Casa</option>
                      <option value={3}>Chalet</option>
                      <option value={4}>Ático</option>
                    </select>
                  </p>
                  <p>
                  <label>Tipo venta</label><br/>
                    <select value={idVenta} onChange={handleIdVentasChange}>
                      <option value={1}>Venta</option>
                      <option value={2}>Alquiler</option>
                      <option value={3}>Habitación</option>
                    </select>
                  </p>
                  <p>
                  <label>Localidad</label><br/>
                    <select value={localidad} onChange={handleLocalidadChange}>
                      <option value={"Estepona"}>Estepona</option>
                      <option value={"Marbella"}>Marbella</option>
                      <option value={"Málaga"}>Málaga</option>
                      <option value={"San Pedro"}>San Pedro</option>
                      <option value={"Benahavis"}>Benahavis</option>
                    </select>
                  </p>
                  <p>
                  <label>Estado</label><br/>
                    <select value={estado} onChange={handleEstadoChange}>
                      <option value={"Segunda mano"}>Segunda mano</option>
                      <option value={"Para entrar a vivir"}>Para entrar a vivir</option>
                      <option value={"Obra nueva"}>Obra nueva</option>
                    </select>
                  </p>
                  <p>
                  <label>Título</label><br/>
                    <input
                      type='text'
                      placeholder='Escriba un título breve'
                      onChange={handleTituloChange}
                      value={titulo}
                    />
                  </p>
                  <p>
                  <label>descripción</label><br/>
                    <textarea
                      type='text'
                      placeholder='Escriba una descripción'
                      onChange={handleInformacionChange}
                      value={informacion}
                      cols={30}
                      rows={10}
                    />
                  </p>
                  <p>
                    <label>Metros</label><br/>
                    <input 
                        type="text"
                        value={metros}
                        onChange={handleMetrosChange}
                        pattern="\d{1,4}(\.\d{1,2})?"
                        placeholder="Formato valido: 1234.00"
                    />
                  </p>
                  <p>
                    <label>Precio</label><br/>
                    <input 
                        type="text"
                        value={precio}
                        onChange={handlePrecioChange}
                        pattern="\d{1,8}(\.\d{1,2})?"
                        placeholder="Formato valido: 12345678.00"
                    />
                  </p>
                  <p>
                    <label>Habitaciones</label><br/>
                    <input
                        type="number"
                        value={habitaciones}
                        onChange={handleHabitacionesChange}
                        min="1"
                        max="9"
                    />
                  </p>
                  <p>
                    <label>Baños</label><br/>
                    <input
                        type="number"
                        value={baños}
                        onChange={handleBañosChange}
                        min="1"
                        max="9"
                    />
                  </p>
                  <p>
                  <label>Piscina</label><br/>
                    <select value={piscina} onChange={handlePiscinaChange}>
                      <option value={"no"}>No</option>
                      <option value={"privada"}>Privada</option>
                      <option value={"comunitaria"}>Comunitaria</option>
                    </select>
                  </p>
                  <p>
                  <label>Garaje</label><br/>
                    <select value={garaje} onChange={handleGarajeChange}>
                      <option value={"no"}>No</option>
                      <option value={"si"}>Si</option>
                    </select>
                  </p>
                  <p>
                    <label>Trastero</label><br/>
                    <input 
                        type="text"
                        value={trastero}
                        onChange={handleTrasteroChange}
                        pattern="\d{1,3}(\.\d{1,2})?"
                        placeholder="Formato valido: 123.00"
                    />
                  </p>
                  <p>
                  <label>Nombre</label><br/>
                    <input
                      type='text'
                      placeholder='Escriba su nombre'
                      onChange={handleNombreChange}
                      value={nombre}
                    />
                  </p>
                  <p>
                    <label>Teléfono</label><br/>
                    <input
                        type="text"
                        value={telefono}
                        onChange={handleTelefonoChange}
                        pattern="\d{9}"
                        placeholder="123456789"
                    />
                  </p>
                  <Button onClick={handleSubirAnuncio}
                  >
                    Subir
                  </Button>
                </form>
                </> :
                /* formulario para otros */
                <>
                <form>
                  {idTipo === 2 ? (
                    <h3>Subir garaje</h3>
                    ) : idTipo === 3 ? (
                    <h3>Subir trastero</h3>
                    ) : (
                    <h3>Subir terreno</h3>
                  )}
                  <p>
                  <label>Tipo venta</label><br/>
                    <select value={idVenta} onChange={handleIdVentasChange}>
                      <option value={1}>Venta</option>
                      <option value={2}>Alquiler</option>
                    </select>
                  </p>
                  <p>
                  <label>Localidad</label><br/>
                    <select value={localidad} onChange={handleLocalidadChange}>
                      <option value={"Estepona"}>Estepona</option>
                      <option value={"Marbella"}>Marbella</option>
                      <option value={"Málaga"}>Málaga</option>
                      <option value={"San Pedro"}>San Pedro</option>
                      <option value={"Benahavis"}>Benahavis</option>
                    </select>
                  </p>
                  <p>
                  <label>Estado</label><br/>
                    <select value={estado} onChange={handleEstadoChange}>
                      <option value={"Segunda mano"}>Segunda mano</option>
                      <option value={"Obra nueva"}>Obra nueva</option>
                    </select>
                  </p>
                  <p>
                  <label>Título</label><br/>
                    <input
                      type='text'
                      placeholder='Escriba un título breve'
                      onChange={handleTituloChange}
                      value={titulo}
                    />
                  </p>
                  <p>
                  <label>descripción</label><br/>
                    <textarea
                      type='text'
                      placeholder='Escriba una descripción'
                      onChange={handleInformacionChange}
                      value={informacion}
                      cols={30}
                      rows={10}
                    />
                  </p>
                  <p>
                    <label>Metros</label><br/>
                    <input 
                        type="text"
                        value={metros}
                        onChange={handleMetrosChange}
                        pattern="\d{1,4}(\.\d{1,2})?"
                        placeholder="Formato valido: 1234.00"
                    />
                  </p>
                  <p>
                    <label>Precio</label><br/>
                    <input 
                        type="text"
                        value={precio}
                        onChange={handlePrecioChange}
                        pattern="\d{1,8}(\.\d{1,2})?"
                        placeholder="Formato valido: 12345678.00"
                    />
                  </p>
                  <p>
                  <label>Nombre</label><br/>
                    <input
                      type='text'
                      placeholder='Escriba su nombre'
                      onChange={handleNombreChange}
                      value={nombre}
                    />
                  </p>
                  <p>
                    <label>Teléfono</label><br/>
                    <input
                        type="text"
                        value={telefono}
                        onChange={handleTelefonoChange}
                        pattern="\d{9}"
                        placeholder="123456789"
                    />
                  </p>
                  <Button onClick={handleSubirAnuncio}
                  >
                    Subir
                  </Button>
                </form>
                </>  
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