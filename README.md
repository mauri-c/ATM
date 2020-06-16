# ATM login
>run the project with http-server

## Objetivo:
Diseñar la interfaz gráfica (FrontEnd) de una webApp que tiene como objetivo la búsqueda de cajeros automáticos (ATM’s) en ciudades de Europa.

## Especificaciones técnicas:
- Utilizar Angular.js para resolver.
- Utilizar un template.
- Debe tener dos interfaces. Una de login y otra de búsqueda. Esta última debe contener un menú
- El login como la búsqueda se deben hacer a través de la API provista.
- Debe ser responsive.

## Criterios de corrección:

 - Correcto funcionamiento.
 - Modificación del template y orden.
 - Estructura de carpetas del proyecto.
 - Usabilidad (UX design).
 - Documentación de código.

## Puntos extras:

 - Creación de búsqueda avanzada (selección de parámetros en los cuales buscar)
 - Agregar una forma de ver mas detalle del ATM incluyendo un mapa con su ubicación.
 - Documentación general del proyecto en MARKDOWN.
 - Uso de repositorio GIT.

## API:
**Login**
Realiza el login al sistema.
 - URL: http://vps-1575977-x.dattaweb.com:8080/atscom/login
 - METHOD: POST
 - PARAM: username, password
	 - Default username: admin
	 - Default password: admin

Al realizar el login correctamente devuelve un token de seguridad. Caso contrario da error.

**Get ATM’s**
Obtiene los ATM de una determinada búsqueda.
 - URL: http://vps-1575977-x.dattaweb.com:8080/atscom/atm
 - METHOD: GET
 - PARAM:
	 - q: Texto a buscar
	 - fields: Campos donde buscar separados por coma:
		 - street, housenumber, postalcode, city, lat, lng, distance, type
Esta request se debe realizar con el token de seguridad del login en *Authorization*

EJEMPLO:
http://vps-1575977-x.dattaweb.com:8080/atscom/atm?q=Kaaikhof&fields=street,housenumber,postalcode,city,lat,lng,distance,type