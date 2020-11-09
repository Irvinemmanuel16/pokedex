import React, { useEffect, useState, useRef } from 'react';
import Pokemon from './Pokemon';
import '../styles/PokemonList.css';

const PokemonList = () => {
  const [PokemonList, setPokemonList] = useState([]);
  const [Index, setIndex] = useState(1);
  const increaseRef = useRef();

  const increaseIndex = () => {
    setIndex(prevIndex => prevIndex + 25);
    setPokemonList([]);
  };

  const decreaseIndex = () => {
    if (Index < 0 || Index === 1) return;
    setIndex(prevIndex => prevIndex - 25);
    setPokemonList([]);
  };

  useEffect(() => {
    let controller = new AbortController();
    let signal = controller.signal;

    async function getData() {
      for (let i = Index; i <= (Index + 24); i++) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`, { signal });
        let data = await response.json();
        setPokemonList(prevState => [...prevState, data]);
      }
    }
    getData();
    return () => controller.abort();
  }, [Index]);

  return (
    <section className='pokemonlist'>
      <div className='pokemonlist-container'>
        { PokemonList.map(pokemon => <Pokemon details={ pokemon } key={ pokemon.id } />) }
      </div>
      <div className='pokemonlist-controls'>
        <button onClick={ decreaseIndex }>
          <i className="fas fa-arrow-left"></i>
        </button>
        <button onClick={ increaseIndex } ref={ increaseRef }>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default PokemonList;