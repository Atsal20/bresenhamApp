import {useState} from "react";
import {Box, Button, TextField, Typography, Paper} from "@mui/material";

function LineForm({onCalculate}) {
    const [values, setValues] = useState({
        x0: "",
        y0: "",
        x1: "",
        y1: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCalculate(values);
    };

    return (
        <Paper elevation={6} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                Parámetros de la Línea
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" gap={2}>
                    <TextField
                        label="X0"
                        variant="outlined"
                        name="x0"
                        value={values.x0}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Y0"
                        variant="outlined"
                        name="y0"
                        value={values.y0}
                        onChange={handleChange}
                    />
                    <TextField
                        label="X1"
                        variant="outlined"
                        name="x1"
                        value={values.x1}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Y1"
                        variant="outlined"
                        name="y1"
                        value={values.y1}
                        onChange={handleChange}
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Calcular
                    </Button>
                </Box>
            </form>
        </Paper>
    );
}

export default LineForm;