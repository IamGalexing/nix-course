import { URL } from '../constants';

export default function updateRecipe(id, recipe) {
  return fetch(`${URL}/recipes/${id}`, {
    method: 'PUT',
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
