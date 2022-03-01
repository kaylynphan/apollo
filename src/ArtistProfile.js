import React from 'react';
import './ArtistProfile.css';
import albums from "./albums.json"

const posts = albums;
class ArtistProfile extends React.Component {
    
    render() {
        return (
            <div className="artistprofile">
                <h1></h1>
                <div>
            <h3 >Artist: {posts.artist}</h3>
                    <p>Here we would display reviews for this artist's albums.</p>
                </div>
            </div>
        )
    }
}

export default ArtistProfile;