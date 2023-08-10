import axios from "axios";

export const catMovies=async (API_URL)=>{
    try{
       let respose= await axios.get(API_URL);
      return respose.data
    }
    catch{
        console.log('Error ini API',error.message);
        return error.respose.data;
    }
}