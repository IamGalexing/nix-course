# Filtering products

You have an array of products with each product having properties like name, price, and category.

```js
const listOfProduct = [
  { id: 0, title: 'Product 1', price: 100, category: 'Cooking' },
  { id: 1, title: 'Product 2', price: 200, category: 'Sport' },
  { id: 2, title: 'Product 3', price: 300, category: 'Cars' },
  { id: 3, title: 'Product 4', price: 400, category: 'Bikes' },
  { id: 4, title: 'Product 5', price: 500, category: 'Bikes' },
  { id: 5, title: 'Product 6', price: 600, category: 'Sport' },
]
```

- [ ] Create a React component that takes the array of products as a prop and renders a list of products.
- [ ] Add a filtering functionality that allows the user to filter products by category.
- Create `select` that contains `unique` option of category.
- When you select option with category `Cooking` you see list of objects that contains category only `Cooking`.
- Add `default option` without any value that reset filter. For example You have some selected filter and click on `default option` and
- [ ] Use the `useEffect()` hook to update the displayed products whenever the selected category changes.

## Useful links

- [React useEffect](https://react.dev/reference/react/useEffect#reference)
- [React props](https://react.dev/learn/passing-props-to-a-component)

/label level::elementary
/label react::component
/label react::hook
