# Use Context Hook

You are working on an e-commerce website that sells products in multiple currencies, and your task is to implement a feature that allows users to change the currency of a product using a context in React. You have been provided with a local json-server that contains the list of convertRates and currencies. You can run it with `yarn server` command.

## Requirements

- Create a new context called `CurrencyContext` that will store the current currency and a function to update the currency.
- Create a new component called `CurrencyProvider` that will wrap the entire application and provide the `CurrencyContext` to all of its child components.
- In the `CurrencyProvider`, initialize the currency state with the default currency, and create a function called `setCurrency` that will update the currency state.
- Create a new component called `ProductCard` that will display the product information, including its price.
- In the `ProductCard` component, use the CurrencyContext.Consumer component to access the current currency and the setCurrency function from the CurrencyContext.
- Use the currency state to display the price of the product in the selected currency.
- Create a new component called `CurrencySelector` that will allow users to change the currency of the products.
- In the `CurrencySelector` component, create a list of currency options using a request to json-server with `/currencies` path, a select input with `data-testid="currency"` that allows users to choose a new currency and text with `data-testid="price"` that showing current price influenced by current currency.
- In the `CurrencySelector` component, use the `setCurrency` function from the `CurrencyContext` to update the currency of the products when a new currency is selected. Use `convertRates` path in json-server to convert the price to a new currency.
- Finally, render the `ProductCard` component and the `CurrencySelector` component inside the `CurrencyProvider`.
- Create a new component called `ColorSelector` that returns color selector with blue, green, and black options with `data-testid={color}` by clicking you need to add `selected` class, it allow users to change the color of the product.

By following these steps, you should be able to implement a feature that allows users to change the currency of the products using a context in React.

## File Structure

```tree
├── src
├── components
│   ├── ColorSelector.jsx
│   ├── CurrencySelector.jsx
│   ├── ProductCard.jsx
├── constants
    ├── index.js
├── context
    ├── CurrencyContext.jsx
```

## Design

This is an [example](https://www.figma.com/file/t2JCDidjzYyIOComjEYFES/Product-card?node-id=0%3A1&t=t2oIH3W5BxnGu0vz-1) for `ProductCard`

Good Luck! ;)

/label level::elementary
/label react::component
/label react::hook
/label react::state
