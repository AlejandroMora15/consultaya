import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'
import { MyTextInput } from '../../Components/MyTextInput'
import { MyToggleValidar } from '../../Components/MyToogleValidar'
import { validarHistoriaValidationSchema } from '../../Validations/validarHistoriaValidationSchema'

export const FormValidarProyecto = ({open, onClose, onValidate, initialValues}) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>Validar historia</DialogTitle>
            <Formik
                onSubmit={onValidate}
                validationSchema={validarHistoriaValidationSchema}
                initialValues={initialValues}
            >
                { () => (
                    <Form>
                        <DialogContent>
                            <Grid container spacing={2}>
                                <Grid item sm={6}>
                                    <MyTextInput
                                        name='number_vh'
                                        label='Número de V.H.U.'
                                    />
                                </Grid>
                                <Grid item sm={6}>
                                    <MyToggleValidar
                                        name='isAprobado'
                                        label='Estado de verificación'
                                    />
                                </Grid>
                                <Grid item sm={8}>
                                    <MyToggleValidar
                                        label='1) La historia de usuario es independiente, es decir, no requiere de otra'
                                        name='p1'
                                    />
                                </Grid>
                                <Grid item sm={4}>
                                    <MyTextInput
                                        name='obs1'
                                        fullWidth
                                        label='Observaciones'
                                    />
                                </Grid>

                                <Grid item sm={8}>
                                    <MyToggleValidar
                                        label='2) La historia de usuario es negociable, lo que indica que puede reemplazar por otra de diferente prioridad'
                                        name='p2'
                                    />
                                </Grid>
                                <Grid item sm={4}>
                                    <MyTextInput
                                        name='obs2'
                                        fullWidth
                                        label='Observaciones'
                                    />
                                </Grid>

                                <Grid item sm={8}>
                                    <MyToggleValidar
                                        label='3) La historia de usuario tiene un valor, hace referencia a que sea necesaria de otro valor para el proyecto'
                                        name='p3'
                                    />
                                </Grid>
                                <Grid item sm={4}>
                                    <MyTextInput
                                        name='obs3'
                                        fullWidth
                                        label='Observaciones'
                                    />
                                </Grid>

                                <Grid item sm={8}>
                                    <MyToggleValidar
                                        label='4) La historia de usuario es estimable con el objetivo de que el equipo se sienta tranquilo y seguro estimandola'
                                        name='p4'
                                    />
                                </Grid>
                                <Grid item sm={4}>
                                    <MyTextInput
                                        name='obs4'
                                        fullWidth
                                        label='Observaciones'
                                    />
                                </Grid>

                                <Grid item sm={8}>
                                    <MyToggleValidar
                                        label='5) La historia de usuario es Small (pequeña) que no sea grande, que conste de funcionalidades pequeñas'
                                        name='p5'
                                    />
                                </Grid>
                                <Grid item sm={4}>
                                    <MyTextInput
                                        name='obs5'
                                        fullWidth
                                        label='Observaciones'
                                    />
                                </Grid>

                                <Grid item sm={8}>
                                    <MyToggleValidar
                                        label='6) La historia de usuario es testeable (verificable), para que en el futuro se le peudan realizar pruebas'
                                        name='p6'
                                    />
                                </Grid>
                                <Grid item sm={4}>
                                    <MyTextInput
                                        name='obs6'
                                        fullWidth
                                        label='Observaciones'
                                    />
                                </Grid>
                                <Grid item sm={6}>
                                    <MyTextInput
                                        name='elabora'
                                        fullWidth
                                        label='Elabora'
                                    />
                                </Grid>
                                <Grid item sm={6}>
                                    <MyTextInput                                    
                                        name='revisa'
                                        fullWidth
                                        label='Revisa'
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
