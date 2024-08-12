import React from 'react';
import footerBurger from '../../assets/img/burgerhouse (2).png';
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='my-4'>
                        <img width={180} src={footerBurger} alt="" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col my-4 p-2 footerDetails'>
                        <p>
                            Welcome to Burger Company, where passion for exceptional food and
                            genuine hospitality come together. Our story is one of dedication to
                            crafting the perfect burger experience, from sourcing the finest
                            ingredients to delivering unparalleled taste in every bite.
                        </p>
                    </div>
                    <div className='col footerAddress m-2 p-3'>
                        <pre>
                            MG Road, Bangalore, 500089
                        </pre>
                        <pre>
                            info@burgerhouse.com
                        </pre>
                    </div>
                </div>
                <div className='row text-center p-4'>
                    <p>
                        Copyright © 2024 Web Design Mastery. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
