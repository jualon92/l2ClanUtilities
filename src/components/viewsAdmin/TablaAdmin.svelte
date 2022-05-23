<script>
     
    import PuntosAdmin from "../viewsAdmin/PuntosAdmin.svelte";
    import Actividades from "../Actividades.svelte";
    import Pedidos from "../Pedidos.svelte";
    import Informacion from "../Informacion.svelte";
    

    const arrayElecciones = [
        { component: PuntosAdmin },
        { component: Actividades },
        { component: Pedidos },
        { component: Informacion},
    ];

    let seleccion = arrayElecciones[0];
</script>

 
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href={null}>L2 clan utilities</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto nav-interna">
          <li class="nav-item">
            <a class="nav-link" href={null} on:click|stopPropagation|preventDefault={  () => seleccion = arrayElecciones[0] }>Puntos
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link"  href={null} on:click|stopPropagation|preventDefault={ () => seleccion = arrayElecciones[1]} >Actividades</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href={null}   on:click|stopPropagation|preventDefault={  () => seleccion = arrayElecciones[2]}>Pedidos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href={null}  on:click|stopPropagation|preventDefault={  () => seleccion = arrayElecciones[3]}>About</a>
          </li>
           
        </ul>
        <form class="d-flex">
          <input class="form-control me-sm-2" type="text" placeholder="Buscar PJ">
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>    
 
 <div class="contenedor-template"> 
  <svelte:component this={seleccion.component}/>
  
</div>

 
  
<style>
    .contenedor-template{
      min-width: 100%;
    }
     
    @media (min-width:1000px){
      .contenedor-template{
      min-width: 80%;
    } 

    } 
    .nav-interna{
        gap:40px;
    }

    .navbar-brand{
        margin-right: 40px;
    }
    .navbar{
        margin-bottom:4%;
        width:100%;
        justify-content: space-around;
    }
    .nav-link{
        text-decoration: none;
    }
</style>

