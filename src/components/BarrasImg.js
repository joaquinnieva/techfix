import React from 'react';
import './styles/BarrasImg.css';

const BarrasImg = ({imagen}) => (
  <div className="imgSkill" >
    <img className="img-" src={imagen} alt="skill" />
  </div>
);

export default BarrasImg