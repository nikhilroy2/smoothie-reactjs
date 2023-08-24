import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import DefaultAvatar from '../assets/images/avatar/default_avatar.png';
import LogOutIcon from '../assets/images/icons/logout.svg';
import ArrowRight from '../assets/images/icons/arrowRight.svg';
import MsgIcon from '../assets/images/icons/msg.svg';
import TwitterIcon from '../assets/images/icons/twitter_2.svg';
import ResourceLinkIcon from '../assets/images/icons/resource_link.svg';
import ResourceNIcon from '../assets/images/icons/resource_n.svg';
import { isMetamaskConnected } from '../redux/slice/metaMaskWalletSlice';
import { Link } from 'react-router-dom';
function UserMenuDropdown(props) {
    const dispatch = useDispatch();

    const [isUserMenuDropdown, setIsUserMenuDropdown] = useState(false);
    const userMenuContent = useRef();
    const userMenuBtn = useRef();

    window.addEventListener('click', function () {
        if (event.target !== userMenuContent.current && event.target !== userMenuBtn.current) {
            setIsUserMenuDropdown(false);
        }
    })

    const handleUserMenuContentClick = (event) => {
        event.stopPropagation();
    };

    const Logout = function () {
        // Terminate Web3 provider connection
        if (typeof window.ethereum !== 'undefined') {
            window.ethereum = null;
            dispatch(isMetamaskConnected(false));
        }
    }
    return (
        <div className="relative user_menu_dropdown">
            <button ref={userMenuBtn} onClick={() => setIsUserMenuDropdown(!isUserMenuDropdown)} className="flex-center ml-1 lg:ml-2">
                <div className="pointer-events-none relative inline-block min-w-fit rounded-full overflow-hidden w-12 h-12 outline-offset-[-1px] outline outline-white/30 outline-1">
                    <img className="w-12 h-12 object-cover" alt={'img'} src={DefaultAvatar} />
                </div>
                <div className="pointer-events-none ml-2 mr-4 text-left hidden xl:block whitespace-nowrap">
                    <p className="text-b2 text-white font-medium">Username</p>
                    <p className="text-caption text-white opacity-70 ">
                        0 Points
                    </p>
                </div>
            </button>

            {isUserMenuDropdown && (
                <div ref={userMenuContent} onClick={handleUserMenuContentClick} className="origin-top-right absolute right-0 lg:right-4 mt-1 p-4 w-[312px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 text-gray-700">
                    <div className="absolute top-4 right-2 p-2 border rounded-lg interactive-hover">
                        <button onClick={Logout} className="flex-center w-[18px] h-[18px]">
                            <img src={LogOutIcon} alt="img" />
                        </button>
                    </div>
                    <div className="mb-8">
                        <Link to="/users/username">
                            <div className="relative inline-block min-w-fit rounded-full overflow-hidden !w-[68px] !h-[68px] mt-4 mb-2">
                                <img src={DefaultAvatar} className='!w-[68px] !h-[68px] object-cover' alt="avatar" />
                            </div>
                            <p className="text-b1 font-medium interactive-hover-opacity">
                                Username
                            </p>
                            <p className="text-caption interactive-hover-opacity">
                                View Profile
                            </p>
                        </Link>
                    </div>


                    <Link to="/my-products">
                        <div className="flex items-center justify-between text-b2 font-medium border rounded-lg p-3 mb-4 interactive-hover">
                            <p>My Products</p>
                            <div className="flex-center w-[18px] h-[18px]">
                                <img src={ArrowRight} alt="icon" />
                            </div>
                        </div>
                    </Link>

                    <div className="mb-6">
                        <a href="https://learn.smoothie.so/" className="flex items-center space-x-3 p-3 text-b2 font-medium first:border-t border-l border-r last:border-b first:rounded-t-lg last:rounded-b-lg interactive-hover">
                            <span className=" flex-center !w-6 !h-6 text-plum-120">
                                <img src={MsgIcon} className='' alt="msg" />
                            </span>
                            <span className="grow underline">
                                Newsletter
                            </span>
                            <div className="flex-center w-[18px] h-[18px]">
                                <img src={ResourceLinkIcon} alt="icon" />
                            </div>
                        </a>

                        <a href="https://twitter.com/withsmoothie" className="flex items-center space-x-3 p-3 text-b2 font-medium first:border-t border-l border-r last:border-b first:rounded-t-lg last:rounded-b-lg interactive-hover">
                            <span className=" flex-center !w-6 !h-6 text-plum-120">
                                <img src={TwitterIcon} alt="twitter" />
                            </span>
                            <span className="grow underline">
                                Twitter
                            </span>
                            <div className="flex-center w-[18px] h-[18px]">
                                <img src={ResourceLinkIcon} alt="icon" />
                            </div>
                        </a>

                        <Link to="/litepaper" className="flex items-center space-x-3 p-3 text-b2 font-medium first:border-t border-l border-r last:border-b first:rounded-t-lg last:rounded-b-lg interactive-hover">
                            <span className=" flex-center !w-6 !h-6 text-plum-120">
                                <img src={ResourceNIcon} alt="ResourceNIcon" />
                            </span>
                            <span className="grow underline">
                                Litepaper
                            </span>
                            <div className="flex-center w-[18px] h-[18px]">
                                <img src={ResourceLinkIcon} alt="icon" />
                            </div>
                        </Link>


                        <a href="https://withsmoothie.notion.site/Smoothie-FAQ-c3aa6b2f8cb9417e94a447b10cc2bafb" className="flex items-center space-x-3 p-3 text-b2 font-medium first:border-t border-l border-r last:border-b first:rounded-t-lg last:rounded-b-lg interactive-hover">
                            <span className=" flex-center !w-6 !h-6 text-plum-120">
                                <img src={ResourceNIcon} alt="ResourceNIcon" />
                            </span>
                            <span className="grow underline">
                                FAQ
                            </span>
                            <div className="flex-center w-[18px] h-[18px]">
                                <img src={ResourceLinkIcon} alt="icon" />
                            </div>
                        </a>

                    </div>

                    <div className="text-caption text-center mb-2">
                        <Link className='interactive-hover-opacity' to="/privacy-policy">
                            Privacy Policy
                        </Link>
                        <span className="mx-1">.</span>
                        <Link className='interactive-hover-opacity' to="/terms-and-conditions">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            )}


        </div>
    );
}

export default UserMenuDropdown;