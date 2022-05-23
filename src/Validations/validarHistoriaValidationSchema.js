import * as yup from 'yup'

export const validarHistoriaValidationSchema = yup.object().shape({
    number_vh: yup.string().required('Campo requerido'),
    elabora: yup.string().required('Campo requerido'),
    revisa: yup.string().required('Campo requerido')
})