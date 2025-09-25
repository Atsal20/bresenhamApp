import { useState } from "react";
import { Paper, Box, Container, Typography } from "@mui/material";
import CircleForm from "../components/forms/CircleForm";
import CircleTable from "../components/tables/CircleTable";
import CircleCanvas from "../components/canvas/CircleCanvas";
import { bresenhamCircle } from "../services/bresenhamCircle";

function Circle() {
 const [points, setPoints] = useState([]);

  const handleCalculate = (radius) => {
    const result = bresenhamCircle(radius);
    setPoints(result);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
        p: 4,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 5,
          borderRadius: 4,
          backgroundColor: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(4px)",
          textAlign: "center",
        }}
      >
        <Box mb={3}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              mb: 2,
            }}
          >
            Algoritmo de Dibujo de Círculos de Bresenham
          </Typography>
        </Box>

        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            color: "text.secondary",
            lineHeight: 1.8,
          }}
        >
          Este algoritmo se utiliza para determinar qué puntos de una cuadrícula
          deben ser iluminados para formar un círculo.
        </Typography>
          <Box mb={4}>
            <CircleForm onCalculate={handleCalculate} />
            <CircleTable points={points} />
          </Box>
          <Box mt={3}>
            <CircleCanvas points={points} />
          </Box>
      </Paper>
    </Container>
  );
}

export default Circle;