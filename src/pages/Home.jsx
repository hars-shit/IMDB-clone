import { Fragment, useEffect, useState } from "react"
import Header from "../components/Header"

import axios from "axios";
import { Box } from "@mui/material";
import Banner from "../components/Banner";




const Home=()=>{
    const [movies,setMovies]=useState([]);
   
    useEffect(()=>{
        const getData=async()=>{
            let response=await axios("https://api.themoviedb.org/3/movie/now_playing?api_key=18d76df27d64052fb0a6511ba0d80ae4&language=en-US");
            setMovies(response.data);
            console.log("response",response.data)
        }
        getData();
    },[])
    return(
        <Fragment>
        { console.log("HEHE",movies)}
        
       <Header />
        <Box>
           <Banner movies={movies} />
        </Box>
       </Fragment >
    )
}
export default Home