import PropTypes from 'prop-types'
import { TableCell } from './TableCell'

export const TableRow = ({ columns }) => {
  return (
    <tr role="row">
      {Object.keys(columns).map((key) => {
        if (key !== 'commision') {
          return <TableCell key={key}>{columns[key]}</TableCell>
        }
      })}
      <TableCell>
        <button>Edit</button>
      </TableCell>
    </tr>
  )
}

TableRow.propTypes = {
  columns: PropTypes.shape({
    id: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    share: PropTypes.string.isRequired,
    comission: PropTypes.string,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    amount: PropTypes.string.isRequired,
  }).isRequired,
}
