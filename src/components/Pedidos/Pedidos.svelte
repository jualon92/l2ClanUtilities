<script>
    import { fly, scale, fade, slide } from "svelte/transition";
    import dayjs from "dayjs";

    import localeData from "dayjs/plugin/localeData";
    import { getPedidos } from "../../db";
    import * as animateScroll from "svelte-scrollto";
    import {
        Pedidos,
        SeleccionTipoItem,
        SeleccionTipoActual,
        Seleccionado,
        ItemSetName,
    } from "../../stores";
    import { onMount } from "svelte";
    import { ListaSets } from "../../itemsDisponibles";

    import MostrarHistorial from "./MostrarHistorial.svelte";
    import ColumnaItems from "./ColumnaItems.svelte";
    


    //obtener pedidos 
    onMount(async () => {
        const pedidos = await getPedidos();
        Pedidos.set(pedidos);
    });
  

    $: seleccionado = $Seleccionado;

    const renderTablaPrecios = (nombreSet) => {
        //recordar set seleccionado
        ItemSetName.set(nombreSet);

        //setear eleccion de subtipo de set a la ultima recordada
        SeleccionTipoItem.set(nombreSet[$SeleccionTipoActual]);

        //render dinamically componente tabla precio
        seleccionado = ColumnaItems;
    };
</script>

<div class="contenedor-canje">
    <div class="pedidos-actuales mb-3">
        <button
            on:click={() => animateScroll.scrollToBottom()}
            on:click|preventDefault={() => (seleccionado = MostrarHistorial)}
            class="btn btn-info"
        >
            Estado Pedidos
        </button>
    </div>

    <div class="contenedor-pedidos">
        <ul class="nav nav-pills flex-column nav-sets ">
            <li class="nav-item">
                <a class="nav-link titulo " href={null}>Armor</a>
            </li>

            {#each ListaSets as set}
                <li class="nav-item">
                    <a
                        class="nav-link"
                        data-bs-toggle="tab"
                        href={3}
                        on:click|preventDefault={() => {
                            renderTablaPrecios(set);
                        }}>{set.nombre}</a
                    >
                </li>
            {/each}

            <li class="nav-item">
                <a class="nav-link titulo " href="#">Joyeria</a>
            </li>
            <li class="nav-item">
                <a data-bs-toggle="tab" class="nav-link " href="5">Black Ore</a>
            </li>
        </ul>
        <!--tabla precios render dinamico-->
        <svelte:component this={seleccionado} />
    </div>
</div>

<style>
    .contenedor-canje {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 100%;
    }

  
    .pedidos-container {
        align-self: center;
    }
    .pedidos-actuales {
        width: 70%;
    }

    thead,
    tbody {
        text-align: center;
    }

   

    .nav-sets {
        min-width: 150px;
    }
    

    
    .titulo {
        transform: translateX(-25px);
        font-weight: bolder;
    }

    @media screen and (min-width: 1000px) {
        .texto {
            display: inline;
        }
        .icon-item {
        }
        .contenedor-pedidos {
            width: 70%;
            display: flex;
            gap: 40px;
        }
    }
  

  
    ::placeholder {
        color: black;
    }
 

    @media (max-width: 1000px) {
        /* mobile */
        .contenedor-pedidos {
            width: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

        }
        .pedidos-actuales {
            display: flex;
            width: 100%;
            justify-content: center;
        }
    }

    
    
</style>
