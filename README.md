# Mr. Barber - Sistema de Reservaciones

## Resumen Ejecutivo

### Descripción
Mr. Barber es una aplicación web diseñada para facilitar la gestión de citas en una barbería. 
Permite a los clientes crear cuentas, programar citas, modificar detalles y visualizar su historial.
La solución busca evitar confusiones en las citas y brindar una experience eficiente tanto para los clientes
como para el personal.

### Problema identificado
La dueña de la barbería mencionó problemas con le gestión de las citas, como la mezcla de reservaciones
y la dificultad para recibir llamadas en ausencia de una secretaria. Se buscó una solución que facilitara
la programación de citas y mejorara la organización.

### Solución
La solución implementada es una página web que permite a los clientes crear cuentas, programar citas, 
modificar detalles y cancelar reservaciones. Además, un sistema de adminsitrador que proporciona acceso 
a la visualización de citas futuras y del día.

### Arquitectura
La aplicación utiliza una base de datos MongoDB Compass para almacenar servicios y citas. Se desarrolló 
en JavaScript (Node.js v18.17.0) y se estructuró con Express.js para el backend y Tailwind CSS
para el frontend.

### Tabla de Contenidos 
1. [Requerimientos](#Requerimientos)
2. [Instalación](#Instalación)
3. [Configuración](#Configuración)
4. [Uso](#Uso)
5. [Contribución](#Contribución)
6. [Manual de Referencia](#ManualdeReferencia)

### Requerimientos
- Servidores de aplicación: Node.js (v18.17.0)
- Base de datos: MongoDB Compass
- PostCSS, Autoprefixer

### Instalación
1. Descargar e instalar MongoDB Compass y conectarse a la base de datos con la URL proporcionada por
privado.
2. Clonar el repositorio utilizando GitHub Desktop.
3. Abrir la carpeta del frontend y crear un archivo '.env.local' con la variable de ruta necesaria proporcionada
de igual manera por privado.
4. Abrir una terminal y acceder a la carpeta del backend
   - cd /Mr.Barber/backend
   - npm install
   - npm install mongoose
   - npm install express
   - npm i -D nodemon
   - npm install dotenv
   - npm uninstall bcrypt
   - npm install bcrypt
   Una vez hechas estas instalaciones se corre el backend de la siguiente manera. 
   - npm run dev:postman
5. Abrir una terminal nueva y acceder a la carpeta del frontend
   - cd /Mr.Barber/frontend
   - npm i -D tailwindcss postcss autoprefixer
   - npx tailwindcss init -p
   Una vez hechas estas instalaciones se corre el frontend de la siguiente manera.
   - npm run dev

Para ejecutar las prubeas manualmente solo se seguiran los pasos como si se fuese a crear nuevas citas. 


### Configuración
- Configuración del producto: Archivos de configuración en la carpeta del frontend y backend
- Configuración de requerimientos: Ajustes en la base de datos y en el archivo '.env.local'

### Contribución
#### Pasos para contribuir
1. Clonar el repositorio usando GitHub Desktop.
2. Crear una nueva rama o seleccionar una existente.
3. Realizar cambios y hacer commit en la rama creada.
4. Enviar un Pull Request y esperar la revisión del equipo.
5. Realizar el merge en la rama master.

## Manual de Referencia
### Usuario Final
#### Crear cuenta
1. Llenar el formato de registro.
2. Haz clic en "Crear Cuenta".
3. Recibir correo de confirmación.
4. Abrir el correo y hacer clic en la URL para verificar tu cuenta.
   
#### Iniciar Sesión
1. Accede a la página web de Mr. Barber
2. En la página de inicio, introduce tus credenciales de cuenta verificada.
3. Haz clic en el botón "Iniciar Sesión".
4. Redirrecciona a página de inicio donde podrás visualizar tus citas.

#### Crear Cita
1. Haz clic en el botón "Nueva Cita".
2. Seleccionar un máximo de 2 servicios.
3. Haz clic en el botón "Detalles de la cita"
4. Scroll hacia abajo y seleccionar fecha y hora disponible.
5. Haz clic en el botón "Confirmar Reservación".
6. Redirrecciona a página de inicio donde podrás visualizar tus citas.

#### Modificar Cita
1. Haz clic en el botón "Modificar Cita"
2. Seleccionar servicios a cambiar, si es lo que se desea. Si no, haz clic en el botón "Detalles de la cita".
3. Seleccionar el cambio de hora o fecha.
4. Haz clic en el bóton [Confirmación Reservación".
5. Recibir correo de confirmación.

#### Cancelar Cita
1. Haz clic en el botón "Cancelar Cita".
2. Confirmar el mensaje de cancelación.
3. Recibir correo de confirmación.

#### Recuperar Contraseña
1. Si olvidaste tu contraseña, haz clic en el botón de crear contraseña.
2. Ingresa tu correo electrónico de la cuenta que olvidaste la contraseña.
3. Recibirás un correo con un enlance de cambiar tu contraseña.
4. Sigue el enlace y realiza el cambio de contraseña.

### Usuario Administrador
#### Acceso como Administrador
1. Crea una cuenta como usuario normal.
2. Accede a MongoDB Compass y cambia la variable booleana correspondiente a tu cuenta para convertirla en administrador.

#### Funcionalidades del Administrador
1. Visualizar las citas futuras o del día en la página principal.
2. No puede modificar ni cancelar citas de usuarios normales.
3. Accede a la base de datos para realizar operaciones administrativas.

 
