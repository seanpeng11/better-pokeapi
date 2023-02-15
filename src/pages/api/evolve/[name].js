import axios from "axios";

export default async function handler(req, res) {
    
    try {
        var pokemonData = await axios.get(
            `https://pokeapi.co/api/v2/pokemon-species/${req.query.name}`
        );
    } catch (error) {
        console.log("No Pokemon found.");
    }
    
    const evolutionChain = await axios.get(pokemonData.data.evolution_chain.url);

    let currentPokemon = evolutionChain.data.chain;

    while (currentPokemon.species.name !== req.query.name) {
        
        currentPokemon = currentPokemon.evolves_to[0];
    }
    
    if (currentPokemon.evolves_to.length != 0) {
        currentPokemon = currentPokemon.evolves_to[0];
    } 
    const evolvedPokemon = currentPokemon.species.name;
    
    res.json({ evolution: evolvedPokemon });
}
