import { useState} from "react";
import { Container, Typography, Paper, Box } from "@mui/material";
import LineForm from "../components/forms/LineForm";
import LineTable from "../components/tables/LineTable";
import LineCanvas from "../components/canvas/LineCanvas";
import {bresenhamLine} from "../services/bresenhamLine";

function Line() {
  const [points, setPoints] = useState([]);
   
  const handleCalculate = ({ x0, y0, x1, y1 }) => {
    const result = bresenhamLine(x0, y0, x1, y1);
    setPoints(result);
};
  

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
            Algoritmo de Dibujo de Líneas de Bresenham
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2rem",
              color: "text.secondary",
              lineHeight: 1.8,
            }}
          >
            Este algoritmo se utiliza para determinar qué puntos de una
            cuadrícula deben ser iluminados para formar una línea recta entre
            dos puntos.
          </Typography>
        </Box>
        <Box mb={4}>
            <LineForm onCalculate={handleCalculate} />
            <LineTable points={points} />
        </Box>
        <Box mb={3}>
            <LineCanvas points={points} />
        </Box>
      </Paper>
    </Container>
  );
}

export default Line;