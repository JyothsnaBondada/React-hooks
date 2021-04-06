import TableHeader from './TableHeader';
import TableRows from './TableRows';
import './Table.css';


function Table(){

    return  <>
                <table className="table">
                    <TableHeader />
                    <TableRows />
                </table>
            </>
}
export default Table;