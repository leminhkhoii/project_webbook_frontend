import React, { ChangeEvent, useState } from "react";

interface NavbarProps{
  wordForSearch: string;
  setWordForSearch: (word: string) =>void;
}

function Navbar({wordForSearch, setWordForSearch}: NavbarProps){


  const [tempWord, setTempWord] = useState('');

  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>)=>{
    // search khi nhập từ khóa chưa cần bấm search vẫn sẽ hiển thị khi người dùng nhập từ khóa
   // setWordForSearch(e.target.value);
    setTempWord(e.target.value); 
  }
const handleSearch = ()=>{
  //search khi nhập từ khóa chưa cần bấm search vẫn sẽ hiển thị khi người dùng nhập từ khóa
  //setWordForSearch(wordForSearch);
  setWordForSearch(tempWord);
}
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Bookstore</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Genres
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                  <li><a className="dropdown-item" href="#">Anime</a></li>
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Science</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
  
          {/* Tìm kiếm */}
          <div className="d-flex">
            <input className="form-control me-2" type="search" placeholder="What are u looking for?" aria-label="Search" onChange={onSearchInputChange} value={tempWord}/>
            <button className="btn btn-outline-success" type="button" onClick={handleSearch}>Search</button>
          </div>
  
          {/* Biểu tượng giỏ hàng */}
          <ul className="navbar-nav me-1">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
  
          {/* Biểu tượng đăng nhập */}
          <ul className="navbar-nav me-1">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-user"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
}
export default Navbar
