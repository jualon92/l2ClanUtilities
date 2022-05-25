<script>
    import { EsAdmin, Pedidos } from "../../stores";
    import { fade, scale } from "svelte/transition";
    import * as animateScroll from "svelte-scrollto"
    import {onMount} from "svelte"
    import {deletePedido, setPedidoEstado} from "../../db"
  
    const cambiarEtapa = async (pedido) => {
        let indice = $Pedidos.findIndex((ele) => ele.nombre == pedido.nombre);
        const nuevaEtapa =
            pedido.etapa == "finalizado" ? "pendiente" : "finalizado";
        $Pedidos[indice].etapa = nuevaEtapa;

        //db
        setPedidoEstado(pedido, nuevaEtapa);
    };

    const borrarPedido = async (pedido) => {
        //borrar store Pedidos
        let lista = [...$Pedidos];
        let listaNueva = lista.filter((ele) => ele !== pedido);
        Pedidos.set(listaNueva);

        //borrar DB
        await deletePedido(pedido);
    };
</script>


  


{#if !$EsAdmin}
    <table
        class="table table-hover table-responsive "
        in:fade={{ duration: 500 }}
    >
        <thead>
            <tr>
                <th scope="col">Pedido</th>
                <th scope="col">Personaje</th>
                <th scope="col">Estado</th>
                <th scope="col">Fecha</th>
            </tr>
        </thead>
        <tbody>
            {#each $Pedidos as pedido}
                <tr class="table-active">
                    <th scope="row">{pedido.item} </th>
                    <td>{pedido.personaje}</td>
                    <td>
                        <button
                            class="badge   badge-estado btn-lg rounded-pill table-striped  {pedido.etapa ==
                            'finalizado'
                                ? 'bg-warning'
                                : 'bg-success'}">{pedido.etapa}</button
                        >
                    </td>
                    <td>{pedido.fecha}</td>
                </tr>
            {/each}
        </tbody>
    </table>
{:else}
    <div>
        <table
            class="table table-hover table-responsive "
            in:fade={{ duration: 500 }}
        >
            <thead>
                <tr>
                    <th scope="col">Pedido</th>
                    <th scope="col">Personaje</th>
                    <th scope="col">Estado</th>

                    <th scope="col">Accion</th>
                </tr>
            </thead>
            <tbody>
                {#each $Pedidos as pedido}
                    <tr class="table-active">
                        <th scope="row"
                            >{pedido.item}
                            <div>{pedido.fecha}</div>
                        </th>
                        <td>{pedido.personaje}</td>
                        <td>
                            <button
                                class="badge   badge-estado btn-lg rounded-pill table-striped  {pedido.etapa ==
                                'finalizado'
                                    ? 'bg-warning'
                                    : 'bg-success'}"
                                >{pedido.etapa}
                            </button>
                        </td>

                        <td>
                            <button
                                class="btn btn-outline-warning"
                                style="width:49px;height:38px"
                                on:click={() => cambiarEtapa(pedido)}>✔</button
                            >
                            <button
                                class="btn btn-danger"
                                on:click|preventDefault={() =>
                                    borrarPedido(pedido)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="currentColor"
                                    class="bi bi-trash3"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                                    />
                                </svg>
                            </button>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
{/if}

<style>
.badge-estado {
    padding: 0.5rem 1rem !important;
}

@media (max-width: 370px) {
    .table>:not(caption)>*>* {
            padding: 0.5rem 0.25rem !important;
        }
    }

</style>
 