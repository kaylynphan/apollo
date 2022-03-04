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

function AlbumSelect() {
  const [album, setAlbum] = useState('');
  const location = useLocation();
  const artist = location.state.artist;
  const albums = location.state.album;
  const albumlist = Object.keys(albums)
  const handleChange = (event) => {
    setAlbum(event.target.value);
  };
  const EachArtistAlbum = [];
  for(let element in albumlist){
    EachArtistAlbum.push(<MenuItem value={element}>{albumlist[element]}</MenuItem>)
}
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Album</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={album}
                label="Album"
                onChange={handleChange}
            >
                <div>{EachArtistAlbum}</div>
            </Select>
        </FormControl>
    );
}

function AlbumRating() {
    const [value, setValue] = React.useState(0);

    return (
        <Box>
            <Typography component="legend">Rating</Typography>
            <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            />
        </Box>
    );
}

function ReviewForm(props) {
    const location = useLocation();
    const artist = location.state.artist;
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
                <AlbumSelect />
                <AlbumRating />
                <TextField 
                    required
                    multiline
                    id="outlined-multiline-flexible"
                    maxRows={4}
                    label="Your Review"
                    variant="outlined"
                    size="small"
                />
                <Button variant="contained">Submit</Button>
            </Stack>
        </Paper>
    )
}

export default ReviewForm;