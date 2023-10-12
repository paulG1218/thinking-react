import React from 'react'

const DescriptionCell = ({isEditing, value, onValueChange}) => {
  return isEditing ?(
    <td>
        <input 
            type="text" 
            placeholder='Description'
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
        />
</td>
  ):(
    <td>{value}</td>
  )
}

export default DescriptionCell
