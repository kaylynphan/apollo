import React from 'react';
import './ArtistProfile.css';
import albums from "./albums.json"
import {useLocation} from 'react-router-dom'
import { render } from '@testing-library/react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const ArtistProfile = () => {
    const location = useLocation();
    const artist = location.state.artist;
    const albums = location.state.album;
    const url = location.state.url;
    const url = "https://www.weact.org/wp-content/uploads/2016/10/Blank-profile.png";
    const albumlist = Object.keys(albums)
    const bio = "This artist is a person. Born on this day. Became famous blah blah blah"
    let str = ""
    for(let element in albumlist){
        str += albumlist[element];
        if (element < albumlist.length - 1){
            str += ", "
        }
    }
        return (
            <div className="artistprofile">
                <h2>Artist: {artist} </h2>
                <img src={process.env.PUBLIC_URL + url} alt={artist}/>
                <h3>Bio: {bio}</h3>
                <h3>Here is a list of all {artist}'s albums</h3>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <div className = "album">
                                <h4>first album</h4>
                                <img src={url} alt={artist}/>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className = "album">
                                <h4>second album</h4>
                                <img src={url} alt={artist}/>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className = "album">
                                <h4>add more</h4>
                                <img src={url} alt={artist}/>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className = "album">
                                <h4>latest album</h4>
                                <img src={url} alt={artist}/>
                            </div>
                        </Grid>
                    </Grid>
                </Box>

            </div>
        )
    
            
        
    

}

/*class ArtistProfile extends React.Component {
    
    render() {
        
    }
}*/

export default ArtistProfile;