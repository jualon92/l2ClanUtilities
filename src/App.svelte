<script>
	import { onMount } from "svelte";
	import { fade, scale } from "svelte/transition";
	import Lista from "./components/Lista.svelte";
	import { ListaPersonas } from "./stores.js";
	import AddPersona from "./components/AddPersona.svelte"
	let nombre = "juan";
	let name = "matias";
	 
	onMount(() => {
		console.log($ListaPersonas);
	});
</script>

<svelte:head>
   
 
</svelte:head>
<main>
	<h1>Tabla de puntos</h1>
	 
</main>

<div class="contenedor table-responsive	 ">
	<table class="table table-hover w-60 table-striped   ">
		<thead>
			<tr>
				<th scope="col">Personaje</th>
				<th scope="col">Points</th>
				<th scope="col">Add</th>
				<th scope="col">Borrar</th>
			</tr>
		</thead>
		<tbody  >  
			{#each $ListaPersonas as user}
		 
				<Lista {...user} /> <!-- nombre={nombre}-->
		 
			{/each}
		</tbody>
	</table>
</div>


<AddPersona/> 

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
