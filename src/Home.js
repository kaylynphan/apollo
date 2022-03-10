import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Announcer from './announcer';
import albums from "./albums.json"
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


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
       <SearchBar
		searchQuery={searchQuery}
                 setSearchQuery={setSearchQuery}
       />
       
       
       <Box sx={{flexGrow: 1}}>
           <Grid container spacing={3}>
       	{filteredPosts.map((post) => (
           
               <Grid item xs={4}>
         	<div key={post.id} >
                 <Link to="/artist" class="albumtitle" state={{artist: post.artist, album: post.albums, url: post.artistImg}}>{post.artist}</Link>
             </div> </Grid>
             
        	))}
       </Grid></Box>
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