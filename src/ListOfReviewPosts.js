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

import { collection, getDocs, query, where, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { getAccordionDetailsUtilityClass } from '@mui/material';


function ReviewPost(props) {
    const handleLikeClick = async () => {
        const newLikes = props.likes + 1;
        const thisReviewRef = doc(db, "Reviews", props.id);
        await updateDoc(thisReviewRef, {
            likes: newLikes
        });
        props.handleSubmissions();
    }
    const handleDislikeClick = async () => {
        const newDislikes = props.dislikes + 1;
        const thisReviewRef = doc(db, "Reviews", props.id);
        await updateDoc(thisReviewRef, {
            dislikes: newDislikes
        });
        props.handleSubmissions();
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
                        Likes: {props.likes}
                    </Button>
                    <Button onClick={handleDislikeClick} variant="outlined" size="small" startIcon={<ThumbDownAltRoundedIcon />}>
                        Dislikes: {props.dislikes}
                    </Button>
                </Grid>
            </Stack>
        </Grid>
    )
}

function ListOfReviewPosts(props) {
    const location = useLocation();
    const artist = location.state.artist;

    const [postList, setPostList] = useState([]);
    //const postsCollectionRef = collection(db, "Reviews");
    const postsCollectionRef = query(collection(db, "Reviews"), where("artist", "==", artist));

    /*
    // this causes an infinite loop
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
            //console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        };
        getPosts();
    })
    */

    /*
    const q = query(collection(db, "Reviews"), where("artist", "==", artist));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const thesePosts = [];
      querySnapshot.forEach((doc) => {
          thesePosts.push(doc.data());
      });
      setPostList(thesePosts);
    });
    */
    

    // to be done on every submission
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
            //console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        };
        getPosts();
    }, [props.submissions]);

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
                        likes = {value.likes}
                        dislikes = {value.dislikes}
                        id = {value.id}
                        handleSubmissions = {props.handleSubmissions}
                    />
                ))}

            </Stack>
        </Paper>
    )
}
export default ListOfReviewPosts;