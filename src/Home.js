import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Search from './search';
import Announcer from './announcer';
import './Home.css'

const posts = [
    { id: '1', name: 'This first post is about React' },
    { id: '2', name: 'This next post is about Preact' },
    { id: '3', name: 'We have yet another React post!' },
    { id: '4', name: 'This is the fourth and final post' },
];

const filterPosts = (posts, query) => {
    if (!query) {
        return posts;
    }

    return posts.filter((post) => {
        const postName = post.name.toLowerCase();
        return postName.includes(query);
    });
};

const Home = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(posts, searchQuery);

    return (
        <Router>
            <div className="Home">
                <Announcer message={`${filteredPosts.length} posts`} />
                
                <Search
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />

                <ul>
                    {filteredPosts.map((post) => (
                        <li key={post.id}>{post.name}</li>
                    ))}
                </ul>

            </div>
        </Router>
    );
};

export default Home;

//deleted logo from app, can add again, under Announcer but before Search
//<img src={logo} className="App-logo" alt="logo" />