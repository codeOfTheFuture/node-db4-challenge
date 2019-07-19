const express = require('express');

const Recipes = require('./recipesModel');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({
      message: 'Server was unable to get recipes',
    });
  }
});

router.get('/:id/ingredients', async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const shoppingList = await Recipes.getShoppingList(id);
    res.status(200).json(shoppingList);
  } catch (error) {
    res.status(500).json({
      message: 'Server was unable to get shopping list',
    });
  }
});

router.get('/:id/steps', async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const steps = await Recipes.getInstructions(id);
    res.status(200).json(steps);
  } catch (error) {
    res.status(500).json({
      message: 'Server was unable to get the list of steps for the recipe',
    });
  }
});

module.exports = router;
