import React from 'react';
import StarActiveIcon from '../assets/images/icons/star_active.svg';
import BookmarkIcon from '../assets/images/icons/bookmark.svg';

function ProductInfo(props) {
    return (
        <div id='ProductInfo'>
            <div className="flex flex-col mt-4 gap-4">
                {/* Product Item */}
                <div className="flex gap-6 py-[16px] cursor-pointer flex-wrap sm:flex-nowrap relative">

                    <div className="w-20 h-20 shrink-0 border border-black/10 rounded-lg relative z-[1]">
                        <img className="s-full rounded-lg object-contain"
                            src="https://smoothie-awards.s3.us-west-1.amazonaws.com/projects/icons/4d6bdafc-a3b2-4186-837a-7fc03ee59618.jpeg"
                            alt="Binance" />
                    </div>

                    <div className="flex flex-col gap-1.5 z-[1] w-[calc(100%-104px)] sm:w-auto">
                        <div className="flex items-center gap-3">
                            <h2 className="text-b1 font-bold truncate">
                                1. &nbsp;Binance
                            </h2>
                        </div>

                        <p className="text-b2 font-semibold truncate">Buy, trade, and hold 350+ cryptocurrencies on Binance</p>

                        <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
                            <div className="flex-center flex-wrap text-b2 gap-1.5">
                                <span className="font-bold text-foreground mt-0.5">5</span>
                                {/* rating */}
                                <div className="flex gap-1">

                                    {
                                        Array.from({ length: 5 }).map((_, index) => (
                                            <div key={index} className="flex-center w-[18px] h-[18px] [&_svg]:grow [&_path]:fill-[#FFA800]">
                                                <img src={StarActiveIcon} alt="img" />
                                            </div>
                                        ))
                                    }
                                </div>

                                {/* rating End */}
                                <span className="font-medium text-foreground-muted">(1 review)</span>
                            </div>
                            <div className="flex-center text-b2">
                                <span className="font-bold text-foreground">0</span>
                                &nbsp;
                                <span className="font-medium text-foreground-muted">upvotes</span>
                            </div>
                            <div className="flex items-center w-fit transition leading-[20px] py-1 rounded-[24px] text-sm bg-white text-foreground pl-2 pr-2">
                                <div className="flex-center">
                                    <div className="flex-center s-[18px] [&_svg]:grow !s-4 mr-1">
                                        <img src={BookmarkIcon} alt="img" />
                                    </div>
                                    Other
                                </div>

                            </div>

                        </div>

                    </div>


                </div>
                {/* Product Item End */}

                <div className="flex gap-6 py-[16px] cursor-pointer flex-wrap sm:flex-nowrap relative">

                    <div className="w-20  h-20 shrink-0 border border-black/10 rounded-lg relative z-[1]">
                        <img className="s-full rounded-lg object-contain"
                            src="https://smoothie-awards.s3.us-west-1.amazonaws.com/projects/icons/4d6bdafc-a3b2-4186-837a-7fc03ee59618.jpeg"
                            alt="Binance" />
                    </div>

                    <div className="flex  flex-col gap-1.5 z-[1] w-[calc(100%-104px)] sm:w-auto">
                        <div className="flex items-center gap-3">
                            <h2 className="text-b1 font-bold truncate">
                                1. &nbsp;Binance
                            </h2>
                        </div>

                        <p className="text-b2 font-semibold truncate">Buy, trade, and hold 350+ cryptocurrencies on Binance</p>

                        <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
                            <div className="flex-center flex-wrap text-b2 gap-1.5">
                                <span className="font-bold text-foreground mt-0.5">5</span>
                                {/* rating */}
                                <div className="flex gap-1">

                                    {
                                        Array.from({ length: 5 }).map((_, index) => (
                                            <div key={index} className="flex-center w-[18px] h-[18px] [&_svg]:grow [&_path]:fill-[#FFA800]">
                                                <img src={StarActiveIcon} alt="img" />
                                            </div>
                                        ))
                                    }
                                </div>

                                {/* rating End */}
                                <span className="font-medium text-foreground-muted">(1 review)</span>
                            </div>
                            <div className="flex-center text-b2">
                                <span className="font-bold text-foreground">0</span>
                                &nbsp;
                                <span className="font-medium text-foreground-muted">upvotes</span>
                            </div>
                            <div className="flex items-center w-fit transition leading-[20px] py-1 rounded-[24px] text-sm bg-white text-foreground pl-2 pr-2">
                                <div className="flex-center">
                                    <div className="flex-center s-[18px] [&_svg]:grow !s-4 mr-1">
                                        <img src={BookmarkIcon} alt="img" />
                                    </div>
                                    Other
                                </div>

                            </div>

                        </div>

                    </div>


                </div>

                <div className="flex gap-6 py-[16px] cursor-pointer flex-wrap sm:flex-nowrap relative">

                    <div className="w-20  h-20 shrink-0 border border-black/10 rounded-lg relative z-[1]">
                        <img className="s-full rounded-lg object-contain"
                            src="https://smoothie-awards.s3.us-west-1.amazonaws.com/projects/icons/4d6bdafc-a3b2-4186-837a-7fc03ee59618.jpeg"
                            alt="Binance" />
                    </div>

                    <div className="flex  flex-col gap-1.5 z-[1] w-[calc(100%-104px)] sm:w-auto">
                        <div className="flex items-center gap-3">
                            <h2 className="text-b1 font-bold truncate">
                                1. &nbsp;Binance
                            </h2>
                        </div>

                        <p className="text-b2 font-semibold truncate">Buy, trade, and hold 350+ cryptocurrencies on Binance</p>

                        <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
                            <div className="flex-center flex-wrap text-b2 gap-1.5">
                                <span className="font-bold text-foreground mt-0.5">5</span>
                                {/* rating */}
                                <div className="flex gap-1">

                                    {
                                        Array.from({ length: 5 }).map((_, index) => (
                                            <div key={index} className="flex-center w-[18px] h-[18px] [&_svg]:grow [&_path]:fill-[#FFA800]">
                                                <img src={StarActiveIcon} alt="img" />
                                            </div>
                                        ))
                                    }
                                </div>

                                {/* rating End */}
                                <span className="font-medium text-foreground-muted">(1 review)</span>
                            </div>
                            <div className="flex-center text-b2">
                                <span className="font-bold text-foreground">0</span>
                                &nbsp;
                                <span className="font-medium text-foreground-muted">upvotes</span>
                            </div>
                            <div className="flex items-center w-fit transition leading-[20px] py-1 rounded-[24px] text-sm bg-white text-foreground pl-2 pr-2">
                                <div className="flex-center">
                                    <div className="flex-center s-[18px] [&_svg]:grow !s-4 mr-1">
                                        <img src={BookmarkIcon} alt="img" />
                                    </div>
                                    Other
                                </div>

                            </div>

                        </div>

                    </div>


                </div>
                <div className="flex gap-6 py-[16px] cursor-pointer flex-wrap sm:flex-nowrap relative">

                    <div className="w-20  h-20 shrink-0 border border-black/10 rounded-lg relative z-[1]">
                        <img className="s-full rounded-lg object-contain"
                            src="https://smoothie-awards.s3.us-west-1.amazonaws.com/projects/icons/4d6bdafc-a3b2-4186-837a-7fc03ee59618.jpeg"
                            alt="Binance" />
                    </div>

                    <div className="flex  flex-col gap-1.5 z-[1] w-[calc(100%-104px)] sm:w-auto">
                        <div className="flex items-center gap-3">
                            <h2 className="text-b1 font-bold truncate">
                                1. &nbsp;Binance
                            </h2>
                        </div>

                        <p className="text-b2 font-semibold truncate">Buy, trade, and hold 350+ cryptocurrencies on Binance</p>

                        <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
                            <div className="flex-center flex-wrap text-b2 gap-1.5">
                                <span className="font-bold text-foreground mt-0.5">5</span>
                                {/* rating */}
                                <div className="flex gap-1">

                                    {
                                        Array.from({ length: 5 }).map((_, index) => (
                                            <div key={index} className="flex-center w-[18px] h-[18px] [&_svg]:grow [&_path]:fill-[#FFA800]">
                                                <img src={StarActiveIcon} alt="img" />
                                            </div>
                                        ))
                                    }
                                </div>

                                {/* rating End */}
                                <span className="font-medium text-foreground-muted">(1 review)</span>
                            </div>
                            <div className="flex-center text-b2">
                                <span className="font-bold text-foreground">0</span>
                                &nbsp;
                                <span className="font-medium text-foreground-muted">upvotes</span>
                            </div>
                            <div className="flex items-center w-fit transition leading-[20px] py-1 rounded-[24px] text-sm bg-white text-foreground pl-2 pr-2">
                                <div className="flex-center">
                                    <div className="flex-center s-[18px] [&_svg]:grow !s-4 mr-1">
                                        <img src={BookmarkIcon} alt="img" />
                                    </div>
                                    Other
                                </div>

                            </div>

                        </div>

                    </div>


                </div>

            </div>
        </div>
    );
}

export default ProductInfo;