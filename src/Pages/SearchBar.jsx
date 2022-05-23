import { InputAdornment, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

export const FilterBar = ({data, setDataFilter}) => {
    const [criterio, setCriterio] = useState('') 

    useEffect(() => {
        filterMediator(criterio, setDataFilter, data)
    }, [criterio])

    return (
        <TextField
            id="input-with-icon-adornment"
            variant='outlined'
            fullWidth
            size='small'
            placeholder='Buscar...'
            onChange={(e) => setCriterio(e.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />   
    )
}

const filterMediator = (criterio, setDataFilter, data = []) => {
    setDataFilter(data.filter(e => {
        const aux = e?.name || e.name_h
        return (
            aux.toLowerCase()?.indexOf(criterio) > -1 
        )
    }))
}