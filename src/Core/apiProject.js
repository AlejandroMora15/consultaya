import { addDoc, collection, getDocs } from "@firebase/firestore"
import { getUserId } from '../Core/apiUser'
import { db } from "./configDB"

export const createProject = async (values) => {
    try{
        await addDoc(collection(db, 'proyectos'), {...values, userId: getUserId()})
        return true
    }catch(e){
        console.log(e)
        return false
    }
}

export const getProject = async () => {
    try{
        const userId = getUserId()
        const snapshot = await getDocs(collection(db, 'proyectos'))
        if(!snapshot.empty){
            let data = []
            snapshot.forEach(doc => {
                if(userId == doc.data().userId)
                    data.push({...doc.data(), id: doc.id})
            })
            return data
        }else{
            return []
        }
    }catch(e){
        console.log(e)
        return false
    }
}