<script>
  import { ListaPersonas } from "../../stores";
  import ListaUser from "./ListaUser.svelte";
  import AddPersonaUser from "./AddPersonaUser.svelte";
  import Puntos from "../viewsUser/Puntos.svelte";
  import Actividades from "../Actividades.svelte";
  import Pedidos from "../Pedidos.svelte";
  import Informacion from "../Informacion.svelte";

  const arrayElecciones = [
    { component: Puntos },
    { component: Actividades },
    { component: Pedidos },
    { component: Informacion },
  ];

  let seleccion = arrayElecciones[0];
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-5 ">
  <div class="container-fluid">
    <a class="navbar-brand" href={null}> Logo </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto nav-interna">
        <li class="nav-item">
          <a
            class="nav-link"
            href={null}
            on:click|stopPropagation|preventDefault={() =>
              (seleccion = arrayElecciones[0])}
            >Puntos
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href={null}
            on:click|stopPropagation|preventDefault={() =>
              (seleccion = arrayElecciones[1])}>Actividades</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href={null}
            on:click|stopPropagation|preventDefault={() =>
              (seleccion = arrayElecciones[2])}>Pedidos</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href={null}
            on:click|stopPropagation|preventDefault={() =>
              (seleccion = arrayElecciones[3])}>About</a
          >
        </li>
      </ul>
      <form class="d-flex busqueda">
        <input
          class="form-control me-sm-2"
          type="text"
          placeholder="Buscar PJ"
        />
        <button class="btn btn-secondary my-2 my-sm-0" type="submit"
          >Buscar</button
        >
      </form>
    </div>
  </div>
</nav>

<svelte:component this={seleccion.component} />
<AddPersonaUser />

<style>
  @media screen and (min-width: 1000px) {
    .nav-interna {
      gap: 100px;
    }
  }
  @media (max-width: 1000px) {
    .navbar {
      margin-bottom: 0.8rem !important;
    } 

    .busqueda{
      gap: 10px;
    }
  }

  .navbar-brand {
    margin-right: 40px;
  }
  .navbar {
    width: 100%;
    justify-content: space-around;
  }
  .nav-link {
    text-decoration: none;
  }
</style>
