import React,{ useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import './index.css';

function SearchBar() {
  const [searchValue,setSearchValue] = useState('fdas');

  console.log(searchValue);

  return (
    <form className="search-bar">
      <input 
        value={searchValue}
        type="search" 
        placeholder="Buscar produtos" 
        onChange={(event) => setSearchValue(event.target.value)}
        className="search__input" 
        required 
      />
   
      {/* {searchValue} */}
      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
