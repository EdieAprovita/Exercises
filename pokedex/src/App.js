import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import PokemonDetail from './components/PokemonDetail';
import PokemonList from './components/PokemonList';
import axios from "axios";

const App = () => {

  const [pokemon, setPokemon] = useState([]);

  const getPokemons = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then (res => {
      let poke = res.data.result.map(e => e)
      setPokemon(pokemon);
      console.log(pokemon)
    })
    .catch(err => console.error(err));
  }

  useEffect(() => {
    getPokemons();
  }

  return (
  <>
  <Nav />
  <PokemonDetail/>
  <PokemonList/>
  </>

  );
}

export default App;
