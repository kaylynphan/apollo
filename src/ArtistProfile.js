import React from 'react';
import './ArtistProfile.css';
import albums from "./albums.json"

const posts = albums;
function ArtistProfile(props) {
    return (
        <div className="artistprofile">
            <h3>{props.artistName}</h3>
            <div>
                <h3>Posts</h3>
                <p>Here we would display reviews for this artist's albums.</p>
            </div>
        </div>
    ); 
}

export default ArtistProfile;