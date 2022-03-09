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
    const bio = "This artist is a person. Born on this day. Became famous blah blah blah"
    const url = "https://www.weact.org/wp-content/uploads/2016/10/Blank-profile.png";
    let str = ""
    const AlbumGrid = [];
  for(let element in albumlist){
    AlbumGrid.push(<Grid item xs={6}>
        <div className = "album">
            <h4>{albumlist[element]}</h4>
            <img src={url} alt={albumlist[element]}/>
        </div>
    </Grid>)
}
    for(let element in albumlist){
        str += albumlist[element];
        if (element < albumlist.length - 1){
            str += ", "
        }
    }
        return (
            <div className="artistprofile">
                <h2>Artist: {artist} </h2>
                <img src={url} alt={artist}/>
                <p>Here we would display reviews for {artist}'s albums.</p>
                <h4 className="bio">Bio: {bio}</h4>
                <h3>Here is a list of all {artist}'s albums</h3>
                <Box sx={{ flexGrow: 1 }}>
                    
                    <div>{AlbumGrid}</div>
                    
                </Box>
            </div>
        )
    
            
        
    

}

/*class ArtistProfile extends React.Component {
    
    render() {
        
    }
}*/

export default ArtistProfile;