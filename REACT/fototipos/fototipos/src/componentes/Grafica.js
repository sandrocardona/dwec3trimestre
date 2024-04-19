import React, { useState } from 'react';
import { Chart } from "react-google-charts";

export const Grafica = (props) => {

    let estadisticas = props.result || "";

    let resultadoFinal = estadisticas.split("||").map(valor => parseInt(valor, 10));

    //Datos para la Gráfica
    const data = [
        ["Tipo", "Valor", { role: "style" }],
        ["Tipo 1", resultadoFinal[0], "#fdddca"],
        ["Tipo 2",resultadoFinal[1] , "#ceb4a5"],
        ["Tipo 3",resultadoFinal[2] , "#a18d82"],
        ["Tipo 4",resultadoFinal[3] , "#766860"],
        ["Tipo 5",resultadoFinal[4] , "#4e4540"],
        ["Tipo 6",resultadoFinal[5] , "#292523"],
    ];

    return (
        <Chart chartType="ColumnChart" width="100%" height="600px" data={data} />
    )
}