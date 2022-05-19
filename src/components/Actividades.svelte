<script>
    import {fly, scale} from "svelte/transition"
    const actividades = [
        { nombre: "Freya", puntos:60 },
        { nombre: "Frintezza", puntos: 45 },
        { nombre: "Zaken", puntos:30 },
        { nombre: "Baium", puntos:70 },
        { nombre: "Queen Ant",puntos:50 },
        { nombre: "Siege", puntos: 10 },
        { nombre: "Territory War", puntos:10 },
    ];
</script>
<div class="outer-container"> 
<div
    class=" table-bordered contenedor table-responsive contenedor-usuario   contenedor-actividades"
>
    <table class="table table-hover w-60 table-striped tabla-usuario  ">
        <thead>
            <tr>
                <th scope="col">Actividades</th>
                <th scope="col">Puntos Reward</th>
            </tr>
        </thead>
        <tbody>
            {#each actividades as actividad}
            <tr class="table-default" in:scale  >
                <th scope="row " class=" row-nombre">{actividad.nombre}</th>
                <td>  <span class="badge bg-primary rounded-pill">{actividad.puntos}</span> </td>
                
            </tr>
            {/each}
        </tbody>
    </table>
</div>
</div>
<style>
    .outer-container{
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    }
    .contenedor-actividades{
    
        text-align: center;
    }

    @media screen and (min-width:1000px){
        .contenedor-usuario{
        width: 40%;
    }
    }
     
</style>