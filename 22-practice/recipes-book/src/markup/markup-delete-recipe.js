import { deleteRecipe, getRecipes } from '../api';
import markupFavorites from './markup-favorites';
import markupRecipes from './markup-recipes';

export default async function markupDeleteRecipe(id) {
  const root = document.querySelector('#root');

  if (document.querySelector('.modal')) {
    root.removeChild(document.querySelector('.modal'));
  }

  root.insertAdjacentHTML(
    'beforeend',
    `
  <div class="modal">
      <div class="delete-box">
        <i class="icon icon-close"></i>
        <h2 class="recipes-head">Confirmation</h2>
        <p class="delete-text">Are you sure you want to delete this recipe?</p>
        <div class="delete-buttons">
          <button class="btn cancel icon-close" type="submit">Cancel</button>
          <button class="btn delete" type="button">Yes, delete</button>
        </div>
      </div>
    </div>
    `
  );

  document.querySelector('.btn.delete').addEventListener('click', async () => {
    await deleteRecipe(id);

    if (document.querySelector('.tab .icon-recipes').classList.contains('active')) {
      markupRecipes(await getRecipes());
    } else {
      markupFavorites(await getRecipes());
    }
  });
}
