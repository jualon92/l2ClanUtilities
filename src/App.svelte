<script>
	import { onMount } from "svelte";
	import { fade, scale } from "svelte/transition";
	import Lista from "./components/Lista.svelte";
	import { ListaPersonas } from "./stores.js";
	import { get} from "svelte/store"
	import AddPersona from "./components/AddPersona.svelte";
	import Login from "./components/Login.svelte"
	import { db } from "./firebase.js";
	import {
		addDoc,
		updateDoc,
		deleteDoc,
		collection,
		getFirestore,
		getDoc,
		query,orderBy,getDocs
	} from "firebase/firestore";
	import { startWith } from "rxjs/operators";
    import { collectionData } from "rxfire/firestore";
	import { getAll } from "./db"
	
	let nombre = "juan";
	let name = "matias";

	
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


<svelte:head />
<main>
	<h1>Tabla de puntos</h1>
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
	.contenedor {
		display: flex;
		justify-content: center;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	th {
		text-align: center;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
