import React from 'react';
import AvatarImg1 from '../../assets/images/avatar/7903eeb1-33e3-4985-a148-306943b4a2bf.png';


// icons
import MsgIcon from '../../assets/images/icons/msg.svg';
import TwitterIcon from '../../assets/images/icons/twitter_2.svg';
import LinkIcon from '../../assets/images/icons/link_icon.svg'
import PointsIcon from '../../assets/images/icons/points.svg'

function Profile(props) {
    return (
        <div id='Profile'>
            <div className="h-full bg-backdrop">
                <div className="h-full min-h-[calc(100vh-64px)] bg-[#fcfcfc] rounded-t-lg relative md:mx-2 px-3 pt-8 overflow-x-hidden">
                    <div className="max-w-[612px] mx-auto pb-4">

                        {/* item */}
                        <div className="mx-auto">
                            <div className="flex items-end justify-between">
                                <div className="relative inline-block min-w-fit rounded-full overflow-hidden w-[8rem] h-[8rem]">

                                    <img src={AvatarImg1} className='w-[inherit] h-[inherit] object-cover' alt="img" />
                                </div>

                                <button className="flex-center rounded-[40px] h-fit disabled:opacity-80 disabled:cursor-default transition-all bg-foreground text-white not-disabled:hover:brightness-95 text-b2 font-medium p-2" type="button">
                                    <span className="px-2">Follow</span>
                                </button>

                            </div>


                            <div className="flex flex-col gap-2 text-b2 my-5">
                                <h2 className="text-subtitle font-extrabold mb-1">vineet</h2>
                                <p className="font-medium text-foreground">Helping web3 founders launch innovative products</p>
                                <div className="flex items-start flex-wrap gap-x-4 gap-y-2">
                                    {/* Link */}
                                    <a href="#" className="flex-center gap-1 interactive-hover">

                                        <img src={LinkIcon} alt="img" />
                                        <span className="font-medium text-plum-120">smoothie.so</span>

                                    </a>

                                    {/*  */}

                                    <a href="#" className='flex-center gap-1 interactive-hover'>
                                        <span className="text-sky-300">
                                            <img src={TwitterIcon} alt="img" />
                                        </span>
                                        <span className="font-medium text-plum-120">vineetkarhail</span>
                                    </a>


                                    <a href="#" className='flex-center gap-1 interactive-hover'>
                                        <img src={PointsIcon} alt="img" />
                                        <span className="font-bold text-foreground">4080</span>
                                        <span className="font-medium">Points</span>
                                    </a>


                                </div>


                                <div className="flex gap-3">
                                    <button type="button" className="flex-center hover:underline hover:cursor-pointer">
                                        <span className="font-bold text-foreground">40</span>
                                        &nbsp;
                                        <span className="font-medium">Following</span>
                                    </button>

                                    <button type="button" className="flex-center hover:underline hover:cursor-pointer">
                                        <span className="font-bold text-foreground" >219</span>
                                        &nbsp;
                                        <span className="font-medium">Followers</span></button>

                                </div>
                            </div>
                        </div>

                        {/* item End*/}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;