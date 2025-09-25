import { Routes, Route, Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Button, Container } from "@mui/material";
import Home from "./pages/Home";
import Line from "./pages/Line";
import Circle from "./pages/Circle";

function App() {
  return (
    <>
      {/* Barra de navegación */}
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(90deg, #1976d2 0%, #2196f3 100%)",
          boxShadow: 4,
        }}
      >
        <Toolbar>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            sx={{ textTransform: "none", mr: 2 }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/line"
            sx={{ textTransform: "none", mr: 2 }}
          >
            Line
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/circle"
            sx={{ textTransform: "none" }}
          >
            Circle
          </Button>
        </Toolbar>
      </AppBar>

      {/* Contenido principal */}
      <Container
        maxWidth="lg"
        sx={{
          mt: 4,
          p: 2,
          backgroundColor: "#f9f9f9",
          minHeight: "calc(100vh - 64px)",
          borderRadius: 2,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/line" element={<Line />} />
          <Route path="/circle" element={<Circle />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;