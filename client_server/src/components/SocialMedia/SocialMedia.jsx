import { Grid } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

import { Link } from "@mui/material";

export default function SocialMedia() {
  return (
    <>
      <Grid container>
        <Link href="https://www.linkedin.com" target="_blank" underline="none">
          <LinkedInIcon color="var(--blanco)" fontSize="large" />
        </Link>
        <Link href="https://www.facebook.com" target="_blank" underline="none">
          <FacebookIcon color="white" fontSize="large" />
        </Link>
        <Link href="https://www.youtube.com" target="_blank" underline="none">
          <YouTubeIcon color="white" fontSize="large" />
        </Link>
        <Link href="https://instagram.com" target="_blank" underline="none">
          <InstagramIcon color="white" fontSize="large" />
        </Link>
      </Grid>
    </>
  );
}
