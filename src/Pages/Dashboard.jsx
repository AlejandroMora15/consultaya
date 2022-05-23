import { Button, Grid, Input, Paper } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context/UserContext'
import { FormProyect } from './Proyecto/FormProyect'
import { TableProyect } from './Proyecto/TableProyect'
import { createProject, getProject } from '../Core/apiProject'
import { SnackbarContext } from '../Context/SnackbarContext'
import { useNavigate } from 'react-router-dom'
import { FilterBar } from './SearchBar'
import { createUser } from '../Core/apiUser'
import { FormCreateUser } from './FormCreateUser'

export const Dashboard = () => {
    const {
        showLoading, 
        hideLoading,
        showSnackbar
    } = useContext(SnackbarContext)
    const [ createProyect, setCreateProyect] = useState(false)
    const [ proyectos, setProyectos] = useState([])
    const [ showUser, setShowUser] = useState(false)
    const [ proyectosFilter, setProyectosFilter] = useState([])
    const user = JSON.parse(localStorage.getItem('user') || '')

    let navigate = useNavigate()

    const openCreateProyecto = () => {
        setCreateProyect(true)
    }

    const closeCreateProyecto = () => {
        setCreateProyect(false)
    }

    const loadData = async () => {
        showLoading()
        const resp = await getProject()
        if(resp){
            setProyectos(resp)
            setProyectosFilter(resp)
        }else{
            setProyectos([])
            setProyectosFilter([])
            showSnackbar('error', 'Error al cargar los proyectos')
        }
        hideLoading()
    }

    const handleCreateProyect = async (values) => {
        showLoading()
        const resp = await createProject(values)
        if(resp){
            await loadData() 
            showSnackbar('success', 'Proyecto creado con éxito')
            setShowUser(false)
        }else{
            showSnackbar('error', 'Error al crear el proyecto')
        }
        hideLoading()
    }
    
    const signOut = () => {
        navigate('/')
    }

    const handleCreateUser = async (values) => {
        showLoading()
        const resp = await createUser(values)
        if(resp){
            await loadData()
            showSnackbar('success', 'Usuario creado con éxito')
            closeCreateProyecto()
        }else{
            showSnackbar('error', 'Error al crear el usuario')
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
            <Grid container p={2} spacing={1}>
                <Grid item sm={user?.isAdmin ? 5 : 7}>
                    <FilterBar
                        data={proyectos}
                        setDataFilter={setProyectosFilter}
                    />
                </Grid>
                {
                    user?.isAdmin ?
                    <Grid item sm={2}>
                        <Button
                            fullWidth
                            variant='contained'
                            onClick={() => setShowUser(true)}
                        >
                            Crear usuario
                        </Button>
                    </Grid> : 
                    <></>
                }
                <Grid item sm={3}>
                    <Button 
                        fullWidth
                        onClick={openCreateProyecto}
                        variant='contained'
                    >Crear Proyecto</Button>
                </Grid>
                <Grid item sm={2}>
                    <Button 
                        fullWidth
                        color='error'
                        onClick={signOut}
                        variant='contained'
                    >Salir</Button>
                </Grid>
                <Grid item sm={12}>
                    <TableProyect
                        refreshTable={loadData}
                        proyectos={proyectosFilter}
                    />
                </Grid>
            </Grid>
            <FormProyect
                onSubmit={handleCreateProyect}
                open={createProyect}
                onClose={closeCreateProyecto}
            />
            <FormCreateUser
                open={showUser}
                onSubmit={handleCreateUser}
                onClose={() => setShowUser(false)}
            />
        </Paper>
    )
}
