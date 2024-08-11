import { Container } from "@mui/material";

export const Page = (props) => {
  return <Container sx={{ mt: 5 }}>{props.children}</Container>;
};
