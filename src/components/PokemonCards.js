import React from "react";

//My imporst
import {List} from "./List";
import {Card} from "./Card";

export function PokemonCards({ pokemones }) {
  return (
    <div className="divide-y divide-slate-100">
      <List>
        {pokemones.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </List>
    </div>
  );
}