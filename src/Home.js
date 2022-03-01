import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Announcer from './announcer';
import albums from "./albums.json"

import './Home.css';
import ReviewForm from './ReviewForm';
import RatingDropdown from './RatingDropdown.js';
import Post from './Post';
import Form from './Form';
import ArtistProfile from './ArtistProfile';
import {firestore} from './firebase'

import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';


//////////////////////////////////////////////////////////
//SEARCHBAR COMPONENT
//////////////////////////////////////////////////////////
const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useNavigate();
    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };

    return (
        <form
            action="/"
            method="get"
            autoComplete="off"
            onSubmit={onSubmit}
            
        >
            <label htmlFor="header-search">
                <span className="visually-hidden">
                    Search reviews 
                </span>
            </label>
            <input
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Enter an album you wish to see a review for"
                name="s"
            />

            <button type="submit"><FaSearch/></button>
            
        </form>
    );
};

//////////////////////////////////////////////////////////
//SEARCH COMPONENT
//////////////////////////////////////////////////////////
const posts = albums;
const filterPosts = (posts, query) => {
    if (!query) {
        return posts;
    }

    return posts.filter((post) => {
        const postName = post.name.toLowerCase();
        return postName.includes(query);
    });
};

const Search = () => {

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(posts, searchQuery);

    return (
	<div>
       <Announcer message={`${filteredPosts.length} posts`} />
       <SearchBar
		searchQuery={searchQuery}
                 setSearchQuery={setSearchQuery}
       />
       
       
       <ul>
       	{filteredPosts.map((post) => (
           
               
          
         	<div key={post.id} >
                 <a href="/artist" class="albumtitle">{post.name}</a>
             </div>
             
        	))}
       </ul>
</div>
    
    );

}


//////////////////////////////////////////////////////////
//HOMEPAGE COMPONENT
//////////////////////////////////////////////////////////
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
            </div>
        
    );
};

export default Home;

//deleted logo from app, can add again, under Announcer but before Search
//<img src={logo} className="App-logo" alt="logo" />