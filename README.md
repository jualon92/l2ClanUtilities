ADMIN credentials: pepita@gmail.com  pw:123456


# Se requiere:
 - ranking de puntos  por usuario 
 - shop para canjear puntos 
 - tabla de puntajes/actividad  
 - Registro de usuarios
 
 
## Credenciales
Administrador tiene sus credenciales y permisos para borrar usuarios, añadir o restar puntos. 
Accede a vista de administrador

Los usuarios acceden a vista limitada ( sin shop, read only)


Al registrarse, usuario tiene permiso de user.


Fondo y estetica pedida por cliente

## Herramientas

Se utilizo firebase auth y firestore db para tabla de nombre-puntos, y servir pagina segun rol es usuario o administrador.


SvelteKit para SPA, animate.css, y bootstrap(bootswatch flatly theme)

## Imagenes
Login

![image](https://user-images.githubusercontent.com/46230600/168585437-93309f53-90e7-4d33-8468-ee626d1bb410.png)

<hr>
Mobile 


![image](https://user-images.githubusercontent.com/46230600/168585493-d7c1e181-25ae-4719-8f14-b6bde35aa8c4.png)


<hr>

registro para usuarios.


![image](https://user-images.githubusercontent.com/46230600/168584701-8315c0c5-78d4-4c93-8157-bc5a48789b32.png)


<hr>
Pantalla de administrador, al utilizar credenciales de administrador para logear
 
![image](https://user-images.githubusercontent.com/46230600/168585013-49bc4755-4111-41a4-abb2-d476ff145bda.png)
![image](https://user-images.githubusercontent.com/46230600/168586421-c9bb6e3e-2da9-4d49-befa-4ae216d2922c.png)


<hr>
Pantalla servida a usuarios,  con ranking de puntos por contribucion (el usuario no debe poder cambiar los puntos o borrar personajes)

![image](https://user-images.githubusercontent.com/46230600/168584826-fc49ee9e-9058-4e8d-a997-218a80336236.png)

 <hr>
 
Shop, canjear puntos por items
![image](https://user-images.githubusercontent.com/46230600/190926819-2a97ddff-cf6f-4d04-935b-118b1e3f589f.png)

Puntos insuficientes
![image](https://user-images.githubusercontent.com/46230600/190926831-9a250b84-d967-4970-90bb-69ba9469c608.png)


Admin Interface para decidir que hacer con los pedidos pendientes.
![image](https://user-images.githubusercontent.com/46230600/190926848-5d29fa29-f228-4c49-bb91-71fe44d49284.png)


