import { createSlice } from '@reduxjs/toolkit'

export const metaMaskWalletSlice = createSlice({
    name: 'metamask',
    initialState: {
        value: '',
    },
    reducers: {
        // boolean
        isMetamaskConnected: (state, action) => {
            state.value = action.payload
        },
        // boolean
        isMetamaskLogOut: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { isMetamaskConnected, isMetamaskLogOut } = metaMaskWalletSlice.actions

export default metaMaskWalletSlice.reducer