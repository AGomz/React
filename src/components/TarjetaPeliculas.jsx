import styles from "./TarjetaPeliculas.module.css";
import { Link } from "react-router-dom";

export function TarjetaPeliculas({ pelicula }){
    const urlImagen = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path;

    return(
        <Link to={"/peliculas/" + pelicula.id}>
            <li className={styles.tarjetaPeliculas}>
                <img 
                width={230}
                height={345}
                className={styles.imagenPelicula} 
                src={urlImagen} 
                alt={pelicula.title} 
                />
                <div className={styles.tituloPelicula}>{pelicula.title}</div>
            </li>
        </Link>
    );
}