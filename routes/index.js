const express = require("express");
const router = express.Router();
const { list } = require("../data/data.json");

/* GET home page. */
router.get("/", function(req, res) {
    res.render("index", { list });
});

/* GET recipe page. */
router.get("/recipes/:id", function(req, res) {
    const recipeId = req.params.id;
    const recipe = list.find(({ id }) => id === +recipeId);
    if (recipe) {
        res.render("recipe", { recipe });
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;
