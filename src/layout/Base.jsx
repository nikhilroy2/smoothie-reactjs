import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useSelector } from 'react-redux';

// components here
import ConnectWallet from '../components/ConnectWallet';
// components here End


function Base(props) {
    const isFooter = useSelector((state) => state.footerCondition.value);

    const isWallet = useSelector(state => state.walletToggle.value)
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
            {/* global components End*/}
        </div>
    );
}

export default Base;