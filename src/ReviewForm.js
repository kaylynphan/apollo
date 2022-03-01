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

function AlbumSelect() {
  const [album, setAlbum] = useState('');

  const handleChange = (event) => {
    setAlbum(event.target.value);
  };
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
                <MenuItem value={0}>Red</MenuItem>
                <MenuItem value={1}>Speak Now</MenuItem>
                <MenuItem value={2}>Red (Taylor's Version)</MenuItem>
                <MenuItem value={3}>Lover</MenuItem>
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

function ReviewForm() {
    return (
        <Paper elevation={3} sx={{ width: 400, p: 3 }}>
            <Typography variant="h4">Submit a Review</Typography>
            <Stack spacing={2} sx={{ p : 2}}>
                <TextField 
                    disabled
                    id="outlined-disabled" 
                    label="Artist" 
                    defaultValue="Artist"
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