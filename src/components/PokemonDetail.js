import { useParams } from "react-router-dom";
import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import PokemonEvolution from "./PokemonEvolution";

const PokemonDetail = () => {
    const { id } = useParams(); // Obtiene el ID de la URL

    const data = {
        items: [
            {
                id: 1,
                name: "bulbasaur",
                weight: 69,
                types: [{ type: { name: "grass" } }],
                abilities: [{ ability: { name: "overgrow" } }, { ability: { name: "chlorophyll" } }],
                sprites: { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
                evolutions: [
                    { name: "bulbasaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
                    { name: "ivysaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
                    { name: "venusaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" }
                ]
            },
            {
                id: 2,
                name: "ivysaur",
                weight: 130,
                types: [{ type: { name: "grass" } }],
                abilities: [{ ability: { name: "overgrow" } }, { ability: { name: "chlorophyll" } }],
                sprites: { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
                evolutions: [
                    { name: "ivysaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
                    { name: "venusaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" }
                ]
            },
            {
                id: 3,
                name: "venusaur",
                weight: 1000,
                types: [{ type: { name: "grass" } }],
                abilities: [{ ability: { name: "overgrow" } }, { ability: { name: "chlorophyll" } }],
                sprites: { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" },
                evolutions: [
                    { name: "venusaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" }
                ]
            },
        ]
    };

    const pokemon = data.items.find(p => p.id === parseInt(id));

    if (!pokemon) {
        return <Typography variant="h5"></Typography>;
    }

    return (
        <Box sx={{ textAlign: "center", p: 4 }}>
            <Typography variant="h4">{pokemon.name.toUpperCase()}</Typography>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <Typography>Peso: {pokemon.weight}</Typography>
            <Typography>Tipo: {pokemon.types.map(t => t.type.name).join(", ")}</Typography>
            <Typography>Habilidades: {pokemon.abilities.map(a => a.ability.name).join(", ")}</Typography>

            {/* Sección de Evoluciones */}
            <Typography variant="h5" sx={{ mt: 4 }}>Evoluciones</Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                {pokemon.evolutions?.map((evo, index) => (
                    <Grid item xs={4} key={index}>
                        <PokemonEvolution evolution={evo} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PokemonDetail;
