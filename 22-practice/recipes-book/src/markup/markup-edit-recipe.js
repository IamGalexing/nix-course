import { getIngredients, getRecipe, getRecipes, updateRecipe } from '../api';
import markupFavorites from './markup-favorites';
import markupRecipes from './markup-recipes';
import { MEASURE } from '../constants';

export default async function markupEditRecipe(recipeId) {
  const root = document.querySelector('#root');
  const recipe = await getRecipe(recipeId);

  if (document.querySelector('.modal')) {
    root.removeChild(document.querySelector('.modal'));
  }

  root.insertAdjacentHTML(
    'beforeend',
    `<div class="modal">
      <form class="form form-add">
        <i class="icon icon-close"></i>
        <h2 class="form-header recipes-head">Editing your recipe</h2>
        <div class="form-section name-time">
          <div class="name">
            <label class="form-label" for="name">Name of recipe</label
            ><input class="form-input" type="text" name="neme" id="neme" placeholder="Name" value="${recipe.name}" required />
          </div>
          <div class="time">
            <label class="form-label" for="cookingTime">Cooking time</label
            ><input class="form-input" type="text" name="cookingTime" placeholder="15" id="cookingTime" pattern="^\\d*\\.?\\d*$" value="${recipe.cookingTime}" required />
          </div>
          <span class="name-time-measure">min</span>
        </div>
        <div class="form-section description">
          <label class="form-label" for="description">Description</label
          ><textarea
            class="form-textarea"
            name="description"
            id="description"
            placeholder="Type your description here"
            rows="3"
            required
          >${recipe.description}</textarea>
        </div>
        <div class="form-section ingredient-quantity">
          <div class="ingredient-quantity-labels">
            <label class="form-label" for="ingredient">Ingredients</label
            ><label class="form-label" for="amount">Quantity</label>
          </div>
          <ul class="ingredients-list">
          </ul>
          <div class="add-ingredient-btn-box">
            <button class="add-ingredient-btn">+ Add ingredient</button>
          </div>
        </div>
        <div class="form-section buttons">
            <button class="btn edit submit" type="submit">Edit recipe</button>
        </div>
      </form>
    </div>`
  );

  const list = document.querySelector('.ingredients-list');

  recipe.ingredients.forEach((ingredient) => {
    list.insertAdjacentHTML(
      'beforeend',
      `
        <li class="ingredients-item">
              <select class="form-select form-input ingredient" id="ingredient" name="ingredient" required>
              <option value="" disabled>Select</option>
              <option value="${ingredient.ingredientId}" selected>${ingredient.ingredientId}</option>
              </select>
              <input class="form-input amount" type="text" name="amount" placeholder="0" id="amount" pattern="^\\d*\\.?\\d*$"
              value=${ingredient.amount} required/>
              <select
                class="form-select form-input amount-type"
                id="amountType"
                name="amountType"
                required
              >
              <option value="" disabled>Select</option>
              <option value="${ingredient.amountType}" selected>${ingredient.amountType}</option>
              </select>
              <div class="ingredient-delete">
                <i class="icon icon-delete in-form"></i>
              </div>
            </li>
        `
    );
  });

  const selecteriIngredients = document.querySelectorAll('.ingredients-item .form-select.ingredient');
  const ingredients = await getIngredients();

  selecteriIngredients.forEach((ingredientBox) => {
    ingredients.forEach((item) => {
      if (+ingredientBox.options[1].value === item.id) {
        // eslint-disable-next-line no-param-reassign
        ingredientBox.options[1].innerHTML = item.name;
      } else {
        ingredientBox.insertAdjacentHTML('beforeend', `<option value="${item.id}">${item.name}</option>`);
      }
    });
  });

  const selecterAmountTypes = document.querySelectorAll('.ingredients-item .form-select.amount-type');

  selecterAmountTypes.forEach((ingredientBox) => {
    MEASURE.forEach((type) => {
      if (ingredientBox.options[1].value !== type) {
        ingredientBox.insertAdjacentHTML('beforeend', `<option value="${type}">${type}</option>`);
      }
    });
  });

  document.querySelector('.add-ingredient-btn').addEventListener('click', (e) => {
    e.preventDefault();

    const ingredientsList = document.querySelector('.ingredients-list');
    const firstListItem = ingredientsList.querySelector('.ingredients-item');
    const newListItem = firstListItem.cloneNode(true);

    const selectElements = newListItem.querySelectorAll('select');

    selectElements.forEach((select) => {
      const options = select.querySelectorAll('option');
      options[1].removeAttribute('selected');
      options[0].setAttribute('selected', true);
    });

    const inputElement = newListItem.querySelector('.amount');
    inputElement.value = '';

    ingredientsList.appendChild(newListItem);
  });

  const ingredientsList = document.querySelector('.ingredients-list');

  ingredientsList.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('icon-delete')) {
      const listItems = ingredientsList.querySelectorAll('.ingredients-item');

      if (listItems.length > 1) {
        event.target.closest('.ingredients-item').remove();
      }
    }
  });

  const form = document.querySelector('.form-add');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const recipeData = {
      name: formData.get('neme'),
      description: formData.get('description'),
      label: 'Unknown',
      cookingTime: formData.get('cookingTime'),
      isFavorite: recipe.isFavorite,
      isPopular: recipe.isPopular,
      ingredients: [],
    };

    const ingredientsElements = form.querySelectorAll('.ingredients-item');

    ingredientsElements.forEach((ingredient) => {
      const ingredientData = {
        ingredientId: +ingredient.querySelector('.ingredient').value,
        amount: +ingredient.querySelector('.amount').value,
        amountType: ingredient.querySelector('.amount-type').value,
      };
      recipeData.ingredients.push(ingredientData);
    });

    await updateRecipe(recipeId, recipeData);

    if (document.querySelector('.tab .icon-recipes').classList.contains('active')) {
      markupRecipes(await getRecipes());
    } else {
      markupFavorites(await getRecipes());
    }
  });
}
