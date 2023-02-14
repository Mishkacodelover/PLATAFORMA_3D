import { Link as ReactRouterLink } from "react-router-dom";
import { styled } from "@mui/material";

const StyledLink = styled(ReactRouterLink)(() => ({
  textDecorationLine: "none",
}));

export default function Link({ children, to }) {
  return <StyledLink to={to}> {children} </StyledLink>;
}
