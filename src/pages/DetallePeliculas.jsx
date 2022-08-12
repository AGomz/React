import pelicula from "./movies.json";
//import styles from "./DetallePeliculas.module.css";

export function DetallePeliculas() {
  const urlImagen = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path;

  return (
      <img
        src= {pelicula.poster_path ? urlImagen : ''}
       
        alt={pelicula.title}
      />
    
  );
}