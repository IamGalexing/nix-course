import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import {useComments} from "./useComments.js";
import {string} from "prop-types";
export const CommentsPanel = ({productId}) => {
    const {comments, handleSubmit, handleChange, newComment } = useComments(productId)

    return (
        <>
            <Typography variant="h4" component="h2">
                Comments
            </Typography>
            <TextField
                value={newComment}
                onChange={handleChange}
                fullWidth
                label="Write a comment"
                multiline
                rows={2}
            />
            <Box sx={{ py: 1, display: "flex", justifyContent: "flex-end" }}>
                <Button onClick={handleSubmit} >
                    Comment
                </Button>
            </Box>
            {comments.map(comment => (
                <Paper key={comment.id} sx={{ mb: 1, p:1, whiteSpace: "pre-wrap"}}>
                    {comment.text}
                </Paper>)
            )}
        </>
    )
}

CommentsPanel.propTypes = {
    productId: string.isRequired,
}
