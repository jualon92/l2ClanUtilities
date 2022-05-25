import { writable, get } from 'svelte/store';

  
  
export const ListaPersonas = writable([])
 
 
export const  estaEnLogin = writable(true)

export const EsAdmin = writable(null)
 
export const Registrando = writable(false)

export const PersonajeActual = writable("")

export const Puntaje = writable("")

export const Pedidos = writable([])

export const ItemSetName = writable("")

export const SeleccionTipoItem = writable("")

export const SeleccionTipoActual = writable("")

export const Seleccionado = writable("")

export const PartePedida = writable("")