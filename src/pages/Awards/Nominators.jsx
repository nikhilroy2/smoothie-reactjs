import React from 'react';
import { Link } from 'react-router-dom';
import { NominatorList } from '../../data/NominatorList';
import { walletAction } from '../../redux/slice/ConnectWalletSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ProfileCompleteRange from '../../components/ProfileCompleteRange';

// icons
import MsgIcon from '../../assets/images/icons/msg.svg';
import TwitterIcon from '../../assets/images/icons/twitter.svg';
import LinkIcon from '../../assets/images/icons/link_icon.svg'
import PointsIcon from '../../assets/images/icons/points.svg'

function Nominators(props) {
    const dispatch = useDispatch();
    const isWalletConnected = useSelector(state => state.metamaskWallet.value);

    return (
        <section id='Nominators'>

            <div className="hidden min-[1128px]:flex flex-col self-start w-[312px] sticky gap-4">
                {
                    isWalletConnected && (
                        <ProfileCompleteRange isColumn={true}></ProfileCompleteRange>
                    )
                }

                <div className="flex flex-col border rounded-lg p-6 gap-y-5">
                    <h2 className="text-subtitle font-bold">Don't see a web3 product?</h2>

                    <button onClick={() => dispatch(walletAction(true))} className="flex-center rounded-[40px] h-fit disabled:opacity-80 disabled:cursor-default transition-all bg-foreground text-white not-disabled:hover:brightness-95 font-semibold p-3 !w-full shadow"
                        id="apply-button" type="button">
                        <div className="px-3">Add Product</div>
                    </button>

                </div>



                <div className="border rounded-lg py-6">
                    <h2 className="text-[21px] font-bold mb-3 px-6">Featured nominators</h2>

                    <ul>

                        {
                            NominatorList.map(v => {
                                return (
                                    <li key={v.id} className='dropdown_hover relative'>

                                        <Link to={`/users/${v.name}`} className="flex items-center gap-2.5 px-6 py-2 interactive-hover">

                                            <div className="relative inline-block min-w-fit rounded-full overflow-hidden  shrink-0 w-[2.75rem] h-[2.75rem]">
                                                <img src={v.img} className='w-[inherit] h-[inherit] object-cover' alt={v.name} />
                                            </div>
                                            <span className="text-b1 grow truncate">{v.name}</span>
                                            <button className="flex-center rounded-[40px] h-fit disabled:opacity-80 disabled:cursor-default transition-all bg-foreground text-white not-disabled:hover:brightness-95 text-b2 font-medium p-2 !px-1 !py-[9px] text-b2 !font-medium" type="button">
                                                <span className="px-2">Follow</span>
                                            </button>

                                        </Link>


                                        <div className='dropdown_menu bg-white bottom-full hidden absolute z-10 '>
                                            <div className="tippy-box w-[340px] p-4 rounded-2xl bg-white shadow [&_.tippy-arrow]:text-white" >
                                                <div className="tippy-content" data-state="visible" >
                                                    <div>
                                                        <div>

                                                            {/* header part */}
                                                            <div className="flex items-center justify-between">

                                                                <Link to={`/users/${v.name}`}>
                                                                    <div className="relative inline-block min-w-fit rounded-full overflow-hidden w-[2.75rem] h-[2.75rem]">
                                                                        <img src={v.img}
                                                                            className="w-[inherit] h-[inherit] object-cover" /></div>

                                                                </Link>



                                                                <button className="flex-center rounded-[40px] h-fit disabled:opacity-80 disabled:cursor-default
                                               transition-all bg-foreground text-white not-disabled:hover:brightness-95 text-b2 font-medium p-2">
                                                                    <span className="px-2">Follow</span>
                                                                </button>


                                                            </div>

                                                            {/* header part end*/}



                                                            <div className="flex flex-col gap-2 text-b2 mt-3">


                                                                <h2 className="text-subtitle font-extrabold mb-1"> {v.name} </h2>


                                                                <p className="font-medium text-foreground"> {v.description} </p>


                                                                <div className="flex items-start flex-wrap gap-x-4 gap-y-2">

                                                                    <Link to={v.link}
                                                                        className="flex-center gap-1 interactive-hover" target="_blank">


                                                                        <span className="flex-center s-[18px] [&_svg]:grow !s-5">

                                                                            {/* link icon */}
                                                                            <img src={LinkIcon} alt="icon" />

                                                                        </span><span className="font-medium text-plum-120">{v.link_name}</span>

                                                                    </Link>

                                                                    <a href="https://twitter.com/withmattkim" className="flex-center gap-1 interactive-hover"
                                                                        target="_blank" >

                                                                        <div className="flex-center s-[18px] [&_svg]:grow !s-5 text-sky-300">
                                                                            <img src={TwitterIcon} alt="img" />
                                                                        </div>
                                                                        <span className="font-medium text-plum-120">{v.name}</span>
                                                                    </a>
                                                                    <div className="flex-center">

                                                                        <div className="flex-center s-[18px] [&_svg]:grow text-foreground !s-5 !text-plum-120">
                                                                            <img src={PointsIcon} alt="" />

                                                                        </div>
                                                                        <span className="font-bold text-foreground"> {v.points} </span>&nbsp;<span className="font-medium">Points</span>

                                                                    </div></div><div className="flex gap-3">

                                                                    <div className="flex-center"><span className="font-bold text-foreground"

                                                                    > {v.following}
                                                                    </span>&nbsp;<span className="font-medium">Following</span>
                                                                    </div><div className="flex-center">
                                                                        <span className="font-bold text-foreground" >
                                                                            {v.follower}
                                                                        </span>&nbsp;<span className="font-medium">Followers</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </li>
                                )
                            })
                        }


                    </ul>
                </div>



                <div className="grid grid-cols-2 border rounded-lg">
                    <a target="_blank" data-cy="newsletterSidebar-link" className="flex-center py-6 text-b1 interactive-hover rounded-l-lg" href="https://learn.smoothie.so/">

                        <span className="flex-center s-[18px] [&_svg]:grow mr-2.5 text-plum-120">

                            <img src={MsgIcon} alt="img" />

                        </span>

                        Newsletter

                    </a>


                    <a target="_blank" data-cy="twitterSidebar-link" className="flex-center py-6 text-b1 interactive-hover rounded-r-lg" href="https://twitter.com/withsmoothie">
                        <span className="flex-center s-[18px] [&_svg]:grow mr-2.5 text-sky-300">
                            <img src={TwitterIcon} alt="icon" />
                        </span>Twitter</a>


                </div>

            </div>

        </section>
    );
}

export default Nominators;