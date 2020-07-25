import React from 'react'

export default function PokemonList({pokemon}) {
    return (
        <div>
            {pokemon.map(p => (
                <h1 key={p}>{p}</h1>
            ))}
        </div>
    )
}
