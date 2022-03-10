import React from 'react';
import './ArtistProfile.css';
import {useLocation} from 'react-router-dom'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const ArtistProfile = () => {
    const location = useLocation();
    const artist = location.state.artist;
    const albums = location.state.album;
    const testurl = location.state.url;
    const albumlist = Object.keys(albums)
    const bio = location.state.bio;
    const url = "https://www.weact.org/wp-content/uploads/2016/10/Blank-profile.png";
    let str = ""
    const AlbumGrid = [];
    for(let element in albumlist){
        AlbumGrid.push(
            <Grid item xs={6}>
                <div className = "album">
                    <h4>{albumlist[element]}</h4>
                    <img src={albums[albumlist[element]].imgURL} alt={albumlist[element]}/>
                </div>
            </Grid> )
    }

    for(let element in albumlist){
        str += albumlist[element];
        if (element < albumlist.length - 1){
            str += ", "
        }
    }
        

    return (
            <div className="artistprofile">
                <h2>{artist} </h2>
                <img src={testurl} alt={artist}/>
                <h4 className="bio">{bio}</h4>
                <h3>Here is a list of {artist}'s albums</h3>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {AlbumGrid}
                    </Grid>
                    
                </Box>
            </div>
    )
    
            
        
    
}

export default ArtistProfile;
