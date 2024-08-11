import { getRecipes } from '../api';
import markupFavorites from './markup-favorites';
import markupRecipes from './markup-recipes';

export default function markupSidebar() {
  const root = document.querySelector('#root');

  root.innerHTML = `
      <aside class="aside">
      <div class="tab recipes"><i class="icon icon-recipes active"></i></div>
      <div class="tab favorites"><i class="icon icon-favorites"></i></div>
      </aside>
  `;

  const tabRecipes = document.querySelector('.tab .icon-recipes');
  const tabFavorites = document.querySelector('.tab .icon-favorites');

  tabRecipes.addEventListener('click', async () => {
    if (tabRecipes.classList.contains('active')) return;

    tabFavorites.classList.remove('active');
    tabRecipes.classList.add('active');

    const recipes = await getRecipes();
    markupRecipes(recipes);
  });

  tabFavorites.addEventListener('click', async () => {
    if (tabFavorites.classList.contains('active')) return;

    tabRecipes.classList.remove('active');
    tabFavorites.classList.add('active');

    const recipes = await getRecipes();
    markupFavorites(recipes);
  });
}
