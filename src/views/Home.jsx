import React from 'react'
import foto from '../assets/img/foto1.png'

const Home = () => {
  return (
    <div className='contenedor'>
    <div className='contenedor-texto'>
        <p>Bienvenido maestro</p>
        <p><b>Pokémon</b></p>
    </div>
    <div className='contenedor-img '>
        <img src={foto} className='foto1' alt="..." />
    </div>
    
</div>
  )
}

export default Home