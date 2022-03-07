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

import { collection, getDocs, query, where, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { FirebaseError } from 'firebase/app';
import { positions } from '@mui/system';

function ReviewPost(props) {
    const handleLikeClick = async () => {
        const newLikes = props.likes + 1;
        const thisReviewRef = doc(db, "Reviews", props.id);
        await updateDoc(thisReviewRef, {
            likes: newLikes
        });
    }
    const handleDislikeClick = async () => {
        const newDislikes = props.dislikes + 1;
        const thisReviewRef = doc(db, "Reviews", props.id);
        await updateDoc(thisReviewRef, {
            dislikes: newDislikes
        });
    }

    return (
        <Grid container>
            <Stack spacing={1} sx={{ p: 2 }}>
                <Typography variant="subtitle2">Written by: {props.user}</Typography>
                <Typography variant="h6">Album: {props.album}</Typography>
                <Rating name="read-only" value={props.rating} readOnly />
                <Typography variant="body2">{props.review}</Typography>
                <Grid container>
                    <Button variant="outlined" size="small" startIcon={<ThumbUpAltRoundedIcon />}>
                        Likes: {props.likes}
                    </Button>
                    <Button variant="outlined" size="small" startIcon={<ThumbDownAltRoundedIcon />}>
                        Dislikes: {props.dislikes}
                    </Button>
                </Grid>
            </Stack>
        </Grid>
    )
}

function ListOfReviewPosts() {
    const location = useLocation();
    const artist = location.state.artist;

    const posts = [];
    const q = query(collection(db, "Reviews"), where("artist", "==", artist));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
          posts.push(doc.data());
      });
      console.log("Current posts: ", posts);
    });

    return (
        <Paper elevation={3} sx={{ width: 400, p: 3 }}>
            <Typography variant="h5">Read Reviews for {artist}</Typography>
            {/*Here we would map to the reviews in the database */}
            <Stack>
                {posts.map((value) => (
                    <ReviewPost 
                        album={value.album}
                        rating={value.rating}
                        review={value.review} 
                        user={value.user}
                        likes={value.likes}
                        dislikes={value.dislikes}
                        id={value.id}
                    />
                ))}
            </Stack>
        </Paper>
    )
}
export default ListOfReviewPosts;