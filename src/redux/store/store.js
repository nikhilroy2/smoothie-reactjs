import { configureStore } from '@reduxjs/toolkit';
import footerSlice from '../slice/FooterSlice';
import toggleSlice from '../slice/navToggleSlice';
export default configureStore({
    reducer: {
        footerCondition: footerSlice,
        navToggle: toggleSlice
    },
})