import { addDoc, collection, getDocs } from "@firebase/firestore"
import { getUserId } from '../Core/apiUser'
import { db } from "./configDB"

export const createHistoria = async (values) => {
    try{
        await addDoc(collection(db, 'historias'), {
            ...values, 
            userId: getUserId(),
            validado: false
        })
        return true
    }catch(e){
        console.log(e)
        return false
    }
}

export const getHistorias = async (proyectoId) => {
    try{
        const snapshot = await getDocs(collection(db, 'historias'))
        if(!snapshot.empty){
            let data = []
            snapshot.forEach(doc => {
                if(proyectoId == doc.data().proyectoId)
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