import { configureStore } from '@reduxjs/toolkit';
import footerSlice from '../slice/FooterSlice';
import toggleSlice from '../slice/navToggleSlice';
import connectWalletSlice from '../slice/ConnectWalletSlice';
export default configureStore({
    reducer: {
        footerCondition: footerSlice,
        navToggle: toggleSlice,
        walletToggle: connectWalletSlice
    },
})