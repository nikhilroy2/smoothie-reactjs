import React from 'react';
import ProductInfo from '../../components/ProductInfo';
import BinanceImg from '../../assets/images/products/4d6bdafc-a3b2-4186-837a-7fc03ee59618.jpeg';

function ProfileUpvoted(props) {
    const upvoted_list = [
        {
            id: 1,
            name: "1.  Binance",
            description: "Buy, trade, and hold 350+ cryptocurrencies on Binance",
            img: BinanceImg,
            rating: 5,
            review: 1,
            upvotes: 0,
            type: "other",
            action: "/product/other/centralized-exchanges-cex/binance/qynpv7ew"
        },
    ]
    return (
        <div id='ProfileUpvoted'>
            <ProductInfo productList={upvoted_list}></ProductInfo>
        </div>
    );
}

export default ProfileUpvoted;