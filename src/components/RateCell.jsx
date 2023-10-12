import formatCurrency from '../utils/formatCurrency.js'

const RateCell = ({isEditing, value, onValueChange}) => {
  return isEditing ? (
    <td>
        <input 
            type="number" 
            onChange={(e) => onValueChange(e.target.value)}
            placeholder="Rate"
            value={value}
        />
    </td>
  ):(
    <td>{formatCurrency(value)}</td>
  )
}

export default RateCell
