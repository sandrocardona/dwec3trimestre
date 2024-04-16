import React from "react";
import FOTOTIPO from "./fototipos";
import { Button } from 'reactstrap';
import { useState } from "react";



const Questionario = (props) => {
    const [color, setColor] = useState({});

    const handleColor = (orden, indice) => {
        setColor(prevState => ({
            ...prevState,
            [orden]: indice
        }));
    }

    return(
        <div>
            {FOTOTIPO.map(e => (
                <div key = {e.orden}>
                    {/* Pregunta */}
                    <p>{e.orden}{". "}{e.texto}</p>
                    <ul>
                        {/* Botones */}
                        {e.respuestas.map((r, answerIndex) => (
                            <Button 
                                    key={`${answerIndex}-${e.orden}`}
                                    puntos={r.puntos}
                                    onClick={() => {
                                                props.clickar(r.puntos, e.orden, answerIndex);
                                                handleColor(e.orden, answerIndex);
                                            }}
                                    color={color[e.orden] === answerIndex ? "primary" : "secondary"}
                            >
                            {r.valor}
                            </Button>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Questionario;