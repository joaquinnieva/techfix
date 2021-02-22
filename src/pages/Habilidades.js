import Habilidad from '../components/Habilidad';
import Barrass from '../components/Barrass';
import images from '../components/images.js';

const Habilidades = () => (

    <div>
      <Habilidad 
      img={images.coder}
      title="Desarrollador"
      text="Las tecnologías que se mencionan están estudiadas enteramente, 
            el progreso de la barra comprende la facilidad y 
            rapidez con la que me desenvuelvo."
        />

      <Barrass 
      imagen={images.html}
      barra="87"
        />

      <Barrass 
      imagen={images.css}
      barra="95"
        />

      <Barrass
      imagen={images.js}
      barra="75"
        />

      <Barrass
      imagen={images.bootstrap}
      barra="50"
        />

      <Barrass
      imagen={images.react}
      barra="70"
        />

      <Habilidad 
      img={images.designer}
      title="Diseñador"
      text="En el diseño me desenvuelvo en estos programas.
            En estos casos el progreso de las barras 
            comprenden mi conocimiento y mi manejo con los mismos."
        />

      <Barrass
      imagen={images.photoshop}
      barra="65"
        />

      <Barrass
      imagen={images.illustrator}
      barra="55"
        />

      <Barrass
      imagen={images.figma}
      barra="80"
        />
    </div>
  )


export default Habilidades;
