import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'
import { MyTextInput } from '../../Components/MyTextInput'
import { createProyectValidationSchema } from '../../Validations/createProyectValidationSchema'

const initialValues = {
    name: '',
    description: ''
}

export const FormProyect = ({open, onClose, onSubmit}) => {

    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>Crear Proyecto</DialogTitle>
            <Formik
                onSubmit={onSubmit}
                validationSchema={createProyectValidationSchema}
                initialValues={initialValues}
            >
                { () => (
                    <Form>
                        <DialogContent>
                            <Grid container spacing={2}>
                                <Grid item sm={6}>
                                    <MyTextInput
                                        name='name'
                                        label='Nombre del proyecto'
                                    />
                                </Grid>
                                <Grid item sm={6}>
                                    <MyTextInput
                                        name='description'
                                        label='Descripción del proyecto'
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
