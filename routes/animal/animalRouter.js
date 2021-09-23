const express = require("express");
const router = express.Router();
const animalController = require("./controller/animalController");

/* GET home page. */
router.get("/", function (req, res, next) {

    // empty object gives us everything
    animalController.getAllAnimal({}, function (err, foundAnimal) {
        if (err) {
            res
                .status(500)
                .json({
                    message: "Something went wrong!",
                    error: err.message
                })
        } else {
            res.json({ message: "success", foundAnimal });
        }
    });
});

router.post("/create-animal", function (req, res) {
    // the naming convention is called payload

    animalController.createAnimal(req.body, function (err, savedAnimal) {
        if (err) {
            res
                .status(500)
                .json({
                    message: "Something went wrong!",
                    error: err.message
                })
        } else {
            console.log(savedAnimal)
            res.json({ message: "success", savedAnimal });
        }
    })
});

router.delete("/delete-animal-by-id/:id", function (req, res) {
    animalController.deleteAnimal(req.params.id, function (err, deletedAnimal) {
        if (err) {
            res
                .status(500)
                .json({
                    message: "Something went wrong!",
                    error: err.message
                })
        } else {
            console.log(deletedAnimal)
            res.json({ message: "success", deletedAnimal });
        }
    })
})

router.put("/update-animal-by-id/:id", function (req, res) {
    animalController.updateAnimalById(
        req.params.id,
        req.body,
        function (err, updatedAnimal) {
            if (err) {
                res
                    .status(500)
                    .json({ message: "Something went wrong!", error: err.message })
            } else {
                res.json({ message: "Success", updatedAnimal })
            }
        }
    )
})



module.exports = router;