import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useSelector } from 'react-redux';

// components here
import ConnectWallet from '../components/ConnectWallet';
import WalletSuccessModal from '../components/WalletSuccessModal';
// components here End


function Base(props) {
    const isFooter = useSelector((state) => state.footerCondition.value);

    const isWallet = useSelector(state => state.walletToggle.value);

    const isWalletSuccessModal = useSelector(state => state.walletSuccess.value);
    return (
        <div id='Base'>
            <Header></Header>
            {props.children}
            {isFooter && (
                <Footer></Footer>
            )}

            {/* global components */}
            {isWallet && (
                <ConnectWallet></ConnectWallet>
            )}
            {/* wallet success modal */}
            {
                isWalletSuccessModal && (
                    <WalletSuccessModal></WalletSuccessModal>
                )
            }
            {/* global components End*/}
        </div>
    );
}

export default Base;