<script>
    import { fly, scale, fade, slide } from "svelte/transition";
    const tallum = {
        nombre: "Tallum",
        robe: [
            { nombre: " Tallum Tunic", precio: "111", imagenURL:"https://lineage.pmfun.com/data/img/armor_t79_u_i00_0.png"},
            { nombre: " Tallum Stockings", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/armor_t79_l_i00_0.png" },
            { nombre: " Tallum Gloves - Robe", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/armor_t79_g_i00_0.png" },      
            { nombre: "Tallum Boots - Robe", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/armor_t79_b_i00_0.png" },
            { nombre: " Tallum Helm", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/armor_helmet_i00_0.png" },
        ],
        light: [
            { nombre: " Tallum Leather Armor", precio: "111", imagenURL:"https://lineage.pmfun.com/data/img/armor_t78_ul_i00_0.png"},
            { nombre: " Tallum Gloves - Light Armor", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/armor_t78_g_i00_0.png" },
            { nombre: "  Tallum Boots - Light Armor", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/armor_t79_b_i00_0.png" },      
            { nombre: " Tallum Helm", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/armor_t79_b_i00_0.png" },
          
        ],
        heavy: [
            { nombre: " Tallum Plate Armor", precio: "111", imagenURL:"https://lineage.pmfun.com/data/img/armor_t77_ul_i00_0.png"},
            { nombre: " Tallum Gloves - Heavy Armor", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/armor_t77_ul_i00_0.png" },
            { nombre: " Tallum Boots - Heavy Armor", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/armor_t77_b_i00_0.png" },      
            { nombre: " Tallum Helm", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/armor_helmet_i00_0.png" },
          
        ],
    };
    const blueWolf = {
        nombre: "Blue Wolf",
        robe: [
            { nombre: "Blue Wolf Helmet", precio: "111", imagenURL:"https://lineage.pmfun.com/data/img/armor_leather_helmet_i00_0.png"},
            { nombre: "Blue Wolf Tunic", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/armor_t70_u_i00_0.png" },
            { nombre: "Blue Wolf Stockings", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/armor_t70_l_i00_0.png" },      
            { nombre: "Blue Wolf Gloves - Robe", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/armor_t70_g_i00_0.png" },
            { nombre: "Blue Wolf Boots - Robe", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/armor_t70_b_i00_0.png" },
        ],
        heavy: [
            { nombre: "Blue Wolf Helmet", precio: "66 ", imagenURL:"https://lineage.pmfun.com/data/img/armor_leather_helmet_i00_0.png" },
            { nombre: "Blue Wolf breastplate", precio: "234", imagenURL:"https://lineage.pmfun.com/data/img/armor_t68_u_i00_0.png" },
            { nombre: " Blue Wolf Gaiters", precio: "234", imagenURL:"https://lineage.pmfun.com/data/img/armor_t68_l_i00_0.png" },
            { nombre: " Blue Wolf Gloves - Heavy armor", precio: "234", imagenURL:"https://lineage.pmfun.com/data/img/armor_t68_g_i00_0.png" },
            { nombre: " Blue Wolf Boots - Heavy armor", precio: "234", imagenURL:"https://lineage.pmfun.com/data/img/armor_t68_b_i00_0.png" },
        ],
        light: [
            { nombre: " Blue Wolf Helmet", precio: "321", imagenURL:"https://lineage.pmfun.com/data/img/armor_leather_helmet_i00_0.png" },
            { nombre: " Blue Wolf Leather Armor", precio: "123", imagenURL:"https://lineage.pmfun.com/data/img/armor_t69_ul_i00_0.png" },
            { nombre: " Blue Wolf Gloves - Light armor", precio: "321", imagenURL:"https://lineage.pmfun.com/data/img/armor_t69_g_i00_0.png" },
            { nombre: " Blue Wolf Boots - Light Armor", precio: "321", imagenURL:"https://lineage.pmfun.com/data/img/armor_t69_b_i00_0.png" },
            
        ],
    };
    const doom = {
        nombre: "Doom",
        robe: [
            { nombre: " Tunic Of Doom", precio: "111", imagenURL:"https://lineage.pmfun.com/data/img/armor_t73_u_i00_0.png"},
            { nombre: " Stockings Of Doom", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/armor_t73_l_i00_0.png" },
            { nombre: " Doom Gloves - Robe", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/armor_t73_g_i00_0.png" },      
            { nombre: " Boots Of Doom - Robe", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/armor_t73_b_i00_0.png" },
            { nombre: " Doom Helmet", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/armor_leather_helmet_i00_0.png" },
        ],
        light: [
            { nombre: "Leather Armor Of Doom", precio: "111", imagenURL:"https://lineage.pmfun.com/data/img/armor_t72_ul_i00_0.png"},
            { nombre: " Doom Gloves - Light Armor", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/armor_t72_g_i00_0.png" },
            { nombre: " Boots Of Doom - Light Armor", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/armor_t72_b_i00_0.png" },      
            { nombre: " Doom Helmet", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/armor_leather_helmet_i00_0.png" },
        ],
        heavy: [
            { nombre: "Doom Plate Armor", precio: "111", imagenURL:"https://lineage.pmfun.com/data/img/armor_t71_ul_i00_0.png"},
            { nombre: " Doom Gloves - Heavy Armor", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/armor_t71_g_i00_0.png" },
            { nombre: "Boots Of Doom - Heavy Armor", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/armor_t71_b_i00_0.png" },      
            { nombre: "Doom Helmet", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/armor_leather_helmet_i00_0.png" },
            { nombre: "Doom Shield", precio: "333", imagenURL:"https://lineage.pmfun.com/data/img/shield_doom_shield_i00_0.png" },
        ],
    };
    $: seleccion = "";
    $: seleccionTipo = "";
    $: seleccionTipoActual= "";

    const getTipoAnterior = (seleccion) => {
        if (seleccionTipoActual === "robe") return seleccion.robe
        if (seleccionTipoActual === "light") return seleccion.light
        if (seleccionTipoActual === "heavy") return seleccion.heavy
    }
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
                on:click|preventDefault={() => {
                    (seleccion = blueWolf),  seleccionTipo = getTipoAnterior(seleccion) 
                }}>Blue Wolf</a
            >
        </li>

        <li class="nav-item">
            <a
                href={2}
                class="nav-link"
                data-bs-toggle="tab"
                on:click|preventDefault={() => {
                    (seleccion = doom),  seleccionTipo = getTipoAnterior(seleccion) 
                }}>Doom</a
            >
        </li>
        <li class="nav-item">
            <a
                data-bs-toggle="tab"
                class="nav-link "
                href={4}
                on:click|preventDefault={() => {
                    (seleccion = tallum, seleccionTipo = getTipoAnterior(seleccion)) 
                }}>Tallum</a
            >
        </li>
        <li class="nav-item">
            <a class="nav-link titulo " href="#">Joyeria</a>
        </li>
        <li class="nav-item">
            <a data-bs-toggle="tab" class="nav-link " href="5">Black Ore</a>
        </li>
    </ul>

    {#if seleccion}
        <div class="contenedor-item  " in:fade={{ duration: 300 }}>
            <h3 class="item-nombre">{seleccion.nombre}</h3>
            <div class="tipo nav nav-pills">
                
                <a
                    data-bs-toggle="tab"
                    class=" nav-link robe"
                    href={1}
                    on:click|preventDefault={() =>
                        (seleccionTipo = seleccion.robe, seleccionTipoActual = "robe")  }>Robe</a
                >
            
                <a
                    data-bs-toggle="tab"
                    class="nav-link robe"
                    href={2}
                    on:click|preventDefault={() =>
                    
                        (seleccionTipo = seleccion.heavy, seleccionTipoActual = "heavy")}>Heavy</a
                >
                <a
                    data-bs-toggle="tab"
                    class="nav-link robe"
                    href={3}
                    on:click|preventDefault={() =>
                        (seleccionTipo = seleccion.light, seleccionTipoActual = "light")}>Light</a
                >
            </div>
         
            {#if seleccionTipo}
            
            <table    class="table table-hover table-striped ">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Accion</th>
                        </tr>
                    </thead>
                   
                    <tbody    >
                        {#each seleccionTipo as parte }
                        <slot>   
                            <tr class="table-active"    >
                                <td  ><img class="icon-item" src={parte.imagenURL} alt=""></td>
                                <th scope="row">   <div class="texto">{parte.nombre}  </th>
                                <td>{parte.precio} </td>
                                <td
                                    ><button class="btn btn-primary"
                                        >Pedir</button
                                    ></td
                                >
                            </tr>
                        </slot> 
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
        .texto{
            display:inline;
            
        }
        .icon-item{
          
        }
        .contenedor-pedidos {
            width: 70%;
            display: flex;
            gap: 40px;
        }
    }
    @media (max-width: 1000px) {  /* mobile */
        .contenedor-pedidos {
            width: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .tipo{
            flex-wrap: nowrap;
        }
        .item-nombre{
            text-align: center;
        }
        .contenedor-item {
        width: 90%;
    }
    }
</style>
