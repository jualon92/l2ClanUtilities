<script>
    import { app, auth, googleProvider } from "../firebase";
    import {
        signInWithEmailAndPassword,
        onAuthStateChanged,
    } from "firebase/auth";
    import { authState } from "rxfire/auth";
    import { fade , fly} from "svelte/transition";
    import { onMount, onDestroy } from "svelte";
    import AddPersona from "../components/AddPersona.svelte";
    import Lista from "../components/Lista.svelte";
    import { ListaPersonas, estaEnLogin} from "../stores";
    import {get } from "svelte/store"
    import {Body} from "svelte-body"
   
    let email = "";
    let password = "";
    $: errorLogin = "";
    let user = authState(auth);

    $: activo = false;

    onMount( () => {
        //redirect causa refresh, al refresh seteo bandera.  template render segun bandera
        estaLogeando();
    });

   
    const estaLogeando = () => {
        let respuesta = JSON.parse(window.localStorage.getItem("logeando"));
        if (respuesta) {
            //usar short circuit operator

            activo = respuesta;
            
            console.log(get(estaEnLogin))
        } else {
            activo = false;
           
            console.log("volvi")
        }
    };

    onAuthStateChanged(auth, (user) => {
        if (user) {
            activo = true;
            estaEnLogin.set(false)
            console.log(get(estaEnLogin))
        } else {
            console.log("delog")
            activo = false;
            window.
           console.log(get(estaEnLogin))
        }
    });

    const logearConMail = async () => {

        window.localStorage.setItem("logeando", "true");
        console.log("pasado a true");

        console.log(email, password);
        await signInWithEmailAndPassword(auth, email, password).catch((err) => {
            errorLogin = "credenciales incorrectas";
            password = ""
           const elemento =  document.querySelector(".card")
           elemento.classList.add("animate__animated","animate__shakeX")
           setTimeout( () => { 
                elemento.classList.remove("animate__animated","animate__shakeX")
                errorLogin = ""
                
           }, 2000)
        });


    };
 
    
</script>

<section>
    {#if $user}
        <div class="contenedor table-responsive	 ">
            <table class="table table-hover w-60 table-striped   ">
                <thead>
                    <tr>
                        <th scope="col">Personaje</th>
                        <th scope="col">Points</th>
                        <th scope="col">Add</th>
                        <th scope="col">Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {#each $ListaPersonas as user}
                        <Lista {...user} /> <!-- nombre={nombre}-->
                    {/each}
                </tbody>
            </table>
        </div>

        <AddPersona />
    {:else if activo}
        <div class="spinner-border spinner" role="status">
            <span class="sr-only" />
        </div>
    {:else}
    <div class="container h-100 contenedor-user">
 
        <div class="flex-login row   h-100  " in:fly={{y:-250, duration:2000, delay: 300 }}>
            <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9  ">
                <div class="text-center  margen-login">
                   
                </div>
                <div class="card shadow-lg">
                    <div class="card-body p-4">
                        <h1 class="fs-4 card-title fw-bold mb-4">Login</h1>
                        <form method="POST" class="needs-validation" novalidate="" autocomplete="off">
                            <div class="mb-3">
                                <label class="mb-2 text-muted" for="email"  >E-Mail Address</label>
                                <input  type="email" bind:value={email} id="email"   class="form-control" name="email"  required >
                                <div class="invalid-feedback">
                                    Email is invalid
                                </div>
                            </div>

                            <div class="mb-3">
                                <div class="mb-2 w-100">
                                    <label class="text-muted" for="password">Password</label>
                                    
                                </div>
                                <input   type="password" bind:value={password} id="password"   class="form-control" name="password" required>
                                <div class="invalid-feedback">
                                    Password is required
                                </div>
                            </div>

                            <div class="d-flex align-items-center">
                                <div class="show-error">{errorLogin}</div>
                                <button type="submit" class="btn btn-primary ms-auto" on:click|preventDefault={logearConMail}  >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                    <!-- 
                    <div class="card-footer py-3 border-0">
                        <div class="text-center">
                             <p></p>
                        </div>
                    </div>  -->
                </div>
                <div class="text-center  text-muted">
                    --
                </div>
            </div>
        </div>
        <Body class="imagen" style="background-image:url(' https://cdn.discordapp.com/attachments/973519440606003244/974641834460594206/259792.jpg')" />
 
    </div>
    
   
    {/if}


</section>

<style>
   
  /*
    .contenedor-login{
        column-gap:30px;
        display: flex;
    flex-direction: column;
    max-width: 50%;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: 0 auto;
   
    }  */
    thead {
        text-align: center;
    }


    
</style>
