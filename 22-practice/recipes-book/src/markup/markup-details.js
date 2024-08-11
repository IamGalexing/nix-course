import imageRecipe from '../../assets/back-image-details.jpg';

export default function markupDetails(recipe, IngredientNames) {
  const root = document.querySelector('#root');

  root.insertAdjacentHTML(
    'beforeend',
    `<div class="modal"><div class="recipe-details"><div class="icon-box close"><i class="icon icon-close"></i></div><img class="recipe-details-img" src="${imageRecipe}" alt="recipe image" /><div class="recipe-details-text"><div class="recipe-details-main"><div class="recipe-details-title-time"><h3 class="recipe-details-title">${
      recipe.name
    }</h3><div class="recipe-details-time">${recipe.cookingTime} min.</div></div><p class="recipe-details-descr">${
      recipe.description
    }</p><ul class="recipe-details-ingredients"><span class="recipe-details-ingredients-header">Ingredients</span></ul></div><div class="card-icons" data-id="${
      recipe.id
    }"><i class="icon icon-favorites ${
      recipe.isFavorite ? 'active' : ''
    }"></i><i class="icon icon-edit"></i><i class="icon icon-delete in-card details"></i></div></div></div></div>`
  );

  const listIngredients = document.querySelector('.recipe-details-ingredients');

  IngredientNames.forEach((ingredient) => {
    listIngredients.insertAdjacentHTML('beforeend', `<li class="recipe-details-ingredients-item">${ingredient}</li>`);
  });
}
