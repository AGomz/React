import { CarteleraPeliculas } from "./components/CarteleraPeliculas";
import { DetallePeliculas } from "./pages/DetallePeliculas";
import { PaginaInicio } from "./pages/PaginaInicio";
import styles from './App.module.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";

export function App() {
    return <Router>
        <header>
            <Link to="/"><h1 className={styles.titulo}>Sitio pelis</h1></Link>
        </header>
        <main>
            <Routes>
                <Route path='/' 
                element={<PaginaInicio />} />

                <Route path='/peliculas' 
                element={<CarteleraPeliculas />} />
                
                <Route exact path='/peliculas/:peliculaId' 
                element={<DetallePeliculas />} />
            </Routes>
        </main>
    </Router>;
}