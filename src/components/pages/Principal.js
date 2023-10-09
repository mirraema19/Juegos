import React from 'react';
import NavBar from '../moleculas/NavBar';
import Card from '../moleculas/Cards';
import '../../css/App.css';
import '../../css/Cards.css';
import Logo from '../../img/logo.png';
import Clash from '../../img/clash.webp';
import Halo from '../../img/Halo.jpeg';
import Surfers from '../../img/surfers.jpg';
import Minecraft from '../../img/minecraft.webp';
import Andreas from '../../img/san_andreas.jpeg';
import Fifa from '../../img/fifa.jpg';
import Mortal from '../../img/mortal.jpeg';
import Resident from '../../img/resident.jpeg';

const Datos = {
  NavBar:[
    {
      logosrc: Logo,
      logoWidth: "170",
      logoHeight: "110",
      titulo:"Tienda-Online",
      
    },
    {
      logosrc: "../../img/war.jpg",
      logoWidth: "110",
      logoHeight: "70",
      
      
    },
  ], 
    
    
   
    Cards: [
    {
      imagenSrc:Clash ,
      imagenWidth: "250",
      imagenHeight: "350",
      
     
      titulo: "Clash Royale",
    },
    {
      imagenSrc: Halo,
      imagenWidth: "250",
      imagenHeight: "350",
     
        
      titulo: "HALO(The master chief)",
    },
    {
      imagenSrc: Surfers,
      imagenWidth: "250",
      imagenHeight: "350",
     
      titulo: "Subway Surf",
    },
    {
      imagenSrc: Minecraft,
      imagenWidth: "250",
      imagenHeight: "350",
     
      titulo: "Minecraft",
    },
    {
      imagenSrc: Andreas,
      imagenWidth: "250",
      imagenHeight: "350",
     
      titulo: "San Andreas",
    },
    {
      imagenSrc: Fifa ,
      imagenWidth: "250",
      imagenHeight: "350",
     
      titulo: "FIFA22",
    },
    {
      imagenSrc: Mortal,
      imagenWidth: "250",
      imagenHeight: "350",
     
      titulo: "Mortal Kombat II",
    },
    {
      imagenSrc: Resident,
      imagenWidth: "250",
      imagenHeight: "350",
     
      titulo: "Resident Evil 3",
    },
  ],
};


function Principal() {
  return (
    <main>
      <header>
        <NavBar datos={Datos.NavBar} />
      </header>
      <section className="product-card-container">
        {Datos.Cards.map((card, index) => (
          <Card key={index} {...card} url={`/informacion/${index}`} />
        ))}
      </section>
    </main>
  );
}

export default Principal;