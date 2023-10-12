
const HoursCell = ({isEditing, value, onValueChange}) => {
  return isEditing ? (
    <td>
        <input 
            type="number" 
            onChange={(e) => onValueChange(e.target.value)}
            value={value}
            placeholder="Hours"
        /> 
    </td>
  ):(
    <td>{value}</td>
  )
}

export default HoursCell
