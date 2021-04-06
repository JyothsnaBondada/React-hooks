import {useState, useEffect} from 'react';
import './TableRows.css';
function TableRows(){
    const [countries, setCountries] = useState([]);
    const url ='https://restcountries.eu/rest/v2/all';

    useEffect(
        ()=>{
            fetch(url)
            .then((response)=>response.json())
            .then((data)=>setCountries(data));
        }
    , []);

    return  (<>     
             {countries.map((data)=>(<tr className="rows">
                                        <td><img src={data.flag} alt = "Loading" className="image"/></td>
                                        <td>{data.name}</td>
                                        <td>{data.population}</td>
                                        <td>{data?.languages[0]?.name}</td>
                                        <td>{data.region}</td>
                            </tr>
             ))}
        </>);
}

export default TableRows;