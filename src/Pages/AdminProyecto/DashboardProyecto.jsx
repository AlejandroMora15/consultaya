import { Button, Grid, Input, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FormHistoria } from './FormHistoria'
import { TableAdminProyecto } from './TableAdminProyecto'

export const DashboardProyecto = () => {
    const [createHistoria, setCreateHistoria] = useState(false)
    const { state } = useLocation()
    
    const openCreateHistoria = () => {
        setCreateHistoria(true)
    }

    const closeCreateHistoria = () => {
        setCreateHistoria(false)
    }

    return (
        <Paper>
            <Grid container p={2} spacing={2}>
                <Grid item sm={12}>
                    <Typography>{state.name}</Typography>
                </Grid>
                <Grid item sm={8}>
                    <Input 
                        placeholder='Buscar'
                        fullWidth
                    />
                </Grid>
                <Grid item sm={4}>
                    <Button
                        fullWidth
                        variant='contained'
                        onClick={openCreateHistoria}
                    >
                        Añadir historia de usuario
                    </Button>
                </Grid>
                <Grid item sm={12}>
                    <TableAdminProyecto />
                </Grid>
            </Grid>
            <FormHistoria
                open={createHistoria}
                onClose={closeCreateHistoria}
            />
        </Paper>
    )
}
