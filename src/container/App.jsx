import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import PokemonList from '../components/PokemonList';
import PokemonDetails from '../components/PokemonDetails';
import '../styles/main.css';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={ PokemonList } />
          <Route exact path='/pokemon/:name/' component={ PokemonDetails } />
        </Switch>
      </Router>
    </>
  );
};

export default App;