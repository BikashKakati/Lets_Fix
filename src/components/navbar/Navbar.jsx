import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/Movieslogo.png'
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="sm-container">
                <Link to ="/"><span><img src={logo}/>LetsFix</span></Link>
            <ul>
                <li><Link to = "/movies/popular">Popular</Link></li>
                <li><Link to = "/movies/top_rated">Top Rated</Link></li>
                <li><Link to = "/movies/upcoming">Upcoming</Link></li>
            </ul>
            {/* <button>Log In</button> */}
        </div>
    </div>
  )
}

export default Navbar