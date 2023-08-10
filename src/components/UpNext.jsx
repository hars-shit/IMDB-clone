import { Box, Typography, styled } from "@mui/material"


const Comp=styled(Box)({
    width:'40%',
    display:'flex',
    flexDirection:'column',
    alignItems:'baseline',
    paddingLeft:20,

    '& > p':{
        color:'#F5C518',
        fontWeight:600,
        fontSize:18,
        marginBottom:10

    },
})
const Wrapper=styled(Box)({
    color:'#FFFFFF',
    display:'flex',
    '& > p':{
        marginLeft:20,
    }

})
const Poster=styled('img')({
    width:88
})
const UpNext=({movies})=>{
    return(
        <Comp>
            <Typography>
                Up Next
            </Typography>
            {
                movies.splice(0,3).map(movie=>(
                    <Wrapper key={movie.id}>
                        <Poster src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                    <Typography>{movie.original_title}</Typography>
                    </Wrapper>
                ))
            }
        </Comp>
    )
}
export default UpNext