import React from 'react';
import Logo from '../assets/images/icons/smoothie-logo.svg';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer id="Footer">
            <div className="flex xs:flex-col sm:flex-row justify-between bg-backdrop text-b2 text-white py-24 xs:px-6 sm:px-[120px] gap-6">
                <div className="flex flex-col gap-6">
                    <img alt="Smoothie" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="h-7 w-fit"
                        src={Logo} style={{ color: 'transparent' }} />
                    <p className="opacity-80">© 2023 Smoothie, Inc. All rights reserved</p></div>


                <div className="flex flex-col gap-6"><div className="grid xs:grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-6">
                    <Link to="/litepaper">Litepaper</Link>
                    <Link to="/awards">Smoothie Awards</Link>

                    <Link to="/newsleter">Newsletter</Link>
                    <Link to="mailto:hello@smoothie.so">Contact Us</Link>
                </div>
                    <div className="grid xs:grid-cols-2 sm:grid-cols-4 gap-x-12 opacity-80">
                        <Link to="/privacy-policy">Privacy</Link>
                        <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
                    </div>
                    </div>
            </div>
        </footer>
    );
}

export default Footer;