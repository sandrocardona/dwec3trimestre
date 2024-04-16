import React from "react";
import FOTOTIPO from "./fototipos";
import { Button } from 'reactstrap';
import { useState } from "react";



const Questionario = (props) => {
    const [color, setColor] = useState(null);

    const handleColor = (indice) => {
        setColor(indice);
    }

    return(
        <div>
            {FOTOTIPO.map(e => (
                <>
                <p key = {e.orden}>{e.orden}{". "}{e.texto}</p>
                <ul>
                {e.respuestas.map((r, answerIndex) => (
                    <Button 
                            key={answerIndex}
                            puntos={r.puntos}
                            onClick={() => {
                                        props.clickar(r.puntos, e.orden, answerIndex);
                                        handleColor(answerIndex);
                                    }}
                            color={color === answerIndex ? "primary" : "secondary"}
                    >
                    {r.valor}
                    </Button>
                ))}
                </ul>
                </>
            ))}
        </div>
    );
};

export default Questionario;