
import { db } from "./firebase.js"

import {
    addDoc,
    updateDoc,
    deleteDoc,
    collection,
    getFirestore,
    query,
    orderBy,
    getDocs, where, doc
} from "firebase/firestore";


const actividadesRef = collection(db, "rank"); //ini, refe
//const query = db.collection("actividades").where("uid", "==", uid).orderBy("created")

export const addNameToDb = async (name) =>
await addDoc(actividadesRef, {
    nombrePersona:name,
    puntos: "0",
});

const getIdByName = async (nombre) => {
    const q = query(
        actividadesRef,
        where("nombrePersona", "==", nombre)
    );


    const querySnapshot = await getDocs(q);
    let idBuscado = null;
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data().nombre);
        idBuscado = doc.id;
    });
    console.log(idBuscado);
    return idBuscado
}



export const deleteNombreDB = async (nombre) => {
    //encontrar item a borrar
    const idBuscado = await getIdByName(nombre)
    deleteDoc(doc(db, "rank", idBuscado))

};


export const addPuntaje = async (nombre, puntos) => {
    const idBuscado = await getIdByName(nombre)
    const dbRef = doc(db, "rank", idBuscado);

    updateDoc(dbRef, { puntos });
}


export const getAll = async () => {
    const querySnapshot = await getDocs(actividadesRef);
        let lista = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            lista = [...lista, doc.data()]
        });
        return lista
}