import array from '../../json/array.json'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList.jsx';


export function ItemListContainer() {

    const [item, setItem] = useState([])
    const {id} = useParams()


    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await new Promise ((resolve) => {
                        resolve(id ? array.filter((item) => item.categoria === id) : array)
                   
                });
                setItem(data)
                console.log(data)
            }catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [id] );


    return (
        <div>
            <ItemList item={item}/>
        </div>
    );

}

