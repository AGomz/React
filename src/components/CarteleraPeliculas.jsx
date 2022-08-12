import peliculas from "./movies.json";
import { TarjetaPeliculas } from "./TarjetaPeliculas";
import styles from "./CarteleraPeliculas.module.css";

export function CarteleraPeliculas() {
    /*Dentro de las {} va mi expresión JS: a c/peli me lo muestra como un item de la lista.*/
    return (
        <ul className={styles.carteleraGrid}>
          {peliculas.map((pelicula) => (
            <TarjetaPeliculas key={pelicula.id} pelicula={pelicula} />
          ))}
        </ul>
    );
}