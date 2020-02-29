const express = require("express");
const router = express.Router();
const { list } = require("../data/data.json");

/* GET home page. */
router.get("/", function(req, res) {
    // 1. Pass all recipe data to 'index' template
    res.render("index", { list });
});

/* GET recipe page. */
router.get("/recipes/:id", function(req, res) {
    const recipeId = req.params.id;
    const recipe = list.find(({ id }) => id === +recipeId);

    if (recipe) {
        // 2. Pass the recipe data to the 'recipe' template
        res.render("recipe", { recipe });
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;
