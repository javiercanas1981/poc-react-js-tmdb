# Site TMDB

Esta es una página de inicio de películas/series integrada en [ReactJS](http://facebook.github.io/react/index.html).
Utiliza [The Movie Database (TMDb) API] (https://www.themoviedb.org/documentation/api) para visualizar la data.


Para incializar la app se deben bajar las dependecias que se encuentran en el
package.json y esto lo podemos lograr por consola escribiendo:

```sh
$ npm install 
```

una vez ya descargadas las dependencias tenemos que ejecutar en consola el comando de npm

```sh
$ npm start
```

y la aplicacion estara en funcionamiento en http://localhost:3000/. 

# Dependencias 
Instalar las siguientes dependencias:

En principio se debe tener instalado react:

- react v16.14.0 (superior)
- Node v10 (superior)


- Axios (no llegue a implementar Axios con redux pero es la idea)
    - Permite hacer conexiones HTTP externas

    -   npm install --save axios

- Router dom
    - Es un enrutador que permite reescriben secciones de una página en lugar de cargar páginas nuevas completas desde un servidor tipo SPA
    - npm install --save react-router-dom

- Redux
    - Permite almacenar mi estado en un Store, este estado solo va a poder cambiar a través de acciones
    - npm install --save redux

- React-redux
    - Permite almacenar mi estado en un Store, este estado solo va a poder cambiar a través de acciones
    - npm install --save react-redux

- React-thunk
    - Permite conectar con los action y en lugar de devolver un objeto devuelve una función con una acción asyncrona
    - npm install --save redux-thunk
  
- React tooltip : Permite generar un tooltip dinamico 
    - npm install --save react-tooltip

# Autor

Javier Cañas
