import React, { useState,  useRef } from 'react';
import BellIcon from '../assets/images/icons/bell_icon.svg';
function NotifyDropdown(props) {

    const [isNotifyDropdown, setIsNotifyDropdown] = useState(false);

    const notifyContent = useRef();
    const notifyBtn = useRef();

    window.addEventListener('click', function(){
        if(event.target !==  notifyContent.current && event.target !== notifyBtn.current ){
            setIsNotifyDropdown(false);
        }
    })

    const handleNotifyContentClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div className="notify_user relative">
            <button ref={notifyBtn} onClick={() => setIsNotifyDropdown(!isNotifyDropdown)} className="shrink-0 relative flex-center rounded-full bg-black/10 w-12 h-12 text-white border border-transparent interactive-border-hover">
                <div className="flex-center w-[18px] h-[18px] pointer-events-none">
                    <img src={BellIcon} alt="img" />
                </div>
            </button>

            {isNotifyDropdown && (
                <div onClick={handleNotifyContentClick} className="absolute notif_user_dropdown right-0" ref={notifyContent}>
                    <div className="tippy-box !max-w-none w-full sm:w-[448px] max-h-[min(80vh,748px)] !p-5 z-100 overflow-y-auto p-4 rounded-2xl bg-white shadow [&_.tippy-arrow]:text-white">
                        <div className="content_wrapper">
                            <h3 className="text-subtitle mb-4 mt-1">
                                Notifications
                            </h3>
                            <p className="flex-center text-b2 font-medium">
                                You don't have any notifications yet.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NotifyDropdown;