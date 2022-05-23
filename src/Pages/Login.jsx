import React, { useContext } from 'react'
import { LoginForm } from './LoginForm'
import { UserContext } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../Core/apiUser'
import { SnackbarContext } from '../Context/SnackbarContext'

export const Login = () => {
    const { setSignIn } = useContext(UserContext)
    const { showSnackbar } = useContext(SnackbarContext)
    let navigate = useNavigate()
    
    const handleSignIn = async ({email, password}) => {
        const user = await signIn(email, password)
        if(user){
            setSignIn(user)
            navigate('/Dashboard')
        }else{
            showSnackbar('error', 'Usuario o contraseña erróneos')
        }
    }
    return (
        <div style={{    
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}>
            <div style={{
                background: '#eeecec',
                padding: 20,
                borderRadius: 10
            }}>
                <h3 style={{ fontFamily: 'sans-serif', textAlign: 'center'}}>CONSULTAYA</h3>
                <h4 style={{ fontFamily: 'sans-serif'}}>
                    Iniciar Sesión
                </h4>
                <LoginForm onSubmit={handleSignIn}/>
            </div>
        </div>
    )
}
