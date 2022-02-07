import React from "react";

export function SearchNom({ onClickSearch, searchPokemon, searchPokemons }) {
    return (
        <div className ="grid justify-items-center">
            <div className = "py-2">
                Ingrese el nombre de un pokémon
            </div>
            <div className="py-2">
                <input className ="shadow appearance-none border w-2/10 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={searchPokemon} onChange={searchPokemons} />
                <button className ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg" type="button" onClick={onClickSearch}>Buscar</button>
            </div>
        </div>
    );
}
