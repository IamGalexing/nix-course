/* eslint-disable import/no-cycle */
import { MEASURE } from '../constants';
import { getIngredients, getRecipes, postRecipe } from '../api';
import markupRecipes from './markup-recipes';

export default async function markupAddRecipe() {
  const root = document.querySelector('#root');

  root.insertAdjacentHTML(
    'beforeend',
    `<div class="modal">
      <form class="form form-add">
        <i class="icon icon-close"></i>
        <h2 class="form-header recipes-head">Adding new recipe</h2>
        <div class="form-section name-time">
          <div class="name">
            <label class="form-label" for="name">Name of recipe</label
            ><input class="form-input" type="text" name="neme" id="neme" placeholder="Name" required />
          </div>
          <div class="time">
            <label class="form-label" for="cookingTime">Cooking time</label
            ><input class="form-input" type="text" name="cookingTime" placeholder="15" id="cookingTime" pattern="^\\d*\\.?\\d*$" required />
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
          ></textarea>
        </div>
        <div class="form-section ingredient-quantity">
          <div class="ingredient-quantity-labels">
            <label class="form-label" for="ingredient">Ingredients</label
            ><label class="form-label" for="amount">Quantity</label>
          </div>
          <ul class="ingredients-list">
            <li class="ingredients-item">
              <select class="form-select form-input ingredient" id="ingredient" name="ingredient" required>
              <option value="" disabled selected>Select</option>
              </select>
              <input class="form-input amount" type="text" name="amount" placeholder="0" value="" id="amount" pattern="^\\d*\\.?\\d*$" required/>
              <select
                class="form-select form-input amount-type"
                id="amountType"
                name="amountType"
                required
              >
              <option value="" disabled selected>Select</option>
              </select>
              <div class="ingredient-delete"></div>
            </li>
          </ul>
          <div class="add-ingredient-btn-box">
            <button class="add-ingredient-btn">+ Add ingredient</button>
          </div>
        </div>
        <div class="form-section buttons">
            <button class="btn add submit" type="submit">Add new recipe</button>
        </div>
      </form>
    </div>`
  );

  const selecterAmountType = document.querySelector('.form-select.amount-type');
  const selecteriIngredient = document.querySelector('.form-select.ingredient');

  MEASURE.forEach((type) => {
    selecterAmountType.insertAdjacentHTML('beforeend', `<option value="${type}">${type}</option>`);
  });

  (await getIngredients()).forEach((ingredient) => {
    selecteriIngredient.insertAdjacentHTML('beforeend', `<option value="${ingredient.id}">${ingredient.name}</option>`);
  });

  //  Script
  document.querySelector('.add-ingredient-btn').addEventListener('click', (e) => {
    e.preventDefault();

    const ingredientsList = document.querySelector('.ingredients-list');
    const firstListItem = ingredientsList.querySelector('.ingredients-item');
    const newListItem = firstListItem.cloneNode(true);
    ingredientsList.appendChild(newListItem);

    const deleteIconContainer = newListItem.querySelector('.ingredient-delete');
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('icon', 'icon-delete', 'in-form');

    deleteIconContainer.appendChild(deleteIcon);
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
      isFavorite: false,
      isPopular: false,
      ingredients: [],
    };

    const ingredients = form.querySelectorAll('.ingredients-item');

    ingredients.forEach((ingredient) => {
      const ingredientData = {
        ingredientId: +ingredient.querySelector('.ingredient').value,
        amount: +ingredient.querySelector('.amount').value,
        amountType: ingredient.querySelector('.amount-type').value,
      };
      recipeData.ingredients.push(ingredientData);
    });

    await postRecipe(recipeData);
    await markupRecipes(await getRecipes());
  });
}
