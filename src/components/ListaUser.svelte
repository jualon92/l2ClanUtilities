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
    
    import { addPuntaje, deleteNombreDB } from "../db.js";
  

    onMount( () => {
 
    })
</script>

 

<tr class="table-default" in:scale  >
    <th scope="row " class=" row-nombre">{nombrePersona}</th>
    <td>{puntos}</td>
    
</tr>

<style>
   
 
  
    td {
        width: 140px;
    }
    td,
    th {
        text-align: center;
    }


    
</style>
