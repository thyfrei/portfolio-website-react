import React from 'react'
import './style/footer.css'
import Archive from './Archive'
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footerBody">
            <div className="footer-content">

                {/* Left side */}
                <div className="footer-left">
                    <div className="copyright">
                        <p>
                            &copy; {new Date().getFullYear()} <span>Soumik</span>
                        </p>
                    </div>

                    <a
                        className="footer-link email-link"
                        href="mailto:interact.soumik@gmail.com"
                    >
                        <i className="fas fa-envelope"></i>
                        Email Me
                    </a>
                </div>

                {/* Right side */}
                <div className="footer-right">
                    <div className="iiest-section">
                        <p>Are you from IIEST?</p>

                        <NavLink to="/Archive" className="footer-link iiest-link">
                            Explore Archive <span>→</span>
                        </NavLink>
                    </div>
                </div>

            </div>
        </footer>

    )
}
