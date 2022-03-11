import React from 'react';
import './ArtistProfile.css';
import {useLocation} from 'react-router-dom'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const ArtistProfile = () => {
    const location = useLocation();
    const artist = location.state.artist;
    const albums = location.state.album;
    const testurl = location.state.url;
    const albumlist = Object.keys(albums)
    const bio = location.state.bio;
    const url = "https://www.weact.org/wp-content/uploads/2016/10/Blank-profile.png";
    //let str = ""
    const AlbumGrid = [];
    for(let element in albumlist){
        AlbumGrid.push(
    
                <Card sx={{ width: 200, display: 'flex', flexDirection: 'column', padding: 1, paddingBottom: 3 }}>
                    <a href={albums[albumlist[element]].albumURL} target="_blank">
                        <CardMedia
                            compontent="img"
                            sx={{ height: 200, paddingTop: 2 }}
                            image={albums[albumlist[element]].imgURL} 
                            alt={albumlist[element]}
                        />
                    </a>
                    <Grid item sx={{ height: 35, paddingTop: 1}}>
                        <Typography variant="body2" textAlign="center">{albumlist[element]}</Typography>
                    </Grid>
                </Card>          
            )
    }

    return (
        <div className="artistprofile">
        
            <Typography variant="h3" textAlign="center">{artist} </Typography>
            <img src={testurl} alt={artist}/>

            <p className="bio" >{bio}</p>
            <Typography variant="h6" textAlign="center">Write a review on {artist}'s albums!</Typography>
            <p className="instruction">Click on an album cover to listen on Spotify.</p>
            
            <Grid container justifyContent='center' spacing={6}>         
                {AlbumGrid}          
            </Grid>
        
                
        </div>
    )
}

export default ArtistProfile;
