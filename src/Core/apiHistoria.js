import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "@firebase/firestore"
import { getUserId } from '../Core/apiUser'
import { db } from "./configDB"

export const createHistoria = async (values) => {
    try{
        await addDoc(collection(db, 'historias'), {
            ...values, 
            userId: getUserId(),
            p1: 'No',
            obs1: '',
            p2: 'No',
            obs2: '',
            p3: 'No',
            obs3: '',
            p4: 'No',
            obs4: '',
            p5: 'No',
            obs5: '',
            p6: 'No',
            obs6: '',
            number_vh: '',
            isAprobado: 'No',
            elabora: '',
            revisa: ''
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

export const updateHistoria = async (values) => {
    try{
        await updateDoc(doc(collection(db, 'historias'), values.id) ,values)
        return true
    }catch(e){
        console.log(e)
        return false
    }
}

export const deleteHistoria = async (id) => {
    try{
        await deleteDoc(doc(collection(db, 'historias'), id))
        return true
    }catch(e){
        console.log(e)
        return false
    }
}