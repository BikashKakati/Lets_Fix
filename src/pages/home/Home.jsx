
import './Home.scss';
import SliderPoster from '../../components/sliderPoster/SliderPoster';
import CategorySlider from '../../components/categorySlider/CategorySlider';



const Home = () => {
    //https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US
    //`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`



    return(
        <>
        <SliderPoster/>
        <CategorySlider  type="top_rated"/>
        <CategorySlider  type="popular"/>
        <CategorySlider  type="upcoming"/>
        
        </>
    )

}

export default Home