const express = require("express");

const recipesRouter = require("./recipes/recipes-router.js");
// const ingredientsRouter = require("./ingredients/ingredients-router.js")

const router = express.Router();

// this router handles requests beginning in /api

router.use("/recipes", recipesRouter);
// router.use("/api/ingredients", ingredientsRouter);

module.exports = router;
