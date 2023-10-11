import React from 'react'

const DescriptionCell = ({isEditing, value}) => {
  return isEditing ?(
    <td>
        <input type="text" value={value} placeholder='Description'/>
</td>
  ):(
    <td>{value}</td>
  )
}

export default DescriptionCell
