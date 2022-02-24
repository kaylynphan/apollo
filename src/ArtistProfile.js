import React from 'react';
import './ArtistProfile.css';

class ArtistProfile extends React.Component {
    render() {
        return (
            <div className="artistprofile">
                <h1>This is an Artist Profile.</h1>
                <div>
                    <h3>Artist Name</h3>
                    <p>Here we would display reviews for this artist's albums.</p>
                </div>
            </div>
        )
    }
}

export default ArtistProfile;