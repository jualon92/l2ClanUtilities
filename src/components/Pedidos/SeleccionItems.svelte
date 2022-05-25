<script>
    import {fade,scale} from "svelte/transition"
    import {Puntaje, PersonajeActual, ListaPersonas, Pedidos, PartePedida} from "../../stores"
    import {addPuntaje} from "../../db"
    $: partePedida = $PartePedida
    let puntosRequest = "";

    const resultadoTotal = () => $Puntaje - partePedida.precio;

    const procederCompra = async () => {
        animateScroll.scrollTo({ element: "table", duration: 2000 });

        //chequear si tiene los puntos necesario
        puntosRequest = await getDataByName($PersonajeActual);
        let resultadoFinal = puntosRequest.puntos - partePedida.precio;

        if (resultadoFinal >= 0) {
            //continuar compra

            //firebase cambiar puntaje
            addPuntaje($PersonajeActual, resultadoFinal);

            //clientside
            Puntaje.set(resultadoFinal);

            //alerta pedido realizado
            let myAlert = document.querySelector(".toast");
            let bsAlert = new bootstrap.Toast(myAlert);
            bsAlert.show();

            //actualizar pares personas-puntos
            let index = $ListaPersonas.findIndex(
                (ele) => ele.nombrePersona == $PersonajeActual
            );
            $ListaPersonas[index].puntos = $Puntaje;
            console.log($ListaPersonas[index].puntos);

            mostrarPedido = false;

            //fecha
            let now = dayjs(new Date());
            console.warn(now.format("DD/MM/YY"));

            //setear pedido nuevo en firebase
            addPedido(
                $PersonajeActual,
                partePedida.nombre,
                now.format("DD/MM/YY")
            );
            //setear pedido en cliente
            const listaNueva = [
                ...$Pedidos,
                {
                    personaje: $PersonajeActual,
                    item: partePedida.nombre,
                    etapa: "pendiente",
                    fecha: now.format("DD/MM/YY"),
                },
            ];
            Pedidos.set(listaNueva);

            seleccionado.component = MostrarHistorial;
        }
    };

</script>

<div class="contenedor-infoPedido" in:fade={{ duration: 400 }}>
    <div class="form-group">
        <fieldset>
            <label class="form-label" for="readOnlyInput"
                >Pedido</label
            >
            <input
                class="form-control "
                id="readOnlyInput"
                type="text"
                placeholder={partePedida.nombre}
                readonly
            />

            <label class="form-label mt-4" for="readOnlyInput"
                >Precio</label
            >
            <input
                class="form-control"
                id="readOnlyInput"
                type="text"
                placeholder={partePedida.precio}
                readonly
            />

            <label class="form-label mt-4" for="readOnlyInput"
                >Puntos disponibles</label
            >
            <input
                class="form-control"
                id="readOnlyInput"
                type="text"
                placeholder={$Puntaje}
                readonly
            />

            <label class="form-label mt-4" for="readOnlyInput"
                >Puntos luego de operacion</label
            >
            <input
                class:is-invalid={$Puntaje - partePedida.precio < 0}
                class:is-valid={$Puntaje - partePedida.precio > 0}
                class="form-control"
                id="readOnlyInput"
                type="text"
                placeholder={$Puntaje - partePedida.precio < 0
                    ? "Sin fondos suf"
                    : $Puntaje - partePedida.precio}
                readonly
            />
        </fieldset>
    </div>
    <!--  
<div class="pedido-info">Pedido: {partePedida.nombre}</div>
<div class="pedido-info">Precio: {partePedida.precio}</div>
<div class="pedido-info">Mis puntos: {$Puntaje}</div>
<div class="pedido-info">
    {$Puntaje - partePedida.precio > 0
        ? "Total : " + ($Puntaje - partePedida.precio)
        : "sin Fondos suficientes"} 
        <label class="form-label mt-4" for="inputInvalid">Invalid input</label>
</div>
-->
    <div class="botonera-pedido">
        <button
            class="btn btn-primary"
            on:click={() => (mostrarPedido = false)}
            >Volver atras</button
        >
        <button
            class="btn btn-primary btn-comprar"
            class:disabled={resultadoTotal() < 0}
            on:click={procederCompra}>Confirmar</button
        >
    </div>
</div>