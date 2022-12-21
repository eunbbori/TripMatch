import { createSlice } from "@reduxjs/toolkit";

interface ModalTextType {
  title: string;
  content: string;
  leftButton?: string;
  rightButton: string;
}

interface ModalType {
  show: boolean;
  modalText: null | ModalTextType; // [title, content, button text, cancleButton text]
}

const initialState: ModalType = { show: false, modalText: null };

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    showModal: (state, action) => ({ show: true, modalText: action.payload }),
    closeModal: (state) => ({ ...state, show: false }),
  },
});

export const { showModal, closeModal } = modalSlice.actions;
