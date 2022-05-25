<script>
    import { fade, scale } from "svelte/transition";
    import {
        ItemSetName,
        SeleccionTipoItem,
        SeleccionTipoActual,
        Seleccionado,
        PartePedida,
    } from "../../stores";
    import SeleccionItems from "./SeleccionItems.svelte";
    import * as animateScroll from "svelte-scrollto"

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
                SeleccionTipoActual.set("robe"),
                console.log(seleccion.robe),
                SeleccionTipoItem.set(seleccion.robe),
                animateScroll.scrollToBottom()
            )}>Robe</a
        >

        <a
            data-bs-toggle="tab"
            class="nav-link robe"
            href={2}
            on:click|preventDefault={() => (
                SeleccionTipoActual.set("heavy"),
                SeleccionTipoItem.set(seleccion.heavy),
                animateScroll.scrollToBottom()
            )}>Heavy</a
        >
        <a
            data-bs-toggle="tab"
            class="nav-link robe"
            href={3}
            on:click|preventDefault={() => (
                SeleccionTipoActual.set("light"),
                SeleccionTipoItem.set(seleccion.light),
                animateScroll.scrollToBottom()
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
                                    on:click|preventDefault={async () => {
                                        Seleccionado.set(SeleccionItems),
                                        PartePedida.set(parte);
                                    }}>Pedir</button
                                ></td
                            >
                        </tr>
                    </slot>
                {/each}
            </tbody>
        </table>
    {/if}
</div>

<style>
    .contenedor-item {
        width: 60%;
    }

    .item-nombre {
        border-bottom: 1px solid #ddd;

        margin-bottom: 0 !important;

        padding: 1rem;
        padding-top: 15px;
    }

    .tipo {
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #ddd;
        padding: 1rem;
        justify-content: space-around;
    }
    .table-active {
        vertical-align: middle;
    }

    @media (max-width: 1000px) {
        .table > :not(caption) > * > * {
            padding: 0.5rem 0.4rem;
        }

        table {
            margin-top: 15px;
        }

        .tipo {
            flex-wrap: nowrap;
        }
        .item-nombre {
            text-align: center;
        }
        .contenedor-item {
            width: 90%;
        }

        table {
            margin-top: 15px;
        }
    }
</style>
