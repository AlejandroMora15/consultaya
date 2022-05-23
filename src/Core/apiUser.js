import { collection, getDocs, addDoc } from "firebase/firestore"
import { db } from "./configDB"

export const signIn = async (email, password) => {
    try {
        const snapshot = await getDocs(collection(db, 'usuarios'))
        let myUser = false
        snapshot.forEach(doc => {
            const data = doc.data()
            if(data.email == email && data.password == password)
                myUser = { ...data, id: doc.id}
        })
        return myUser
    } catch (error) {
        return false
    }
}

export const getUserId = () => {
    const localUser = localStorage.getItem('user')
    return JSON.parse(localUser).id
}

export const createUser= async (values) => {
    try{
        await addDoc(collection(db, 'usuarios'), values)
        return true
    }catch(e){
        console.log(e)
        return false
    }
}
