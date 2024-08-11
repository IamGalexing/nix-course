import PropTypes from 'prop-types'

export const TableCell = ({ children }) => {
  return <td role="cell">{children}</td>
}

TableCell.propTypes = {
  children: PropTypes.node.isRequired,
}
