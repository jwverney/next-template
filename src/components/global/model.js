import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useSelector, useDispatch } from 'react-redux';
import { setIsModalOpen } from "@/store/slices/appSlice";


function Model({ children }) {
  const isModalOpen = useSelector(state => state.app.isModalOpen);
  const dispatch = useDispatch();

  const closeModal = () => dispatch(setIsModalOpen(false));

  return (
    
    <div className="bg-white w-full">
      {isModalOpen && (
        <Dialog open={isModalOpen} onClose={closeModal}>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
          <Dialog.Panel className="overflow-y-auto fixed top-1/2 w-fit left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-lg shadow-lg">
            {children}
          </Dialog.Panel>
        </Dialog>
      )}
    </div>
  );
}

export default Model;