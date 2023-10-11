import formatCurrency from '../utils/formatCurrency.js'

const RateCell = ({isEditing, value}) => {
  return isEditing ? (
    <td>
        <input type="number" value={value} placeholder="Rate"/>
    </td>
  ):(
    <td>{formatCurrency(value)}</td>
  )
}

export default RateCell
