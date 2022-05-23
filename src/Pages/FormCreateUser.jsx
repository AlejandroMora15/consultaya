import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'
import { MyTextInput } from '../Components/MyTextInput'
import { loginValidationSchema } from '../Validations/loginValidationSchema'

const initialValues = {
    email: '',
    password: ''
}

export const FormCreateUser = ({open, onClose, onSubmit}) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>Crear usuario</DialogTitle>
            <Formik
                onSubmit={onSubmit}
                validationSchema={loginValidationSchema}
                initialValues={initialValues}
            >
                { () => (
                    <Form>
                        <DialogContent>
                            <Grid container spacing={2}>
                                <Grid item sm={6}>
                                    <MyTextInput
                                        name='email'
                                        label='Correo del usuario'
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={6}>
                                    <MyTextInput
                                        fullWidth
                                        name='password'
                                        label='Contraseña'
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
