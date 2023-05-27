import React, {lazy, Suspense} from 'react'
import './App.scss'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import PageNotFound from './pages/404/PageNotFound'
import SearchResults from './pages/searchResults/SearchResults'

const Home = lazy(() => import('./pages/home/Home'))
const MovieExplore = lazy(() => import('./pages/moviesExplore/MoviesExplore'))
const MovieDetails = lazy(() => import('./pages/movieDetails/MovieDetails'))

const App = () => {


  return (
    <>
    <Router>
      <Navbar/>
      <Suspense fallback = {<h4 style={{textAlign: "center"}}>Loading...</h4>}>
      <Routes>

        <Route path='/' element= {<Home/>} />
        <Route path='/explore/:type' element= {<MovieExplore/>} />
        <Route path='/details/:id' element= {<MovieDetails/>} />
        <Route path='/search/:query' element={<SearchResults/>}/>
        <Route path='*' element={<PageNotFound/>}/>

      </Routes>
      </Suspense>
    </Router>
    </>

  )
}

export default App
