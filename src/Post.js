import React from 'react';
import Like from './Like.js';
import './Post.css'

class Post extends React.Component {
    render() {
        return (
            <div className="post">
                <h1>This is a post.</h1>
                <div>
                    <ul>
                        <h3>Album Title</h3>
                        <h3>Artist Name</h3>
                        <h3>Year Released</h3>
                        <h3>Rating: 10/10</h3>
                        <h3>Reviewer Name</h3>
                        <p>Here is where we would display the full review. Ideally we would include an image as well.</p>
                    </ul>
                    <div>
                        <h3>Here is where you can like or dislike the review!</h3>
                        <Like />
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;