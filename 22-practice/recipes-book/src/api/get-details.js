import getRecipe from './get-recipe';
import getIngredients from './get-ingredients';

export default async function getDetails(id) {
  return Promise.all([getRecipe(id), getIngredients()])
    .then(([recipe, ingredients]) => {
      const names = recipe.ingredients.map((ingredient) => {
        const ingredientData = ingredients.find((data) => +data.id === +ingredient.ingredientId);
        return ingredientData ? ingredientData.name : null;
      });

      return [recipe, names];
    })
    .catch((e) => e.message);
}
