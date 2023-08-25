import React from 'react';

import BookmarkIcon from '../assets/images/icons/bookmark.svg';
import { RatingComponent } from './RatingComponent';
function ProductInfo({ productList }) {
    return (
        <div id='ProductInfo'>
            <div className="flex flex-col mt-4 gap-4">

                {productList.map(v => {
                    return (
                        <div key={v.id} className="flex gap-6 py-[16px] cursor-pointer flex-wrap sm:flex-nowrap relative">

                            <div className="w-20 h-20 shrink-0 border border-black/10 rounded-lg relative z-[1]">
                                <img className="s-full rounded-lg object-contain"
                                    src={v.img}
                                    alt={v.name} />
                            </div>

                            <div className="flex flex-col gap-1.5 z-[1] w-[calc(100%-104px)] sm:w-auto">
                                <div className="flex items-center gap-3">
                                    <h2 className="text-b1 font-bold truncate">
                                        {v.name}
                                    </h2>
                                </div>

                                <p className="text-b2 font-semibold truncate">{v.description}</p>

                                <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
                                    <div className="flex-center flex-wrap text-b2 gap-1.5">
                                        <span className="font-bold text-foreground mt-0.5">{v.rating}</span>
                                        {/* rating */}
                                        <RatingComponent rating={v.rating}></RatingComponent>

                                        {/* rating End */}
                                        <span className="font-medium text-foreground-muted">({v.review} review)</span>
                                    </div>
                                    <div className="flex-center text-b2">
                                        <span className="font-bold text-foreground">{v.upvotes}</span>
                                        &nbsp;
                                        <span className="font-medium text-foreground-muted">upvotes</span>
                                    </div>
                                    <div className="flex items-center w-fit transition leading-[20px] py-1 rounded-[24px] text-sm bg-white text-foreground pl-2 pr-2">
                                        <div className="flex-center">
                                            <div className="flex-center s-[18px] [&_svg]:grow !s-4 mr-1">
                                                <img src={BookmarkIcon} alt="img" />
                                            </div>
                                            {v.type}
                                        </div>

                                    </div>

                                </div>

                            </div>


                        </div>
                    )
                })}



            </div>
        </div>
    );
}

export default ProductInfo;