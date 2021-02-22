import React from 'react';
import BarrasPro from './BarrasPro';
import BarrasImg from './BarrasImg';
import './styles/Barrass.css';

const Barrass = (barras) => (
            <div className="contenedorbarras">
                <div className="barras-barras"> 
                <BarrasImg imagen={barras.imagen} />
                <BarrasPro barra={barras.barra} /> 
                </div> 
            </div>
)

export default Barrass;