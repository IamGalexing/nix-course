import { URL } from '../constants';

export default function postRecipe(recipe) {
  return fetch(`${URL}/recipes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...recipe }),
  })
    .then((response) => {
      if (!response.ok) throw new Error('Network response was not ok for post new recipe status!');

      return response.json();
    })
    .catch((e) => e.message);
}
