import { useSelector } from 'react-redux';
import './WishList.scss';
import Cards from '../../components/cards/Cards';
import noResultsFound from '../../assets/no-results.png';
const WishList = () =>{
    const {wishList} = useSelector((state) => state.wishList);
    
    return(

        <div className='wishlist-container'>
            <div className="wrapper">
                <div className="inner-container">
                    <div className="top-items">
                        <h4 className="movie-typeText">Wish List</h4>
                    </div>
                    {
                        
                        !wishList.length ?
                        ( 
                            <div className="no-resultImg">
                                <img src={noResultsFound} />
                            </div>
                        )
                        :
                        (
                            wishList?.map((movie) => (
                                <Cards key={movie?.id} movieData={movie} />
                            ))
                            
                        )

                    }
                </div>
            </div>
        </div>

    )
}

export default WishList;