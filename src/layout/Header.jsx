import React from 'react';
import '../assets/styles/_Header.scss';
import { NavbarList } from '../data/NavbarList';
import Logo from '../assets/images/icons/smoothie-logo.svg';
import { Link } from 'react-router-dom';
function Header(props) {
    return (
        <header id="Header">
            <nav className='bg-backdrop'>
                <ul className='flex py-4 items-center px-5'>
                    <li>
                        <Link to="/">
                            <img className='h-8' src={Logo} alt="logo" />
                        </Link>
                    </li>
                    <li>
                        <ul className="ml-4 gap-3 flex">
                            {
                                NavbarList.map(v => {
                                    return (
                                        <li key={v.id}>
                                            <Link className='inline-flex text-sm border border-transparent hover:border-[#ffffff66] interactive-border-hover px-4 py-2.5 rounded-[40px] font-medium text-b2 text-white' to={v.link}>
                                                {v.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </li>

                    <li>

                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;