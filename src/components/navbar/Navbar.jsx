import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/Movieslogo.png'
import './Navbar.scss';

const Navbar = () => {
  const [menuOn, setMenuOn] = useState(false);
  const [searchOn, setSearchOn] = useState(false);
  return (
    // <div className='navbar'>
    //     <div className="sm-container">
    //             <Link to ="/"><span><img src={logo}/>LetsFix</span></Link>
    //         <ul>
    //             <li><Link to = "/movies/popular">Popular</Link></li>
    //             <li><Link to = "/movies/top_rated">Top Rated</Link></li>
    //             <li><Link to = "/movies/upcoming">Upcoming</Link></li>
    //         </ul>
    //     </div>
    // </div>
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

          <input type="text" className={searchOn ? "input-area on" : "input-area"} placeholder='search movies here....' />
        </div>

        <ul className={menuOn ? "categories on" : "categories"} >
          <li className="cat-type"><Link to="/movies/popular">Popular</Link></li>
          <li className="cat-type"><Link to="/movies/top_rated">Top Rated</Link></li>
          <li className="cat-type"><Link to="/movies/upcoming">Upcoming</Link></li>
        </ul>

        <button className='menu-btn' onClick={() => { searchOn && setSearchOn(!searchOn); setMenuOn(!menuOn); }}>

          {menuOn ? <i className="fa-solid fa-times"></i> : <i className="fa-solid fa-bars"></i>}

        </button>
      </div>
    </header>
  )
}

export default Navbar