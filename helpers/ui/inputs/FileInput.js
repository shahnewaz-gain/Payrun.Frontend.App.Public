'use client';

import { useApolloClient } from '@apollo/client';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { last, size } from 'lodash';
import { uid } from 'uid';
import { toastAlert } from '@/utils';
import GET_UPLOAD_POLICY from '../graphql/mutations/getUploadPolicy.gql';

const FileInput = ({
  id = 'file-input',
  name = '',
  customClass = '',
  isClearable = false,
  options: { accept = '.png, .gif, .jpeg, .jpg', context = '', directive = '', callBack } = {}
}) => {
  // redux state
  const { orgSubDomainInfo } = useSelector((state) => state.app);
  const defaultName = name || '';

  // client query
  const client = useApolloClient();

  // state
  const [selectedFileName, setSelectedFileName] = useState(defaultName);
  const [isUploadingFile, setIsUploadingFile] = useState(false);
  const inputRef = useRef(null);
  const toastId = useRef();

  useEffect(() => {
    if (isClearable) setSelectedFileName(defaultName);
  }, [isClearable]);

  const resetFileInput = () => {
    inputRef.current.value = null;
  };

  const getUploadPolicy = async (imageName, file) => {
    const queryData = {
      filename: imageName,
      directive,
      sub_folder_name: orgSubDomainInfo.id
    };
    setIsUploadingFile(true);

    try {
      const response = await client.query({
        query: GET_UPLOAD_POLICY,
        variables: {
          queryData
        }
      });
      const policyInfo = response?.data?.getUploadPolicy;

      if (size(policyInfo)) {
        const { __typename, ...rest } = policyInfo;
        if (callBack) callBack(imageName, rest, file, context);
      }
      setIsUploadingFile(false);
    } catch (error) {
      const { message, response } = error;
      toastAlert('error', response?.data?.message || message, 'top-right', toastId);
      setSelectedFileName(defaultName);
      resetFileInput();
      setIsUploadingFile(false);
    }
  };

  const handleSelectedFile = (file) => {
    const fileName = file?.name;

    if (fileName) {
      const splitFileName = fileName.split('.');
      const fileExt = last(splitFileName);
      const updatedFileName = `${uid()}.${fileExt}`;

      setSelectedFileName(fileName);
      getUploadPolicy(updatedFileName, file);
    }
  };

  return (
    <div
      className={`flex flex-row items-center ${customClass} ${
        isUploadingFile ? 'opacity-75 pointer-events-none cursor-not-allowed' : ''
      }`}
    >
      <input
        ref={inputRef}
        type="file"
        id={id}
        hidden
        accept={accept}
        onChange={(e) => handleSelectedFile(e.target.files[0])}
      />
      <label
        htmlFor={id}
        className={`w-full text-14 text-${
          selectedFileName ? 'dark' : 'gray-deep'
        } font-normal cursor-pointer py-2 px-4 border border-gray rounded-l-lg`}
      >
        {selectedFileName || 'choose an image'}
      </label>
      <label
        htmlFor={id}
        className="block text-14 py-[9px] px-4 rounded-r-lg border-0 font-normal bg-brand text-white hover:bg-brand-100 cursor-pointer"
      >
        Upload
      </label>
    </div>
  );
};

export default FileInput;
