/* eslint-disable import/no-cycle */
import getRecipes from './get-recipes';
import getRecipe from './get-recipe';
import getDetails from './get-details';
import getIngredients from './get-ingredients';
import updateFavorite from './update-favorite';
import updateRecipe from './update-recipe';
import postRecipe from './post-recipe';
import deleteRecipe from './delete-recipe';

export { getDetails, getRecipe, getRecipes, getIngredients, updateFavorite, updateRecipe, postRecipe, deleteRecipe };
