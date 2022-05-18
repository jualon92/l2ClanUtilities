<script>
import { ListaPersonas  } from "../stores";
import ListaUser from "./ListaUser.svelte"
import AddPersonaUser from "./AddPersonaUser.svelte"
</script>
 


<div class="contenedor table-responsive contenedor-usuario">
    <table class="table table-hover w-60 table-striped tabla-usuario  ">
        <thead>
            <tr>
                <th scope="col">Personaje</th>
                <th scope="col">Points</th>
            </tr>
        </thead>
        <tbody>
            {#each $ListaPersonas as user}
                <ListaUser {...user} />
            {/each}
        </tbody>
    </table>
</div>
<AddPersonaUser />


<style>
    tr{
        text-align: center;
    }
</style>