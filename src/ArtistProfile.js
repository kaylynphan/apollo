import React from 'react';
import './ArtistProfile.css';
import albums from "./albums.json"
import {useLocation} from 'react-router-dom'
import { render } from '@testing-library/react';

const ArtistProfile = () => {
    const location = useLocation();
    const artist = location.state.artist;
    const url = "https://www.weact.org/wp-content/uploads/2016/10/Blank-profile.png";
    const bio = "This artist is a person. Born on this day. Became famous blah blah blah"
   
        return (
            <div className="artistprofile">
                <h2>Artist: {artist} </h2>
                <img src={url} alt={artist}/>
                <h3>Bio: {bio}</h3>
                <p>Here we would display reviews for this artist's albums.</p>
            </div>
        )
    
            
        
    

}

/*class ArtistProfile extends React.Component {
    
    render() {
        
    }
}*/

export default ArtistProfile;