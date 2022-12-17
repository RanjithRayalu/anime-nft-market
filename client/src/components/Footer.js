import './Footer.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <nav className="footer">
            <div className='footer-block-1'>
                <ul className="footer-links">
                    <li>
                        <Link to="/about" className='footer-company-link'>
                            Information
                        </Link>
                    </li>
                    <li>
                        <Link to="/solutions" className='footer-knowledge-link'>
                            Use cases
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/discounts" className='footer-discounts-link'>
                            Discounts
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='footer-block-2'>
                <div className="donate-button-container">

                    <div className='footer-copyright'>
                        <p>NFT MARKET</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Footer