import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const Personajes = () => {
  const [idPersonajes, setIdPersonajes] = useState("");
  const [listaPersonajes, sertListaPersonajes] = useState([]);
  const navigate = useNavigate();


  const getPersonajes = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();


    let dataSelect = [];
    data.results.map((personaje) => {
      dataSelect.push({ url: personaje.url, nombre: personaje.name });
    });

    sertListaPersonajes(dataSelect);
    console.log(dataSelect);
  }

  const verDetalle = () => {
    console.log(idPersonajes);
    let id = idPersonajes.replace("https://pokeapi.co/api/v2/pokemon/","");
    id = id.replace("/","");
    console.log(id);
    navigate(`/personajes/${id}`);
  };

  useEffect(() => {
    getPersonajes();
  }, [])


  return (
    <div className='personajeView'>
      <h1>Selecciona tu personaje</h1>
      <select name='id' className='selectView' id="id" onChange={(e) => setIdPersonajes(e.target.value)}>
        <option value="">Seleccione</option>
        {
          listaPersonajes.map((p) => <option key={p.url} value={p.url}>{p.nombre}</option>)
        }
      </select>
      <Button variant="secondary" onClick={(e) => verDetalle()}>Ver detalle</Button>
    </div>
  )
}

export default Personajes