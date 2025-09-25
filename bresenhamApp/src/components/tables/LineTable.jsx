import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

function LineTable({ points }) {
  if (!points || points.length === 0) return null;

  return (
    <TableContainer component={Paper} sx={{ marginTop: 3 }}>
      <Typography variant="h6" sx={{ padding: 2 }}>
        Tabla de puntos generados
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>#</strong></TableCell>
            <TableCell><strong>X</strong></TableCell>
            <TableCell><strong>Y</strong></TableCell>
            <TableCell><strong>pk</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {points.map((p, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{Number(p.x)}</TableCell>
              <TableCell>{Number(p.y)}</TableCell>
              <TableCell>{isNaN(p.pk) ? "—" : Math.round(p.pk)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LineTable;
