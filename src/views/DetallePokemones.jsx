import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const DetallePokemones = () => {
  const [personaje, setPersonaje] = useState({});
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();

  const getPersonajes = async () => {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    setPersonaje(data)
    setCargando(false);

  }

  useEffect(() => {
    getPersonajes();
  });

  return (
    cargando ?
      <h1>Cargando datos...</h1> :

      <div className="detalle">
        <img src={personaje.sprites.front_default} alt="pokemon" className="foto-pokemon" />
        <div className="">
          <h1>{personaje.name}</h1>
          <p>Experiencia Base: {personaje.base_experience}</p>
          <p>Peso: {personaje.weight}</p>
          <p>Altura: {personaje.height}</p>
          <p>Tipo: {personaje.types[0].type.name}</p>
          <p>Habilidad: {personaje.abilities[0].ability.name}</p>
        </div>
      </div>
  )
}

export default DetallePokemones