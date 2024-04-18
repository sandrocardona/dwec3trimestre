import React, { Component } from 'react';
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import PUNTUAJE from './puntuacion';
import axios from 'axios';
import { CONEXIONPHP } from './ruta';
import { useState } from 'react';
import { Chart } from "react-google-charts";

//Tarjeta para mostrar el resultado final
const TarjetaResultado = (props) => {
    //hook para la gráfica
    const [final,setfinal]=useState();

    let resultado = props.puntuacion;
    let plantilla = props.plantilla;


    let respuesta = plantilla.find(
        f => 
            resultado >= f.rangoInicio && (resultado <= f.rangoFin || f.rangoFin === null)
        );

    console.log("ID de la respuesta: " + respuesta.ID)

    //Conexion Axios
    //funcion para conectar con el archivo de PHP y enviar el resultado del cuestionario
    const conectar = () => {
      //const PHPCONEXION=PHPCONEXION;
      //Funcion que envia los datos
      const data = {
        idRespuesta: respuesta.ID,
      };

      //Realizo la solicitud POST usando Axios
      axios
        .post(CONEXIONPHP, data)
        .then((response) => {
          //manejo la respuesta en el servidor si es necesario,
          console.log("respuesta enviada: " + response.data);
          setfinal(response.data);
        })
        .catch((error) => {
          // manejo los errores si la solicitud falla
          console.error("Error al conectar con el servidor:", error);
        });
    };

      //llamo a la función conexion cuando se monte el componente
      React.useEffect(() => {
        conectar();
        // [] se lo paos como segundo argumento
        //sirve para que se ejecute 1 sola vez al montar el componente
      }, []);

      console.log("Datos php: " + final)

      //Datos para la Gráfica
      const data = [
        ["Element", "Density", { role: "style" }],
        ["Tipo 1", 8.94, "#b87333"], // RGB value
        ["Tipo 2", 10.49, "silver"], // English color name
        ["Tipo 3", 19.3, "gold"],
        ["Tipo 4", 19.3, "gold"],
        ["Tipo 5", 19.3, "gold"],
        ["Tipo 6", 21.45, "color: #e5e4e2"], // CSS-style declaration
      ];

    //Si existe una respuesta la muestro. Si no existe especifico que no hay resultado.
    if(respuesta){
        return(
          <div id="contenedor-resultado">
          <div id='tarjeta-resultado'>
            <Card
              style={{
                width: '18rem'
              }}
            >
              <img
                className='imgfinal'
                alt="tipo de piel"
                src={respuesta.imagen}
              />
              <CardBody>
                <CardTitle tag="h5">
                  {respuesta.tipo_piel}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Rango {respuesta.puntuacion}
                </CardSubtitle>
                <CardText>
                  {respuesta.descripcion}
                </CardText>
              </CardBody>
            </Card>
            </div>
            <div id='grafica-resultado'>
              <Chart chartType="ColumnChart" width="100%" height="600px" data={data} />
            </div>
          </div>
        )
    } else {
        return (<div>No hay resultado</div>);
    }
}

//Grafica

export default TarjetaResultado;