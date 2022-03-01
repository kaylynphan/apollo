import { useState } from 'react';
import SearchBar from './SearchBar';
import Announcer from './announcer';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import ArtistProfile from './ArtistProfile';
import Album from "./Album"
import albums from "./albums.json"

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
                 <a href="/album" class="albumtitle">{post.name}</a>
             </div>
             
        	))}
       </ul>
</div>
    
    );

}
export default Search;
