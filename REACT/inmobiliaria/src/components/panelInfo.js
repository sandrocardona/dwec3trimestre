
const PanelInfo = (props) => {

    let tipoVentaAux;
    let tipoPropiedadAux;
    let inputValueAux;

    //tipoVenta
    if(props.tipoVenta == 1)
        tipoVentaAux = "Comprar"
    else if(props.tipoVenta == 2)
        tipoVentaAux = "Alquilar"
    else if(props.tipoVenta == 3)
        tipoVentaAux = "Compartir"
    else
        tipoVentaAux = "Cualquiera"

    //tipoPropiedad
    props.tipoPropiedad == 0 ? tipoPropiedadAux = "Otros" :
    props.tipoPropiedad == 1 ? tipoPropiedadAux = "Piso" :
    props.tipoPropiedad == 2 ? tipoPropiedadAux = "Casa" :
    props.tipoPropiedad == 3 ? tipoPropiedadAux = "Chalet" :
    props.tipoPropiedad == 4 ? tipoPropiedadAux = "Ático" :
    tipoPropiedadAux = "Todos";

    //inputValue
    if(props.inputValue && props.inputValue != undefined)
        inputValueAux = props.inputValue
    else
        inputValueAux = "Cualquier ciudad"

    return(
    <div className="panelinfo">
        <p>{tipoVentaAux}</p>
        <p>{tipoPropiedadAux}</p>
        <p>{inputValueAux}</p>
    </div>
    )
}

export default PanelInfo;