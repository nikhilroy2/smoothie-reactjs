import React from 'react';
import SuccessCheckIcon from '../assets/images/icons/success_check.svg';
import { useDispatch } from 'react-redux';
import { isWalletSuccessModal } from '../redux/slice/WalletSuccessSlice';
function WalletSuccessModal(props) {
    const dispatch = useDispatch();
    return (
        <div id='WalletSuccessModal'>
            <div className="fixed z-50 inset-0 overflow-y-auto">
                <div className="flex-center min-h-screen p-4 text-center">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                    <div className="relative inline-block align-bottom w-full max-w-[512px] transition-all mb-16 sm:align-middle !max-w-[454px]">
                        <div className="flex flex-col relative bg-foreground-subtle rounded-xl text-left shadow-lg p-6 space-y-6">
                            <div className="flex flex-col flex-1 h-full">
                                <div className="">
                                    <div className="flex-center w-[56px] h-[56px]">
                                        <img src={SuccessCheckIcon} alt="icon" />
                                    </div>
                                    <h2 className="text-h2 font-bold mt-6 mb-3">
                                        Welcome to Smoothie Awards
                                    </h2>

                                    <p className="mb-20 text-b1 text-foreground-onEmphasis">
                                        Discover and upvote your favorite web3 products, visit their site and get engaged.
                                    </p>
                                    <div className="flex justify-end">
                                        <button onClick={()=> dispatch(isWalletSuccessModal(false))} className="flex-center rounded-[40px] h-fit disabled:opacity-80 disabled:cursor-default transition-all bg-white text-foreground not-disabled:hover:brightness-95 border border-border-interactive font-semibold p-3">
                                            <span className="px-3">Done</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WalletSuccessModal;