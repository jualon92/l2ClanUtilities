<script>
    import { ListaPersonas  } from "../stores";
    import Lista from "./Lista.svelte"
    import AddPersona from "./AddPersona.svelte"
</script>



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
        <tbody>
            {#each $ListaPersonas as user}
                <Lista {...user} />
            {/each}
        </tbody>
    </table>
</div>
<AddPersona />