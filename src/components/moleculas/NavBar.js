import React from 'react';
import Logo from '../atoms/Imagen';
import Titulo from '../atoms/Titulo';

export default function NavBar(props) {
  console.log(props);

  return (
    <div className='nav'>
      {props.datos.map((item, index) => (
        <div key={index} className='logo-text-container'>
          <Logo logosrc={item.logosrc} logoWidth={item.logoWidth} logoHeight={item.logoHeight} />
          <Titulo titulo={item.titulo} />
        </div>
      ))}
    </div>
  );
}
