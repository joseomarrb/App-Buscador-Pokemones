# Pokemón Search App

Este es un proyecto de freeCodeCamp donde debo hacer un buscador de pokemones consumiendo una API y mostrandolo en la página web.

## Reglas Del Proyecto

En este proyecto, crearás una aplicación que buscará Pokémon por nombre o ID y mostrará los resultados al usuario. Para recuperar los datos e imágenes de los Pokémon, utilizarás el proxy PokéAPI de freeCodeCamp.

Nota: Los primeros 13 pasos deben completarse dentro del archivo index.html.

Utiliza el punto de conexión ***https://pokeapi-proxy.freecodecamp.rocks/api/pokemon*** para ver una lista de todos los nombres, números de identificación y URL válidos de Pokémon.

Utiliza el punto de conexión ***https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/{name-or-id}*** para obtener datos de un Pokémon, donde ***{name-or-id}*** es el nombre o el número de identificación del Pokémon.

Nota: Los nombres de los Pokémon deben estar en minúsculas, sin caracteres especiales y separados por guiones. Además, si el Pokémon tiene ♀ o ♂ como parte de su nombre, el formato es ***{name-f}*** o ***{name-m}***, respectivamente.

Historias de usuario:

1. Debe tener un elemento de entrada ***input***con un id de ***"search-input".***

2. Debe tener un elemento de ***button*** con un id de ***"search-button".***

3. Debe tener un elemento con un id de ***"pokemon-name".***

4. Debe tener un elemento con un id de ***"pokemon-id".***

5. Debe tener un elemento con un id de ***"weight".***

6. Debe tener un elemento con un id de ***"height".***

7. Debe tener un elemento con un id de ***"types".***

8. Debe tener un elemento con un id de ***"hp".***

9. Debe tener un elemento con un id de ***"attack".***

10. Debe tener un elemento con un id de ***"defense".***

11. Debe tener un elemento con un id de ***"special-attack".***

12. Debe tener un elemento con un id de ***"special-defense".***

13. Debe tener un elemento con un id de ***"speed".***

14. Cuando el elemento ***#search-input*** contiene el valor ***Red*** y se hace clic en el elemento ***#search-button***, debería aparecer una alerta con el texto ***"Pokémon not found".***

15. Cuando el elemento ***#search-input*** contiene el valor ***Pikachu*** y se hace clic en el elemento ***#search-button***, los valores en los elementos ***#pokemon-name, #pokemon-id, #weight, #height, #hp, #attack, #defense, #special-attack, #special-defense y #speed*** deberían ser ***PIKACHU, #25 o 25, Weight: 60 o 60, Height: 4 o 4, 35, 55, 40, 50, 50 y 90, ***respectivamente.

16. Cuando el elemento ***#search-input*** contiene el valor ***Pikachu*** y se hace clic en el elemento ***#search-button***, debes agregar un elemento ***img*** con el id de ***"sprite"*** y el ***src*** establecido en el sprite ***front_default*** del Pokémon a la página.

17. Cuando el elemento ***#search-input*** contiene el valor ***Pikachu*** y se hace clic en el elemento ***#search-button***, el elemento ***#types*** debe contener un único elemento interno con el valor ***ELECTRIC***. El contenido del elemento ***#types*** debe borrarse entre búsquedas.

18. Cuando el elemento ***#search-input*** contiene el valor ***94*** y se hace clic en el elemento ***#search-button***, los valores en los elementos ***#pokemon-name, #pokemon-id, #weight, #height, #hp, #attack, #defense, #special-attack, #special-defense y #speed deben*** ser ***GENGAR, #94 o 94, Weight: 405 o 405, Height: 15 o 15, 60, 65, 60, 130, 75 y 110, *** respectivamente.

19. Cuando el elemento ***#search-input ***contiene el valor ***94*** y se hace clic en el elemento ***#search-button***, debes agregar un elemento ***img*** con el id del ***sprite*** y el ***src*** establecido en el ***sprite*** ***front_default*** del Pokémon a la página.

20. Cuando el elemento ***#search-input*** contiene el valor ***94*** y se hace clic en el elemento ***#search-button***, el elemento ***#types*** debe contener dos elementos internos con los valores de texto ***GHOST y POISON***, respectivamente. El contenido del elemento ***#types*** debe borrarse entre búsquedas.

Cumpla con las historias de usuario y supere todas las pruebas a continuación para completar este proyecto. Déle su propio estilo personal. ¡Feliz codificación!

Nota: Al ejecutar las pruebas habrá una pequeña demora. Espere unos segundos para permitir que finalicen las pruebas. No actualice la página antes de que finalicen.
