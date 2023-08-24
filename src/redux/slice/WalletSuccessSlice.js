import { createSlice } from '@reduxjs/toolkit'

export const WalletSuccessSlice = createSlice({
    name: 'toggle',
    initialState: {
        value: false,
    },
    reducers: {
        isWalletSuccessModal: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { isWalletSuccessModal } = WalletSuccessSlice.actions

export default WalletSuccessSlice.reducer