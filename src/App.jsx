import { CarteleraPeliculas } from "./CarteleraPeliculas";
import { TarjetaPeliculas } from "./TarjetaPeliculas";

export function App(){
    return <div>
        <header>
            <h1>Sitio pelis</h1>
        </header>
        <main>
           <CarteleraPeliculas />
           <TarjetaPeliculas />
        </main>
    </div>;
}