import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Announcer from './announcer';
import albums from "./albums.json"
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


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
                fullWidth
                id="header-search"
                label="Search for an Artist"
                variant="outlined"
                onChange={(event) => {setSearchQuery(event.target.value)}}
            />
            
            
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

        <Grid sx={{ width: 800, p: 2 }}>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Grid container spacing={2} sx={{ justifyContent: 'space-between', padding: 2}}>
                {filteredPosts.map((post) => (
                    <Grid item xs={4}>
                        <Card sx={{ width: 200, display: 'flex', flexDirection: 'column'}}>
                            <CardMedia
                                sx={{ height: 200 }}
                                component="img"
                                image={post.artistImg}
                                alt={post.artist}
                            />
                            <CardActions>
                                <Button 
                                    size="small">
                                    <Link 
                                        to="/artist" 
                                        style={{color: 'black', fontSize: '12pt'}}
                                        state={{artist: post.artist, album: post.albums, url: post.artistImg, bio: post.bio}}>
                                        {post.artist}
                                    </Link>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Grid>

        {/*
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
                    subtitle={<span>{post.artist}</span>}
                    position="below"
                />
                </ImageListItem>
            ))}
        </ImageList>
            */}
       
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