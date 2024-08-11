import { Component } from 'react'

const withPriceModel = (WrappedComponent, priceIncrease) => {
  class HOC extends Component {
    render() {
      const finalPrice = priceIncrease ? `£${50 + priceIncrease}` : '£50'

      return <WrappedComponent {...this.props} price={finalPrice} />
    }
  }

  return HOC
}

export default withPriceModel
