
const ModeButtons = ({isEditing, normalClick, editClick, deleteFunc}) => {

  return isEditing ? (
    <td>
        <button onClick={normalClick}>Save</button>
    </td>
  ):(
    <td>
        <button onClick={deleteFunc}>Delete</button>
        <button onClick={editClick}>Edit</button>
    </td>
  )
}

export default ModeButtons
