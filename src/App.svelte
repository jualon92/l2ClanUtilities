<script>
	import { onMount } from "svelte";
 
 
	import { ListaPersonas, estaEnLogin } from "./stores.js";
	import { get} from "svelte/store"
 
	import Login from "./components/Login.svelte"
	 
	import { getAll } from "./db"
 
	$: preloadImagesURL = [
		"https://lineage.pmfun.com/data/img/armor_t79_u_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t79_l_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t79_g_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t79_b_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_helmet_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t78_ul_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t78_g_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t79_b_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t79_b_i00_0.png" ,
		"https://lineage.pmfun.com/data/img/armor_t77_ul_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t77_ul_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t77_b_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_helmet_i00_0.png" ,
		"https://lineage.pmfun.com/data/img/armor_leather_helmet_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t70_u_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t70_l_i00_0.png" ,
		"https://lineage.pmfun.com/data/img/armor_t70_g_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t70_b_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_leather_helmet_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t68_u_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t68_l_i00_0.png" ,
		"https://lineage.pmfun.com/data/img/armor_t68_g_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t68_b_i00_0.png" ,
		"https://lineage.pmfun.com/data/img/armor_leather_helmet_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t69_ul_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t69_g_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t69_b_i00_0.png" ,
		"https://lineage.pmfun.com/data/img/armor_t73_u_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t73_l_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t73_g_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t73_b_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_leather_helmet_i00_0.png" ,
		"https://lineage.pmfun.com/data/img/armor_t72_ul_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t72_g_i00_0.png" ,
		"https://lineage.pmfun.com/data/img/armor_t72_b_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_leather_helmet_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t71_ul_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t71_g_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_t71_b_i00_0.png",
		"https://lineage.pmfun.com/data/img/armor_leather_helmet_i00_0.png",
		"https://lineage.pmfun.com/data/img/shield_doom_shield_i00_0.png"

	]
	


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
    {#each preloadImagesURL as image}
      <link rel="preload" as="image" href={image} />
    {/each}
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
