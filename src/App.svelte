<script>
	import { onMount } from "svelte";
 
 
	import { ListaPersonas, estaEnLogin } from "./stores.js";
	import { get} from "svelte/store"
 
	import Login from "./components/Login.svelte"
	 
	import { getAll } from "./db"
 
 
	
	/*
    const actividadesRef = collection(db, "rank"); //ini, refe
    const q = query(actividadesRef, orderBy("created"));

    const actividades = collectionData(q, { idField: "id" }).pipe(
        startWith([]) 
    ); // converts into observable

	*/
 

    onMount(async () => {
 
        let lista = await getAll()
		console.log("array")
		ListaPersonas.set(lista)
		console.log(get(ListaPersonas))
        
    });

	
</script>


<svelte:head > 
  
</svelte:head> 
<main class="contenedor-main">
	 
</main>


 
<Login/> 
 

<style>
	/*
	@media (max-width: 900px) {
		table {
			width: 95% !important;
		}
	}
*/
 
	 
	main {
 
		text-align: center;
	 
		max-width: 240px;
		margin: 0 auto;
	}

	 

	@media (max-width:900px){
		 
	}
	 
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
