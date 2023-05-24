import React, {lazy, Suspense} from 'react'
import './App.scss'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'

const Home = lazy(() => import('./pages/home/Home'))
const MovieList = lazy(() => import('./pages/movieList/MovieList'))
const MovieDetails = lazy(() => import('./pages/movieDetails/MovieDetails'))

const App = () => {
 

  return (
    <>
    <Router>
      <Navbar/>
      <Suspense fallback = {<h4 style={{textAlign: "center"}}>Loading...</h4>}>
      <Routes>

        <Route path='/' element= {<Home/>} />
        <Route path='/movies/:type' element= {<MovieList/>} />
        <Route path='/movie/:id' element= {<MovieDetails/>} />

      </Routes>
      </Suspense>
    </Router>
    </>

  )
}

export default App
