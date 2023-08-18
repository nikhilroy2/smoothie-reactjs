import { createSlice } from '@reduxjs/toolkit'

export const footerSlice = createSlice({
  name: 'isFooter',
  initialState: {
    value: false,
  },
  reducers: {
    footerAction: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { footerAction } = footerSlice.actions

export default footerSlice.reducer