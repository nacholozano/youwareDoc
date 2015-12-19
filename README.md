# youwareDoc (pending translate)

<b>Final school year project</b>

Youware is a online shop I made as my final school year project.
I used Meteor JS (nodeJS framework) and MaterializeCSS for styling.<br>
Meteor JS allows making a real time app. 

You can try it here: <br>
[youware v1](http://youware2.meteor.com/) <br>
[youware v2](http://youware.meteor.com/)

<b> Session </b>

User: nacho <br>
Password: nacho


# Features

- [x] **Sign in and sign up**
  - [x] Two users can't use the same name. Neither the same email. 
  - [x] Verificación de cuenta por medio del correo asociado a la cuenta.
  
- [x] **Shopping cart**
  - [x] You can't buy any product if you don't verify your account.
  - [x] Edit products's quantity.  
  - [x] Remove products.
  - [x] Buy products.
  - [x] Si añades un producto que ya está , se actualizan las unidades y el precio a pagar.
  - [ ] Guardar los productos en el carrito durante 30 minutos.  

- [ ] **Home page**
  - [ ] Paginación de productos. 
  - [x] Listado de productos.
  - [x] Basic filters.
  - [x] Specific filters.
  - [x] TEST de filtrados específicos ( Sección 'RAM' ). 
  - [x] Posibilidad de añadir productos al carrito.
  - [x] Remove filters.
  
- [ ] **Product's page** 
  - [x] Product's info.
  - [x] Add to shopping cart.
  - [x] Comment product.
  - [ ] Vote coments.
  - [x] Vote product.
  - [x] Solo prodrás comentar o votar el producto si lo has comprado.
  
- [ ] **Historial de compra** 
  - [x] Listar historial de compra.
  - [x] Mostrar compras realizadas antes de una fecha.
  - [ ] Mostrar compras realizadas después de una fecha.
  
- [ ] **Ajustes de cuenta**
  - [ ] Modify your info.
  - [ ] Pedir contraseña ante de modificar datos.

- [ ] **Configurador de PC**
  - [ ] Construir ordenador con componentes compatibles.
  - [ ] Boceto del PC en construcción.
  - [x] TEST

- [ ] **Idiomas**
  - [x] Test de  internacionalización ( Template 'settings' ).
  - [ ] Internacionalización completa.

- [ ] **Guardar el estado de las páginas al cambiar de página**
  - [ ] TEST ( Template 'configurator' ).
  - [ ] Guardar estado en toda la aplicación.

- [ ] **Pantalla de administración**
  - [ ] Ver pedidos
  - [ ] Modificar pedidos
  - [ ] Ver productos
  - [ ] Añadir productos

- [x] **No puedes acceder a ciertas páginas si no estas logueado** (carrito, ajustes, historial de compra y configurador)
- [x] **Pantalla de carga**
- [x] **Control de dirección no encontrada**


# Instalación

Instalación en linux

1. Instalar Meteor JS ejecutando este comando desde la consola:
curl https://install.meteor.com/ | sh

2. Copiar todos los archivos, incluyendo archivos ocultos, en una carpeta cualquiera.  

3. Acceder por medio de la consola a la carpeta donde están los archivos y ejecutar el siguiente comando:  
meteor 

Para ver el contenido de una carpeta desde la consola usa este comando: 
ls 

Para moverte por la consola usa este comando (sin símbolos):  
cd <nombre del directorio> 

Instalación en Windows 

1. Descargar e instalar el siguiente instalador:
https://install.meteor.com/windows

2. Copiar todos los archivos, incluyendo archivos ocultos, en una carpeta cualquiera.

3. Acceder por medio de la consola a la carpeta donde están los archivos y ejecutar el siguiente comando:  
meteor 

Para ver el contenido de una carpeta desde la consola usa este comando: 
dir 

Para moverte por la consola usa este comando (sin símbolos):  
cd <nombre del directorio> 

Podrás acceder a la aplicación por medio de cualquier navegador en la siguiente dirección:
http://localhost:3000/

Posibles problemas

Es posible que algunos paquetes de la aplicación no funcionen.

Paquetes que me han fallado: 

1. Paquete para el mapeo de las rutas:
Para reinstalarlo ejecuta los siguiente comandos desde la carpeta del proyecto: 
meteor remove iron:router 
meteor add iron:router

2. Paquete para animaciones: 
Para reinstalarlo ejecuta los siguiente comandos desde la carpeta del proyecto: 
meteor remove velocityjs:velocityjs 
meteor add velocityjs:velocityjs

Otros

Parar la ejecución de la aplicación: ctrl + C sobre la consola 
Resetear la base de datos (antes de resetear es necesario parar la aplicación): meteor reset 

Hay unos datos de prueba que se escriben en la base de datos al arrancar el servidor. 
Puedes consultar estos datos en /server/startup.js  
