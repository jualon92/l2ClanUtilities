<script>
    import { ListaPersonas, estaEnLogin, EsAdmin } from "../../stores";
    import { addDoc, collection } from "firebase/firestore";
    import { db, auth } from "../../firebase";
    import { get } from "svelte/store";
    import { getAll } from "../../db"
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
        estaEnLogin.set(true);
        console.log(get(estaEnLogin));

        window.localStorage.setItem("logeando", true);

        window.localStorage.setItem("logeando", true)
        EsAdmin.set(null)
 
        let lista = await getAll()
		console.log("array")
		ListaPersonas.set(lista)
		console.log(get(ListaPersonas))



        EsAdmin.set(null);
        await auth.signOut();
        /*console.log("login")
        document.querySelector("body").style.backgroundImage =  "url('https://cdn.discordapp.com/attachments/973519440606003244/974641834460594206/259792.jpg')";
        console.log(document.querySelector("body"))*/
    };
</script>

<div class="input-group mt-3 add-persona">
    <!--   <p >Puntos</p>
    <input  bind:value={puntos} type="text" >  -->

    <input
        bind:value={nombrePersona}
        type="text"
        placeholder="Nombre Personaje"
        style="width:150px;"
    />
    <button
        class="input-group-prepend btn btn-primary p-2 "
        on:click={agregarPersona}>Agregar</button
    >
</div>

<div class="d-flex justify-content-end mt-3 add-persona">
    <button
        class="input-group-prepend btn btn-primary p-2  "
        on:click={delogear}>Salir</button
    >
</div>

<style>
    
 
    .add-persona{
        justify-self: center;
    align-self: center;
    justify-content: center;
    
    }

    button {
        border-radius: 6px;
    }
    input {
        border-radius: 6px;
    }
</style>
