<script>
    import { fade, scale } from "svelte/transition";
    import {ItemSetName, SeleccionTipoItem, SeleccionTipoActual, Seleccionado, PartePedida } from "../../stores"
    import SeleccionItems from "./SeleccionItems.svelte"
   
    $: seleccion = $ItemSetName;
  

  

</script>

<div class="contenedor-item  " in:fade={{ duration: 300 }}>
    <h3 class="item-nombre">{seleccion.nombre}</h3>
    <div class="tipo nav nav-pills">
        <a
            data-bs-toggle="tab"
            class=" nav-link robe"
            href={1}
            on:click|preventDefault={() => (
                  (SeleccionTipoActual.set("robe")),
                  (console.log(seleccion.robe)),
              (SeleccionTipoItem.set(seleccion.robe))
    
            )}>Robe</a
        >

        <a
            data-bs-toggle="tab"
            class="nav-link robe"
            href={2}
            on:click|preventDefault={() => (
                 (SeleccionTipoActual.set("heavy")),
                 (SeleccionTipoItem.set(seleccion.heavy))
            )}>Heavy</a
        >
        <a
            data-bs-toggle="tab"
            class="nav-link robe"
            href={3}
            on:click|preventDefault={() => (
                (SeleccionTipoActual.set("light")),
                (SeleccionTipoItem.set(seleccion.light))
            )}>Light</a
        >
    </div>
  
    {#if $SeleccionTipoItem}
        <table class="table table-hover table-striped ">
            <thead>
                <tr>
                    <th scope="col" />
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Accion</th>
                </tr>
            </thead>

            <tbody>
                {#each $SeleccionTipoItem as parte}
                    <slot>
                        <tr class="table-active">
                            <td
                                ><img
                                    class="icon-item"
                                    src={parte.imagenURL}
                                    alt=""
                                /></td
                            >
                            <th scope="row">
                                <div class="texto">
                                    {parte.nombre}
                                </div></th
                            >
                            <td>{parte.precio} </td>
                            <td
                                ><button
                                    class="btn btn-primary"
                                    on:click|preventDefault={async () => (
                                        (Seleccionado.set(SeleccionItems)) 
                                        (PartePedida.set(parte))
                                    )}>Pedir</button
                                ></td
                            >
                        </tr>
                    </slot>
                {/each}
            </tbody>
        </table>
    {/if}  
</div>
