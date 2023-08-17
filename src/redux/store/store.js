import { configureStore } from '@reduxjs/toolkit';
import footerSlice from '../slice/FooterSlice';
export default configureStore({
    reducer: {
        footerCondition: footerSlice,
    },
})