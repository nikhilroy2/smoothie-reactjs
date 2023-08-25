import React, { useState } from 'react';
import Nominators from '../Awards/Nominators';
import ProductInfo from '../../components/ProductInfo';
import { CompletingProductList } from '../../data/CompletingProductList';
import { useParams } from 'react-router-dom';
function SubCategory(props) {
    const [isLargeText, setIsLargeText] = useState(false);
    const { category_name } = useParams();
    const selectedCategory = CompletingProductList[category_name] || [];
    console.log(selectedCategory)
    return (
        <div id='SubCategory'>
            <div className="h-full bg-backdrop">
                <div className="h-full min-h-[calc(100vh-64px)] bg-[#fcfcfc] rounded-t-lg relative md:mx-2 px-3 pt-8 flex relative justify-center gap-x-12">
                    {/* item */}

                    <div className="w-full max-w-3xl">
                        <header className="mt-5 mb-12">
                            <h5 className="text-h2">Centralized Exchanges (CEX)</h5>
                            <h2 className="text-b1 font-semibold text-foreground-onEmphasis mt-6 mb-3">What is "Centralized Exchanges (CEX)"?</h2>
                            <div className="text-b2 flex flex-col gap-6">
                                <p>Centralized Exchanges are platforms where users can trade cryptocurrencies through a centralized intermediary. These exchanges act as trusted third parties that facilitate transactions, provide order matching, and ensure liquidity. Centralized Exchanges often offer advanced trading features,{isLargeText ? ' such as margin trading and order types, and provide user-friendly interfaces for easy trading.' : '...'}
                                </p>
                            </div>

                            <button onClick={() => setIsLargeText(!isLargeText)} className="text-foreground-onEmphasis !border-none underline mt-3 hover:text-opacity-80 text-b2">
                                Show {isLargeText ? 'less' : 'more'}
                            </button>
                        </header>

                        {/* ProductInfo */}
                        <ProductInfo productList={selectedCategory}></ProductInfo>
                        {/* ProductInfo End */}
                    </div>
                    {/* item */}
                    <Nominators></Nominators>
                </div>
            </div>
        </div>
    );
}

export default SubCategory;