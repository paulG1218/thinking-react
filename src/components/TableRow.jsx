import ModeButtons from "./ModeButtons"
import DescriptionCell from "./DescriptionCell"
import RateCell from "./RateCell"
import HoursCell from "./HoursCell"
import formatCurrency from "../utils/formatCurrency"
import { useState } from "react"
import axios from "axios"

const TableRow = ({initialIsEditing, InitialInvoiceData, deleteFunc, id}) => {

    const [editMode, setEditMode] = useState(initialIsEditing)
    const [description, setDescription] = useState(InitialInvoiceData.description)
    const [rate, setRate] = useState(InitialInvoiceData.rate)
    const [hours, setHours] = useState(InitialInvoiceData.hours)

     const changeNormalMode = async () => {

        let bodyObj = {
            description: description,
            rate: rate,
            hours: hours
        }

        const response = await axios.put(`/editInvoice/${id}`, bodyObj)

        if (!response.data.error) {
            setEditMode(false)
        } else {
            console.log('oh shit')
        }


     }

     const changeEditMode = async () => {


        setEditMode(true)
     }

  return (
    <tr>
        <ModeButtons 
            isEditing={editMode}
            normalClick={changeNormalMode}
            editClick={changeEditMode}
            deleteFunc={deleteFunc}
        />

        <DescriptionCell 
            isEditing={editMode} 
            value={description}
            onValueChange={setDescription}
        />

        <RateCell 
            isEditing={editMode} 
            value={rate}
            onValueChange={setRate}
        />

        <HoursCell 
            isEditing={editMode} 
            value={hours}
            onValueChange={setHours}
        /> 
        <td>{formatCurrency(rate * hours)}</td>
    </tr>
  )
}

export default TableRow
