import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { useField } from 'formik'
import React from 'react'

export const MyToggleValidar = ({...props}) => {
    const [field, meta] = useField(props)
    const showError = !!meta.error && meta.touched
    return (
        <Grid container spacing={1}>
            <Grid item sm={8}>
                <Typography>{props.label}</Typography>
            </Grid>
            <Grid item sm={4}>
                <FormControl 
                    error={showError}
                    {...props}
                >
                    <RadioGroup
                        row
                        {...field}
                        {...props}
                    >
                        <FormControlLabel labelPlacement="start" value="Si" control={<Radio />} label="Si" />
                        <FormControlLabel labelPlacement="start" value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
            </Grid>
        </Grid>
    )
}