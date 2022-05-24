const express = require("express");
const characterSchema = require("../models/character");

const router = express.Router();
const { validateCreate } = require('../validators/characters')

// create character
router.post("/characters", validateCreate, (req, res) => {
    const character = characterSchema(req.body);
    character
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all characters
router.get("/characters", (req, res) => {
    characterSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a character
router.get("/characters/:id", (req, res) => {
    const { id } = req.params;
    characterSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a character
router.put("/characters/:id", (req, res) => {
    const { id } = req.params;
    const { name, movie, specie, appearances } = req.body;
    characterSchema
    .updateOne({_id: id }, { $set: {name, movie, specie, appearances} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a character
router.delete("/characters/:id", (req, res) => {
    const { id } = req.params;
    characterSchema
    .deleteOne({_id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;