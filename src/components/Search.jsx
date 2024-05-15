import { useContext } from 'react';
import { productsContext } from '../context/ProductsContext';
import { FaSearch } from "react-icons/fa";
import "../styles/Search.css"

function Search() {
    const { query, handleQuery } = useContext(productsContext);
    return (
        <>
            <form className="search-container">
                <input
                    type="search"
                    name=''
                    id=''
                    placeholder='jacket, watch, shoes...'
                    onChange={(e) => handleQuery(e.target.value)} />
                <button>
                    <FaSearch />
                </button>
            </form>

        </>
    );
}

export default Search