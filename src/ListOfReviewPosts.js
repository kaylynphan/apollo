import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ThumbDownAltRoundedIcon from '@mui/icons-material/ThumbDownAltRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import Typography from '@mui/material/Typography';
import {useLocation} from "react-router-dom"
import { db } from "./firebase.js";
import { useEffect, useState } from 'react';

import { collection, getDocs, query, where } from "firebase/firestore";

function ReviewPost(props) {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0)

    const handleLikeClick = () => {
        setLikes(likes + 1);
    }
    const handleDislikeClick = () => {
        setDislikes(dislikes + 1);
    }

    return (
        <Grid container>
            <Stack spacing={1} sx={{ p: 2 }}>
                <Typography variant="subtitle2">Written by: {props.user}</Typography>
                <Typography variant="h6">Album: {props.album}</Typography>
                <Rating name="read-only" value={props.rating} readOnly />
                <Typography variant="body2">{props.review}</Typography>
                <Grid container>
                    <Button onClick={handleLikeClick} variant="outlined" size="small" startIcon={<ThumbUpAltRoundedIcon />}>
                        Likes: {likes}
                    </Button>
                    <Button onClick={handleDislikeClick} variant="outlined" size="small" startIcon={<ThumbDownAltRoundedIcon />}>
                        Dislikes: {dislikes}
                    </Button>
                </Grid>
            </Stack>
        </Grid>
    )
}

function ListOfReviewPosts() {
    const location = useLocation();
    const artist = location.state.artist;

    const [postList, setPostList] = useState([]);
    //const postsCollectionRef = collection(db, "Reviews");
    const postsCollectionRef = query(collection(db, "Reviews"), where("artist", "==", artist));

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
            //console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        };
        getPosts();
    })

    return (
        <Paper elevation={3} sx={{ width: 400, p: 3 }}>
            <Typography variant="h5">Read Reviews for {artist}</Typography>
            {/*Here we would map to the reviews in the database */}
            <Stack>
                {postList.map((value) => (
                    <ReviewPost 
                        album = {value.album}
                        rating = {value.rating}
                        review = {value.review} 
                        user = {value.user}
                    />
                ))}

            </Stack>
        </Paper>
    )
}
export default ListOfReviewPosts;