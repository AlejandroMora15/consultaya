import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useField } from 'formik'
import React from 'react'

export const MyToggleHistoria = ({...props}) => {
    const [field, meta] = useField(props)
    const showError = !!meta.error && meta.touched
    return (
        <FormControl 
            error={showError}
            {...props}
        >
            <FormLabel>Prioridad en el negocio</FormLabel>
            <RadioGroup
                row
                {...field}
                {...props}
            >
                <FormControlLabel labelPlacement="top" value="Alto" control={<Radio />} label="Alto" />
                <FormControlLabel labelPlacement="top" value="Medio" control={<Radio />} label="Medio" />
                <FormControlLabel labelPlacement="top" value="Bajo" control={<Radio />} label="Bajo" />
            </RadioGroup>
        </FormControl>
    )
}
