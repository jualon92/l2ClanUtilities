<script>
  
    import { onMount } from "svelte";
import { get } from "svelte/store";
import {PersonajeActual } from "../../stores"
    export let nombrePersona;
    export let puntos;
    import { fade, scale } from "svelte/transition";
     
    onMount( async () => {
     /*   let lista = await getAll()
		console.log("array")
		ListaPersonas.set(lista)
		console.log(get(ListaPersonas))*/
        console.log("tabla")
     
    })
</script>

 

<tr class="table-default"   in:scale  class:table-success="{nombrePersona ==  $PersonajeActual}"   >
    <th scope="row "    >{nombrePersona}  </th>
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
