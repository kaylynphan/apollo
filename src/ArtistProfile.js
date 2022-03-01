import React from 'react';
import './ArtistProfile.css';
import albums from "./albums.json"
import {useLocation} from 'react-router-dom'
import { render } from '@testing-library/react';

const ArtistProfile = () => {
    const location = useLocation();
    const artist = location.state.artist;
   
        return (
            <div className="artistprofile">
                <h1></h1>
                <div>
            <h3 >Artist: {artist}</h3>
                    <p>Here we would display reviews for this artist's albums.</p>
                </div>
            </div>
        )
    
            
        
    

}

/*class ArtistProfile extends React.Component {
    
    render() {
        
    }
}*/

export default ArtistProfile;