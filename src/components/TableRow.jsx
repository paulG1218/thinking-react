import ModeButtons from "./ModeButtons"
import DescriptionCell from "./DescriptionCell"
import RateCell from "./RateCell"
import HoursCell from "./HoursCell"
import formatCurrency from "../utils/formatCurrency"

const TableRow = ({initialIsEditing, InitialInvoiceData}) => {
  return initialIsEditing ? (
    <tr>
        <ModeButtons 
            isEditing={initialIsEditing}
        />

        <DescriptionCell 
            isEditing={initialIsEditing} 
        />

        <RateCell 
            isEditing={initialIsEditing} 
        />

        <HoursCell 
            isEditing={initialIsEditing} 
        /> 
    </tr>
  ):(
    <tr>
        <ModeButtons 
            isEditing={false} 

        />

        <DescriptionCell 
            isEditing={false} 
            value={InitialInvoiceData.description} 
            />

        <RateCell 
            isEditing={false} 
            value={InitialInvoiceData.rate} 
            />

        <HoursCell 
            isEditing={false} 
            value={InitialInvoiceData.hours} 
        /> 
        <td>
            {formatCurrency(InitialInvoiceData.rate * InitialInvoiceData.hours)}
        </td>
    </tr>
  )
}

export default TableRow
