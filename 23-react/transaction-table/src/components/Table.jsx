import PropTypes from 'prop-types'
import { TableRow } from './TableRow'

export const Table = ({ items }) => {
  return (
    <table role="table">
      <thead>
        <tr>
          <td>ID</td>
          <td>Company</td>
          <td>Share</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Amount</td>
          <td>Edit</td>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <TableRow key={item.id} columns={item} />
        ))}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      share: PropTypes.string.isRequired,
      comission: PropTypes.string,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      amount: PropTypes.string.isRequired,
    })
  ).isRequired,
}
