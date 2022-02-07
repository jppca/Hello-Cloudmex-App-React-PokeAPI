
import React, { useState } from "react";
import axios from "axios";

//My imports
import './index.css';
import { PokemonCards } from "./components/PokemonCards";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SearchNum } from "./components/SearchNum";
import { SearchNom } from "./components/SearchNom";
import { NoPokemon } from "./components/NoPokemon";

//API
const baseUrlAPI = "https://pokeapi.co/api/v2/pokemon";

export function App() {

	const [pokemonList, setPokemonList] = useState([])
	const [numPokemon, setNumPokemon] = useState(0)
	const [searchPokemon, setsearchPokemon] = useState("")
	const [isSearch, setIsSearchNum] = useState(false)
	const [subtitle] = useState('¡llévele, llévele!');
	const [noPokemon] = useState('LLAMA POKÉMONES');

	//Consulta de API por número de pokemones 
	const loadDataNum = (num) => {
		axios.get(`${baseUrlAPI}?limit=${num}`)
			.then(response => {
				for (let i = 0; i < response.data.results.length; i++) {
					axios.get(response.data.results[i].url)
						.then(result => {
							setPokemonList(prevArray => [...prevArray, result.data])
						})
				}
			})
	}

	//Consulta de API por nombre de pokemon
	const loadDataSearch = (name) => {
		axios.get(`${baseUrlAPI}/${name}`)
			.then(response => {
				setPokemonList(prevArray => [...prevArray, response.data])
			})
	}

	//Ejecución de consulta de API por nombre
	const onSearchPokemon = () => {
		if (searchPokemon === "") {
			setIsSearchNum(false)
			setPokemonList([])
		} else {
			setIsSearchNum(true)
			setPokemonList([])
			let name = searchPokemon.toLowerCase();
			loadDataSearch(name)
		}
	}

	//Ejecución de consulta de API por número de pokemones
	const onSearchNum = () => {
		//Validación para evitar números menores a 0	
		if (numPokemon <= 0) {
			setIsSearchNum(false)
			setPokemonList([])
		} else {
			setIsSearchNum(true)
			setPokemonList([])
			//Validación para traer un máximo de 50 Pokémones		
			if (numPokemon > 50) {
				loadDataNum(50)
			} else {
				loadDataNum(numPokemon)
			}
		}
	}

	//botón acarreador de pokémones
	const onClickNum = async (e) => {
		onSearchNum();
		setsearchPokemon("");
	}

	//data en input
	const numPokemons = async (e) => {
		setNumPokemon(e.target.value);
	}

	//botón buscador de pokémones por nombre
	const onClickSearch = async (e) => {
		onSearchPokemon();
		setNumPokemon(0);
	}

	//data in input
	const searchPokemons = async (e) => {
		setsearchPokemon(e.target.value);
	}

	return (
		<div className ="grid justify-items-center">
			<Header subtitle={subtitle} />
			<SearchNum onClickNum={onClickNum} numPokemon={numPokemon} numPokemons={numPokemons} />
			<SearchNom onClickSearch={onClickSearch} searchPokemon={searchPokemon} searchPokemons={searchPokemons} />
			{
				isSearch ? <PokemonCards pokemones={pokemonList} /> : <NoPokemon data={noPokemon} />
			}
			<Footer />
		</div>
	);
}
