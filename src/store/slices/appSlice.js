import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = process.env.NEXT_PUBLIC_API_URL;


const appSlice = createSlice({
  name: 'app',
  initialState: {
    isModalOpen: false,
    modalContent: null,

  },
  reducers: {
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    setModalContent: (state, action) => {
      state.modalContent = action.payload;
    },
  },
})

export const { setIsModalOpen, setModalContent } = appSlice.actions;
export default appSlice.reducer;