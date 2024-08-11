import { URL } from '../constants';

export default function getRecipe(id) {
  return fetch(`${URL}/recipes/${id}`)
    .then((response) => {
      if (!response.ok) throw new Error('Network response was not ok for fetching Recipe!');
      return response.json();
    })
    .catch((e) => e.message);
}
