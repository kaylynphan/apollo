import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

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

function ReviewForm() {
    return (
        <Paper elevation={3} sx={{ width: 400 }}>
            <Stack spacing={2} sx={{ p : 2}}>
                <TextField 
                    required
                    id="outlined-basic" 
                    label="Artist" 
                    variant="outlined"
                    fontsize
                    sx={{ width: '20ch' }} 
                    size="small"
                />
                <AlbumSelect />
                <TextField 
                    required
                    multiline
                    id="outlined-multiline-flexible"
                    maxRows={4}
                    label="Your Review"
                    variant="outlined"
                    size="small"
                    
                />
            </Stack>
        </Paper>
    )
}

export default ReviewForm;