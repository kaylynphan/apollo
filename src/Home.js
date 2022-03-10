import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Announcer from './announcer';
import albums from "./albums.json"
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import TextField from '@mui/material/TextField';


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
            {/*Replaced Search Bar with an MUI Text Field*/}
            
            <TextField
                id="header-search"
                label="Search for an Artist"
                variant="outlined"
                onChange={(event) => {setSearchQuery(event.target.value)}}
            />
            {/*
            <input
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Enter an album you wish to see a review for"
                name="s"
            />
            */}

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
        const postName = post.artist.toLowerCase();
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
       <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

       <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {filteredPosts.map((post) => (
            <ImageListItem key={post.id}>
            <img
                src={`${post.artistImg}?w=248&fit=crop&auto=format`}
                srcSet={`${post.artistImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={post.artist}
                loading="lazy"
            />
            <ImageListItemBar
                title={<Link to="/artist" class="albumtitle" state={{artist: post.artist, album: post.albums, url: post.artistImg}}>{post.artist}</Link>}
                position="below"
            />
            </ImageListItem>
        ))}
        </ImageList>
       
       {/*<Box sx={{flexGrow: 1}}>
           <Grid container spacing={3}>
       	        {filteredPosts.map((post) => (
                    <Grid item xs={4}>
         	            <div key={post.id} >
                            <img
                                src={`${post.artistImg}?w=248&fit=crop&auto=format`}
                                srcSet={`${post.artistImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={post.artist}
                                loading="lazy"
                            />
                            <Link to="/artist" class="albumtitle" state={{artist: post.artist, album: post.albums, url: post.artistImg}}>{post.artist}</Link>
                        </div> 
                    </Grid>
        	    ))}
        </Grid>
        </Box>*/}
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