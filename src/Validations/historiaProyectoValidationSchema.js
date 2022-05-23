import * as yup from 'yup'

export const historiaValidationSchema = yup.object().shape({
    number_h: yup.string().required('Número de historia requerida'),
    name_h: yup.string().required('Nombre de historia requerida'),
    develop: yup.string().required('Responsable de historia requerida'),
    priority: yup.string().required('Prioridad de historia requerida'),
    rol: yup.string().required('Rol de historia requerida'),
    deseo: yup.string().required('Deseo de historia requerida'),
    proposito: yup.string().required('Propósito de historia requerida'),
    descripcion: yup.string().required('Observaciones de historia requerida'),
})
