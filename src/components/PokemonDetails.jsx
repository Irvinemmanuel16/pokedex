/* eslint-disable*/
import React, { useState, useEffect } from 'react';
import { getPokemon } from '../utils';
import '../styles/PokemonDetails.css';


const PokemonDetails = ({ match }) => {
  let { name } = match?.params;
  const [Pokemon, setPokemon] = useState({});

  useEffect(() => {
    let abortController;
    const getData = async () => {
      let { data, controller } = await getPokemon(name);
      abortController = controller;
      setPokemon(() => data);
    };
    getData();
    return () => abortController.abort();
  }, [match.params.name]);

  let pokemonImage = Pokemon?.sprites?.front_default;

  return (
    <div className='pokemondetails' >
      <p className='pokemondetails-name'>{ Pokemon.name }</p>
      {pokemonImage ? <img src={ pokemonImage } alt="Pokemon" /> : <div style={ { minHeight: '115px', minWidth: '96px' } }></div> }
      {Pokemon.abilities && <p className='pokemondetails-ability'>Ability: { Pokemon.abilities[0].ability.name }</p> }
      {Pokemon.types && <p className='pokemondetails-type'>Type: { Pokemon.types[0].type.name }</p> }
    </div>
  );
};

export default PokemonDetails;