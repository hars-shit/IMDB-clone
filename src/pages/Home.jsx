import { Fragment, useEffect, useState } from "react"
import Header from "../components/Header"

import axios from "axios";
import { Box, styled } from "@mui/material";
import Banner from "../components/Banner";
import UpNext from "../components/UpNext";
import Slide from "../components/Slide";



const Wrapper=styled(Box)({
    display:'flex',
    padding:'20px 0px'
})
const Comp=styled(Box )({
    padding:'0 115px'
})
const Home=()=>{
    const [movies,setMovies]=useState([]);
   
    useEffect(()=>{
        const getData=async()=>{
            let response=await axios("https://api.themoviedb.org/3/movie/now_playing?api_key=18d76df27d64052fb0a6511ba0d80ae4&language=en-US");
            setMovies(response.data.results);
            
        }
        getData();
    },[])
    return(
        <Fragment>
        { console.log("HEHE",movies)}
        
       <Header />
       <Comp>
        
        <Wrapper>
           <Banner movies={movies} />
           <UpNext movies={movies} />
        </Wrapper>
           <Slide movies={movies} />
           <Slide movies={movies} />
           <Slide movies={movies} />
           <Slide movies={movies} />
           <Slide movies={movies} />
       </Comp>
       </Fragment >
    )
}
export default Home