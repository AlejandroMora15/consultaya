import {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const TableProyect = ({refreshTable, proyectos = []}) => {
    const [rows, setRows] = useState([])
    let navigate = useNavigate()
    
    useEffect(() => {
        setRows(
            Array.from(proyectos, ((p, index) => {
                return { ...p, index: index + 1 }
            }))
        )
    }, [proyectos])

    const administrarProyecto = (row) => {
        navigate('/DashboardProyecto', {state: row})
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell >Nombre del proyecto</TableCell>
                        <TableCell >Descripción</TableCell>
                        <TableCell >Opciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map((row) => (
                            <TableRow
                                key={row.index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.index}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>
                                    {row.description}
                                </TableCell>
                                <TableCell >
                                    <Button
                                        onClick={() => administrarProyecto(row)}
                                        fullWidth
                                        variant='outlined'
                                    >Administrar proyecto</Button>
                                </TableCell>
                                    
                            </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
