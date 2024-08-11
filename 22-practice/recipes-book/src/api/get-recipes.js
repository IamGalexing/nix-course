import { URL } from '../constants';

export default async function getRecipes() {
  return fetch(`${URL}/recipes`)
    .then((response) => {
      if (!response.ok) throw new Error('Network response was not ok for fetching Recipes!');
      return response.json();
    })
    .catch((e) => e.message);
}
