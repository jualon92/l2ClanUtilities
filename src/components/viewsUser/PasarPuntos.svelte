<script>
    
    import AutoComplete from "simple-svelte-autocomplete"
    import {Puntaje, PersonajeActual, ListaPersonas} from "../../stores"
    let listaPersonasNombre = $ListaPersonas.map(ele => ele.nombrePersona)
    let selectedFruit;
    let puntosSeleccionados = 1;
</script>
<div class="contenedor-enviarPuntos">  
<div class="mi-personaje">Mi Personaje: {$PersonajeActual}</div>
<div class="mis-puntos">Mis Puntos: {$Puntaje}</div>
<div class="enviar-target"> 
    <AutoComplete   moreItemsText="mas" items="{listaPersonasNombre}" bind:selectedItem="{selectedFruit}" placeholder="Personaje a Enviar"/>
</div>

<div class="rango-puntos">  

  
<label for="cantidad-puntos">Cantidad Puntos: {puntosSeleccionados}</label>
<input type="range" class="form-range" name="cantidad-puntos" id="customRange3"   min="1" max="10"  bind:value={puntosSeleccionados}  >
</div>

<button class="btn btn-outline-primary puntos-enviar">Enviar </button>
 

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