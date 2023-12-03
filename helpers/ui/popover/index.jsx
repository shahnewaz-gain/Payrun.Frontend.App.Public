'use client';

import React, { useState } from 'react';
import { Popover } from 'antd';
import { Eye } from 'react-feather';
import { AppButton } from '@/helpers/ui';
import '@/styles/_popover.scss';

const PopOver = ({
  Icon = { Eye },
  btnTitle = 'Preview',
  btnType = 'btn_primary',
  Content = 'Content',
  options: { btnCustomClass = '' } = {}
}) => {
  const [isPopOverOpen, setIsPopOverOpen] = useState(false);

  const handleOpenChange = () => {
    setIsPopOverOpen(!isPopOverOpen);
  };

  return (
    <Popover content={Content} trigger="click" open={isPopOverOpen} onOpenChange={handleOpenChange}>
      <AppButton
        Icon={Icon}
        title={btnTitle}
        btnType={btnType}
        callBack={() => setIsPopOverOpen(!isPopOverOpen)}
        customClass={btnCustomClass}
      />
    </Popover>
  );
};

export default PopOver;
