import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useNavigate();
    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };

    return (
        <form
            action="/"
            method="get"
            autoComplete="off"
            onSubmit={onSubmit}
            
        >
            <label htmlFor="header-search">
                <span className="visually-hidden">
                    Search reviews 
                </span>
            </label>
            <input
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Enter an album you wish to see a review for"
                name="s"
            />

            <button type="submit"><FaSearch/></button>
            
        </form>
    );
};

export default SearchBar;
