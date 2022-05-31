<script>
      import {   auth,   } from "../firebase";
    import {fly, scale} from "svelte/transition"
    import {
 
        createUserWithEmailAndPassword,
    } from "firebase/auth";
    import { ListaPersonas, Registrando, PersonajeActual} from "../stores";
    import { get } from "svelte/store";
    import { Body } from "svelte-body";
    import { addNameToDb} from "./../db"
    let emailRegistro = "";
    let passwordRegistro = "";
    let nombrePJ = "";
    $: errorLogin = "";

    const cambiarReg = () => {
        Registrando.set(!get(Registrando))
        console.log("reg cambiado", get(Registrando))
    };


    const nombreYaExiste = (name) => {
        //si ya existe nombre, no agregar al registro

        let lista = get(ListaPersonas);
        return lista.map((ele) => ele.nombrePersona).includes(name);
    };
    const registrarUsuario = async () => {
        await createUserWithEmailAndPassword(
            //crear id y pass
            auth,
            emailRegistro,
            passwordRegistro
        )
            .then((userCredential) => {
                //cree usuario en cliente
                const puntosIniciales =  "15"//puntos que todo usuario trae consigo
                const user = userCredential.user;
                console.log("user creado", userCredential.user);
                window.localStorage.setItem("logeando", "true");
                console.log(nombrePJ);
                const nuevaPersona = { nombrePersona: nombrePJ, puntos: puntosIniciales, email:emailRegistro };

                if (!nombreYaExiste(nombrePJ)) {
                    //si no existe nombre agregarlo
                    ListaPersonas.update((listaActual) => {
                        console.log([...listaActual, nuevaPersona]);
                        return [...listaActual, nuevaPersona];
                    });

                    addNameToDb(nombrePJ, emailRegistro); //agregar a db
                    PersonajeActual.set(nombrePJ)
                    console.log("personaje actual es : ", get(PersonajeActual))
                } else {
                    console.warn("ya existe ese nombre");
                }

                cambiarReg();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, " mensaje: ", errorMessage);
                errorLogin = "credenciales incorrectas";
                const elemento = document.querySelector(".card");
                elemento.classList.add("animate__animated", "animate__shakeX");
                setTimeout(() => {
                    elemento.classList.remove(
                        "animate__animated",
                        "animate__shakeX"
                    );
                    errorLogin = "";
                }, 2000);
                // ..
            });
    };
</script>

<div class="container h-100 contenedor-user">
    <div
        class="flex-login row   h-100"
        in:fly={{ y: -250, duration: 2000, delay: 300 }}
    >
        <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9  ">
            <div class="text-center  margen-login" />
            <div class="card shadow-lg">
                <div class="card-body p-4">
                    <h1 class="fs-4 card-title fw-bold mb-4">Registro</h1>
                    <form
                        method="POST"
                        class="needs-validation form-group"
                        novalidate=""
                        autocomplete="off"
                    >
                        <div class="form-floating mb-3">
                            <input
                                bind:value={emailRegistro}
                                type="email"
                                class="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                            />

                            <label for="floatingInput">Email address</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input
                                bind:value={passwordRegistro}
                                type="password"
                                class="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;"
                            />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <!--  
                      <div class="form-check mt-4">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" on:submit={addTogle = !addTogle}>
                        <label class="form-check-label" for="flexCheckDefault">
                          Agregar Personaje nuevo a lista
                        </label>
                      </div>
                      -->

                        <div class="form-floating mb-3">
                            <input
                                bind:value={nombrePJ}
                                type="text"
                                class="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                            />
                            <label for="floatingInput">Nombre Personaje</label>
                        </div>

                        <div class="d-flex align-items-center">
                            <div class="show-error">{errorLogin}</div>
                            <button
                                type="submit"
                                class="btn btn-primary ms-auto"
                                on:click|preventDefault={registrarUsuario}
                            >
                                Registrarse
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
            <div class="text-center  text-muted">--</div>
        </div>
    </div>
</div>
<Body
    class="imagen"
    style="background-image:url(' https://cdn.discordapp.com/attachments/973519440606003244/974641834460594206/259792.jpg')"
/>
