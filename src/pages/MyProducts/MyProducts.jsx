import React from 'react';
import ApplyFormBg from '../../assets/images/images/apply-form.jpg';

function MyProducts(props) {
    return (
        <div id='MyProducts'>
            <div className="h-full bg-backdrop">
                <div className="h-full min-h-[calc(100vh-64px)] bg-[#fcfcfc] rounded-t-lg relative md:mx-2 px-3 pt-8">
                    <div className="max-w-6xl mx-auto">

                        <header className="flex mb-8 gap-4 flex-col sm:flex-row">
                            <div className="">
                                <h2 className="text-h2 mb-1">My Products</h2>
                                <p className="text-b2 max-w-[600px]">List of the cool web3 products you’re building. You can post multiple times with the same startup if you have a major update!</p>
                            </div>
                            <button className="flex-center rounded-[40px] hover:brightness-95 h-fit disabled:opacity-80 disabled:cursor-default transition-all bg-white text-foreground 
                            hover:brightness-95 border border-border-interactive font-semibold p-3 !shrink-0 !ml-auto !w-full sm:!w-auto shadow-none shadow" id="apply-button" type="button">
                                <span className="px-3">Add Product</span>
                            </button>
                        </header>

                        <section className="pb-8">
                            <div className="flex flex-col items-center">
                                <h3 className="text-h2 mb-1">You don't have a product yet...</h3>

                                <p className="text-b2 text-center">Create your first product application to launch on <br />Smoothie Awards!</p>


                                <button className="flex-center rounded-[40px] h-fit disabled:opacity-80 disabled:cursor-default transition-all bg-white text-foreground hover:brightness-95 font-semibold p-3 my-8 shadow-none shadow" id="apply-button" type="button">
                                    <span className="px-3">Add Product</span>
                                </button>




                                <div className="relative">
                                    <div className="absolute w-full h-[200px] bottom-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#FFFFFF_100%)]"> </div>
                                    <img src={ApplyFormBg} alt="apply form" />
                                </div>

                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProducts;