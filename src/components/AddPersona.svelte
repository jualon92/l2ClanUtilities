<script>
    import { ListaPersonas } from "../stores.js";
    const aparecerInput = false;
    let nombrePersona = "";
    let puntos = 0;

    const agregarPersona = () => {
        if (nombrePersona) {
            let nuevaPersona = { nombre: nombrePersona, puntaje: 0 };

            ListaPersonas.update((listaActual) => {
                return [...listaActual, nuevaPersona];
            });
        } else {
            //disparar alerta, no se ingreso nada, input invalido.
        }
    };
</script>

<div class="input-group mt-3">
    <!--   <p >Puntos</p>
    <input  bind:value={puntos} type="text" >  -->

    <input
        bind:value={nombrePersona}
        type="text"
        placeholder="Nombre Personaje"
        style="width:150px;"
    />
    <button
        class="input-group-prepend btn btn-primary p-2  "
        on:click={agregarPersona}>Agregar</button
    >
</div>

<style>
    button{
        border-radius:6px;
    }
    input{
        border-radius:6px;
    }
</style>

