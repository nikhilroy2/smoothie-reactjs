import React from 'react';
import AvatarImg1 from '../../assets/images/avatar/7903eeb1-33e3-4985-a148-306943b4a2bf.png';
import AvatarImg2 from '../../assets/images/avatar/2ce5687d-5895-431a-98be-1bfca35bc058.jpeg';
import AvatarImg3 from '../../assets/images/avatar/692fa21c-3b8c-48a4-96b4-8240b1a648f5.jpeg';
import AvatarImg4 from '../../assets/images/avatar/9b2b0d4e-390b-41b7-abdf-6e4812196d0d.png';
import AvatarImg5 from '../../assets/images/avatar/d39e0e7b-c999-4c93-92d3-a3c97b163244.png';



// icons
import MsgIcon from '../../assets/images/icons/msg.svg';
import TwitterIcon from '../../assets/images/icons/twitter.svg'

function Nominators(props) {

    const nominator_list = [
        {
            id: 1,
            name: 'mattcha',
            img: AvatarImg1,
            following: 40,
            follower: 207,
            points: 2640,
            link: 'https://smoothie.so/',
            link_name: 'smoothie.so',
            twitter: 'withmattkim',
            description: `co-founder of smoothie. discovery protocol for web3 products.`
        },
        {
            id: 2,
            name: 'kaz.eth',
            img: AvatarImg2,
            following: 30,
            follower: 84,
            points: 1550,
            link: 'https://www.zypsy.com/',
            link_name: 'www.zypsy.com',
            twitter: 'kazsatamai',
            description: `founder at zypsy`
        },
        {
            id: 3,
            name: 'pjboyle.eth',
            img: AvatarImg3,
            following: 0,
            follower: 90,
            points: 190,
            link: 'https://decentreviews.co/',
            link_name: 'decentreviews.co',
            twitter: '@HeyPJB',
            description: `Founder of DecentReviews.co. Helping great Web3 projects build trust and credibility to improve lead gen and uptake.`
        },
        {
            id: 4,
            name: 'J_candyshop',
            img: AvatarImg4,
            following: 0,
            follower: 65,
            points: 100,
            link: '',
            link_name: '',
            twitter: '',
            description: ``
        },
        {
            id: 5,
            name: 'timconnors.eth',
            img: AvatarImg5,
            following: 2,
            follower: 83,
            points: 120,
            link: 'https://timconnors.co/',
            link_name: 'timconnors.co',
            twitter: '@itstimconnors',
            description: `CEO at 101.xyz`
        },
    ]
    return (
        <section id='Nominators'>

            <div className="h-full min-h-[calc(100vh-64px)] bg-[#fcfcfc] rounded-t-lg relative md:mx-2 px-3 pt-8 flex relative justify-center gap-x-12">

                {/* item */}

                <div className="w-full max-w-3xl">

                </div>
                {/* item */}
                <div className="hidden min-[1128px]:flex flex-col self-start w-[312px] sticky gap-4">


                    <div className="flex flex-col border rounded-lg p-6 gap-y-5">
                        <h2 className="text-subtitle font-bold">Don't see a web3 product?</h2>

                        <button className="flex-center rounded-[40px] h-fit disabled:opacity-80
                     disabled:cursor-default transition-all bg-foreground text-white 
                     not-disabled:hover:brightness-95 font-semibold p-3 !w-full shadow"
                            id="apply-button" type="button">
                            <div className="px-3">Add Product</div>
                        </button>

                    </div>



                    <div className="border rounded-lg py-6">
                        <h2 className="text-h2 font-bold mb-3 px-6">Featured nominators</h2>

                        <ul>

                            {
                                nominator_list.map(v => {
                                    return (
                                        <li key={v.id}>
                                            <div className="flex items-center gap-2.5 px-6 py-2 interactive-hover">

                                                <div className="relative inline-block min-w-fit rounded-full overflow-hidden  shrink-0 w-[2.75rem] h-[2.75rem]">
                                                    <img src={v.img} className='w-[inherit] h-[inherit] object-cover' alt={v.name} />
                                                </div>
                                                <span className="text-b1 grow truncate">{v.name}</span>
                                                <button className="flex-center rounded-[40px] h-fit disabled:opacity-80 disabled:cursor-default transition-all bg-foreground text-white not-disabled:hover:brightness-95 text-b2 font-medium p-2 !px-1 !py-[9px] text-b2 !font-medium" type="button">
                                                    <span className="px-2">Follow</span>
                                                </button>

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

                {/* item End */}

                {/* item */}


                {/* item  End*/}

            </div>

        </section>
    );
}

export default Nominators;