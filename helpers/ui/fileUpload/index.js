import FileIcon from '@/helpers/ui/customSvg/FileIcon.js';

const FileUpload = ({
  height = 'h-60',
  label = 'Document',
  important = true,
  description = 'pdf, image or doc file',
  Content = '',
  bgColor = 'bg-white-light'
}) => (
  <div>
    <div>
      <h4 className="text-[14px] font-medium text-dark leading-[20px]">
        {label} {important && <span className="text-red">*</span>}
      </h4>
      <h6 className="text-gray-deep text-[12px] leading-[20px] pb-1">{description}</h6>
    </div>
    <div className="flex items-center justify-center w-full">
      <label
        for="dropzone-file"
        className={`flex flex-col items-center justify-center w-full border border-borderGray border-dashed rounded-[10px] cursor-pointer ${bgColor} ${height}`}
      >
        {Content ? (
          <Content />
        ) : (
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <div className="bg-brand-light w-[34px] h-[34px] rounded-full flex items-center justify-center">
              <FileIcon />
            </div>
            <p className="pt-1">
              <span className="text-regular font-normal text-[14px] leading-[21px] pt-2">
                Drag & drop files or
              </span>{' '}
              <span className="text-brand-secondary font-medium text-[14px]">Browes</span>
            </p>
            <p className="text-light font-normal text-[12px] leading-[18px]">
              Images, documents, videos & audios
            </p>
          </div>
        )}

        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  </div>
);

export default FileUpload;
