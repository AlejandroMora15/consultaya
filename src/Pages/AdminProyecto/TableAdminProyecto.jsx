import {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Grid } from '@mui/material';

export const TableAdminProyecto = ({data = [], handleDelete, handleEdit}) => {
  const [rows, setRows] = useState([])
  useEffect(() => {
    setRows(Array.from(data, (e, index) => {
      return {
        ...e,
        index: index + 1
      }
    }))
  }, [data])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Número de historia</TableCell>
            <TableCell>Nombre de historia</TableCell>
            <TableCell>Desarrollador</TableCell>
            <TableCell>Prioridad</TableCell>
            <TableCell>Deseo</TableCell>
            <TableCell>Propósito</TableCell>
            <TableCell>Validación</TableCell>
            <TableCell>Opciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.index}
              </TableCell>
              <TableCell>{row.number_h}</TableCell>
              <TableCell>{row.name_h}</TableCell>
              <TableCell>{row.develop}</TableCell>
              <TableCell>{row.priority}</TableCell>
              <TableCell>{row.deseo}</TableCell>
              <TableCell>{row.proposito}</TableCell>
              <TableCell>{
                row.validado ? 'Validado' : 'Sin validar'
              }</TableCell>
              <TableCell>
                <Grid container spacing={1}>
                  <Grid item>
                    <Button
                      variant='contained'
                      color='success'
                    >
                      Validar
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={() => handleEdit(row)}
                      variant='contained'
                    >
                      Editar
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={() => handleDelete(row.id)}
                      variant='contained'
                      color='error'
                    >
                      Eliminar
                    </Button>
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
