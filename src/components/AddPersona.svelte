<script>
    import { ListaPersonas } from "../stores.js";
    import { addDoc, collection } from "firebase/firestore";
    import { db, auth } from "../firebase";
    const aparecerInput = false;
    let nombrePersona = "";
    let puntos = 0;

    const actividadesRef = collection(db, "rank"); //ini, refe
    //const query = db.collection("actividades").where("uid", "==", uid).orderBy("created")

    const addToDb = async () =>
        await addDoc(actividadesRef, {
            nombrePersona,
            puntos: "0",
        });

    const validacion = () => {
        if (!nombrePersona) {
            console.warn("no hay nombre de persona");
            return false;
        }
        console.log($ListaPersonas);
        let yaExiste = $ListaPersonas.find(
            (ele) => ele.nombre == nombrePersona
        );
        if (yaExiste) {
            console.warn("ya existe");
            return false;
        }
        return true;
    };

    const agregarPersona = () => {
        if (validacion(nombrePersona)) {
            console.log("paso val");
            let nuevaPersona = { nombrePersona: nombrePersona, puntos: 0 };

            ListaPersonas.update((listaActual) => {
                return [...listaActual, nuevaPersona];
            });

            addToDb();
            nombrePersona = "";
        }
    };

    const delogear = async () => {
        await auth.signOut();
    };
</script>

<div class="input-group mt-3">
    <!--   <p >Puntos</p>
    <input  bind:value={puntos} type="text" >  -->

    <input
        bind:value={nombrePersona}
        type="text"
        placeholder="Nombre Personaje"
        style="width:150px;"
    />
    <button
        class="input-group-prepend btn btn-primary p-2  "
        on:click={agregarPersona}>Agregar</button
    >
</div>
<div class="d-flex justify-content-end mt-3">
    <button
        class="input-group-prepend btn btn-primary p-2  "
        on:click={delogear}>Salir</button
    >
</div>

<style>
    button {
        border-radius: 6px;
    }
    input {
        border-radius: 6px;
    }
</style>
