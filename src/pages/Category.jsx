import { Box, Divider, Typography, styled } from "@mui/material"
import Header from "../components/Header"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import axios from "axios";
import MovieList from "../components/MovieList";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};
const StyledBanner=styled('img')({
    height:450,
    width:'100%',
})
const Comp=styled(Box)({
    width:'80%',
    margin:'auto'
})
const Container=styled(Box)({
    background:'#F5F5F5',
    padding:10
})
const Category=()=>{
    const [movies,setMovies]=useState([]);
    const {search}=useLocation();

 

    useEffect(()=>{
        const getData=async(API_URL)=>{
            try{

                let response= await axios(API_URL);
                setMovies(response.data.results);
            } 
            catch(error){
                console.log("Error",error.message)
            }
             
        }
         let API_URL;

        if(search.includes('upcoming')){
            API_URL='https://api.themoviedb.org/3/movie/upcoming?api_key=18d76df27d64052fb0a6511ba0d80ae4&language=en-US';
             
             
         }
       else if(search.includes('popular')){
           API_URL ='https://api.themoviedb.org/3/movie/popular?api_key=18d76df27d64052fb0a6511ba0d80ae4&language=en-US';
            

        }
        else if(search.includes('toprated')){
            API_URL= 'https://api.themoviedb.org/3/movie/top_rated?api_key=18d76df27d64052fb0a6511ba0d80ae4&language=en-US';
        
        }
        getData(API_URL);
    },[search]) 
return(<>
<Header />
 <Comp>
{
    console.log("API",movies)
}
<Carousel  swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={false}
        slidesToSlide={1}
        containerClass="react-multi-carousel-list"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        style={{ overflow: 'visible' }}
 
 
 >
 {
            movies.map(movie => (
              <>
                <StyledBanner key={movie.id} src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
            {/* <Title>{movie.original_title}</Title> */}
              </>
                ))
        }

 </Carousel>
 <Container>
    <Typography variant="h6">
        IMDb Charts 
    </Typography>
    <Typography variant="h4">
        IMDb {search.split('=')[1].charAt(0).toUpperCase() + search.split('=')[1].slice(1)} Movies
    </Typography>
    <Typography style={{fontSize:12,margin:5}}>IMDb Top {movies.length} as rated by IMDb voters.</Typography>
        <Divider />
        <MovieList movies={movies} />
 </Container>
 </Comp>
</>)
}
export default Category