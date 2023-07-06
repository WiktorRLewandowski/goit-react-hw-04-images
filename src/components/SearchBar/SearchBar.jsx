import { FaSearch, FaGithub } from 'react-icons/fa'

export const SearchBar = ({ onSubmit, onChange, value}) => {
    return(
        <div className="wrapper">
            <p className="logo"><a href="./*">Catt&nbsp;O'Finder</a></p>
            <form onSubmit={onSubmit} className="search-form">
                <input 
                    className="search-input" 
                    type="text" 
                    name="searchQuery"
                    onChange={onChange}
                    value={value} 
                    autoComplete="off" 
                    placeholder="Search images..." />
                <button className="search-submit" type="submit"><FaSearch/></button>
            </form>
            <div className="contact"><a href="https://github.com/WiktorRLewandowski/goit-js-hw-11">
                <FaGithub/></a>
            </div>
        </div>
    )
}