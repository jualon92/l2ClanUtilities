<script>
    import { fly, scale, fade } from "svelte/transition";
    const tallum = {
        nombre: "Tallum",
        robe: [
            { nombre: "Tallum Wizard Hat", precio: "222" },
            { nombre: "Tallum Robe", precio: "333" },
        ],
        heavy: [
            { nombre: "Tallum Helmet", precio: "123" },
            { nombre: "Tallum breastplate", precio: "321" },
        ],
        light: [
            { nombre: "Tallum Sombrero", precio: "555" },
            { nombre: "Tallum Remera", precio: "111" },
        ]
    };
    const blueWolf = { nombre: "Blue Wolf", 
    robe: [
            { nombre: "Blue Wolf Wizard Hat", precio: "111" },
            { nombre: "Blue Wolf Robe", precio: "333" },
        ],
        heavy: [
            { nombre: "Blue Wolf Helmet", precio: "66 " },
            { nombre: "Blue Wolf breastplate", precio: "234" },
        ],
        light: [
            { nombre: "Blue Wolf Sombrero", precio: "123" },
            { nombre: "Blue Wolf Remera", precio: "321" },
        ]  };
    const doom = { nombre: "Doom", robe: [
            { nombre: "Doom Wizard Hat", precio: "111" },
            { nombre: "Doom Robe", precio: "333" },
        ],
        heavy: [
            { nombre: "Doom  Helmet", precio: "66 " },
            { nombre: "Doom breadsplate", precio: "234" },
        ],
        light: [
            { nombre: "Doom Sombrero", precio: "123" },
            { nombre: "Doom Remera", precio: "321" },
        ] };
    $: seleccion = "";
    $: seleccionTipo = "";
   
</script>

<div class="contenedor-pedidos">
    <ul class="nav nav-pills flex-column nav-sets ">
        <li class="nav-item">
            <a class="nav-link titulo " href={null}>Armor</a>
        </li>

        <li class="nav-item">
            <a
            class="nav-link"
            data-bs-toggle="tab"  
                href={3}
                on:click|preventDefault={() => {seleccion = blueWolf, seleccionTipo = ""}}
                >Blue Wolf</a
            >
        </li>

        <li class="nav-item">
            <a
                
                href={2}
                class="nav-link"
                data-bs-toggle="tab"  
                on:click|preventDefault={() => {seleccion = doom, seleccionTipo = ""}}>Doom</a
            >
        </li>
        <li class="nav-item">
            <a
            data-bs-toggle="tab"  
                class="nav-link "
                href={4}
                on:click|preventDefault={() => {seleccion = tallum, seleccionTipo = ""}}>Tallum</a
            >
        </li>
        <li class="nav-item">
            <a class="nav-link titulo " href="#">Joyeria</a>
        </li>
        <li class="nav-item">
          
            <a    data-bs-toggle="tab"   class="nav-link " href="5">Black Ore</a>
        </li>
    </ul>

    {#if seleccion}
        <div class="contenedor-item  " in:fade={{ duration: 300 }}>
            <h3 class="item-nombre">{seleccion.nombre}</h3>
            <div class="tipo">
                <a
                data-bs-toggle="tab" 
                    class="nav-link robe"
                    href={1}
                    on:click|preventDefault={() =>
                        (seleccionTipo = seleccion.robe)}>Robe</a
                >
                <a
                data-bs-toggle="tab" 
                    class="nav-link robe"
                    href={2}
                    on:click|preventDefault={() =>
                        (seleccionTipo = seleccion.heavy)}>Heavy</a
                >
                <a
                data-bs-toggle="tab" 
                class="nav-link robe"
                href={3}
                on:click|preventDefault={() =>
                    (seleccionTipo = seleccion.light)}>Light</a
            >
            </div>
         
         

        {#if seleccionTipo}
            <table class="table table-hover table-striped ">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {#each seleccionTipo as parte}
                        <tr class="table-active">
                            <th scope="row">{parte.nombre} </th>
                            <td>{parte.precio} </td>
                            <td
                                ><button class="btn btn-primary">Pedir</button
                                ></td
                            >
                        </tr>
                    {/each}
                </tbody>
            </table>
        {/if}
    </div>
    {/if}
</div>

<style>
    thead,
    tbody {
        text-align: center;
    }

    table {
        margin-top: 15px;
    }
    .clasi {
        display: flex;
        flex-direction: row;
    }
    .parte {
        border-bottom: 1px solid #ddd;
        padding: 1rem;
        width: 100% !important;
    }
    .nav-sets {
        width: 150px;
    }
    .tipo {
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #ddd;
        padding: 1rem;
        justify-content: space-around;
    }
    .item-nombre {
        border-bottom: 1px solid #ddd;

        margin-bottom: 0 !important;

        padding: 1rem;
        padding-top: 15px;
    }

    .contenedor-item {
        width: 60%;
    }
    .titulo {
        transform: translateX(-25px);
        font-weight: bolder;
    }

    @media screen and (min-width: 1000px) {
        .contenedor-pedidos {
            width: 70%;
            display: flex;
        }
    }
 
</style>
