# Talleres 6: Caso práctico de una página dinámica - Cantera 2 - Sofka


## Tabla De Contenido.
1. [Información General](#información-general)
2. [Requerimientos](#requerimientos)
3. [Implementación](#implementación)
4. [Instalación](#instalación)
5. [Imagenes](#imagenes)
6. [Tecnologías](#tecnologías)
7. [Enlaces](#enlaces)
8. [Autor](#autor)


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Información General

Caso práctico de una página dinámica

Realizar un juego de dados para múltiples jugadores.

Proyecto demo en donde se una separación de responsabilidades usando los conceptos de:

- Pantalla (vista)
- Lógica (controlador)
- Datos (Modelo)


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Requerimientos

1. Request de creación de juego, con su respectivo formulario: POST http://localhost:8080/createGame
2. Query para consultar el juego y su estado (listado de jugadores y estados como tal del juego): GET: http://localhost:8080/game/fffff-ggg-jjjjj
3. Query para determinar el ganador del juego (una vista con el ganador): GET http://localhost:8080/game/fffff-ggg-jjjjj/winner 
4. Request para iniciar el juego con la apuesta por cada jugador (acción que permita iniciar el juego): POST http://localhost:8080/startGame 


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Implementación

En este proyecto se implementó JavaScript como lenguaje de programación y los framework Express, angular y bootstrap para el desarrollo de la aplicación.

La aplicación se dividió en 2 partes la cuales son:
1) Frontend:
1) Backend:

En el Frontend se realizaron los siguientes pasos:
1) Crea proyecto de nombre frontEnd-dados.
2) Se crea un módulo game y su routing para implementación de rutas y protección.
3) Se crea las siguientes carpetas para estructura el proyecto: components, guard, interfaces, pages, services
4) Carpeta components: Se crean los componentes: modal y sidebar con su lógica y vista.
5) Carpeta guard: Se crea un guardián para proteger las rutas.
6) Carpeta interfaces: Se crean los archivos games.Models.ts y winner.Models.ts para tipar los datos.
7) Carpeta pages: Se crean los componentes playing, plays, register-players y winner con su vista y lógica.
8) Carpeta services: Se crea el servicio gamer.service.ts para manejar todas las peticiones que se realizan al backend.

En el Backend se realizaron los siguientes pasos:
1) Crea proyecto de nombre backEnd-dados.
2) Se crea archivo principal de nombre app.js donde se crea el servidor.
3) Se crea las siguientes carpetas para estructura el proyecto: controllers, models, routes.
4) Carpeta controllers: Se crean los archivos allGame.js, createGame.js y winner.js donde cada uno tiene la lógica de las solicitudes del frontend.
5) Carpeta models: Se crea el archivo server.js donde se implementa la clase servidor.
6) Carpeta routes: Se crean los archivos allGame.js, createGame.js y winner.js, los cuales direccional la peticiones al controlador.

Se cumple con la solución del ejercicio.

------------------------------------------------------------------------------------------------------------------------

### Instalación

1. Abrir la terminal del Windows.

2. Si no tiene conocimiento de la terminal, ingrese al siguiente link para que realice una breve introducción: https://learn.microsoft.com/es-es/windows/terminal/

3. Clonar el repositorio colocando en la terminal de Windows, el comando: git clone https://github.com/Mendoalon/Taller-6-pagina-dinamicas.git

4. Abrir Visual Studio Code.

5. En caso de no tener instalado el editor de código Visual Studio Code puede ingresar al siguiente enlace para su descarga e instalación: https://code.visualstudio.com/download

6. Abrir dos ventanas del editor de código Visual Studio Code por separado.

7. En la primera venta del Visual Studio Code ubicarse en la barra superior, en la pestaña file, presionar click y seleccionar open folder.

9. Abrir el proyecto clonado de nombre: Taller-6-pagina-dinamicas.

10. Encontrará dos capetas las cuales son: backEnd-dados y frontEnd-dados.

11. Seleccione la carpeta backEnd-dados y abrir.

12. Mostrar la estructura del proyecto Backend, ubicarse en la barra superior del Visual Studio Code, seleccione terminal, luego new terminal y darle click.

13. Mostrará una terminal, para instalar las dependencias de la aplicación ingresar el siguiente comando: npm install

14. Luego de terminar la instalación de los paquetes a satisfacción ejecutamos el siguiente comando: node app.js

15. Mostrará Servidor corriendo en puerto 8080.

16. En la segunda venta del Visual Studio Code ubicarse en la barra superior, en la pestaña file, presionar click y seleccionar open folder.

17. Abrir el proyecto clonado de nombre: Taller-6-pagina-dinamicas.

18. Encontrará dos capetas las cuales son: backEnd-dados y frontEnd-dados.

19. Seleccione la carpeta frontEnd-dados y abrir.

20. Mostrar la estructura del proyecto Frontend, ubicarse en la barra superior del Visual Studio Code, seleccione terminal, luego new terminal y darle click.

21. Mostrará una terminal, para instalar las dependencias de la aplicación ingresar el siguiente comando: npm install

22. Luego de terminar la instalación de los paquetes a satisfacción ejecutamos el siguiente comando: ng s -o

23. Abrirá de manera automática el navegador con la aplicación ejecutando.

Observación: Para el correcto funcionamiento de la aplicación favor realicé los paso como se le indican.


------------------------------------------------------------------------------------------------------------------------
### Imagenes 

![image](https://user-images.githubusercontent.com/92559887/225790350-b6bc45e1-4d6c-43e9-944e-e075ca4d3ccb.png)

![image](https://user-images.githubusercontent.com/92559887/225790828-986b6806-8fa3-4172-b520-658bbbf35ea2.png)

![image](https://user-images.githubusercontent.com/92559887/225790937-53a2346f-0f1c-47b5-9645-4e44e0dca6e4.png)

![image](https://user-images.githubusercontent.com/92559887/225790975-18707013-15dc-41dd-bcb6-56835a120af2.png)

![image](https://user-images.githubusercontent.com/92559887/225791034-e26b1aa4-61b6-4c6f-a589-f2675873389a.png)


------------------------------------------------------------------------------------------------------------------------
### Tecnologías

El taller fue desarrollado usando las siguientes tecnologías:
- Backend: JavaScript, node js, express.
- Frontend: JavaScript, angular, bootstrap. css.
- Editor de texto: Visual Studio Code.


------------------------------------------------------------------------------------------------------------------------

### Enlaces  

1. Enlace del repositorio GitHub:  https://github.com/Mendoalon/Taller-6-pagina-dinamicas.git


------------------------------------------------------------------------------------------------------------------------

### Autor  
 # Luis Alberto Mendoza Alonso.

