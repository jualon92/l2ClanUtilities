<script>
    import { ListaPersonas , EsAdmin} from "../stores";
    import { get, writable } from "svelte/store";
    import { onMount } from "svelte";
    export let nombrePersona;
    export let puntos;
    import { fade, scale } from "svelte/transition";
    import { collection } from "firebase/firestore";
    import { db } from "../firebase.js";
    import { Body } from 'svelte-body';
    import { getAll } from "../db"
    import { addPuntaje, deleteNombreDB } from "../db.js";
  
    
    onMount( async () => {
     /*   let lista = await getAll()
		console.log("array")
		ListaPersonas.set(lista)
		console.log(get(ListaPersonas))*/
    })
</script>

 

<tr class="table-default" in:scale  >
    <th scope="row " class=" row-nombre">{nombrePersona}</th>
    <td>  <span class="badge bg-primary rounded-pill">{puntos}</span> </td>
    
</tr>

<style>
   
    .badge{
        padding: 0.4em 0.65em!important;
        font-size: 1em!important;
    }
    
    td {
        /* width: 140px;*/
    }
    td,
    th {
        text-align: center;
    }


    
</style>
