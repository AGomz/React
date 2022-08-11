import styles from "./TarjetaPeliculas.module.css";

export function TarjetaPeliculas({ pelicula }){
    const urlImagen = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path;

    return(
        <li className={styles.tarjetaPeliculas}>
            <img src={urlImagen} alt={pelicula.title} />
            <div>{pelicula.title}</div>
        </li>
    );
}