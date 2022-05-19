<script>
     import { ListaPersonas, estaEnLogin, EsAdmin } from "../../stores";
    import { addDoc, collection } from "firebase/firestore";
    import { db, auth } from "../../firebase";
    import { get } from "svelte/store";
    import { getAll } from "../../db"
    const aparecerInput = false;
 

    const delogear = async () => {
         
        estaEnLogin.set(true) 
        console.log(get(estaEnLogin))

        window.localStorage.setItem("logeando", true)
        EsAdmin.set(null)
 
        let lista = await getAll()
		console.log("array")
		ListaPersonas.set(lista)
		console.log(get(ListaPersonas))
        
        await auth.signOut(); 
        /*console.log("login")
        document.querySelector("body").style.backgroundImage =  "url('https://cdn.discordapp.com/attachments/973519440606003244/974641834460594206/259792.jpg')";
        console.log(document.querySelector("body"))*/
      
    };
</script>
 
<div class="d-flex justify-content-end mt-3 btn-salir">
    <button
        class="btn btn-primary btn-lg p2"
        on:click={delogear}>Salir</button
    >
</div>

<style>
    button {
        border-radius: 6px;
    }
 
 
</style>
