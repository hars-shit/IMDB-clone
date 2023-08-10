import { Box } from "@mui/material";
import { Fragment } from "react";
 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
const Banner=({movies})=>{
    return (
        <Box>{
            console.log("DD",movies)}
         <Carousel responsive={responsive}>
            {
                movies.map(movie=>{
                 

                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.sIMaRhEHogXQcRyPIRNyMQHaLI%26pid%3DApi%26h%3D160&f=1&ipt=dd61c394ca929163a09f2c06cfd6fce6106c96cb8c2eafc01a2828522480a946&ipo=images" alt="" />
                    
                })
            }
                    {/* <img key={movie.id} src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="img"/> */}
                
         </Carousel>
        </Box>
    )
}
export default Banner 