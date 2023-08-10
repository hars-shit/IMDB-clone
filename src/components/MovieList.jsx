import { Star } from "@mui/icons-material"
import { List, ListItem, Typography, styled } from "@mui/material"

const Banner=styled('img')({
    width:47
})
const Con=styled(List)({
    display:'flex'
})
const MovieList=({movies})=>{
     return(
        <>
        {
            movies.map(movie=>(
               <Con>
                <ListItem>
                    <Banner src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="poster" />
                </ListItem>
                <ListItem>
                    <Typography>
                        {movie.original_title}
                    </Typography>
                </ListItem>
                <ListItem>
                    <Star color="warning"/>
                    <Typography>{movie.vote_average}</Typography>
                </ListItem>
                <ListItem>
                    <Typography>{movie.release_date}</Typography>
                </ListItem>
               </Con>
            ))
        }
        
        </>
     )
}
export default MovieList