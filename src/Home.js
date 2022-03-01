import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './Home.css';
import ReviewForm from './ReviewForm';
import Search from './Search';
import RatingDropdown from './RatingDropdown.js';
import Post from './Post';
import Form from './Form';
import ArtistProfile from './ArtistProfile';
import {firestore} from './firebase'



const Home = () => {
    /*
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(posts, searchQuery);
    */
    return (
        
            <div className="Home">
                
                <Search/>
                <ReviewForm />
            </div>
        
    );
};

export default Home;

//deleted logo from app, can add again, under Announcer but before Search
//<img src={logo} className="App-logo" alt="logo" />