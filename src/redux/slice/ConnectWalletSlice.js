import { createSlice } from '@reduxjs/toolkit'

export const connectWalletSlice = createSlice({
    name: 'wallet',
    initialState: {
        value: false,
    },
    reducers: {
        walletAction: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { walletAction } = connectWalletSlice.actions

export default connectWalletSlice.reducer