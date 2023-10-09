import React from 'react';
import NavBar from '../moleculas/NavBar';
import Informacion from '../organismos/InfoMinecraft';

import '../../css/App.css';
import '../../css/Cards.css';

const Datos = {
  NavBar:[
    {
      logosrc: "https://i.ytimg.com/vi/7FPwrPAeE38/maxresdefault.jpg",
      logoWidth: "170",
      logoHeight: "110",
      titulo:"Tienda-Online",
      
    },
    {
      logosrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAADCwsIzMzP4+PjHx8fQ0NCvr685OTlWVlb8/PwKCgq5ubnv7+/g4ODr6+uXl5eEhIRhYWEiIiKfn59paWk/Pz9MTEzk5OSNjY3Ozs5ZWVlycnKtra3t7e0ZGRl7e3spKSk8PDykpKRNTU0TExOIiIgeHh5nZ2fY2NgtLS2RkZGh0Y8lAAALk0lEQVR4nO1dfV/qPAy9wHibm6IocAF1oKDo9/9+jzp87s6WNOnW0cFv508ta87WNmmSpn/+tGjRokWLFi1atDgbhCx8S+YEN5PVdsRhfpdEC98SVsSwI2LV9y1kFTzKBL8wO9/vuFAR/MKjb0nL4q+WYWfvW9SS+FAz7Pz1LWs56Al2OpFvYUvhyobijW9py+DOhmHiW9oy6Now7Jylzni1YXiWi008s2B45VvaUgg/LShe+5a2JAYRi3tkeLaWjQHXwHDsW5w68JBluAt8i1MDcPMx8C1ODcBh+ulbnDrQyzJ89S1NHUjgIz75FqcGoGHX9S1ODYiB4a1vceoATMSeb2nqwAQ+4lluEgUsL95wC4Hhu29x6sA7UPQtTR3ADcbBtzg1AN3G977FqQHB5Rtu6yzDXexbnBoQwTBd+hanBuBEvHzDbe5bmjqwh494iTuoPjA8zxCNAGCY+JamDsyzDM/T9S0ADbdzdX2bcACGL77FqQHhc5bh+Gnxi5sjYkCQ4qzSjsBwy2KX4jnFNMUmRS/FMftolsUc8DpOsUpxd8TDEesUyRG3KfZ/U3xOUtyneIm6pWaRIrGoQbja2ztb1Ik3TcHeOsQy8i2yLXq2YzWRn9k0WFK0y2loBuwM6Fh+YONgGdA9u4nYsd0jTOQHNg4jK4YD3+KWgZ3r07e0ZTCxYvguP7BxsFtrXnyLWwLPVgzRcNsvrr9xAAyOWMLCe7vsE0hTkrpgSYwej+bz0Zg+2tb7H0sbjf/39a9d/munp0b7CjL17DbroYXHDbJwjAnUYNKvTC1hqduxezLwKVm6I+AlXhld37fZpsY4ADA0ThuYJR9sM0hd3xgJFYCub+MhDJBmZ2qpZwjjmX9rkGz5YCRUgIXrG92PppZ6hrCWJ1wrjOfa+ltg/TBORMykMuUW6xmCv48NtmNM3jZLDV3fpm30DbQ0DWg1wxhcRazFiV5B220wjr2hoSWGHE0GsJrhE3TOmmOgLOxDLNBJYmo5zrY05fupGaJDk/040Mo+TAZTwbhEgkI05W+oGeJKzrXC92AfYdG7viF73DRY1Axh98amZqFP0P74hN71DW/8w+AUVjMEI4LVczB2RvbO6PBKKw/uJg3vUs0QlhB2VwQKzVLf/wCtX0NDVIiG8axmuMs25NQhGiWm1V4lj0nP4dc2NFQzVPWMHsEyyU34jkxaYJNtaMgy0jLEnjk/IUzWcglqYNfODA1BISZ8Oy1D/DqcOqyo77+Brm/DCgJv06AQtQzhVESPWSQDkK5cfhoaboasb5Boyy/bWoagYO+YRmh2lztkj67vhG+oG1V6hneaftEiKRma3WafYVCpqC54h4CWIZzJ5tThCoRTMsoDX5NhIkI7fp+mZQiP4+xNaFT2PCgaK4asb2U7JUPccDIWRFWzm5LcYBeBXuF9z0qGKisQ7ZHSpwrw+DffDvTKmm2mZAgL14ZZuKqa3Ueg65ufYLDb2bLNlAxh+nOqfKp7qRK0Wd84ZHTNeIZg8jPqECUrfzAkhHWbN9xw5rBDRskQjEDGOVHd7D4CDTdW08W6/pQMQQ0zuyIQbFrhQC86TLphQOMJ9k8R0ywE627MtVo8y32G4EWqcigbh/tbjwMwnHKtYHXYca2wyswH3QjaVDoWYlOGwRsq1bbSFybyiEoZkX35+d7BR980COUOvKNiWau53INvVDxPcAY5CxUPZ13LPXiGZXS7CN8ERJQ3u49gs76bgsqnCRqf9V35RMiN3IdXTKufAm244WbMPNIB4wNDKqur348UjZaQ/TCjH4SOXjKJDPuyS0kkoXN9QyPGFFZlfcm9oZvNwUFeTIxImFYQ8mO2M5odMPZGOtowg9nFYWyYiJxbCyJBjOtBwxBHKSk+eADLersBKtc3zDHGtaphiEkBlHsiAB+Ak2qy6GdiFCzYr8yL1TCciG3QjnRzjBceyXwfXODooaxhCJ5e0iDDvYCbmgga17cm/qRhCJOeDLioMygsoKlUFyraaBiCt4ocgrBqVza7U6hc3+Buo72cCoaoLKgXhb5ZR4d40fXNxCXAGUC/BQVD1OaUUR2JLcoAXd+0h1kRf1IwBHX4TE1nUEvOylfmXN9kG0gvoNWFgiEslGTOHjiDnVWywh0UbbHgckQ2UTAUE/9xGjowu4+ASUZPRJxBpEJUMBTTMKrldvNA1zdpuOF3JuNPCobwKqmFEmyeK3elV/DNkbogBj1FzlWZYTyVHgLBRYflczDFilwpQ7BGyKiszBAHAjEGA3gFLksgweaIjkjKmUwyQ9H2wwYu64+iuUvqWVCIpPwyQzGFHeVwWRof3x1pssA2klSIMkNYR6iYEhZbq0CoiI4oHfhz3qiBLDOU8jjRfiyT281D3rPIJqXMEFZKQp2jvi+T281DzvqWFaLMEFZKYj2ux+ym5CezvsWtncgQN5nEa8TzZtUYFQDqjrSJIQ+GegciQ3yNRDreJvt/Lnu4LND1Ta3TcCySsgpEhuh8Ltq2+I3dmd1U79Qkh6WecmmLDGF/sikyxFwv14X/0e58I2xeWAaoFHvRqw/viBiEMA8cudl+EcTXuYInk+UAcUB7ozvI44CH3Ar/HxxAWTwccv9+xGwpl+VjD59Wl/CcCO7uTnvZyr35gKvqsY0Nck/d8Ltp4vBM4aZO9cDqrrbTwkkBwyan7TmJOS3lfrzBSbyiycUF507GaIOzTOZOnPkNrmjmZm/f3Lp7G0cetlu5Ky+YPTqqcxsTmvAtxZUKNZDbbdf37hwXeWOtF13aRXO5a1ldb6f9I4Dt7iXeVYIu7ku8IeHy7/HAVDbf0tQB8Khc5P1r6sJIZwswSt98S1MH0DF4acr+G7j5vcQbIDCB7hKvBsbEis74AinmNk+jy1P6GLL+wmwSdZsAdxcWNtdL8+loyjT4foSRo7BaQ+Mx3zBVVrNAk4/HOkozuZd78gVHHxEPdzQKV67ulWpuaM1ZCH8l9+UFdpcEGLGXe/MBRydlftCfyv2dHk4T2sIGRmhce2/DYcMsuDq2q4vu7fvr7Hgv3mj7QXS7GVHj+WOkBfHj3ahH/HVe3+Wv4S+Kt5atoqcgCOKosPau//3KiGLKwPP9Iv565KEQA3OmCw3Ihxan/1LoBvkPqVVceevi31SL8/9ymxlMIheXes3uZsJxKXHwPEcu7TC31p3gOnS8Kil3fD3AZUmZ5YpRhHwYIUexdKFLNbC/fC4t7knedMMUZ1shvxhLObk8R0ICKSSCtDrlDNO3eOkP+lTcJSUykPLly5yXN39CByX0rSBW24YYvsr+EO8kgZlYexwFeqPeJ0TIVUMKRyExdeVaEi4B+42EaAAGgeoAHdSloM43Q5ShSjFPFeAbJkQDOEBk/w2pG8LA5Kn9G0Jcisq4B41oulPhf2CSIKHvwMgw1LV3AzRpiPcJ/1dtBPCkCLH8wrBwUBnKjKUgDmoTnRceflK0g9CoSyoSEIHdFYP8aLbpTCy0Zgs6Fh2b9YczzSVuMXys9GzeG3+Uy+V1F5zhkKtLi2ZiLt6hPG2dC3WhpynAHTdxHso18pG37A4pn/GnPX2V2+OvMwvYIudScHlEnUM+aHP3O24O+Tto1ZU38/6uze8KFhc8YfUPUuocTe9zGA0nRbeKuhz8U+Gnu/VjFL2MC393FbMwItwU+mWgf6ba93yaeHskC/IDi2MfgTKr2PXRWA66mI1VNXjlW3NZRsEEKg28gJ1dhEgVzHNTgE4DzYkhy2LwocK1fgpN8Qt5UFn7NZ/EKNCpJmEKiWKJe0Nuns2PPC1B6exeKZdfYKwAf8ohmmLBy7Mtu+QZ1OLpFpkMuJL0FU4vDKh40xfe6/d0k4g/CWH21fIIIiJ493oKY5RBMBzD6ZPXYXU/0XK9yT5y9NdtmRZ7xMtJcvc6m98lk76jsRRcv9w+jGfz1Xof+ab3P04QuGzRokWLFi1atGhxAfgPKsa6YIR3wG0AAAAASUVORK5CYII=",
      logoWidth: "110",
      logoHeight: "70",
      
      
    },
  ], 
    
    
  Informacion: [
    {
      imagenSrc: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/02/guia-todos-trucos-consejos-minecraft.jpg?tf=3840x",
      logoWidth: "700",
      logoHeight: "500",
      contenido: [
        {
          titulo: "Minecraft",
          parrafo: "Minecraft es un videojuego tipo sandbox, su traducción literal sería “caja de arena” y es lo que representa la experiencia de juego. Los jugadores pueden modelar el mundo a su gusto, destruir y construir, como si estuviesen jugando en una caja de arena.",
        },
        {
          titulo: "Otro título",
          parrafo: "Este es otro título y su correspondiente párrafo.",
        },
      ],
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
        <Informacion {...Datos.Informacion[0]} /> 
      </section>
    </main>
  );
}

export default Principal;