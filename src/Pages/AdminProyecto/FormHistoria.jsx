import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid } from '@mui/material'
import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { MyTextInput } from '../../Components/MyTextInput'
import { MyToggleHistoria } from '../../Components/MyToggleHistoria'
import { historiaValidationSchema } from '../../Validations/historiaProyectoValidationSchema'

const initialValues = {
    number_h: '',
    name_h: '',
    develop: '',
    priority: '',
    rol: '',
    deseo: '',
    proposito: '',
    descripcion: '',
}

export const FormHistoria = ({open, onClose, mode = 'crear', onSubmit, data}) => {
    const [values, setValues] = useState(initialValues)
    const [key, setKey] = useState(0)
    useEffect(() => {
        if(mode === 'editar') setValues(data)
        else setValues(initialValues)
        setKey(Math.random() + key)
    }, [open])

    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>
                {
                    mode === 'crear' ? 
                    'Crear historia de usuario'
                    : 'Editar historia de usuario'
                }
            </DialogTitle>
            <Formik
                key={key}
                onSubmit={onSubmit}
                validationSchema={historiaValidationSchema}
                initialValues={values}
            >
                { () => (
                    <Form>
                        <DialogContent>
                            <Grid container spacing={2}>
                                <Grid item sm={6}>
                                    <MyTextInput
                                        fullWidth   
                                        name='number_h'
                                        label='Número de H.U.'
                                    />
                                </Grid>
                                <Grid item sm={6}>
                                    <MyTextInput
                                        fullWidth
                                        name='name_h'
                                        label='Nombre de H.U.'
                                    />
                                </Grid>
                                <Grid item sm={6}>
                                    <MyToggleHistoria
                                        name='priority'
                                    />
                                </Grid>
                                <Grid item sm={6}>
                                    <MyTextInput
                                        fullWidth    
                                        name='develop'
                                        label='Programador responsable'
                                    />
                                </Grid> 
                                <Grid item sm={12}>
                                    <Divider />
                                </Grid>
                                <Grid item sm={12} > 
                                    <MyTextInput
                                        fullWidth
                                        name='rol'
                                        label='Rol del usuario que ejecuta la historia'
                                    />
                                </Grid> 
                                <Grid item sm={6} > 
                                    <MyTextInput
                                        fullWidth
                                        name='deseo'
                                        label='Deseo (qué)'
                                    />
                                </Grid> 
                                <Grid item sm={6} > 
                                    <MyTextInput
                                        fullWidth
                                        name='proposito'
                                        label='Propósito (para)'
                                    />
                                </Grid> 
                                <Grid item sm={12} > 
                                    <MyTextInput
                                        fullWidth
                                        name='descripcion'
                                        label='Observaciones'
                                    />
                                </Grid> 
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button 
                                variant='outlined'
                                color='error'
                                onClick={onClose}
                            >Cancelar</Button>
                            <Button 
                                type='submit'
                                variant='contained'
                            >
                                Aceptar
                            </Button>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
        </Dialog>
    )
}
