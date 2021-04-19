import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
const Search = ({hideButtons=false}) => {
    const [input, setInput] = useState("");
    const history = useHistory();
    const search = e => {
        e.preventDefault();
        console.log("i hit the search button=>", input);
        history.push('/search')
    }
    return (
        <form className="Search">
            <div className="Search_input">
                <SearchIcon className="search_inputicon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
           
                <div className="search_buttons">
                    <button type="submit" onClick={search} variant="outlined">Google Search</button>
                    <button variant="outlined">I'm Feeling Lucky</button>
                </div>
        </form>
    )
}

export default Search;
