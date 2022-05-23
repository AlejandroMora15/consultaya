import { Alert, Backdrop, CircularProgress, Snackbar } from "@mui/material";

const { createContext, useState } = require("react");

export const SnackbarContext = createContext()

export const SnackbarProvider = ({children}) => {
    const [show, setShow] = useState(false)
    const [showBD, setShowBD] = useState(false)
    const [info, setInfo] = useState({type: 'error' || 'success', content: ''})

    const showSnackbar = (type, content) => { 
        setInfo({type, content})
        setShow(true) 
    }
    
    const hideSnackbar = () => { 
        setShow(false) 
    }

    const showLoading = () => { 
        setShowBD(true) 
    }

    const hideLoading = () => { 
        setShowBD(false) 
    }


    const MySnackbar = () => (
        <Snackbar open={show} autoHideDuration={6000} onClose={hideSnackbar}>
            <Alert onClose={hideSnackbar} severity={info.type} sx={{ width: '100%' }}>
                {info.content}
            </Alert>
        </Snackbar>
    )

    const MyBackdrop = () => (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={showBD}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )

    const data = {
        showSnackbar, 
        MyBackdrop,
        showLoading,
        hideLoading,
        MySnackbar
    }
    return (
        <SnackbarContext.Provider value={data}>
            {children}
        </SnackbarContext.Provider>
    )
}

