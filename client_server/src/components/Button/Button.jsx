import { Button as MuiButtom } from "@mui/material";
import { styled } from "@mui/material";

const StyledButton = styled(MuiButtom)(() => ({
  backgroundColor: "primary.main",
  color: "var(--blanco)",
  p: "16px 24px",
}));

export default function Link({ fullWidht, disabled, type, variant }) {
  return (
    <StyledButton
      fullWidht={fullWidht}
      disabled={disabled}
      type={type}
      variant={variant}
    />
  );
}
