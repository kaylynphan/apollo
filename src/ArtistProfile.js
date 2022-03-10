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
    const bio = "This artist is a person. Born on this day. Became famous blah blah blah"
    const url = "https://www.weact.org/wp-content/uploads/2016/10/Blank-profile.png";
    //let str = ""
    console.log(albums);
    const AlbumGrid = [];
    for(let element in albumlist){
        AlbumGrid.push(
    
                <Card sx={{ width: 200, display: 'flex', flexDirection: 'column', padding: 1 }}>
                    <Typography variant="h6" textAlign="center">{albumlist[element]}</Typography>
                    <CardMedia
                        compontent="img"
                        sx={{ height: 200, paddingTop: 2 }}
                        image={albums[albumlist[element]].imgURL} 
                        alt={albumlist[element]}
                    />
                </Card>
                
                /*
                <div className = "album">
                    <h4>{albumlist[element]}</h4>
                    <img src={albums[albumlist[element]].imgURL} alt={albumlist[element]}/>
                </div>
                */
                
            )
    }

    /*
    for(let element in albumlist){
        str += albumlist[element];
        if (element < albumlist.length - 1){
            str += ", "
        }
    }
    */
    
        

    return (
            <div className="artistprofile">
                <h2>Artist: {artist} </h2>
                <img src={testurl} alt={artist}/>
                <p>Here we would display reviews for {artist}'s albums.</p>
                <h4 className="bio">Bio: {bio}</h4>
                <h3>Here is a list of all {artist}'s albums</h3>
                
                <Grid container sx={{ justifyContent: 'center'}}>
                    <Grid item sx={{ width: 880, columns: 4, justifyContent: 'space-between'}}>
                        {AlbumGrid}
                    </Grid>
                </Grid>
                
                
            </div>
    )
    
            
        
    
}

export default ArtistProfile;
