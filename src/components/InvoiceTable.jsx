import './InvoiceTable.css';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import AddButton from './AddButton';

const InvoiceTable = ({InitialInvoiceData}) => {

    const rows = InitialInvoiceData.map((invoiceItem) => {

        const{id, description, rate, hours} = invoiceItem

        return (
            <TableRow 
                key={id}
                InitialInvoiceData={{description, rate, hours}}
                initialIsEditing={false}
            />
        )
    })

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
                    <AddButton />
                </tfoot>
            </table>
        </div>
        
    )
}

export default InvoiceTable