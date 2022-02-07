import React from "react";

export function SearchNum({ onClickNum, numPokemon, numPokemons }) {
    return (
        <div className="grid justify-items-center">
            <div className="py-2">
                Ingrese el número de pokémones que desea traer
            </div>
            <div className="py-2">
                <input className="shadow appearance-none border w-1/10 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="inputNum" type="number" min="0" max="100" value={numPokemon} onChange={numPokemons}/>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg" onClick={onClickNum} id="buttonNum" type="button" >Traer</button>
            </div>
        </div>
    );
}