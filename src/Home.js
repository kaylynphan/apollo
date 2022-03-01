import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
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
                <div>
                      <RatingDropdown />
                </div>
            </div>
        
    );
};

export default Home;

//deleted logo from app, can add again, under Announcer but before Search
//<img src={logo} className="App-logo" alt="logo" />