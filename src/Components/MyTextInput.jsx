import { TextField } from "@mui/material"
import { useField } from "formik"

export const MyTextInput = ({...props}) => {
    const [field, meta] = useField(props)
    
    const showError = !!meta.error && meta.touched
    return (
        <TextField   
            error={showError}  
            helperText={showError && meta.error}
            {...field}
            {...props}
        />
    )
}