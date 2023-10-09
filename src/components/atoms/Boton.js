import React from 'react';
import '../../css/Cards.css'
export default function Boton(props) {
  return (
    <button className='card-btn' onClick={props.onClick}>
      {props.text}
    </button>
  );
}
