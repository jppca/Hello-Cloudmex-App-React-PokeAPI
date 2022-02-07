import React from "react";

export function NoPokemon({ data }) {
    return (
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 grid justify-items-center text-3xl py-20" >
            <h2>
                {data}
            </h2>
        </div>
    );
}