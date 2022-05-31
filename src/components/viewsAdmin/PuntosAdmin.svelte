<script>
    import { ListaPersonas } from "../../stores";
    import Lista from "../viewsAdmin/Lista.svelte";
    import  AddPersona  from "../viewsAdmin/AddPersona.svelte"
    import {onMount} from "svelte"

    onMount( async () => {
        console.log("carge")
     /*
    const datosUser = await getDataByMail(user.email);
    PersonajeActual.set(datosUser.nombrePersona)
    ListaPersonas.set(getListaOrdenada(datosUser))  */
})

</script>

 
 

<div class="table-bordered contenedor table-responsive	tabla-admin ">
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
<AddPersona/> 

<style>
    tr {
        text-align: center;
    }

    .tabla-admin{
        box-shadow: 0px 0px 36px 15px rgba(0, 0, 0, 0.28);
        margin:0 auto;
       
    }
    
    @media (min-width:1300px) {
        .tabla-admin{
       
            width: 40%;
    }
 
    }

    
    @media (max-width:1000px){
        .tabla-admin{
       
        width:100%;
    }
    }
    @media screen and (min-width:1000px) and (max-width:1290px) {
        .tabla-admin{
       
            width: 65%;
    }
    }


  
    
</style>