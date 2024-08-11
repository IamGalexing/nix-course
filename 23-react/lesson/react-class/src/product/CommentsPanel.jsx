import { Box, Button, TextField, Typography } from "@mui/material";
import { useComments } from "./useComments";

export const CommnetsPanel = ({ productId }) => {
  const { comments } = useComments(productId);
  return (
    <>
      <Typography variant='h4' component='h2'>
        Comments
      </Typography>
      <TextField fullWidth label='Write a comment' multiline rows={2} />
      <Box sx={{ py: 1, display: "flex", justifyContent: "flex-end" }}>
        <Button>Comment</Button>
      </Box>
      {/* {JSON.stringify(comments)} */}
    </>
  );
};
