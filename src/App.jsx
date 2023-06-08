import React, { lazy, Suspense } from 'react'
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Spinner from './components/spinner/Spinner'
import PageNotFound from './pages/404/PageNotFound'
import SearchResults from './pages/searchResults/SearchResults'
import Footer from './components/footer/Footer'

const Home = lazy(() => import('./pages/home/Home'))
const MovieExplore = lazy(() => import('./pages/moviesExplore/MoviesExplore'))
const MovieDetails = lazy(() => import('./pages/details/Details'))
const WishList = lazy (()=> import('./pages/wishlist/WishList'))
const App = () => {


  return (
    <div className="main-container">
      <Router>
        <Navbar />
        <Suspense fallback={<Spinner initial={true}/>}>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/explore/:type' element={<MovieExplore />} />
            <Route path='/details/:id' element={<MovieDetails />} />
            <Route path='/search/:query' element={<SearchResults />} />
            <Route path='/wishlist' element={<WishList/>}/>
            <Route path='*' element={<PageNotFound />} />

          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>

  )
}

export default App
