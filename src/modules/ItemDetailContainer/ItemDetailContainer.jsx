import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail.jsx';
import {db} from '../../services/firebase/index'
import { getDoc, doc } from 'firebase/firestore';
export const ItemDetailContainer= () => {

    const [item, setItem] = useState([])
    const {id} = useParams()

    useEffect(() => {
        getDoc(doc(db, "productos", id)).then((reponse) => {
            const product = {id: reponse.id, ...reponse.data()}
            setItem(product)
        })
            .catch((error) => {
                console.log(error)
            })
    }, [id] );

    return (
        <>
            <ItemDetail item={item}/>
        </>
    )
}
