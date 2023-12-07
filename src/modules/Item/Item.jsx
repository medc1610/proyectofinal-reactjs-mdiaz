import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './Item.css'
export const Item= ({item}) => {
    
    return (
        <>
        <Card className='card-custom'>
            <Card.Body>
            <Card.Img variant="top" src={item.imagen} className='imagen-custom' />
            <Card.Title>{item.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{item.subtitulo}</Card.Subtitle>
             <Card.Text>
             {item.description}
            </Card.Text>
            <Card.Link>
                <Link to={'/item/'+ item.id}>
                Ver mas..
                </Link>
            </Card.Link>
            
            </Card.Body>
        </Card>
        </>
    )
}
