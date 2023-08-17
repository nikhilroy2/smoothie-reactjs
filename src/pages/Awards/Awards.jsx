import React, { useEffect } from 'react';
import Nominators from './Nominators';
import CountdownTimer from '../../components/CountDownTimer';
import CompetorProducts from './CompetorProducts';
import { useDispatch, useSelector } from 'react-redux';
import { footerAction } from '../../redux/slice/FooterSlice';
function Awards(props) {

    const targetDate = new Date('2023-12-31T23:59:59');

    const dispatch = useDispatch();
    dispatch(footerAction(false))
    useEffect(() => {
    }, [])


    return (
        <div id='Awards'>
            <div className="h-full bg-backdrop">
                <div className="h-full min-h-[calc(100vh-64px)] bg-[#fcfcfc] rounded-t-lg relative md:mx-2 px-3 pt-8 flex relative justify-center gap-x-12">

                    {/* item */}

                    <div className="w-full max-w-3xl">

                        <div className="flex gap-6 flex-col min-[768px]:flex-row justify-between">
                            <div>
                                <h1 className="text-[21px] font-bold mb-1">Smoothie Awards</h1>
                                <p className="text-[14px]">Discover web3 products and see trusted reviews from actual users</p>
                            </div>
                            <CountdownTimer targetDate={targetDate}></CountdownTimer>
                        </div>
                        <CompetorProducts></CompetorProducts>
                    </div>
                    {/* item */}
                    <Nominators></Nominators>
                </div>
            </div>

        </div>
    );
}

export default Awards;