import axios from "axios";

export default async function handler(req, res) {
    try {
        var pokemonData = await axios.get(
            `https://pokeapi.co/api/v2/type/${req.query.type}`
        );
    } catch (error) {
        console.log("No Pokemon found.");
    }
    const listOfPokemon = pokemonData.data.pokemon.map(
        (idx) => idx.pokemon.name
    );
    res.json({ pokemon: listOfPokemon });
}
