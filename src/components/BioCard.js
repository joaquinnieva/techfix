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
          <div className="cont-contact">

            <div className="wsp-contact">
                <a href="https://api.whatsapp.com/send?phone=5493512025494&text=&source=&data=&app_absent=" target="_blank"><img className="img-c" src={images.whatsapp}  alt="wsp"/></a>
                <p className="text-c"> {bio.num} </p>
                 
            </div>
            <div className="mail-contact">
                <a href="mailto:joacoo.nieva@gmail.com"><img className="img-c" src={images.gmail} alt="mail"/></a>
                <p className="text-c"> {bio.mail} </p>
                 
            </div>
          </div>
        </div>
    </div>
  );}

export default BioCard;
