const { createContext, useState } = require("react");

export const UserContext = createContext()

const initialValue = {
    email: '',
    password: '',
    id: ''
}

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(initialValue)

    const setSignIn = (values) => { 
        localStorage.setItem('user', JSON.stringify(values))
        setUser(values) 
    }
    const getUser = () => { 
        const localUser = localStorage.getItem('user')
        return JSON.parse(localUser)
    }

    const getUserId = () => { 
        const localUser = localStorage.getItem('user')
        return JSON.parse(localUser).id
    }
    const logOut = () => { setUser(initialValue) }

    const data = {setSignIn, getUserId, logOut, getUser}

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

