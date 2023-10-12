import './InvoiceTable.css';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import AddButton from './AddButton';
import { useState } from 'react';
import axios from 'axios';

let globalId = 4

const InvoiceTable = ({InitialInvoiceData}) => {

    const [currentData, setCurrentData] = useState(InitialInvoiceData)

    const rows = currentData.map((invoiceItem) => {

        const{id, description, rate, hours, isEditing} = invoiceItem

        return (
            <TableRow 
                key={id}
                InitialInvoiceData={{description, rate, hours}}
                initialIsEditing={isEditing}
                deleteFunc={() => deleteRow(id)}
                id = {id}
            />
        )
    })
    const addRow = async () => {

        const response = await axios.post('/addinvoice', {description: 'Job description'}) 

        setCurrentData([...currentData, response.data])
    }

    const deleteRow = async (id) => {

        const response = await axios.delete(`/deleteInvoice/${id}`)

        console.log(response.data)

        const fliteredList = currentData.filter((item) => item.id !== id)

        setCurrentData(fliteredList)
    }


    return (           
        <div>
            <table>

                <thead>
                    <TableHeader />
                </thead>

                <tbody>
                    {rows}
                </tbody>
                <tfoot>
                    <AddButton 
                        addClick={addRow}
                    />
                </tfoot>
            </table>
        </div>
        
    )
}

export default InvoiceTable