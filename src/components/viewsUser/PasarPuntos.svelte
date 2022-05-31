<script>
    
    import AutoComplete from "simple-svelte-autocomplete"
import { addPuntaje, getDataByName } from "../../db";
    import {Puntaje, PersonajeActual, ListaPersonas} from "../../stores"
    
    $: listaPersonasNombre = $ListaPersonas.map(ele => ele.nombrePersona)
    let selectedPJ;
    $: puntosSeleccionados = 1;

    const realizar = async (puntosATrabajar) => {
        //quitar puntos
        
       await quitarPuntos(puntosATrabajar)
     //   agregarPuntos(puntosATrabajar)

        //agregar puntos
        console.log(puntosATrabajar)
        console.log("pj es", selectedPJ)
       await  agregarPuntos(puntosATrabajar, selectedPJ)
    }

    const quitarPuntos = async (puntosSel) => {
        console.log("puntaje es ", $Puntaje)
        let puntosFinal =  $Puntaje  - puntosSel
        console.log("puntos son", puntosFinal)
        console.log($PersonajeActual)

        //add to db
        await addPuntaje($PersonajeActual,puntosFinal) 
        //add to store, front
        await Puntaje.set(puntosFinal)
    }

    const agregarPuntos = async (puntosSel, personajeSeleccionado) => {
        //db
        //get puntaje de esa persona, sumarle puntajeSel
        let personaTarget = await getDataByName(personajeSeleccionado) 
        console.log("puntos personas", personaTarget)
        let sumaFinal = personaTarget.puntos + parseInt(puntosSel)
        await addPuntaje(personajeSeleccionado,sumaFinal)

         //store
        //cambiar ese valor en la store.
        console.log($ListaPersonas)
        ListaPersonas.update( lista => {
            //genero nuevo ele con puntos seteados
            
            const eleMatch = lista.find(ele => ele.nombrePersona === personajeSeleccionado)
            console.log("match es", eleMatch)
            eleMatch.puntos = sumaFinal
            return lista 
            //lista sin ele viejo, devuevo lista con nuevo
          //  let listaNueva = lista.filter(ele => ele.nombrePersona !== personajeSeleccionado)
          //  return [...listaNueva, eleMatch]
        })
        console.log("after", $ListaPersonas)

    }
</script>
<div class="contenedor-enviarPuntos">  
<div class="mi-personaje">Mi Personaje: {$PersonajeActual}</div>
<div class="mis-puntos">Mis Puntos: {$Puntaje}</div>

{#if $Puntaje > 0 }
<div class="enviar-target"> 
    <AutoComplete   moreItemsText="mas" items="{listaPersonasNombre}" bind:selectedItem="{selectedPJ}" placeholder="Personaje a Enviar"/>
</div>

<div class="rango-puntos">  

    
<label for="cantidad-puntos">Puntos a enviar: {puntosSeleccionados}</label>
 
<input type="range" class="form-range" name="cantidad-puntos" id="customRange3"   min="1" max={$Puntaje}  bind:value={puntosSeleccionados}  >
</div>
{:else}
No hay puntos que enviar    :(   

{/if}
 

<button class="btn btn-outline-primary puntos-enviar" on:click|preventDefault={() => realizar(puntosSeleccionados)}>Enviar </button>
 

</div>
<style>
   .contenedor-enviarPuntos{
    display: flex;
    flex-direction: column;
    align-items: self-start;
    gap: 2.5rem;
   }

   #customRange3{
       border:unset!important;
      
   }
   .puntos-enviar{
    align-self: center;
   }
   .rango-puntos{
        align-self: stretch;
   }
</style>