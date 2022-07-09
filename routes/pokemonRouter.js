const express = require("express");
const pokemonRouter = express.Router();
const db = require('../database/client')
const pokedex = require('../data/pokedex')



pokemonRouter.get("/pokemon", (req, res) => {
    res.send(pokedex)
})

pokemonRouter.get("/pokemon/:id", (req, res) => {
    const pokemon = pokedex.find((pokemon) => pokemon.id === Number(req.params.id));

    if(pokemon){
        res.send(pokemon);
    } else {
        res.status(404).send("Surprisingly, the selected pokemon hasn't been invented yet")
    }
});

module.exports = pokemonRouter

