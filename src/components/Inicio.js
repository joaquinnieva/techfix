import React from 'react';
import './styles/Inicio.css';
import images from '../components/images.js';
import { Link } from 'react-scroll';

const Inicio = () => {

	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1
		}
		
		setStyle(newStyle);
	}, 100);
	
  return (
      <div className="inicio" style={style}>

            <div className="present">Joaquín Nieva</div>

            <div className="land">   
                <div className="land-text">

                    <div className="land-title"> 
                        Hola, si, me llamo Joaquín Nieva y
                        soy desarrollador web, me dedico a 
                        diseñar y crear aplicaciones web.
                    </div>

                    <Link className="land-button" to="habilidades" smooth={true} > 
                        ¡Conóceme!
                    </Link>

                </div>

                <div className="land-img">
                    <div className="vapor-cont">
                        <img className="vapor1" src={images.vapor} />
                        <img className="vapor2" src={images.vapor} />
                    </div>

                    <img className="cursor" src={images.cursor} alt="cursor" />

                    <img className="landing" src={images.land} alt="landing"/>
                    
                </div>

            </div>

            <div className="scroll">
                <img className="scroll-cont" src={images.scroll} alt="scroll"/>
                <img className="scroll-flecha1" src={images.flecha} alt="scroll"/>
                <img className="scroll-flecha2" src={images.flecha} alt="scroll"/>
            </div>

        </div>
  );}

export default Inicio;