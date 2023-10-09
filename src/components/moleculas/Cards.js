import React from 'react';
import Imagen from '../atoms/Imagen';
import Titulo from '../atoms/Titulo';
import Button from '../atoms/Boton';
import '../../css/Cards.css';
import { Link } from 'react-router-dom'; 

export default function Cards(props) {
  // Define una función para construir la URL dinámica
  const getImagePageURL = (titulo) => {
    
    return `/${titulo.toLowerCase()}`;
  };

  return (
    <div className='product-card'>
      <div className='product-image'>
        <Imagen className='product-thumb' logosrc={props.imagenSrc} logoWidth={props.imagenWidth} logoHeight={props.imagenHeight} />
      </div>
      <div className='product-info'>
        <Titulo className='product-brand' titulo={props.titulo} />
      </div>
      <div>
        {/* Usar Link para la página dinámica */}
        <Link to={getImagePageURL(props.titulo)}>
          <Button className='card-btn' text="Ver más" onClick={() => console.log("Botón clickeado")} />
        </Link>
        {/* Aquí puedes agregar otro Link para el botón "comprar" si es necesario */}
      </div>
    </div>
  );
}
