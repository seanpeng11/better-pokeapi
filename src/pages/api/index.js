import axios from "axios";

const getRandomInt = () => Math.floor(Math.random() * 1008) + 1;

export default async function handler(req, res) {
    try {
        var pokemonData = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${getRandomInt()}`
        );
    } catch (error) {
        console.log("No Pokemon found.");
    }

    const pokemonTypes = pokemonData.data.types.map((idx) => idx.type.name);
    res.json({
        name: pokemonData.data.name,
        sprite: pokemonData.data.sprites.other["official-artwork"]
            .front_default,
        types: pokemonTypes,
    });
}
