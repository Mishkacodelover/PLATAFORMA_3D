import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function AlertSuccess() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert onClose={() => {}}>!Usuario invitado!</Alert>
      <Alert
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        !Usuario invitado!
      </Alert>
    </Stack>
  );
}
