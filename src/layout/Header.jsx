import React, { useState } from 'react';
import '../assets/styles/_Header.scss';
import { NavbarList } from '../data/NavbarList';
import Logo from '../assets/images/icons/smoothie-logo.svg';
import Arrow from '../assets/images/icons/arrow.svg';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAction } from '../redux/slice/navToggleSlice';
import { walletAction } from '../redux/slice/ConnectWalletSlice';

import NotifyDropdown from '../components/NotifyDropdown';
import UserMenuDropdown from '../components/UserMenuDropdown';


import '../assets/styles/_Dropdown.scss';

function Header(props) {
    const location = useLocation();
    const pathname = location.pathname;
    const [isSearchFocus, setIsSearchFocus] = useState(false);

    const dispatch = useDispatch();
    const isToggle = useSelector(state => state.navToggle.value);
    const isWalletConnected = useSelector(state => state.metamaskWallet.value);
    return (
        <header id="Header">
            <nav className='bg-backdrop relative'>

                <div className="flex items-center py-4 px-5 ">
                    <div className="lg:hidden flex items-center justify-between flex-grow">
                        <button onClick={() => dispatch(toggleAction(!isToggle))} className={`shrink-0 ${isToggle ? 'bg-[#9d37db]' : ''} hover:bg-[#9d37db] lg:hidden inline-flex flex-center w-[2.5rem] h-[2.5rem] rounded-md text-white hover:text-white hover:bg-backdrop-interactive-hover focus:outline-none`}>

                            {isToggle ? (
                                <div className="flex flex-col gap-1 w-5 transition translate-x-[3px] translate-y-[1px]" role="presentation">
                                    <i className="w-full h-[2px] bg-current rounded-xl transition origin-[center_left] rotate-45 translate-y-[-2px]" />
                                    <i className="w-full h-[2px] bg-current rounded-xl transition opacity-0 scale-50" />
                                    <i className="w-full h-[2px] bg-current rounded-xl transition origin-[center_left] -rotate-45" />
                                </div>

                            ) : (

                                <div className="flex flex-col gap-1 w-5 transition" role="presentation">
                                    <i className="w-full h-[2px] bg-current rounded-xl transition origin-[center_left]" />
                                    <i className="w-full h-[2px] bg-current rounded-xl transition" />
                                    <i className="w-full h-[2px] bg-current rounded-xl transition origin-[center_left]" />
                                </div>
                            )}



                        </button>


                        {
                            isWalletConnected ? <>
                                <div className="flex items-center">
                                    <NotifyDropdown></NotifyDropdown>
                                    <UserMenuDropdown></UserMenuDropdown>
                                </div>

                            </> : (
                                <>
                                    <div className={`relative mx-3 md:mx-4 lg:mx-5 h-10 w-full rounded-3xl border border-[#ffffff80] ${isSearchFocus ? 'text-black/80' : 'text-white'} focus:text-black hover:bg-white/10 `}>
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                            <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx={5} cy={5} r="4.375"
                                                stroke="currentColor" strokeWidth="1.25" /><path d="M9.53033 8.46967L9 7.93934L7.93934 9L8.46967 9.53033L9.53033 8.46967ZM10.4697 11.5303C10.7626 11.8232 11.2374 11.8232 11.5303 11.5303C11.8232 11.2374 11.8232 10.7626 11.5303 10.4697L10.4697 11.5303ZM8.46967 9.53033L10.4697 11.5303L11.5303 10.4697L9.53033 8.46967L8.46967 9.53033Z"
                                                    fill="currentColor" /></svg>
                                        </div>
                                        <input type="text" onFocus={() => setIsSearchFocus(true)} onBlur={() => setIsSearchFocus(false)} id="input-group-1"
                                            className="h-full w-full pl-10 input_focus_off text-sm text-white focus:text-black rounded-3xl bg-transparent
                             placeholder:text-white/80  focus:placeholder:text-black/80  focus:bg-white"
                                            placeholder="Search products or users..." />

                                        <button className={`search_btn absolute bg-[#F6F8FA]  flex justify-center items-center right-0 top-0 shrink-0 rounded-r-full  w-10 min-[475px]:w-16 h-[calc(100%+0px)] transition bg-transparent  border-l-2 ${!isSearchFocus ? 'hidden' : ''}`}>
                                            <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx={5} cy={5} r="4.375"
                                                stroke="#222" strokeWidth="1.25" /><path d="M9.53033 8.46967L9 7.93934L7.93934 9L8.46967 9.53033L9.53033 8.46967ZM10.4697 11.5303C10.7626 11.8232 11.2374 11.8232 11.5303 11.5303C11.8232 11.2374 11.8232 10.7626 11.5303 10.4697L10.4697 11.5303ZM8.46967 9.53033L10.4697 11.5303L11.5303 10.4697L9.53033 8.46967L8.46967 9.53033Z"
                                                    fill="#222" /></svg>
                                        </button>
                                    </div>



                                    <button onClick={() => dispatch(walletAction(true))} className='px-3 my-3 lg:my-0  flex-center whitespace-nowrap rounded-[40px] h-fit disabled:opacity-80 disabled:cursor-default transition-all bg-white text-foreground not-disabled:hover:brightness-95 font-[600] p-3 shadow'>
                                        <span className="px-3">Connect</span>
                                    </button>
                                </>

                            )
                        }

                    </div>

                    <ul className={`${isToggle ? '' : 'hidden'} lg:flex absolute left-0 lg:relative z-[50] top-full  items-center  flex-grow w-full bg-[#8A11D4] lg:bg-transparent`}>
                        <li className='hidden lg:block'>
                            <Link to="/">
                                <img className='h-8' src={Logo} alt="logo" />
                            </Link>
                        </li>


                        <li>
                            <ul className="ml-4 gap-3 block lg:flex ">
                                {
                                    NavbarList.map(v => {
                                        return (
                                            <li key={v.id} className='dropdown_hover relative mb-3 lg:mb-0'>
                                                <Link className={`inline-flex items-center text-sm border ${pathname === v.link ? 'border-[#ffffff66]' : 'border-transparent'} hover:border-[#ffffff66] interactive-border-hover px-4 py-2.5 rounded-[40px] font-medium text-b2 text-white`} to={v.link}>
                                                    {v.name}

                                                    {v?.children_list && <div className="flex-center s-[18px] [&_svg]:grow ml-1">

                                                        <img src={Arrow} alt="arrow" />

                                                    </div>
                                                    }
                                                </Link>

                                                {v?.children_list ? (
                                                    <div className='py-3 absolute dropdown_menu hidden'>

                                                        <ul className="w-[280px] bg-white rounded-2xl shadow-[0_12px_80px_rgba(0,0,0,0.24)] !px-0 py-6 p-4 shadow  ">

                                                            {v?.children_list.map(j => {
                                                                return (
                                                                    <li key={j.id} className='dropdown_hover px-5 text-b2 text-foreground hover:bg-[#EDF0F3] f-full w-full h-10 hover:cursor-pointer flex items-center justify-between relative'>
                                                                        <Link to={j.link} className='border-none bg-transparent w-full text-left flex items-center justify-between h-full'>
                                                                            {j.name}
                                                                        </Link>
                                                                        <div className="flex-center s-[18px] [&_svg]:grow">
                                                                            <svg width={7} height={10} viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 10L0.9375 8.9375L4.875 5L0.9375 1.0625L2 0L7 5L2 10Z" fill="currentColor" /></svg>
                                                                        </div>

                                                                        {j?.children_list ? (

                                                                            <div className="py-3 absolute dropdown_menu hidden left-full -top-10">
                                                                                <ul className={`w-[280px] bg-white rounded-2xl shadow-[0_12px_80px_rgba(0,0,0,0.24)] !px-0 py-6 p-4 shadow ${j?.isRow ? 'flex flex-wrap min-w-[560px]' : ''}`}>

                                                                                    <li className='px-5 mb-4 py-2 w-full flex-grow'>
                                                                                        <strong>{j.name}</strong>
                                                                                    </li>
                                                                                    {j?.children_list.map(x => {
                                                                                        return (
                                                                                            <li key={x.id} className={`dropdown_hover  px-5 text-b2 text-foreground hover:bg-[#EDF0F3]  h-10 hover:cursor-pointer flex items-center justify-between relative ${j?.isRow ? 'w-1/2' : 'w-full'}`}>
                                                                                                <Link to={`/subcategory/${x.name.replace(/[ ]/g, '-')}`} className='border-none bg-transparent w-full text-left flex items-center justify-between h-full'>
                                                                                                    {x.name}
                                                                                                </Link>
                                                                                            </li>
                                                                                        )
                                                                                    })}
                                                                                </ul>
                                                                            </div>

                                                                        ) : ''}

                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>

                                                ) : ''}

                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </li>

                        <li className='flex-grow mx-3 md:mx-4 lg:mx-5 hidden  lg:block '>
                            <div className={`relative  h-10 w-full rounded-3xl border border-[#ffffff80] ${isSearchFocus ? 'text-black/80' : 'text-white'} focus:text-black hover:bg-white/10 `}>
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx={5} cy={5} r="4.375"
                                        stroke="currentColor" strokeWidth="1.25" /><path d="M9.53033 8.46967L9 7.93934L7.93934 9L8.46967 9.53033L9.53033 8.46967ZM10.4697 11.5303C10.7626 11.8232 11.2374 11.8232 11.5303 11.5303C11.8232 11.2374 11.8232 10.7626 11.5303 10.4697L10.4697 11.5303ZM8.46967 9.53033L10.4697 11.5303L11.5303 10.4697L9.53033 8.46967L8.46967 9.53033Z"
                                            fill="currentColor" /></svg>
                                </div>
                                <input type="text" onFocus={() => setIsSearchFocus(true)} onBlur={() => setIsSearchFocus(false)} id="input-group-1"
                                    className="h-full w-full pl-10 input_focus_off text-sm text-white focus:text-black rounded-3xl bg-transparent
                             placeholder:text-white/80  focus:placeholder:text-black/80  focus:bg-white"
                                    placeholder="Search products or users..." />

                                <button className={`search_btn absolute bg-[#F6F8FA]  flex justify-center items-center right-0 top-0 shrink-0 rounded-r-full  w-10 min-[475px]:w-16 h-[calc(100%+0px)] transition bg-transparent  border-l-2 ${!isSearchFocus ? 'hidden' : ''}`}>
                                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx={5} cy={5} r="4.375"
                                        stroke="#222" strokeWidth="1.25" /><path d="M9.53033 8.46967L9 7.93934L7.93934 9L8.46967 9.53033L9.53033 8.46967ZM10.4697 11.5303C10.7626 11.8232 11.2374 11.8232 11.5303 11.5303C11.8232 11.2374 11.8232 10.7626 11.5303 10.4697L10.4697 11.5303ZM8.46967 9.53033L10.4697 11.5303L11.5303 10.4697L9.53033 8.46967L8.46967 9.53033Z"
                                            fill="#222" /></svg>
                                </button>
                            </div>
                        </li>

                        <li className='mx-3 lg:mx-0 hidden lg:block'>
                            {
                                isWalletConnected ? <>
                                    <div className="flex items-center">
                                        <NotifyDropdown></NotifyDropdown>
                                        <UserMenuDropdown></UserMenuDropdown>
                                    </div>

                                </> : (
                                    <button onClick={() => dispatch(walletAction(true))} className='px-3 w-full my-3 lg:my-0  flex-center whitespace-nowrap rounded-[40px] h-fit disabled:opacity-80 disabled:cursor-default transition-all bg-white text-foreground not-disabled:hover:brightness-95 font-[600] p-3 shadow'>
                                        <span className="px-3">Connect Wallet </span>
                                    </button>
                                )
                            }

                        </li>


                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;