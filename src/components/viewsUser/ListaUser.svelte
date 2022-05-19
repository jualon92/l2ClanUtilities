<script>
  
    import { onMount } from "svelte";
    export let nombrePersona;
    export let puntos;
    import { fade, scale } from "svelte/transition";
    
  
    
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
