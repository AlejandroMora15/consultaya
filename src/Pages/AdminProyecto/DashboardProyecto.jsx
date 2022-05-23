import { Button, Grid, Input, Paper, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { SnackbarContext } from '../../Context/SnackbarContext'
import { getHistorias, createHistoria, deleteHistoria, updateHistoria } from '../../Core/apiHistoria'
import { FilterBar } from '../SearchBar'
import { FormHistoria } from './FormHistoria'
import { FormValidarProyecto } from './FormValidarProyecto'
import { TableAdminProyecto } from './TableAdminProyecto'

export const DashboardProyecto = () => {
    const [showCreateHistoria, setCreateHistoria] = useState(false)
    const [historias, setHistorias] = useState([])
    const [historiasFilter, setHistoriasFilter] = useState([])
    const [mode, setMode] = useState('crear')
    const [dataToEdit, setDataToEdit] = useState(false)
    const [openValidar, setOpenValidar] = useState(false)
    const { state } = useLocation()
    const {
        showLoading, 
        hideLoading,
        showSnackbar
    } = useContext(SnackbarContext)
    
    const openCreateHistoria = () => {
        setMode('crear')
        setCreateHistoria(true)
    }

    const closeCreateHistoria = () => {
        setCreateHistoria(false)
    }

    const loadData = async () => {
        showLoading()
        const resp = await getHistorias(state.id)
        if(resp){
            setHistorias(resp)
            setHistoriasFilter(resp)
        }else{
            setHistorias([])
            setHistoriasFilter([])
            showSnackbar('error', 'Error al cargar los proyectos')
        }
        hideLoading()
    }

    const handleCreateHistoria = async (values) => {
        showLoading()
        if(mode === 'crear'){
            const resp = await createHistoria(
                {
                    ...values,
                    proyectoId: state.id,
                }
            )
            if(resp){
                await loadData()
                showSnackbar('success', 'Historia creado con éxito')
                closeCreateHistoria()
            }else{
                showSnackbar('error', 'Error al crear la historia')
            }
        }else{
            const resp = await updateHistoria(values)
            if(resp){
                await loadData()
                showSnackbar('success', 'Historia editada con éxito')
                closeCreateHistoria()
            }else{
                showSnackbar('error', 'Error al editar la historia')
            }
        }
        hideLoading()
    }
    
    const handleEdit = (values) => {
        setMode('editar')
        setDataToEdit(values)
        setCreateHistoria(true)
    }

    const handleDelete = async (historiaId) => {
        showLoading()
        const resp = await deleteHistoria(historiaId)
        if(resp){
            await loadData()
            showSnackbar('success', 'Historia eliminada con éxito')
        }else{
            showSnackbar('error', 'Error al eliminar la historia')
        }
        hideLoading()
    }

    const handleValidar = (values) =>{
        setDataToEdit(values)
        setOpenValidar(true)
    }
    
    const handleFormValidar = async (values) => {
        showLoading()
        const resp = await updateHistoria(values)
        if(resp){
            await loadData()
            showSnackbar('success', 'V.H.U. editada con éxito')
            setOpenValidar(false)
        }else{
            showSnackbar('error', 'Error al editar la historia')
        }
        hideLoading()
    }

    useEffect(() => {
        async function init(){
            await loadData()
        }
        init()
    }, [])

    return (
        <Paper>
            <Grid container p={2} spacing={2}>
                <Grid item sm={12}>
                    <Typography>{state.name}</Typography>
                </Grid>
                <Grid item sm={8}>
                    <FilterBar
                        data={historias}
                        setDataFilter={setHistoriasFilter}
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
                    <TableAdminProyecto 
                        handleValidar={handleValidar}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                        data={historiasFilter}
                    />
                </Grid>
            </Grid>
            <FormHistoria
                mode={mode}
                data={dataToEdit}
                open={showCreateHistoria}
                onClose={closeCreateHistoria}
                onSubmit={handleCreateHistoria}
            />
            <FormValidarProyecto    
                onClose={() => setOpenValidar(false)}
                open={openValidar}
                initialValues={dataToEdit}
                onValidate={handleFormValidar}
            />
        </Paper>
    )
}
