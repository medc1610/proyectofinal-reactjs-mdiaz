import './Carrito.css'
import { useState } from 'react';
import logoCart from '../../../assets/carrito.webp'




export function Carrito(){

    const [state, setState] = useState(0);

    return (
        <>
            <div className={'carrito-container'} >
                <img className={'carrito-img'} src={logoCart} alt={'carrito'}/>
                <div className={'carrito-cantidad'}>
                    {state}
                </div>
            </div>

        </>
    )
}

