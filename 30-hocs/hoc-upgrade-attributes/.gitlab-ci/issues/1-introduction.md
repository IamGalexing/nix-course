# HOC Upgrade Attributes

You're building a new feature on your e-commerce site which displays two computer specs - basic and pro.

The `PcDisplay` component is already built and expects 5 props. `{ title, price, cpu, ram, ssd }`

```jsx
const PcDisplay = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
     <p data-testid="price" id="price">
      <ul>
        <li><label>CPU</label> <span>{props.cpu}</span></li>
        <li><label>RAM</label> <span>{props.ram}</span></li>
        <li><label>SSD</label> <span>{props.ssd}</span></li>
      </ul>
    </div>
  );
};

```

You will need to build a `withPriceModel` HOC and using that to manage the price of the `BasicModel` and `ProModel` components.

- Build a HOC called `withPriceModel` which takes the `PcDisplay` component for the first param and the price increase number for the second param.

- `withPriceModel` will manage the price and must set a default price of 50.

- `BasicModel` should use the default price set by `withPriceModel`

- `ProModel` should use `withPriceModel` to increase the price by 60. The total price should be 110.

- Since the `withPriceModel` is responsible for managing the price, ensure that it can't be overwritten by passing in a price prop.

## Useful links

- More about HOC: [ReactJS docs](https://legacy.reactjs.org/docs/higher-order-components.html)

/label level::elementary
/label react::component
/label react::event
/label react::state
