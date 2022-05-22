import { Button, Grid } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'
import { MyTextInput } from '../Components/MyTextInput'
import { loginValidationSchema } from '../Validations/loginValidationSchema'

const initialValues = {
    email: '',
    password: ''
}

export const LoginForm = ({onSubmit}) => {
    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={loginValidationSchema}
        >
            { ({errors}) => {
                return (
                    <Form>
                        <Grid container spacing={2} mb={1}>
                            <Grid item xs={12}>
                                <MyTextInput
                                    name='email'
                                    label='Email'
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} mb={1}>
                            <Grid item>
                                <MyTextInput
                                    name='password'
                                    label='Contraseña'
                                    variant="outlined"
                                    type='password'
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} justifyContent='center'>
                            <Grid item>
                                <Button type='submit' variant='contained'>
                                    Ingresar
                                </Button>
                            </Grid>
                        </Grid>
                        
                    </Form>
                )
            }}
        </Formik>
    )
}
