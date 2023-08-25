import React from 'react';
import CheckIcon from '../../assets/images/icons/check_icon.svg';
import ResourceNIcon from '../../assets/images/icons/resource_n.svg';
import ResourceLinkIcon from '../../assets/images/icons/resource_link.svg';


import { useSelector, useDispatch } from 'react-redux';

import { walletAction } from '../../redux/slice/ConnectWalletSlice';
import ApplyForm from './ApplyForm';
function Apply(props) {
    const dispatch = useDispatch();
    const isWalletConnected = useSelector(state => state.metamaskWallet.value);


    const videoInfo = [
        {
            id: 1,
            text: `Increase your product's user base.`,
        },
        {
            id: 2,
            text: `Get early feedback from the community.`,
        },
        {
            id: 1,
            text: `Build credibility by winning the contest.`,
        },
    ]
    return (
        <div id='Apply'>
            <div className="h-full bg-backdrop">
                <div className="h-full min-h-[calc(100vh-64px)] bg-[#fcfcfc] rounded-t-lg relative md:mx-2 px-3 pt-8">
                    <div className="flex flex-col w-full sm:w-min mx-auto">
                        <div className="grid relative items-start grid-cols-1 sm:grid-cols-[560px] md:grid-cols-[592px,340px] gap-x-10 pt-12">

                            <div className="sm:px-5 pb-6">
                                <header className="mb-10">
                                    <h1 className="font-bold text-foreground text-[2rem] mb-2 leading-10">Smoothie Product Application</h1>

                                    <h2 className="font-medium text-black/80">A discover-to-earn awards platform for web3 products. Users upvote for their favorite web3 products!</h2>
                                </header>




                                {
                                    isWalletConnected ? (
                                        <>
                                            <ApplyForm></ApplyForm>
                                        </>
                                    )
                                        : (
                                            <div className="border rounded-lg py-8 px-12">
                                                <p className="text-subtitle mb-4 text-center">Connect your wallet to get started</p>
                                                <button onClick={() => dispatch(walletAction(true))} className="flex-center rounded-[40px] h-fit disabled:opacity-80 disabled:cursor-default transition-all bg-foreground text-white not-disabled:hover:brightness-95 font-semibold p-3 w-full"
                                                    id="connect-wallet-button" type="button">
                                                    <span className="px-3">Connect Wallet</span>
                                                </button>
                                            </div>
                                        )
                                }

                            </div>



                            {/*  */}

                            <div className="px-5 hidden md:block sticky top-3">
                                <h3 className="mb-4 font-bold">Smoothie in 150 seconds...</h3>
                                <div className="mb-8 w-full outline outline-2 outline-white drop-shadow-md rounded-xl">
                                    <iframe className="w-full h-[190px] rounded-xl" src="https://www.loom.com/embed/cac58f06c49045a783c3ea626dc3be26?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
                                        frameBorder={0} allowFullScreen />
                                </div>

                                <ul className="mb-10 space-y-2 text-sm">
                                    {videoInfo.map(v => {
                                        return (
                                            <li key={v.id} className='flex items-center'>
                                                <span className='flex-center w-[18px] h-[18px] mr-2'>
                                                    <img src={CheckIcon} alt="icon" />
                                                </span>
                                                {v.text}
                                            </li>
                                        )
                                    })}

                                </ul>

                                <nav className="flex flex-col">
                                    <h3 className="mb-4 font-bold">Useful resources</h3>

                                    <a target="_blank" rel="noreferrer" className="flex items-center space-x-3 p-3 text-b2 font-medium first:border-t border-t  border-l border-r last:border-b first:rounded-t-lg last:rounded-b-lg interactive-hover"
                                        href="https://withsmoothie.notion.site/Smoothie-Awards-cf5ad4b7d1fa41148ab61bf2f5841d5d">
                                        <span className="flex-center w-[18px] h-18px">
                                            <img src={ResourceNIcon} alt="img" />
                                        </span>
                                        <span className="grow underline">Smoothie 1-Pager</span>
                                        <span className="flex-center w-[18px] h-18px">
                                            <img src={ResourceLinkIcon} alt="icon" />
                                        </span>
                                    </a>

                                    <a target="_blank" rel="noreferrer" className="flex items-center space-x-3 p-3 text-b2 font-medium border-t first:border-t border-l border-r last:border-b first:rounded-t-lg last:rounded-b-lg interactive-hover"
                                        href="https://withsmoothie.notion.site/Smoothie-Launch-Tips-810264d52f5e4eb1b7564214e25ed3c1">
                                        <span className="flex-center w-[18px] h-18px">
                                            <img src={ResourceNIcon} alt="img" />
                                        </span>
                                        <span className="grow underline">Smoothie Launch Tips</span>
                                        <span className="flex-center w-[18px] h-18px">
                                            <img src={ResourceLinkIcon} alt="icon" />
                                        </span>
                                    </a>

                                    <a target="_blank" rel="noreferrer" className="flex items-center space-x-3 p-3 text-b2 font-medium border-t first:border-t border-l border-r last:border-b first:rounded-t-lg last:rounded-b-lg interactive-hover"
                                        href="https://withsmoothie.notion.site/Smoothie-FAQ-c3aa6b2f8cb9417e94a447b10cc2bafb">
                                        <span className="flex-center w-[18px] h-18px">
                                            <img src={ResourceNIcon} alt="img" />
                                        </span>
                                        <span className="grow underline">FAQ</span>
                                        <span className="flex-center w-[18px] h-18px">
                                            <img src={ResourceLinkIcon} alt="icon" />
                                        </span>
                                    </a>
                                </nav>

                            </div>



                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Apply;