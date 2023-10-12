import './App.css';
import DescriptionCell from './components/DescriptionCell';
import HoursCell from './components/HoursCell';
import InvoiceTable from './components/InvoiceTable';
import ModeButtons from './components/ModeButtons';
import RateCell from './components/RateCell';
import TableHeader from './components/TableHeader';
import TableRow from './components/TableRow';




function App({initialData}) {
  return (
    <>
    <InvoiceTable InitialInvoiceData={initialData}/>
    </>
)}

export default App;
