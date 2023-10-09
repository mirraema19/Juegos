
import React from 'react';
import Imagen from '../atoms/Imagen';
import Titulo from '../atoms/Titulo';
import Button from '../atoms/Boton';
import Parrafo from '../atoms/Parrafo';
import '../../css/minecraft.css';

export default function InfoMinecraft(props) {
    return (
      <div className="card">
        <Imagen className='' logosrc={props.imagenSrc} logoWidth={props.logoWidth} logoHeight={props.logoHeight} />
        <div className="title">
          {props.contenido.map((item, index) => (
            <div key={index}>
              <Titulo className='' titulo={item.titulo} />
              <Parrafo className='' parrafo={item.parrafo} />
            </div>
          ))}
          <Button className='' text="Comprar" onClick={() => console.log("Botón clickeado")} />
        </div>
      </div>
    );
  }