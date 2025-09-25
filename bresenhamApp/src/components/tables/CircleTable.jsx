import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function CircleTable({ points }) {
  if (!points || points.length === 0) return null;

  return (
    <TableContainer component={Paper} sx={{ marginTop: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>#</b></TableCell>
            <TableCell><b>X</b></TableCell>
            <TableCell><b>Y</b></TableCell>
            <TableCell><b>pk</b></TableCell>
            <TableCell><b>Puntos Simétricos</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {points.map((p, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{p.x}</TableCell>
              <TableCell>{p.y}</TableCell>
              <TableCell>{p.pk}</TableCell>
              <TableCell style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
                {p.simetria}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CircleTable;