'use client';

import { Check, ChevronDown } from 'react-feather';
import Loader from '@/helpers/ui/customSvg/Loader.js';

// allowed button types
/*
 1. btn_primary
 2. btn_danger
 3. btn_bordered
 4. btn_bordered_danger
 5. btn_success
*/

const AppButton = ({
  Icon = Check,
  btnType = 'btn_primary',
  title = 'Save',
  disabled = false,
  loader = '',
  loaderText = 'Loading...',
  callBack = () => {},
  customClass = ''
}) => {
  const btnContent = () => (
    <>
      <span className="text-sm font-medium">
        {loader ? (
          <div className="pt-[3px]">
            <Loader />
          </div>
        ) : (
          <Icon className="w-[20px] h-[20px]" />
        )}
      </span>
      <span className="pl-1 pt-[2.75px] text-sm font-medium">{loader ? loaderText : title}</span>
    </>
  );

  const btnTypes = {
    btn_primary: (
      <button
        type="button"
        className={`flex ${
          customClass || ''
        } px-[25px] justify-center items-center mb-2 text-sm font-medium rounded-[8px] h-[41px] focus:outline-none text-white disabled:bg-brand disabled:opacity-50 bg-brand hover:bg-brand-secondary`}
        onClick={callBack}
        disabled={disabled}
      >
        {btnContent()}
      </button>
    ),
    btn_danger: (
      <button
        type="button"
        className={`flex ${
          customClass || ''
        }  px-[25px] items-center mb-2 text-sm font-medium rounded-[8px] h-[41px] focus:outline-none text-white bg-red disabled:opacity-50`}
        onClick={callBack}
        disabled={disabled}
      >
        {btnContent()}
      </button>
    ),
    btn_bordered: (
      <button
        type="button"
        className={`${
          customClass || ''
        } flex w-[100%] md:w-max px-7 justify-center items-center mb-2 text-sm font-medium h-[41px] text-center text-border disabled:opacity-50 focus:outline-none bg-none rounded-[8px] border border-light`}
        onClick={callBack}
        disabled={disabled}
      >
        {btnContent()}
      </button>
    ),
    btn_bordered_danger: (
      <button
        type="button"
        className={`flex ${
          customClass || ''
        }  px-[25px] items-center mb-2 text-sm font-medium h-[41px] text-center text-red disabled:opacity-50 focus:outline-none bg-none rounded-[8px] border border-red`}
        onClick={callBack}
        disabled={disabled}
      >
        {btnContent()}
      </button>
    ),
    btn_success: (
      <button
        type="button"
        className={`flex ${
          customClass || ''
        }  px-[25px] items-center mb-2 text-sm font-medium rounded-[8px] h-[41px] focus:outline-none text-white bg-green disabled:opacity-50`}
        onClick={callBack}
        disabled={disabled}
      >
        {btnContent()}
      </button>
    ),
    btn_warning: (
      <button
        type="button"
        className={`flex ${
          customClass || ''
        }  px-[25px] items-center mb-2 text-sm font-medium rounded-[8px] h-[41px] focus:outline-none text-white bg-yellow disabled:opacity-50`}
        onClick={callBack}
        disabled={disabled}
      >
        {btnContent()}
      </button>
    ),
    btn_preview: (
      <button
        type="button"
        className={`flex ${
          customClass || ''
        } w-[100%] md:w-max px-7 justify-center items-center mb-2 text-sm font-medium rounded-[8px] h-[41px] focus:outline-none text-white disabled:bg-brand disabled:opacity-50 bg-brand hover:bg-brand-secondary`}
        onClick={callBack}
        disabled={disabled}
      >
        {btnContent()} <div className="border border-l border-gray h-2/3 flex items-center mx-3" />{' '}
        <ChevronDown className="w-5 h-5" />
      </button>
    )
  };

  return <div className="flex">{btnTypes[btnType]}</div>;
};

export default AppButton;
