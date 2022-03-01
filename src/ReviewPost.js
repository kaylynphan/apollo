import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function ReviewPost(props) {
    return (
        <Paper elevation={3} sx={{ width: 400, p: 3 }}>
            <Typography variant="h5">Read Reviews for {props.artistName}</Typography>
            <Stack spacing={1} sx={{ p: 2 }}>
                <Typography variant="subtitle2">Written by: Username</Typography>
                <Typography variant="h6">Album Title</Typography>
                <Typography variant="overline">Year Released</Typography>
                <Rating name="read-only" value={4} readOnly />
                <Typography variant="body2">Here is where the review will go.</Typography>
            </Stack>
        </Paper>
    )
}

export default ReviewPost;