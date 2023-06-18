import Carousels from "../../../components/carousels/Carousels";
import useFetch from "../../../customHooks/useFetch";


const CategoryType = ({ title, endPoint }) => {
    const { data, isLoading, error } = useFetch(`/movie/${endPoint}`);
    return (
        !error &&
        <Carousels data={data} isLoading={isLoading} title={title} endPoint={endPoint} />
    )

}

export default CategoryType;