<script>
    import { ListaPersonas, PersonajeActual } from "../../stores";
    import ListaUser from "../viewsUser/ListaUser.svelte";
    import { get } from "svelte/store"
    import {onMount} from "svelte"

    onMount( async () => {
        const datosUser = await getDataByMail(user.email);
        PersonajeActual.set(datosUser.nombrePersona)
        ListaPersonas.set(getListaOrdenada(datosUser)) 
    })
 
</script>




<div class=" table-bordered contenedor table-responsive contenedor-usuario ">
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

<style>
    tr {
        text-align: center;
    }

    .contenedor-usuario{
        box-shadow: 0px 0px 36px 15px rgba(0, 0, 0, 0.28);
    }

    @media screen and (min-width: 1000px) {
        .contenedor-usuario {
                 width: 50%;
        }
    }

    @media screen and (min-width: 1300px) {
        .contenedor-usuario {
                 
    width: 30%;
        }

        
    }
 
</style>
