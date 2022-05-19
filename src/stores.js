import { writable, get } from 'svelte/store';

  
  
export const ListaPersonas = writable([])
 
 
export const  estaEnLogin = writable(true)

export const EsAdmin = writable(null)
 
export const Registrando = writable(false)

export const PersonajeActual = writable("")