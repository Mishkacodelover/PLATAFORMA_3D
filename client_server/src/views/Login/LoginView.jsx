import { Button, Container, Box, Grid } from "@mui/material";
import { Send, Delete } from "@mui/icons-material";
import LoginForm from "../../components/LoginForm";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { useState } from "react";

export default function LoginView() {
  const [register, setRegister] = useState(false);
  return (
    <>
      <Container>
        <div>Login</div>
        <Button
          variant="outlined"
          sx={{
            color: "primary.dark",
            fontWeight: "bold",
            border: "2px solid",
          }}
          startIcon={<Delete />}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "primary.main",
            backgroundImage: "radial-gradient(var(--primario),var(--negro))",
          }}
          endIcon={<Send />}
        >
          Send
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundImage:
              "radial-gradient(var(--primario),var(--primario_oscuro))",
          }}
          endIcon={<Send />}
        >
          Prueba
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundImage:
              "radial-gradient(var(--primario_claro),var(--primario_oscuro))",
            color: "var(--negro)",
            fontWeight: "bold",
          }}
          endIcon={<Send />}
        >
          Prueba2
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "var(--primario_claro)",
            color: "var(--primario_oscuro)",
            fontWeight: "bold",
          }}
          endIcon={<Send />}
        >
          Prueba3
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundImage:
              "linear-gradient(var(--primario_claro),var(--primario_oscuro))",
            color: "var(--blanco)",
          }}
          endIcon={<Send />}
        >
          Prueba4
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundImage:
              "linear-gradient(var(--primario_claro),var(--negro))",
            color: "var(--blanco)",
          }}
          endIcon={<Send />}
        >
          Prueba5
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundImage: "linear-gradient(var(--negro),var(--primario))",
            color: "var(--blanco)",
          }}
          endIcon={<Send />}
        >
          Prueba6
        </Button>
        <Box>
          <Grid>
            <LoginForm register={() => setRegister(!register)} />
            {register && <RegistrationForm />}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
