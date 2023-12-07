import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import array from '../../json/array.json';
import { ItemDetail } from '../ItemDetail/ItemDetail.jsx';

export const ItemDetailContainer= () => {

    const [item, setItem] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const promesa = new Promise ((resolve) => {
                resolve(array.find((item) => item.id === parseInt(id)))
            
        });
        promesa.then((data) => {
            setItem(data)
        })
    }, [id] );

    return (
        <>
            <ItemDetail item={item}/>
        </>
    )
}
