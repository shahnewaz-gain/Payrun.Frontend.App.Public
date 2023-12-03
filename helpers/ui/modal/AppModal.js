/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import { X } from 'react-feather';
import React, { useRef } from 'react';
import '@/styles/_mobile_modal.scss';
import useMediaQuery from '@/helpers/hooks/useMediaQuery';

const AppModal = ({
  children,
  size = 'xl',
  setIsModalOpen,
  modalHeader = true,
  modalFooter = true,
  isModalFooterBg = false,
  title = '',
  customBtn,
  onModalClose,
  drawerModal = false,
  options: {
    isOpenForMultiModal = false,
    yAxisPosition = 'center',
    modalMainClass = '',
    footerClass = ''
  } = {}
}) => {
  const modalRef = useRef(null);
  const modalCloseValue = isOpenForMultiModal ? {} : false;
  const isMobileScreen = useMediaQuery('(max-width:768px)');

  const handleModalClose = () => {
    if (onModalClose) {
      onModalClose();
    }
    setIsModalOpen(modalCloseValue);
  };
  const modalSizeClass = {
    xs: 'w-48',
    sm: 'w-72',
    md: 'w-96',
    lg: 'w-1/3',
    xl: 'w-1/2',
    '2xl': 'w-3/4',
    '3xl': 'w-4/5',
    full: 'w-full'
  };
  const handleCloseModalOnOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(modalCloseValue);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-20 z-[120] flex justify-center items-${yAxisPosition}`}
      onClick={handleCloseModalOnOutsideClick}
    >
      <div
        className={`${
          drawerModal ? 'fixed bottom-0 rounded-t-lg h-[90%] w-[95%] drawer-open-class' : 'rounded'
        } bg-white shadow-lg
       ${modalSizeClass[size] === 'w-full' ? 'mx-6' : modalSizeClass[size]} ${modalMainClass}
         `}
        ref={modalRef}
      >
        {modalHeader && (
          <div className="flex items-center justify-between pb-4 bg-light-white p-6 rounded-t-lg bg-white-light">
            <h5 className="font-medium text-dark text-[16px]">{title}</h5>
            <button
              type="button"
              onClick={handleModalClose}
              className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}
        <div className="px-6">{children}</div>
        {modalFooter && (
          <div
            className={`${isModalFooterBg && 'bg-white-light'} ${
              isMobileScreen ? 'py-[20px]' : 'pt-[20px] pb-[15px]'
            }  ${footerClass} rounded-b-lg`}
          >
            {customBtn}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppModal;
