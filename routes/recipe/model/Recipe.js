const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
    {
        recipeType: {
            type: String,
        },
        price: {
            type: Number,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("recipe", recipeSchema);

//in the schema it should have the following
//recipe - type string, date, price - type number