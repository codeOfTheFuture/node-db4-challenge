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

router.get('/:id', async (req, res) => {
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

module.exports = router;
