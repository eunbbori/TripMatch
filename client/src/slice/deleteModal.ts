import { createSlice } from "@reduxjs/toolkit";
const initialState = { show: false, element: null };

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    showModal: (state, action) => ({ show: true, element: action.payload }),
    closeModal: (state) => ({ ...state, show: false }),
  },
});

export const { showModal, closeModal } = modalSlice.actions;
