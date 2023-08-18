import React, { useEffect, useState } from 'react';
import AvatarImg1 from '../../assets/images/avatar/7903eeb1-33e3-4985-a148-306943b4a2bf.png';
import { Link, useLocation, useParams } from 'react-router-dom';

// icons
import MsgIcon from '../../assets/images/icons/msg.svg';
import TwitterIcon from '../../assets/images/icons/twitter_2.svg';
import LinkIcon from '../../assets/images/icons/link_icon.svg'
import PointsIcon from '../../assets/images/icons/points.svg';


import '../../assets/styles/_AfterBeforeEffect.scss';

import { NominatorList } from '../../data/NominatorList';

function Profile(props) {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const tab = queryParams.get('tab') || 'reviews'; // reviews default

    const [pathItem, setPathItem] = useState('')


    const { username } = useParams();

    const NominatorListFilter = NominatorList.filter(v => v.name === username);
    useEffect(() => {
        setPathItem(tab)
    })


    return (
        <div id='Profile'>
            <div className="h-full bg-backdrop">
                <div className="h-full min-h-[calc(100vh-64px)] bg-[#fcfcfc] rounded-t-lg relative md:mx-2 px-3 pt-8 overflow-x-hidden">
                    <div className="max-w-[612px] mx-auto pb-4">

                        {/* item */}
                        <div className="mx-auto">
                            <div className="flex items-end justify-between">
                                <div className="relative inline-block min-w-fit rounded-full overflow-hidden w-[8rem] h-[8rem]">

                                    <img src={NominatorListFilter[0]?.img} className='w-[inherit] h-[inherit] object-cover' alt="img" />
                                </div>

                                <button className="flex-center rounded-[40px] h-fit disabled:opacity-80 disabled:cursor-default transition-all bg-foreground text-white not-disabled:hover:brightness-95 text-b2 font-medium p-2" type="button">
                                    <span className="px-2">Follow</span>
                                </button>

                            </div>


                            <div className="flex flex-col gap-2 text-b2 my-5">
                                <h2 className="text-subtitle font-extrabold mb-1">{NominatorListFilter[0]?.name}</h2>
                                <p className="font-medium text-foreground"> {NominatorListFilter[0]?.description} </p>
                                <div className="flex items-start flex-wrap gap-x-4 gap-y-2">
                                    {/* Link */}
                                    <a href={NominatorListFilter[0]?.link} className="flex-center gap-1 interactive-hover">

                                        <img src={LinkIcon} alt="img" />
                                        <span className="font-medium text-plum-120"> {NominatorListFilter[0]?.link_name} </span>

                                    </a>

                                    {/*  */}

                                    <a href={`https://twitter.com/${NominatorListFilter[0]?.twitter}`} className='flex-center gap-1 interactive-hover'>
                                        <span className="text-sky-300">
                                            <img src={TwitterIcon} alt="img" />
                                        </span>
                                        <span className="font-medium text-plum-120"> {NominatorListFilter[0]?.twitter} </span>
                                    </a>


                                    <div className='flex-center gap-1 interactive-hover'>
                                        <img src={PointsIcon} alt="img" />
                                        <span className="font-bold text-foreground"> {NominatorListFilter[0]?.points} </span>
                                        <span className="font-medium">Points</span>
                                    </div>


                                </div>


                                <div className="flex gap-3">
                                    <button type="button" className="flex-center hover:underline hover:cursor-pointer">
                                        <span className="font-bold text-foreground"> {NominatorListFilter[0]?.following} </span>
                                        &nbsp;
                                        <span className="font-medium">Following</span>
                                    </button>

                                    <button type="button" className="flex-center hover:underline hover:cursor-pointer">
                                        <span className="font-bold text-foreground" > {NominatorListFilter[0]?.follower} </span>
                                        &nbsp;
                                        <span className="font-medium">Followers</span></button>

                                </div>
                            </div>

                            <div className="flex-center gap-x-4 w-full p-6 mt-3 mb-5 border rounded-lg">
                                <div className="w-full space-y-6">
                                    <p className="text-b1 font-bold">
                                        Your profile is 20% complete</p>

                                    <div className="w-full bg-focus-gray-10 rounded-full">
                                        <div className="h-2 bg-success-foreground rounded-full"
                                            style={{ width: '20%' }} />
                                    </div>
                                </div>

                                <Link className="flex-center rounded-[40px] h-fit disabled:opacity-80 disabled:cursor-default transition-all bg-foreground text-white not-disabled:hover:brightness-95 font-semibold p-3 w-max"
                                    to="/onboarding">
                                    <span className="px-3">Continue</span>
                                </Link>


                            </div>
                        </div>

                        {/* item End*/}

                        <div className="flex flex-col gap-10 after_full_line_border">
                            <div className="flex w-full relative">

                                <Link className={`${pathItem === 'reviews' ? 'after_border_bottom' : ''} text-b2 text-foreground font-semibold flex-center grow py-1 min-h-[48px] border-b border-b-border-interactive focus:bg-focus-gray-10 focus:outline-0 interactive-hover`}
                                    to="/users/@vineet?tab=reviews">Reviews<span>&nbsp;(20)</span></Link>
                                <Link className={`${pathItem === 'upvoted' ? 'after_border_bottom' : ''} text-b2 text-foreground font-semibold flex-center grow py-1 min-h-[48px] border-b border-b-border-interactive focus:bg-focus-gray-10 focus:outline-0 interactive-hover`}
                                    to="/users/@vineet?tab=upvoted">Upvoted<span>&nbsp;(146)</span></Link>
                                <Link className={`${pathItem === 'nominated' ? 'after_border_bottom' : ''} text-b2 text-foreground font-semibold flex-center grow py-1 min-h-[48px] border-b border-b-border-interactive focus:bg-focus-gray-10 focus:outline-0 interactive-hover`}
                                    to="/users/@vineet?tab=nominated">Nominated<span>&nbsp;(26)</span></Link>
                                <Link className={`${pathItem === 'submitted' ? 'after_border_bottom' : ''} text-b2 text-foreground font-semibold flex-center grow py-1 min-h-[48px] border-b border-b-border-interactive focus:bg-focus-gray-10 focus:outline-0 interactive-hover`}
                                    to="/users/@vineet?tab=submitted">Submitted<span>&nbsp;(0)</span></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;