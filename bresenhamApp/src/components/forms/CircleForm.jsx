import { useState } from "react";
import { Button, TextField, Box } from "@mui/material";

function CircleForm({ onCalculate }) {
  const [radius, setRadius] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(radius);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", gap: 2, marginTop: 2 }}
    >
      <TextField
        label="Radio"
        type="number"
        value={radius}
        onChange={(e) => setRadius(Number(e.target.value))}
      />
      <Button type="submit" variant="contained" color="primary">
        Calcular
      </Button>
    </Box>
  );
}

export default CircleForm;
