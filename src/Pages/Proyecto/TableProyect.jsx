import {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const TableProyect = ({refreshTable, proyectos = []}) => {
    const [rows, setRows] = useState([])
    useEffect(() => {
        setRows(
            Array.from(proyectos, ((p, index) => {
                return { ...p, index: index + 1 }
            }))
        )
    }, [proyectos])

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
                                <TableCell >{row.id}</TableCell>
                            </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
