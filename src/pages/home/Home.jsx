
import './Home.scss';
import SliderPoster from '../../components/sliderPoster/SliderPoster';
import CategoryType from './carousels/CategoryType';



const Home = () => {



    return (
        <>
            <SliderPoster />
            <CategoryType title="Top Rated" endPoint="top_rated" />
            <CategoryType title="Most Popular" endPoint="popular" />
            <CategoryType title="Upcoming" endPoint="upcoming" />
        </>
    )

}

export default Home