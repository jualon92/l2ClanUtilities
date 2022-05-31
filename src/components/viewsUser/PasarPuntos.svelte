<script>
    import AutoComplete from "simple-svelte-autocomplete";
    import { addPuntaje, getDataByName } from "../../db";
    import { Puntaje, PersonajeActual, ListaPersonas } from "../../stores";

    $: listaPersonasNombre = $ListaPersonas.map((ele) => ele.nombrePersona);
    let selectedPJ;
    $: puntosSeleccionados = 1;
    $: seleccionado = false;

    const realizar = async (puntosATrabajar) => {
        //quitar puntos

        await quitarPuntos(puntosATrabajar);
        //   agregarPuntos(puntosATrabajar)

        //agregar puntos
        console.log(puntosATrabajar);
        console.log("pj es", selectedPJ);
        await agregarPuntos(puntosATrabajar, selectedPJ);
    };

    const quitarPuntos = async (puntosSel) => {
        console.log("puntaje es ", $Puntaje);
        let puntosFinal = $Puntaje - puntosSel;
        console.log("puntos son", puntosFinal);
        console.log($PersonajeActual);

        //add to db
        await addPuntaje($PersonajeActual, puntosFinal);
        //add to store, front
        await Puntaje.set(puntosFinal);
    };

    const agregarPuntos = async (puntosSel, personajeSeleccionado) => {
        //db
        //get puntaje de esa persona, sumarle puntajeSel
        let personaTarget = await getDataByName(personajeSeleccionado);
        console.log("puntos personas", personaTarget);
        let sumaFinal = personaTarget.puntos + parseInt(puntosSel);
        await addPuntaje(personajeSeleccionado, sumaFinal);

        //store
        //cambiar ese valor en la store.
        console.log($ListaPersonas);
        ListaPersonas.update((lista) => {
            //genero nuevo ele con puntos seteados

            const eleMatch = lista.find(
                (ele) => ele.nombrePersona === personajeSeleccionado
            );
            console.log("match es", eleMatch);
            eleMatch.puntos = sumaFinal;
            return lista;
            //lista sin ele viejo, devuevo lista con nuevo
            //  let listaNueva = lista.filter(ele => ele.nombrePersona !== personajeSeleccionado)
            //  return [...listaNueva, eleMatch]
        });
        console.log("after", $ListaPersonas);
    };
</script>

<div class="card  border-secondary  mb-3" style="max-width: 20rem;">
    <div class="contenedor-enviarPuntos card-body">
        <h3 class="card-header">Enviar Puntos</h3>

        <div class="card-body">
            <p class="card-text">Sharing is Caring. 😎</p>
            <!--  <div> This action cant be undone</div>  -->
        </div>
        <ul class="list-group list-group-flush lista-perfil">
            <li class="list-group-item">
                <div class="mi-personaje">Mi Personaje: {$PersonajeActual}</div>
            </li>
            <li class="list-group-item">
                <div class="mis-puntos">Mis Puntos: {$Puntaje}</div>
            </li>

            {#if $Puntaje > 0}
                <li class="list-group-item">
                    <div class="enviar-target">
                        <AutoComplete
                            onChange={() => (seleccionado = true)}
                            moreItemsText="mas"
                            items={listaPersonasNombre}
                            bind:selectedItem={selectedPJ}
                            placeholder="Personaje a Enviar"
                        />
                    </div>
                </li>

                <li class="list-group-item">
                    <div class="rango-puntos">
                        <label for="cantidad-puntos"
                            >Puntos a enviar: {puntosSeleccionados}</label
                        >

                        <input
                            type="range"
                            class="form-range"
                            name="cantidad-puntos"
                            id="customRange3"
                            min="1"
                            max={$Puntaje}
                            bind:value={puntosSeleccionados}
                            required
                        />
                    </div>
                </li>
            {:else}
                No hay puntos que enviar :(
            {/if}

            <button
                class:disabled={seleccionado === false}
                type="submit"
                class="btn btn-outline-primary puntos-enviar"
                on:click|preventDefault={() => realizar(puntosSeleccionados)}
                >Enviar
            </button>
        </ul>
    </div>
</div>

<style>
    .list-group-item {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
    }

    .puntos-enviar {
        margin-top: 1.5rem;
    }

    /*
    .contenedor-enviarPuntos {
        display: flex;
        flex-direction: column;
        align-items: self-start;
        padding: 2rem;
    }*/

    #customRange3 {
        border: unset !important;
    }
    .puntos-enviar {
        align-self: center;
    }
    .rango-puntos {
        align-self: stretch;
    }
</style>
