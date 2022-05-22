import { collection, getDocs } from "firebase/firestore"
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