import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavbarComponent } from './core/Navbar/Navbar.jsx';
import { Home } from './modules/home/Home.jsx'
import './Main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nosotros } from './modules/Nosotros/Nosotros.jsx';
import { Contacto } from './modules/Contacto/Contacto.jsx';
import { ItemListContainer } from './modules/ItemListContainer/ItemListContainer.jsx';
import { ItemDetailContainer } from './modules/ItemDetailContainer/ItemDetailContainer.jsx';
import { Carrito } from './core/Navbar/carrito/Carrito.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <div>
        <BrowserRouter>
            <NavbarComponent/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/category/:id"} element={<ItemListContainer/>}/>
                <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
                <Route path={"/nosotros"} element={<Nosotros/>}/>
                <Route path={"/contacto"} element={<Contacto/>}/>
                <Route path={"/cart"} element={<Carrito/>}/>
            </Routes>
        </BrowserRouter>
    </div>
)
