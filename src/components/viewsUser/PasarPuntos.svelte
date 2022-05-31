<script>
    
    import AutoComplete from "simple-svelte-autocomplete"
import { addPuntaje } from "../../db";
    import {Puntaje, PersonajeActual, ListaPersonas} from "../../stores"
    
    $: listaPersonasNombre = $ListaPersonas.map(ele => ele.nombrePersona)
    let selectedPJ;
    $: puntosSeleccionados = 1;

    const realizar = async (puntosATrabajar) => {
        //quitar puntos
        
       await quitarPuntos(puntosATrabajar)
     //   agregarPuntos(puntosATrabajar)

        //agregar puntos
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
        await addPuntaje(personajeSeleccionado,puntosSel)

         //store
         
    }
</script>
<div class="contenedor-enviarPuntos">  
<div class="mi-personaje">Mi Personaje: {$PersonajeActual}</div>
<div class="mis-puntos">Mis Puntos: {$Puntaje}</div>
<div class="enviar-target"> 
    <AutoComplete   moreItemsText="mas" items="{listaPersonasNombre}" bind:selectedItem="{selectedPJ}" placeholder="Personaje a Enviar"/>
</div>

<div class="rango-puntos">  

  
<label for="cantidad-puntos">Puntos a enviar: {puntosSeleccionados}</label>
<input type="range" class="form-range" name="cantidad-puntos" id="customRange3"   min="1" max={$Puntaje}  bind:value={puntosSeleccionados}  >
</div>

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