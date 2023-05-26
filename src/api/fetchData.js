import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "api_key=4e44d9029b1270a757cddc766a1bcb63";


const fetchDataFromApi = async() =>{
    try{
        const {data} = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
    }
}