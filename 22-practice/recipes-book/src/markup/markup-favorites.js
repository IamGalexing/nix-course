export default function markupFavorites(recipes) {
  const root = document.querySelector('#root');

  if (document.querySelector('.modal')) {
    root.removeChild(document.querySelector('.modal'));
  }

  if (document.querySelector('.main')) {
    root.removeChild(document.querySelector('.main'));
  }

  root.insertAdjacentHTML(
    'beforeend',
    '<main class="main"><section class="section"><div class="header"><h1 class="title">Favorites recipes</h1></div><div class="recipes-favorites"><ul class="card-list-favorites"></ul></div></section></main>'
  );

  const listFavorities = document.querySelector('.card-list-favorites');

  recipes.forEach((recipe) => {
    if (recipe.isFavorite) {
      listFavorities.insertAdjacentHTML(
        'beforeend',
        `<li class="card" data-id="${recipe.id}"><div class="card-icons" data-id="${recipe.id}"><i class="icon icon-favorites in-card active"></i><i class="icon icon-edit in-card"></i><i class="icon icon-delete in-card"></i></div><div class="card-description"><div class="card-details"><h3 class="recipe-name">${recipe.name}</h3><div class="ingridients-count">${recipe.ingredients.length} ingridients</div></div><div class="preparation-time">${recipe.cookingTime} min.</div></div></li>`
      );
    }
  });
}
