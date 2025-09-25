import { Link } from "react-router-dom";
import { Button, Container, Typography, Box, Stack, Paper } from "@mui/material";

function Home() {
  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
        py: 6,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 6,
          borderRadius: 4,
          textAlign: "center",
          backgroundColor: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(4px)",
        }}
      >
        <Box mb={3}>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: "bold", color: "primary.main", mb: 2 }}
          >
            Algoritmo de Bresenham
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.2rem", color: "text.secondary", lineHeight: 1.8 }}
          >
            Esta aplicación demuestra los algoritmos de dibujo de líneas y
            círculos de Bresenham.
          </Typography>
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/line"
            sx={{ px: 4, py: 1.5, fontSize: "1rem", textTransform: "none" }}
          >
            Dibujar Línea
          </Button>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/circle"
            sx={{ px: 4, py: 1.5, fontSize: "1rem", textTransform: "none" }}
          >
            Dibujar Círculo
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}

export default Home;