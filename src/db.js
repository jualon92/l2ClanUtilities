
import { db } from "./firebase.js"

import {
    addDoc,
    updateDoc,
    deleteDoc,
    collection,
    getFirestore,
    query,
    orderBy,
    getDocs, where, doc, getDoc
} from "firebase/firestore";


const actividadesRef = collection(db, "rank"); //ini, refe
//const query = db.collection("actividades").where("uid", "==", uid).orderBy("created")

const pedidosRef = collection(db, "pedidos");


 //GET


export const getDataByMail = async (email) => {
    const q = query(actividadesRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    let data = null
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        data = doc.data() 
    });
    return data
};


export const getDataByName = async (name) => {
    const q = query(actividadesRef, where("nombrePersona", "==", name));
    const querySnapshot = await getDocs(q);
    let data = null
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        data = doc.data() 
    });
    return data
};

 

const getIdByName = async (nombre) => {
    const q = query(
        actividadesRef,
        where("nombrePersona", "==", nombre)
    );


    const querySnapshot = await getDocs(q);
    let idBuscado = null;
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data().nombrePersona);
        idBuscado = doc.id;
    });
    console.log(idBuscado);
    return idBuscado
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

export const getPedidos = async () => {
    const querySnapshot = await getDocs(pedidosRef);
        let lista = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            lista = [...lista, doc.data()]
        });
        return lista
}

 



export const getRol = async (email) => {
    const docuRef = doc(db, `usuarios/${email}`);
    const docSnap = await getDoc(docuRef);
    if (docSnap.exists()) {
        const rol = docSnap.data().rol;
        return rol;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
};




//SET

export const addNameToDb = async (name,email) =>
await addDoc(actividadesRef, {
    nombrePersona:name,
    puntos: "15",
    email: email
});

export const addPedido = async (personaje,item,fecha) =>
await addDoc(pedidosRef, {
    personaje:personaje,
    item:item,
    etapa:"pendiente",
    fecha:fecha
});


 

export const deleteNombreDB = async (nombre) => {
    //encontrar item a borrar
    const idBuscado = await getIdByName(nombre)
    deleteDoc(doc(db, "rank", idBuscado))

};


export const addPuntaje = async (nombre, puntos) => {
    console.log("buscando con nombre", nombre)
    const idBuscado = await getIdByName(nombre)
    console.log("id encontrado", idBuscado)

    const dbRef = await doc(db, "rank", idBuscado);
    console.log("ref ", dbRef)
    await updateDoc(dbRef, { puntos });
}



////pedidos

const obtenerPedidoID = async (pedido) => {
    const q = query(
        pedidosRef, //seria mejor que tengan un id
        where("personaje", "==", pedido.personaje),
        where("item", "==", pedido.item),
        where("fecha", "==", pedido.fecha)
    );

    const querySnapshot = await getDocs(q);
    let datos = null;
    let id = null
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id );
        id = doc.id
    });
    
    return id

}

export const deletePedido = async (pedido) => {
    const idBuscado = await obtenerPedidoID(pedido)
    console.log(idBuscado)
    await deleteDoc(doc(db, "pedidos", idBuscado))

}

export const setPedidoEstado = async(pedido, etapa) => {
    const idBuscado = await obtenerPedidoID(pedido)
     
    const dbRef = doc(db, "pedidos", idBuscado);
    await updateDoc(dbRef, { etapa });

}
