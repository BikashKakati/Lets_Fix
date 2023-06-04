
import './Home.scss';
import SliderPoster from '../../components/sliderPoster/SliderPoster';
import CategoryType from './carousels/CategoryType';



const Home = () => {
    //https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US
    //`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`



    return(
        <>
        <SliderPoster/>
        <CategoryType title = "Top Rated"  endPoint="top_rated"/>
        <CategoryType title = "Most Popular"  endPoint="popular"/>
        <CategoryType title = "Upcoming"  endPoint="upcoming"/>
        </>
    )

}

export default Home