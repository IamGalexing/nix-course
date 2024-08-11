import { URL } from '../constants';

export default function updateFavorite(id, isFavorite) {
  return fetch(`${URL}/recipes/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ isFavorite }),
  })
    .then((response) => {
      if (!response.ok) throw new Error('Network response was not ok for updaing Favorite status!');

      return response;
    })
    .catch((e) => e.message);
}
