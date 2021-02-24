import React from 'react';
import images from '../components/images.js';
import './styles/BioCard.css';

const BioCard = (bio) => {

	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1
		}
		
		setStyle(newStyle);
	}, 100);
	
  return (
    <div>
        <div className="conte" style={style}>
            <div className="img-cont"> <img className="img-avatar" src={images.avatar} alt="avatar" /> </div>
            <div className="text-cont"> 
                <p className="texto">
                {bio.text}
                </p>
            </div>
        </div>

        <div className="contact" style={style}>
         <h2 className="contactame">CONTÁCTAME</h2>
         <img className="trama" src={images.trama} />
          <div className="cont-contact">

          <a href="https://api.whatsapp.com/send?phone=5493512025494&text=&source=&data=&app_absent=" target="_blank">
            <div className="wsp-contact">
                <img className="img-c" src={images.whatsapp}  alt="wsp"/>
                <p className="text-c"> {bio.num} </p>
                 
            </div>
          </a>
          <a href="mailto:joacoo.nieva@gmail.com">
            <div className="mail-contact">
                <img className="img-c" src={images.gmail} alt="mail"/>
                <p className="text-c"> {bio.mail} </p>
            </div>
          </a>
          </div>
        </div>
    </div>
  );}

export default BioCard;
