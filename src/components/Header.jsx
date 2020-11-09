import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import Pokemon from '../components/Pokemon';
import { getPokemon } from '../utils';
import '../styles/Header.css';
const Header = () => {

  const inputRef = useRef();
  const [pokemon, setPokemon] = useState({});
  const [PokemonName, setPokemonName] = useState('');
  const [IsOpen, setIsOpen] = useState(false);

  const handleEvent = () => {
    setPokemonName(() => inputRef.current.value.toLowerCase());
  };

  const getData = async (e) => {
    e.preventDefault();
    let { data } = await getPokemon(PokemonName);
    setPokemon(() => data);
    setIsOpen(() => true);
    inputRef.current.value = '';
    inputRef.current.blur();
  };

  const closeModal = () => {
    setIsOpen(() => false);
    setPokemonName(() => '');
  };

  return (
    <header className='header'>
      <Link to='/' className='header-logo'>Pokedex</Link>
      <form className='header-form' onSubmit={ getData }>
        <input
          type='text'
          placeholder='Ingresa el Pokemon'
          ref={ inputRef }
          onChange={ handleEvent }
        />
        <button type='submit'>
          <i className="fas fa-search"></i>
        </button>
      </form>
      <>
        {IsOpen && pokemon ? <Modal close={ closeModal }><Pokemon details={ pokemon } isModal close={ closeModal } /></Modal> : null }
      </>
    </header>
  );
};

export default Header;