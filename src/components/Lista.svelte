<script>
    import { ListaPersonas } from "../stores";
    export let nombre;
    export let puntaje;
    import {fade, scale} from "svelte/transition"
    const borrarItem = (nombre) => {
        //encontrar item a borrar
        console.log("ppp")
        ListaPersonas.update((lista) => {
            return lista.filter((ele) => ele.nombre != nombre); //lista sin parametro
        });
    };

    const restarPuntaje = () => { //no menor a 0
        
        let puntajeFinal = puntaje - 10
       
        if (puntajeFinal < 0){
            puntaje = 0
        }else{
            puntaje = puntajeFinal
        }
    }
   
</script>

<tr class="table-default"  in:scale out:fade={{ duration: 500 }}  >
    <th scope="row " class=" row-nombre">{nombre}</th>
    <td>{puntaje}</td>
    <td  >
        <button  on:click={() => restarPuntaje()}
            type="button"
            class="btn btn-outline-warning"
           
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                fill="currentColor"
                class="bi bi-dash"
                viewBox="0 0 16 16"
            >
                <path
                    d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                />
            </svg>
        </button>
        <button type="button" class="btn btn-outline-success"  on:click={() => puntaje = puntaje + 10}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
            >
                <path
                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                />
            </svg>
        </button>
    </td>

    <td>
        <button type="button" class="btn btn-danger"   on:click={() => borrarItem(nombre)}  >
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
    </td  >
</tr>

<style>

    @media (max-width:900px){
        button{
            margin-bottom:10px;
        }
    }
    .row-nombre{
        width:160px;
    }
    button {
        margin-left: 5px;
    }
    .form-control:focus {
        border-color: #28a745;
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    }
    .add-point {
        display: flex;
        justify-content: center;
    }
    td {
        width: 140px;
    }
    td,
    th {
        text-align: center;
    }
</style>
