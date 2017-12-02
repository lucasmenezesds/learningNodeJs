var express = require('express');
var router = express.Router();
const Pokemon = require('../models/pokemon');

// middleware to use for all requests
router.use(function (req, res, next) {
    console.log('Ta rolando alguma coisa');
    next();
});

router.route('/pokemons')
    .post(function (req, res) {
        var pokemon = new Pokemon();
        pokemon.number = req.body.number;
        pokemon.name = req.body.name;
        pokemon.type = req.body.type;

        pokemon.save(function (err) {
            if (err)
                res.send(err);

            res.json({message: 'Pokemon ' + pokemon.name + ' was created!'});
        });
    })
    .get(function (req, res) {
        Pokemon.find(function (err, pokemons) {
            if (err)
                res.send(err);

            res.json(pokemons);
        });
    });


router.route('/pokemons/:pokemon_id')
    .get(function (req, res) {
        Pokemon.findById(req.params.pokemon_id, function (err, pokemon) {
            if (err)
                res.send(err);

            res.json(pokemon);

        });

    })

    .put(function (req, res) {
        Pokemon.findById(req.params.pokemon_id, function (err, pokemon) {
            if (err)
                res.send(err);

            // TODO improve it
            if (!!(req.body.number))
                pokemon.number = req.body.number;
            if (!!(req.body.name))
                pokemon.name = req.body.name;
            if (!!(req.body.type))
                pokemon.type = req.body.type;

            pokemon.save(function (err) {
                if (err)
                    res.send(err);

                res.json({message: 'Pokemon ' + pokemon.name + ' was updated!'});
            });
        });

    })

    .delete(function (req, res) {
        Pokemon.remove({
            _id: req.params.pokemon_id
        }, function (err, bear) {
            if (err)
                res.send(err);

            res.json({message: 'Pokemon with ID = ' + req.params.pokemon_id + ' was successfully deleted'})

        })

    });


module.exports = router;
