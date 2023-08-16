import React, { useState } from 'react';
import '../assets/styles/_Header.scss';
import { NavbarList } from '../data/NavbarList';
import Logo from '../assets/images/icons/smoothie-logo.svg';
import Arrow from '../assets/images/icons/arrow.svg';
import { Link } from 'react-router-dom';
function Header(props) {
    const [isSearchFocus, setIsSearchFocus] = useState(false);
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
                                            <Link className='inline-flex items-center text-sm border border-transparent hover:border-[#ffffff66] interactive-border-hover px-4 py-2.5 rounded-[40px] font-medium text-b2 text-white' to={v.link}>
                                                {v.name}

                                                {v?.children_list && <div className="flex-center s-[18px] [&_svg]:grow ml-1">
                                                    
                                                    <img src={Arrow} alt="arrow" />
                                                    
                                                    </div>
                                                }
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </li>

                    <li className='flex-grow mx-3 md:mx-4 lg:mx-5 '>
                        <div className={`relative  h-10 w-full rounded-3xl border border-[#ffffff80] ${isSearchFocus ? 'text-black/80' : 'text-white'} focus:text-black hover:bg-white/10 `}>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx={5} cy={5} r="4.375"
                                    stroke="currentColor" strokeWidth="1.25" /><path d="M9.53033 8.46967L9 7.93934L7.93934 9L8.46967 9.53033L9.53033 8.46967ZM10.4697 11.5303C10.7626 11.8232 11.2374 11.8232 11.5303 11.5303C11.8232 11.2374 11.8232 10.7626 11.5303 10.4697L10.4697 11.5303ZM8.46967 9.53033L10.4697 11.5303L11.5303 10.4697L9.53033 8.46967L8.46967 9.53033Z"
                                        fill="currentColor" /></svg>
                            </div>
                            <input type="text" onFocus={() => setIsSearchFocus(true)} onBlur={() => setIsSearchFocus(false)} id="input-group-1" className="h-full w-full pl-10 text-sm text-white focus:text-black rounded-3xl bg-transparent placeholder:text-white/80 focus:placeholder:text-black/80 focus:outline-none focus:bg-white"
                                placeholder="Search products or users..." />
                        </div>
                    </li>

                    <li>
                        <button className='px-3 flex-center rounded-[40px] h-fit disabled:opacity-80 disabled:cursor-default transition-all bg-white text-foreground not-disabled:hover:brightness-95 font-semibold p-3 shadow'>Connect Wallet</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;