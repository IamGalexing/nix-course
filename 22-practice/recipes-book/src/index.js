import { getRecipes, getDetails, updateFavorite } from './api';
import {
  markupRecipes,
  markupDetails,
  markupEditRecipe,
  markupSidebar,
  markupDeleteRecipe,
  markupFavorites,
} from './markup';
import './styles.css';

const root = document.querySelector('#root');

markupSidebar();
markupRecipes(await getRecipes());

root.addEventListener('click', async (e) => {
  e.stopPropagation();

  const modal = document.querySelector('.modal');

  if (modal && (e.target === modal || e.target.classList.contains('icon-close'))) {
    root.removeChild(modal);
    return;
  }

  if (e.target.classList.contains('card')) {
    markupDetails(...(await getDetails(+e.target.dataset.id)));
    return;
  }

  if (!e.target.parentNode.classList.contains('tab') && e.target.classList.contains('icon-favorites')) {
    const id = +e.target.parentNode.dataset.id;

    if (e.target.classList.contains('active')) {
      await updateFavorite(id, false);
      e.target.classList.remove('active');
    } else {
      await updateFavorite(id, true);
      e.target.classList.add('active');
    }

    if (document.querySelector('.tab.recipes .active')) {
      markupRecipes(await getRecipes());
    } else {
      markupFavorites(await getRecipes());
    }

    return;
  }

  if (e.target.classList.contains('icon-edit')) {
    await markupEditRecipe(+e.target.parentNode.dataset.id);
    return;
  }

  if (e.target.classList.contains('icon-delete') && e.target.classList.contains('in-card')) {
    await markupDeleteRecipe(+e.target.parentNode.dataset.id);
  }
});
