import { render, screen } from '@testing-library/react'
import { BasicModel, ProModel, withPriceModel } from './App'

describe('Setup basic and pro models', () => {
  it('basic & pro models should be React components', () => {
    expect(typeof BasicModel).toBe('function')
    expect(typeof ProModel).toBe('function')
  })
})

describe('Show upgrade from basic model computer', () => {
  it('basic PC model props', () => {
    render(<BasicModel cpu="i3" ram="4gb" ssd="128gb" title="Base computer" />)
    expect(screen.getByText('i3')).toBeInTheDocument()
    expect(screen.getByText('4gb')).toBeInTheDocument()
    expect(screen.getByText('128gb')).toBeInTheDocument()
    expect(screen.getByTestId('price')).toHaveTextContent('£50')
  })

  it('Pro model props', () => {
    render(<ProModel cpu="i7" ram="16gb" ssd="512gb" title="Pro computer" />)
    expect(screen.getByText('i7')).toBeInTheDocument()
    expect(screen.getByText('16gb')).toBeInTheDocument()
    expect(screen.getByText('512gb')).toBeInTheDocument()
    expect(screen.getByTestId('price')).toHaveTextContent('£110')
  })

  it("can't override price directly through ProModel props", () => {
    render(<ProModel price={1000} title="Pro computer" />)
    expect(screen.getByTestId('price')).toHaveTextContent('£110')
  })

  it('withPriceModel returns a function', () => {
    const Fake = () => <p>data</p>
    const PriceFake = withPriceModel(Fake)
    expect(typeof PriceFake).toBe('function')
  })

  it("allow other 'display' components to be passed in `withPriceModel`", () => {
    const AnotherPcDisplay = () => <p>data</p>
    const PriceFake = withPriceModel(AnotherPcDisplay, {})
    render(<PriceFake />)
    expect(screen.getByText('data')).toBeInTheDocument()
  })
})
