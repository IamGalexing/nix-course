import { URL } from '../constants';

export default function getIngredients() {
  return fetch(`${URL}/ingredients`)
    .then((response) => {
      if (!response.ok) throw new Error('Network response was not ok for fetching Ingredients!');
      return response.json();
    })
    .catch((e) => e.message);
}
