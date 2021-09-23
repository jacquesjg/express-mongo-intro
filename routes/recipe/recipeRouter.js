const express = require('express');
const animalController = require('../animal/controller/animalController');
const router = express.Router();
const recipeController = require('./controller/recipeController');

router.get("/", function (req, res, next) {
    recipeController.getAllRecipe({}, function (err, foundRecipe) {
        if (err) {
            res
                .status(500)
                .json({
                    message: "Something went wrong!",
                    error: err.message
                })
        } else {
            res.json({ message: "success", foundRecipe });
        }
    });
});

router.post("/create-recipe", function (req, res) {
    recipeController.createRecipe(req.body, function (err, savedRecipe) {
        if (err) {
            res
                .status(500)
                .json({
                    message: "Something went wrong!",
                    error: err.message
                })
        } else {
            console.log(savedRecipe)
            res.json({ message: "success", savedRecipe });
        }
    })
});

router.delete("/delete-recipe-by-id/:id", function (req, res) {
    const { id } = req.params
    recipeController.deleteRecipe(id, function (err, deletedRecipe) {
        if (err) {
            res
                .status(500)
                .json({
                    message: "Something went wrong!",
                    error: err.message
                })
        } else {
            console.log(deletedRecipe)
            res.json({ message: "success", deletedRecipe })
        }
    })
});

router.put("/update-animal-by-id/:id", function (req, res) {
    recipeController.updateRecipeById(
        req.params.id,
        req.body,
        function (err, updatedRecipe) {
            if (err) {
                res
                    .status(500)
                    .json({ message: "Something went wrong!", error: err.message })
            } else {
                res.json({ message: "Success", updatedRecipe });
            }
        }
    )
});

module.exports = router;

//using the current application
//create a route for recipe /api/recipe
// Basically, it is the same thing what we been doing for animal
//Get, put, create, delte
//Setup mongodb and name the databse /mongodb-recipe
//in the schema it should have the following
//recipe - type string, date, price - type number

