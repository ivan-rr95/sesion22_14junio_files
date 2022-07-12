# Práctica para subir y borrar _files_ de una aplicación
## Sesión 22: 14 de junio

### Pasos a seguir:
1. Crear un proyecto nuevo desde el **Terminal** con npm init
2. Instalar **express**
3. Instalar **multer**
4. Instalar **fs-extra**
5. Requerimos las librerías que hemos instalado
6. Levantamos un servidor.
7. Creamos un middleware donde utilizaremos **multer** con:
    - >_**Destination:** Para poner la ruta de la carpeta donde se deben guardar los archivos_
    - >_**Filename:** Para definir el nombre de los archivos_
8. Creamos dos métodos:
    - >_**Post:** Para subir archivos donde le pasamos la ruta y el nombre que utilizará_
    - >_**Delete:** Para borrar archivos donde le pasamos la ruta y el nombre que utilizará_
9. Ejecutar nuestra api con **Postman** para hacer pruebas
10. Código libre para cualquier usuario.