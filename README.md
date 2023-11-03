# <img style="padding-right:0.5rem" src='https://img.freepik.com/vector-premium/bandera-argentina-bandera-argentina-ilustracion-vectorial_685751-66.jpg' width="50px" >  <span style="font-size:3rem">ESPAÑOL:</span>
## <i align="center" style="font-size:2rem">🔮 APP DE POKEMON HECHA CON REACT QUERY</i>
En este proyecto se usaron hooks como **useState,useEffect** , tenologias como  **HTML,CSS,JavaScript,React,SASS** ,para el manejo de rutas **React Router**,para el manejo de estados asincronos **React Query** y para el manejo de estados **Redux**

 _Este proyecto fue construido con el proposito de practicar Redux y React Query_

**Nota: Es responsivo**
<p align="center">
<img width="600px" heigth="600px" src="./src/assets/pheal.gif" alt="Pokemon Spheal| ">
</p>

## 💡 Como se penso este proyecto y como funciona

**_<span style="text-decoration:underline">Idea Principal</span>: Una app de peliculas con una barra de busqueda_**

La api que se utilizo fue : 
- [PokeApi](https://pokeapi.co/api/v2/)

Previamente ya habia realizado otros proyectos con esta API enfocandome solamente en la Pokedex ahora decidi abarcar un poco mas de informacion para poder practicar mas React Query

Hay 4 secciones principales de esta aplicacion:
- Busqueda de Pokemones
- Busqueda de Generaciones
- Mostrar Items
- Mostrar Localizaciones

### Busqueda de Pokemones:

Posee como componentes principales una barra de busqueda  y un boton para busqueda. El usuario introduce el pokemon que desea buscar y aprieta el boton de busqueda ,cuando realiza esta accion **React Query** realiza una nueva peticion hacia la API de pokemon trayendo la informacion del pokemon si es que exsite , sino existe muestra un cartel en pantalla aclarando que el pokemon buscado no existe

### Busqueda de Generaciones:

Al ingresar a esta vista de la aplicacion se realiza una peticiona la API que esta responde con todas las generaciones de Pokemones , con esta informacion se renderizan las diferentes generaciones.
Al hacer click en alguna de estas generaciones se guarda en el estado de Redux el id de la generacion seleccionada con esta informacion se realiza una peticion para obtener todos los pokemones de esta generacion y se renderizan

### Mostrar Items:

Al ingresar a esta vista de la aplicacion se realiza una peticion hacia la API en el endpoint de los items y con esta informacion se renderizan los Items. En realidad solamente trae el nombre y la url , con esta url internamente dentro de cada componente de los items se realiza una nueva peticion aparte para obtener la informacion extra. Al final de la pagina hay 2 botones para la paginacion , si posee paginacion siguiente o atras estaran disponibles para que el usuario interactue con ellos ,sino estaran deshabilitados

### Mostrar Localizaciones:

Al ingresar a esta vista de la aplicacion se realiza una peticion hacia la API en el endpoint de las localizaciones y con esta informacion se renderizan las localizaciones. Al igual que en el item anterior internamente la informacion que trae este endpoint es el nombre de la localizacion y la url con la informacion completa , por lo tanto se realiza una nueva peticion internamente para poder obtener mas informacion acerca de cada localizacion

Nota: Hay una vista extra que muestra la informacion de cada Pokemon Individualmente , para esto hay un estado en Redux que permite saber si que Pokemon debe mostrar , debido a que el usuario al seleccionarlo llena este estado.

Para los estilos utilice SASS para minimos cambios y mayoritariamente BOOTSTRAP



----------------------------------------------------------------------------------
----------------------------------------------------------------------------------

# <img style="padding-right:0.5rem" src="https://img.freepik.com/vector-premium/gran-bretana-bandera-bandera-inglaterra-vector-icono-reino-unido-bandera-gran-bretana-10-eps_800531-104.jpg" width="50px"> <span style="font-size:3rem">ENGLISH:</span>

## <i align="center" style="font-size:2rem">🐍 POKEMON APP WITH REACT QUERY</i>
In this project was used hooks like **useState,useEffect** , technologies like  **HTML,CSS,JavaScript,React,SASS** ,for route managment **React Router**,for asynchronous state managment **React Query** and for state managment **Redux**

 _This project was built to practising Redux and React Query_

**Note: It´s responsive**
<p align="center">
<img width="600px" heigth="600px" src="./src/assets/squirtle.gif" alt="Squirtle">
</p>

## 🤔 How this project was thinked and how it works

**_<span style="text-decoration:underline">Main Idea</span>:_**

The api used was : 
- [PokeApi](https://pokeapi.co/api/v2/)

Previously I did other projects with this API but only Pokedex in this case I wanted to practise React Query so I worked with much more information

Four main sections in this app:
- Search Pokemons
- Search Generations
- View Items
- View Locations


### Search Pokemons:

Has two main components: A search bar and a search button. The user types in the search bar the pokemon that want to know and clicks the button .The application do a fetch to the pokemon API thanks to **React Query** and  If the pokemon exist It will be displayed, if it does not  exist the App will display a message saying "Pokemon does not exist"


### Search Generations:

When user enters into this app view, the application makes a fetch to the API .The API response is all  pokemons generations , with this information  the different generations  will be displayed
When the user clicks on any of these generations, the id of the selected generation is saved in the redux state, with this information a fetch is made to get the different pokemon of the generations and it is displayed.


### Mostrar Items:

When user enters into this app view, the application makes a fetch to the API with the items endpoint, with this information will be rendered the different items. In really , the response is only the name and url , with this url in the individual component of each item the app makes a fetch to get the complete item information.

In the end of the page are two buttons, next page and prev page , if the api has any information about next or prev the button ,It will available to be clicked , if api does not have information  then the button it will stay dissabled

### View Locations:

When user enters into this app view, the application makes a fetch to the API with the locations endpoint, with this information will be rendered the different locations.
At same of previous item , this endpoint just bring the name and url , whit this information the app in each location component makes a fetch to get the complete location information

In the end of the page are two buttons, next page and prev page , if the api has any information about next or prev the button ,It will available to be clicked , if api does not have information  then the button it will stay dissabled


Note: The app has a extra view that show the information of each pokemon individual , for this the app has a redux state that allow to know if the pokemon is selected or not by user

For the styles I used SASS for minimal changes and the app in general was built by BOOTSTRAP
