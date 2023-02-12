import {Route, Routes} from 'react-router-dom'
import {AboutPage} from "./pages/About";
import {ProductsPage} from "./pages/ProductsPage";
import {Navigation} from "./components/Navigation";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/products" element={ <ProductsPage/> }/>
                <Route path="/about" element={ < AboutPage />} />
            </Routes>
            <div className="font-bold text-center">Click to other page above!!</div>
        </>
    )
}

export default App;
