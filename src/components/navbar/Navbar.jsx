import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../assets/Movieslogo.png'
import './Navbar.scss';

const Navbar = () => {
  const [menuOn, setMenuOn] = useState(false);
  const [searchOn, setSearchOn] = useState(false);
  const [query, setQuery] = useState("");
  const Navigate = useNavigate();

  const searchQuery = (e) => {
    if (e.key === "Enter" && !!query) {
      Navigate(`/search/${query}`)
      setQuery("")
    }
  }

  return (

    <header className="navbar">
      <div className="wrapper">
        <Link to="/">
          <div className="left-box">
            <img src={logo} className='logo-img' />
            <h1 className="logo"><span className="logo-colorWhite">Lets</span>Fix</h1>
          </div>
        </Link>

        <div className="input-box">

          <i className="fa fa-search" aria-hidden="true" onClick={() => { menuOn && setMenuOn(!menuOn); setSearchOn(!searchOn); }}></i>

          <input type="text" className={searchOn ? "input-area on" : "input-area"} placeholder='search movies here....' value={query} onChange={(e) => { setQuery(e.target.value) }} onKeyUp={searchQuery} />
        </div>

        <ul className={menuOn ? "categories on" : "categories"} onClick={() => { setMenuOn(!menuOn) }}>
          <li className="cat-type"><Link to="/explore/popular">Popular</Link></li>
          <li className="cat-type"><Link to="/explore/top_rated">Top Rated</Link></li>
          <li className="cat-type"><Link to="/explore/upcoming">Upcoming</Link></li>
          <li className="cat-type"><Link to="/wishlist">Favourite</Link></li>
        </ul>

        <button className='menu-btn' onClick={() => { searchOn && setSearchOn(!searchOn); setMenuOn(!menuOn); }}>

          {menuOn ? <i className="fa-solid fa-times"></i> : <i className="fa-solid fa-bars"></i>}

        </button>
      </div>
    </header>
  )
}

export default Navbar