import { CarteleraPeliculas } from "./components/CarteleraPeliculas";
import styles from './App.module.css';

export function App(){
    return <div>
        <header>
            <h1 className={styles.titulo}>Sitio pelis</h1>
        </header>
        <main>
           <CarteleraPeliculas />
           
        </main>
    </div>;
}