
const HoursCell = ({isEditing, value}) => {
  return isEditing ? (
    <td>
        <input type="text" value={value} placeholder="Hours"/> 
    </td>
  ):(
    <td>{value}</td>
  )
}

export default HoursCell
