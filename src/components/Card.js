import React from "react";
//My imports
import {Modal} from "./Modal";

export function Card({ pokemon }) {
  return (
    <div>
      <div className="container-card">
        <div className="content-card sm:flex sm:items-center">
          <img className="content-card__img sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24" src={pokemon.sprites.front_default} alt="" />
          <div className="content-card__info sm:mt-0 sm:ml-4 text-center sm:text-left">
            <p className="content-card__name">{pokemon.name}</p>
            <p className="content-card__data"> Peso: {pokemon.weight} kg</p>
            <p className="content-card__data"> Nivel de experiencia: {pokemon.base_experience}</p>
            <div className="content-card__btns">
            <Modal pokemon={pokemon}></Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
