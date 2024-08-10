import './Navbar.css'
import { Carrito } from './carrito/Carrito.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoNav from '../../assets/logo.png'


export function NavbarComponent() {
    return (

            <div className={'grid-navbar'}>
                <div className={'logo'}>
                <Link to={'/'} className={'links-buttons'}> <img  src={logoNav} alt={'logo'}/></Link>
                </div>
                <div className={'home'}>
                    <Button variant="secondary">
                        <Link to={'/'} className={'links-buttons'}>HOME</Link>
                    </Button>
                </div>
                <div className={'nosotros'}>
                    <Button variant="secondary">
                        <Link to={'/nosotros'} className={'links-buttons'}>NOSOTROS</Link>
                    </Button>
                </div>
                <div className={'productos'}>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic"  >
                            PRODUCTOS
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item >
                                <Link to={'/category/inversores'} className={'dropdown-links'}>Inversores</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={'/category/baterias'} className={'dropdown-links'}>Baterias</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={'/category/paneles'} className={'dropdown-links'}>Paneles</Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className={'contacto'}>
                    <Button variant="secondary">
                        <Link to={'/contacto'} className={'links-buttons'}>CONTACTO</Link>
                    </Button>
                </div>
                <div className={'carrito'}>
                    <Link to={'/cart'}>
                        <Carrito/>
                    </Link>

                </div>

            </div>



    )
}
