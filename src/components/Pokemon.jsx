import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pokemon.css';

const Pokemon = ({ details, isModal, close }) => {
  let pokemonImg = details?.sprites?.front_default;
  return (
    <>
      {isModal ?
        <Link replace to={ `/pokemon/${details.name}` } className='pokemon' onClick={ () => close() }>
          <img src={ pokemonImg } alt="Pokemon" />
          <p className='pokemon-title' >{ details.name }</p>
        </Link> :
        <Link to={ `pokemon/${details.name}` } className='pokemon'>
          <img src={ pokemonImg } alt="Pokemon" />
          <p className='pokemon-title' >{ details.name }</p>
        </Link>
      }
    </>
  );
};

export default Pokemon;