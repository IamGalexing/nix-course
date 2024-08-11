import { URL } from '../constants';

export default function deleteRecipe(id) {
  return fetch(`${URL}/recipes/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) throw new Error('Network response was not ok for post new recipe status!');

      return response.json();
    })
    .catch((e) => e.message);
}
