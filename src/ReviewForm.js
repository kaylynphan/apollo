import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {useLocation} from 'react-router-dom'
import {addDoc, collection} from 'firebase/firestore'
import {db, auth} from './firebase';

function ReviewForm(props) {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    const [value, setValue] = React.useState("");
    const location = useLocation();
    const artist = location.state.artist;
    const [review, setReview] = React.useState("")
    const [album, setAlbum] = React.useState("");
    const reviewCollection = collection(db, "Reviews")
    const albums = location.state.album;
    const albumlist = Object.keys(albums)
    const handleChange = event => {
        setAlbum(event.target.album);
        console.log("inside handle change")
        console.log(album)
      };
    const leaveReview = async () =>  {
        await addDoc(reviewCollection, {
            artist: artist, 
            dislikes: 0, 
            likes: 0, 
            rating: value,
            album: album, 
            review: review, 
            user: auth.currentUser.displayName,
        });
        props.handleSubmissions();
    }
    const EachArtistAlbum = [];
  for(let element in albumlist){
    EachArtistAlbum.push(<MenuItem value={albumlist[element]}>{albumlist[element]}</MenuItem>)
    //EachArtistAlbum.push(albumlist[element])
}

    return (
        <Paper elevation={3} sx={{ width: 400, p: 3 }}>
            <Typography variant="h4">Submit a Review</Typography>
            <Stack spacing={2} sx={{ p : 2}}>
                <TextField 
                    disabled
                    id="outlined-disabled" 
                    label="Artist"
                    defaultValue={artist}
                    variant="outlined"
                    fontsize
                    sx={{ width: '20ch' }} 
                    size="small"
                />
            {/*////////////////////////////////////
            ////albumselect 
            /////////////////////////////////////*/}
            
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Albums</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={album}
                label="Album"
                onChange={(event) => {setAlbum(event.target.value)}}
                options={EachArtistAlbum}
            >
                {EachArtistAlbum}
            </Select>
            </FormControl>
            {/*////////////////////////////////////
            ////albumRating
            /////////////////////////////////////*/}
                <Box>
                <Typography component="legend">Rating</Typography>
                <Rating
                name="simple-controlled"
                value={value}
                onChange={(event) => {setValue(event.target.value)}}
                />
                </Box>
            {/*////////////////////////////////////
            ////ReviewForm 
            /////////////////////////////////////*/}
                <TextField 
                    required
                    multiline
                    id="outlined-multiline-flexible"
                    maxRows={4}
                    label="Your Review"
                    variant="outlined"
                    size="small" value={review} 
                    onChange={(event) => {setReview(event.target.value)}}
                />
                { isAuth ? 
                <Button variant="contained" onClick={leaveReview}>Submit</Button>
                :<Button variant="contained">Log In to leave a review!</Button>
                }
                
            </Stack>
        </Paper>
    )
}

export default ReviewForm;