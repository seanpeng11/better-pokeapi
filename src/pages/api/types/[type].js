import axios from "axios";

export default async function handler(req, res) {
    try {
        const pokemonData = await axios.get(
            `https://pokeapi.co/api/v2/type/${req.query.type}`
        );
        const listOfPokemon = pokemonData.data.pokemon.map(
            (idx) => idx.pokemon.name
        );
        res.json({ pokemon: listOfPokemon });
    } catch (error) {
        console.log("No Pokemon found.");
    }
}
