// eslint-disable-next-line import/no-cycle
import markupAddRecipe from './markup-add-recipe';

export default async function markupRecipes(recipes) {
  const root = document.querySelector('#root');

  if (document.querySelector('.modal')) {
    root.removeChild(document.querySelector('.modal'));
  }

  if (document.querySelector('.main')) {
    root.removeChild(document.querySelector('.main'));
  }

  root.insertAdjacentHTML(
    'beforeend',
    '<main class="main"><section class="section"><div class="header"><h1 class="title">Recipes</h1><button class="btn btn-add" type="button">+ Add new recipe</button></div><div class="recipes-of-the-day"><h2 class="recipes-head">Recipe of the day</h2><ul class="card-list-of-the-day"></ul></div><div class="recipes-all"><h2 class="recipes-head">Explore recipes</h2><ul class="card-list-all"></ul></div></section></main>'
  );

  const listAll = document.querySelector('.card-list-all');
  const listFavorities = document.querySelector('.card-list-of-the-day');
  const buttonAddRecipe = document.querySelector('.btn-add');

  recipes.forEach((recipe) => {
    const li = `<li data-id="${recipe.id}" class="card"><div class="card-icons" data-id="${
      recipe.id
    }"><i class="icon icon-favorites in-card ${
      recipe.isFavorite ? 'active' : ''
    }"></i><i class="icon icon-edit in-card"></i><i class="icon icon-delete in-card"></i></div><div class="card-description"><div class="card-details"><h3 class="recipe-name">${
      recipe.name
    }</h3><div class="ingridients-count">${
      recipe.ingredients.length
    } ingridients</div></div><div class="preparation-time">${recipe.cookingTime} min.</div></div></li>`;

    if (recipe.isPopular) listFavorities.insertAdjacentHTML('beforeend', li);
    else listAll.insertAdjacentHTML('beforeend', li);
  });

  buttonAddRecipe.addEventListener('click', () => {
    markupAddRecipe();
  });
}
