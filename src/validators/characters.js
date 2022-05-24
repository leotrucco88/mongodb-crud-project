const { check } = require('express-validator');
const { validateResult } = require('../validators/validateHelper')

const validateCreate = [
    check('name')
        .exists()
        .not()
        .isEmpty()
        .custom((value, { req }) => {
            if (value < 1) {
                throw new Error('The name of the character must have at least one char')
            }
            return true
        }),
    check('movie')
        .exists()
        .not()
        .isEmpty()
        .custom((value, { req }) => {
            if (value < 2) {
                throw new Error('The name of the movie must have at least two chars')
            }
            return true
        }),
    check('specie')
        .exists()
        .not()
        .isEmpty()
        .custom((value, { req }) => {
            if (value != "human", "animal", "spirit", "book character", "demon", "posessed doll", "alien creature", "vegetal", "cosmic entity", "vampire") {
                throw new Error('The specie must find in the next list: human, animal, spirit, book character, demon, posessed doll, alien creature, vegetal, cosmic entity, vampire')
            }
            return true
        }),
    check('appearances')
        .exists()
        .not()
        .isEmpty()
        .isNumeric()
        .custom((value, { req }) => {
            if (value < 1 || value > 20) {
                throw new Error('The number of appearances must be a minimum of 1 and a maximum of 20')
            }
            return true
        }),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate }