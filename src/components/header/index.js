import React from 'react';
import burgerHouse from '../../assets/img/burgerhouse.png';
import { Link } from 'react-router-dom';
const Header = () => {
    const Links = [
        { id: 1, link: 'Home' },
        { id: 2, link: 'Special' },
        { id: 3, link: 'Menu' },
        { id: 4, link: 'Events' },
        { id: 5, link: 'Contact Us' }
    ]
    return (
        <header className='head'>
            <div className='container'>
                <div className='row py-4'>
                    <div className='col-4'>
                        <img width={150} src={burgerHouse} alt="" />
                    </div>
                    <div className='col-8'>
                        <ul className='list-unstyled d-flex justify-content-end'>
                            {
                                Links.map((item) => {
                                    return (
                                        <li key={item.id} className="font-monospace text-uppercase px-4 nav_item"><Link className='text-decoration-none'>{item.link}</Link></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
