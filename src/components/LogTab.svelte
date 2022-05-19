<script>
    import {fly, scale} from "svelte/transition"
    import {  auth  } from "../firebase";
    import {
        signInWithEmailAndPassword,
     
    } from "firebase/auth";
    import {Registrando} from "../stores"
    import {get} from "svelte/store"
    //que necesito? email, 
    let email  = ""
    let password = ""
    $: errorLogin = ""
    

    
    const cambiarReg = () => {
        Registrando.set(!get(Registrando))
        console.log("jeje", get(Registrando))
    };

    const logearConMail = async () => {
        window.localStorage.setItem("logeando", "true");
        console.log("pasado a true");

        console.log(email, password);
        await signInWithEmailAndPassword(auth, email, password).catch((err) => {
            errorLogin = "credenciales incorrectas";
            password = "";
            const elemento = document.querySelector(".card");
            elemento.classList.add("animate__animated", "animate__shakeX");
            setTimeout(() => {
                elemento.classList.remove(
                    "animate__animated",
                    "animate__shakeX"
                );
                errorLogin = "";
            }, 2000);
        });
    };



</script>


<div class="container h-100 contenedor-user">
    <div
        class="flex-login row   h-100"
        in:fly={{ y: -150, duration: 1600, delay: 200 }}
    >
        <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9  ">
            <div class="text-center  margen-login" />
            <div class="card shadow-lg">
                <div class="card-body p-4">
                    <h1 class="fs-4 card-title fw-bold mb-4">Login</h1>
                    <form
                        method="POST"
                        class="needs-validation"
                        novalidate=""
                        autocomplete="off"
                    >
                        <div class="mb-3">
                            <label class="mb-2 text-muted" for="email"
                                >E-Mail Address</label
                            >
                            <input
                                type="email"
                                bind:value={email}
                                id="email"
                                class="form-control"
                                name="email"
                                required
                            />
                            <div class="invalid-feedback">
                                Email is invalid
                            </div>
                        </div>

                        <div class="mb-3">
                            <div class="mb-2 w-100">
                                <label class="text-muted" for="password"
                                    >Password</label
                                >
                            </div>
                            <input
                                type="password"
                                bind:value={password}
                                id="password"
                                class="form-control"
                                name="password"
                                required
                            />
                            <div class="invalid-feedback">
                                Password is required
                            </div>
                        </div>

                        <div class="d-flex align-items-center">
                            <div class="show-error">{errorLogin}</div>
                            <button
                                type="submit"
                                class="btn btn-primary ms-auto"
                                on:click|preventDefault={logearConMail}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
                <div class="card-footer py-3 border-0">
                    <div class="text-center">
                        <button
                            class="btn btn-outline-dark"
                            on:click={cambiarReg}
                            >Registrarse
                        </button>
                    </div>
                </div>
                <!-- 
            <div class="card-footer py-3 border-0">
                <div class="text-center">
                     <p></p>
                </div>
            </div>  -->
            </div>
            <div class="text-center  text-muted">--</div>
        </div>
    </div>
</div>