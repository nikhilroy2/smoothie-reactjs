import React from 'react';
import MetaMaskIcon from '../assets/images/icons/metaMask.svg';
import WalletConnectIcon from '../assets/images/icons/walletConnect.svg';
import CoinBaseIcon from '../assets/images/icons/coinbaseWallet.svg';
import { useSelector, useDispatch } from 'react-redux';
import { walletAction } from '../redux/slice/ConnectWalletSlice';
function ConnectWallet(props) {
    const dispatch = useDispatch();
    return (
        <div id='ConnectWallet'>
            <div className="fixed z-[5000] inset-0 overflow-y-auto">
                <div className="flex-center min-h-screen p-4 text-center">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>


                    <div className="relative inline-block align-bottom w-full max-w-[512px] transition-all mb-16 sm:align-middle !max-w-[454px]">
                        <div className="flex flex-col relative bg-foreground-subtle rounded-xl text-left shadow-lg p-6 space-y-6">

                            <div className="flex justify-between space-x-4">
                                <div className="flex flex-col min-w-0">
                                    <h2 className="text-h2 font-semibold text-foreground">Connect wallet</h2>
                                </div>
                            </div>



                            <div className="flex flex-col flex-1 h-full">

                                <div className="space-y-2">
                                    <button className="flex-center rounded-[40px] h-fit disabled:opacity-80 disabled:cursor-default transition-all bg-[#afb8c133] hover:brightness-95 text-foreground not-disabled:hover:brightness-95 text-b2 font-medium p-2 w-full ">
                                        <div className="px-2 flex-center">
                                            <img className="w-4 h-4 mr-2" src={MetaMaskIcon} alt="Picture of the connector" />
                                            <span className="whitespace-nowrap">MetaMask</span>
                                        </div>
                                    </button>

                                    <button className="flex-center rounded-[40px] h-fit disabled:opacity-80 disabled:cursor-default transition-all bg-[#afb8c133] hover:brightness-95 text-foreground not-disabled:hover:brightness-95 text-b2 font-medium p-2 w-full ">
                                        <div className="px-2 flex-center">
                                            <img className="w-4 h-4 mr-2" src={WalletConnectIcon} alt="Picture of the connector" />
                                            <span className="whitespace-nowrap">WalletConnect</span>
                                        </div>
                                    </button>

                                    <button className="flex-center rounded-[40px] h-fit disabled:opacity-80 disabled:cursor-default transition-all bg-[#afb8c133] hover:brightness-95 text-foreground not-disabled:hover:brightness-95 text-b2 font-medium p-2 w-full ">
                                        <div className="px-2 flex-center">
                                            <img className="w-4 h-4 mr-2" src={CoinBaseIcon} alt="Picture of the connector" />
                                            <span className="whitespace-nowrap">Coinbase Wallet</span>
                                        </div>
                                    </button>


                                    <p className="text-base leading-6 font-normal text-gray-500 text-center">This wallet becomes your primary connected address. If you own an ENS domain, we'll make that your username. You can change this later though!</p>
                                    <p className="text-caption text-center pt-3">This site is protected by reCAPTCHA and the Google&nbsp;<a href="https://policies.google.com/privacy">Privacy Policy</a> and&nbsp;<a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>


                                    <button onClick={()=> dispatch(walletAction(false))} className="flex-center rounded-[40px] h-fit disabled:opacity-80 disabled:cursor-default transition-all bg-white text-foreground hover:brightness-95 text-b2 font-medium p-2 w-full justify-center" type="button">
                                        <span className="px-2">Cancel</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConnectWallet;