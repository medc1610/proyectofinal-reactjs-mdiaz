// import array from '../../json/array.json'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList.jsx';
import { db } from '../../services/firebase/index'
import { collection, getDocs, query, where } from 'firebase/firestore'

export function ItemListContainer() {

    const [item, setItem] = useState([])
    const {id} = useParams()
    const collectionRef = id
        ? query(collection(db, "productos"), where("categoria", "==", id))
        : collection(db, "productos")

    useEffect(() => {
        getDocs(collectionRef).then((reponse) => {
            const data = reponse.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            setItem(data)
        })
            .catch((error) => {
                console.log(error)
            })
    }, [id]);


    return (
        <div>
            <ItemList item={item}/>
        </div>
    );

}

