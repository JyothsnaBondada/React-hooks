import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SearchBar.css';
function SearchBar(){
    return ( <>
                <header>
                    <div className="searchcontainer">
                        <input type="text" placeholder="search..." className="searchbox"/>
                        <FontAwesomeIcon icon={faSearch} className="icon"/>
                    </div>
                </header>
            </>);
}
export default SearchBar;