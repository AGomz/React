import peliculas from "./movies.json";

export function CarteleraPeliculas() {
    /*Dentro de las {} va mi expresión JS: a c/peli me lo muestra como un item de la lista.*/
    return (
        <ul>
           {peliculas.map(function(pelicula){
           return <li key={pelicula.id}>{pelicula.title}</li>
           })}
        </ul>
    );
}