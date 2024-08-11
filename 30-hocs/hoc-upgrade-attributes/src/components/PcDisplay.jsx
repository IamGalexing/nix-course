import PropTypes from 'prop-types'

export const PcDisplay = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p data-testid="price" id="price">
        £{props.price}
      </p>
      <ul>
        <li>
          <label>CPU</label> <span>{props.cpu}</span>
        </li>
        <li>
          <label>RAM</label> <span>{props.ram}</span>
        </li>
        <li>
          <label>SSD</label> <span>{props.ssd}</span>
        </li>
      </ul>
    </div>
  )
}

PcDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  cpu: PropTypes.string.isRequired,
  ram: PropTypes.string.isRequired,
  ssd: PropTypes.string.isRequired,
}
