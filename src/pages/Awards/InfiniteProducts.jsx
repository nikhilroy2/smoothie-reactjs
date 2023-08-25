import React from 'react';
import ProductInfo from '../../components/ProductInfo';
import { CompletingProductList } from '../../data/CompletingProductList';
function InfiniteProducts(props) {
    return (
        <div id='InfiniteProducts'>
            <div className="infinite-scroll-component__outerdiv">
                <div className="infinite-scroll-component !overflow-visible !h-auto">
                    <div className="flex flex-col mt-4">
                        <div className="text-b2 text-foreground font-semibold my-8">
                            1 week ago
                        </div>
                    </div>

                    <ProductInfo productList={CompletingProductList["Centralized-Exchanges-(CEX)"]}></ProductInfo>
                </div>


                <div className="infinite-scroll-component !overflow-visible !h-auto">
                    <div className="flex flex-col mt-4">
                        <div className="text-b2 text-foreground font-semibold my-8">
                            2 weeks ago
                        </div>
                    </div>

                    <ProductInfo productList={CompletingProductList["Crypto-Tax-Softwares"]}></ProductInfo>
                </div>


            </div>
        </div>
    );
}

export default InfiniteProducts;