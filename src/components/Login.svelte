<script>
    import { auth, db } from "../firebase";
    import LogTab from "./LogTab.svelte";
    import { onAuthStateChanged } from "firebase/auth";

    import { authState } from "rxfire/auth";

    import { onMount, onDestroy } from "svelte";

    import {
        estaEnLogin,
        EsAdmin,
        Registrando,
        PersonajeActual, ListaPersonas, Puntaje, Pedidos
    } from "../stores";
    import { get } from "svelte/store";
    import { Body } from "svelte-body";

    import TablaUser from "./viewsUser/TablaUser.svelte";
    import TablaAdmin from "./viewsAdmin/TablaAdmin.svelte";
    import Registrarse from "./Registrarse.svelte";
    import { getDataByMail, getRol, getDataByName, addPuntaje, getPedidos} from "../db";
    let user = authState(auth);
    $: rol = "";

    $: activo = false;
    onMount(() => {
        //redirect causa refresh, al refresh seteo bandera.  template render segun bandera
        console.log("es admin? : ", get(EsAdmin));
        //  console.log("reg", p);
        estaLogeando();
        console.log("uups", $Registrando);
        

    });

    const estaLogeando = () => {
        let respuesta = JSON.parse(window.localStorage.getItem("logeando"));
        if (respuesta) {
            //usar short circuit operator

            activo = respuesta;

            console.log(get(estaEnLogin));
        } else {
            activo = false;

            console.log("volvi");
        }
    };

    const getListaOrdenada = (datosUser) => {
        const nombreActual = get(PersonajeActual) 
        let listaUsuarios = $ListaPersonas
 
        let listaSinEle = listaUsuarios.filter( ele => ele.nombrePersona !== nombreActual)
 
        return [datosUser, ... listaSinEle]
 
      
    }

   

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            console.log("data usuario : ", user);

            activo = true;
            estaEnLogin.set(false);
            //  console.log(get(estaEnLogin))
 
            //preguntar si es admin, si lo es, recordarlo
            rol = await getRol(user.email);
            const tienePoderes = rol == "admin";
            EsAdmin.set(tienePoderes);
            console.log("es admin?: ", get(EsAdmin));


            //obtener datos de usuario segun el mail ingreso
            const datosUser = await getDataByMail(user.email);
            //recordar el nombre del personaje del usuario en la sesion
            
            PersonajeActual.set(datosUser.nombrePersona)
            console.log("pj actual", get(PersonajeActual))

            //setear la lista con el nombre de su personaje primero
            ListaPersonas.set(getListaOrdenada(datosUser)) 
            
            
            //podria pasarse el user entero a store y no de a partes
            const puntos = datosUser.puntos
            Puntaje.set(puntos)

            //setear store pedidos
            const pedidos = await getPedidos();
            Pedidos.set(pedidos) 
        } else {
            console.log("delog");
            activo = false;
            window.console.log(get(estaEnLogin));

            //reset var when delog
            email = "";
            password = "";
            emailRegistro = "";
            passwordRegistro = "";
            nombrePJ = "";
        }
    });
</script>

<section>
    {#if $EsAdmin === false && $user}
        <TablaUser />
    {:else if $EsAdmin && $user}
        <TablaAdmin />
    {:else if activo}
        <!--carga -->
        <div class="spinner-border spinner" role="status">
            <span class="sr-only" />
        </div>
    {:else if !$Registrando}
        <LogTab />
        <Body
            class="imagen"
            style="background-image:url(' https://cdn.discordapp.com/attachments/973519440606003244/974641834460594206/259792.jpg')"
        />
    {:else}
        <Registrarse />
    {/if}
</section>

<style>
    @media (min-width: 1000px) {
        section {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    .spinner {
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-content: center;
        margin-top: 30%;
    }
</style>
