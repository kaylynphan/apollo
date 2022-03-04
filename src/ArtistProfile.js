import React from 'react';
import './ArtistProfile.css';
import albums from "./albums.json"
import {useLocation} from 'react-router-dom'
import { render } from '@testing-library/react';

const ArtistProfile = () => {
    const location = useLocation();
    const artist = location.state.artist;
    const albums = location.state.album;
    const url = location.state.url;
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
                <p>Here we would display reviews for {artist}'s albums.</p>
            </div>
        )
    
            
        
    

}

/*class ArtistProfile extends React.Component {
    
    render() {
        
    }
}*/

export default ArtistProfile;