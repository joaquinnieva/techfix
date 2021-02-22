import React from 'react';
import './styles/BarrasPro.css';

const BarrasPro = ({barra}) => {

	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${barra}%`
		}
		
		setStyle(newStyle);
	}, 100);
	
  return (
    <div className="barraSkill">
      <div className="barra-" style={style}> </div>
    </div>
  );}

export default BarrasPro