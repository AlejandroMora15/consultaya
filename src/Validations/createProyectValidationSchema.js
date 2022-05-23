import * as yup from 'yup'

export const createProyectValidationSchema = yup.object().shape({
    name: yup.string().required('Nombre requerido'),
    description: yup.string().required('Descripción requerida')
})
