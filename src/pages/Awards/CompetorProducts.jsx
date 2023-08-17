import React from 'react';
import ProductImg1 from '../../assets/images/products/01ef6cd4-9272-410e-b959-34b2ee609622.png'
import ProductImg2 from '../../assets/images/products/8d28b4b2-5bba-49fe-9005-30a0fe1bdbc7.png'
import ProductImg3 from '../../assets/images/products/3aa53f98-135d-4d23-83b9-b70a31d0cf56.jpg'
import ProductImg4 from '../../assets/images/products/80d4bede-af30-4dfc-877f-e04f9062e98c.jpeg'
import ProductImg5 from '../../assets/images/products/f816f85a-496a-4a4e-88a1-7b0f70628155.png'
import ProductImg6 from '../../assets/images/products/b4576e28-1805-446f-b25b-c384ced1a6f5.png'

import BookmarkIcon from '../../assets/images/icons/bookmark.svg';
import ArrowDoubleUpIcon from '../../assets/images/icons/ArrowDoubleUp.svg';

function CompetorProducts(props) {

    const CompetorProductsList = [
        {
            id: 1,
            name: 'Zharta Finance',
            img: ProductImg1,
            description: 'Instant NFT Loans, Simplified.',
            type: 'DeFi',
        },
        {
            id: 2,
            name: 'Synergy',
            img: ProductImg2,
            description: 'Curate ecosystem, foster collaboration, thrive limitless',
            type: 'Other',
        },
        {
            id: 3,
            name: 'Mastodon',
            img: ProductImg3,
            description: 'the largest decentralized social network on the internet',
            type: 'Community',
        },
        {
            id: 4,
            name: 'Bello',
            img: ProductImg4,
            description: 'Community Intelligence Amplified',
            type: 'Tool',
        },
        {
            id: 5,
            name: 'Minds',
            img: ProductImg5,
            description: 'Decentralized social media app that shares reach and revenue',
            type: 'Community',
        },
        {
            id: 6,
            name: 'Savvy DeFi',
            img: ProductImg6,
            description: 'Non-liquidating, self-repaying loans with 0% interest',
            type: 'DeFi',
        },
    ]
    return (
        <section id='CompetorProducts'>
            <div className="mt-4">
                <h3 className="text-[14px] text-foreground font-semibold my-8">This week's competing products</h3>
                <ul className='pb-14'>

                    {

                        CompetorProductsList.map(v => {
                            return (
                                <li key={v.id} className='flex hover:bg-[#f6f8f9] py-[16px] gap-6 cursor-pointer flex-wrap mb-8 sm:flex-nowrap relative'>
                                    <div className="w-[5rem] h-[5rem] shrink-0 border border-black/10 rounded-lg relative z-[1]">
                                        <img className="s-full rounded-lg object-contain" src={v.img} alt="" />
                                    </div>
                                    <div className="flex flex-col gap-1.5 z-[1] w-[calc(100%-104px)] sm:w-auto">
                                        <div className="flex items-center gap-3"><h2 className="text-[#24292f] font-bold truncate">{v.name}</h2></div>
                                        <p className="text-[#57606a] text-sm font-semibold truncate">{v.description}</p>

                                        <div className="flex-center justify-start text-sm text-[#57606a]">
                                            <div className="flex-center  mr-1">
                                                {/* icon */}
                                                <img src={BookmarkIcon} alt="img" />
                                            </div>
                                            {v.type}
                                        </div>
                                    </div>
                                    <div className="ml-auto w-100">
                                        <button className="flex-center hover:brightness-95 border-border-interactive font-semibold border  rounded-[40px] h-fit disabled:opacity-80 disabled:cursor-default transition-all bg-white text-foreground p-3">
                                            <span className="w-[1.5rem] h-[1.5rem] flex-center">
                                                <img src={ArrowDoubleUpIcon} alt="img" />
                                            </span>
                                            <span class="px-3">Upvote</span>
                                        </button>
                                    </div>
                                </li>
                            )
                        })
                    }


                </ul>
            </div>
        </section>
    );
}

export default CompetorProducts;