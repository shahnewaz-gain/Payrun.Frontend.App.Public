import React from 'react';

const OwnerIcon = ({ width = '180', height = '130' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 180 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M66 118H24" stroke="#5C5D76" strokeWidth="3" strokeLinecap="round" />
    <path d="M43 109L18 109" stroke="#5C5D76" strokeWidth="2" strokeLinecap="round" />
    <path d="M57 109L49 109" stroke="#5C5D76" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M132.849 99.4225C132.407 100.424 132.275 101.536 132.47 102.614C132.666 103.691 133.179 104.686 133.945 105.469L134.145 105.668C134.762 106.285 135.252 107.018 135.587 107.825C135.921 108.631 136.093 109.496 136.093 110.369C136.093 111.242 135.921 112.107 135.587 112.914C135.252 113.72 134.762 114.453 134.145 115.07C133.528 115.688 132.795 116.178 131.988 116.512C131.181 116.847 130.317 117.019 129.444 117.019C128.571 117.019 127.706 116.847 126.899 116.512C126.093 116.178 125.36 115.688 124.743 115.07L124.543 114.871C123.76 114.105 122.766 113.591 121.688 113.396C120.611 113.2 119.499 113.332 118.497 113.774C117.514 114.195 116.676 114.895 116.086 115.786C115.496 116.677 115.179 117.722 115.175 118.791V119.356C115.175 121.118 114.475 122.808 113.229 124.054C111.983 125.3 110.293 126 108.53 126C106.768 126 105.078 125.3 103.832 124.054C102.586 122.808 101.886 121.118 101.886 119.356V119.057C101.86 117.957 101.504 116.891 100.865 115.996C100.225 115.101 99.3304 114.42 98.2981 114.04C97.2961 113.598 96.1846 113.466 95.1069 113.661C94.0292 113.857 93.0347 114.371 92.2517 115.136L92.0524 115.336C91.4353 115.954 90.7025 116.444 89.8959 116.778C89.0893 117.112 88.2247 117.284 87.3515 117.284C86.4783 117.284 85.6137 117.112 84.8071 116.778C84.0005 116.444 83.2677 115.954 82.6506 115.336C82.0328 114.719 81.5427 113.986 81.2084 113.179C80.874 112.373 80.7019 111.508 80.7019 110.635C80.7019 109.762 80.874 108.897 81.2084 108.09C81.5427 107.284 82.0328 106.551 82.6506 105.934L82.8499 105.735C83.6158 104.952 84.1296 103.957 84.325 102.88C84.5204 101.802 84.3885 100.69 83.9462 99.6882C83.5251 98.7056 82.8259 97.8676 81.9345 97.2774C81.0432 96.6871 79.9988 96.3703 78.9297 96.3661H78.365C76.6028 96.3661 74.9127 95.666 73.6667 94.42C72.4206 93.1739 71.7206 91.4839 71.7206 89.7217C71.7206 87.9595 72.4206 86.2694 73.6667 85.0234C74.9127 83.7773 76.6028 83.0773 78.365 83.0773H78.664C79.7636 83.0516 80.83 82.6956 81.7247 82.0557C82.6193 81.4159 83.3008 80.5216 83.6805 79.4893C84.1227 78.4873 84.2546 77.3758 84.0592 76.2981C83.8638 75.2204 83.35 74.2259 82.5842 73.4429L82.3848 73.2436C81.767 72.6265 81.277 71.8937 80.9426 71.0871C80.6082 70.2805 80.4361 69.4159 80.4361 68.5427C80.4361 67.6695 80.6082 66.8049 80.9426 65.9983C81.277 65.1917 81.767 64.4589 82.3848 63.8418C83.0019 63.224 83.7347 62.7339 84.5413 62.3996C85.3479 62.0652 86.2125 61.8931 87.0857 61.8931C87.9589 61.8931 88.8235 62.0652 89.6301 62.3996C90.4367 62.7339 91.1695 63.224 91.7866 63.8418L91.986 64.0411C92.7689 64.807 93.7634 65.3208 94.8411 65.5162C95.9188 65.7116 97.0303 65.5797 98.0323 65.1374H98.2981C99.2807 64.7163 100.119 64.0171 100.709 63.1257C101.299 62.2344 101.616 61.19 101.62 60.1209V59.5562C101.62 57.794 102.32 56.1039 103.566 54.8579C104.812 53.6118 106.503 52.9118 108.265 52.9118C110.027 52.9118 111.717 53.6118 112.963 54.8579C114.209 56.1039 114.909 57.794 114.909 59.5562V59.8552C114.913 60.9242 115.23 61.9687 115.82 62.86C116.411 63.7513 117.249 64.4505 118.231 64.8717C119.233 65.3139 120.345 65.4458 121.423 65.2504C122.5 65.055 123.495 64.5412 124.278 63.7753L124.477 63.576C125.094 62.9582 125.827 62.4682 126.634 62.1338C127.44 61.7994 128.305 61.6273 129.178 61.6273C130.051 61.6273 130.916 61.7994 131.722 62.1338C132.529 62.4682 133.262 62.9582 133.879 63.576C134.497 64.1931 134.987 64.9259 135.321 65.7325C135.655 66.5391 135.828 67.4037 135.828 68.2769C135.828 69.1501 135.655 70.0147 135.321 70.8213C134.987 71.6279 134.497 72.3607 133.879 72.9778L133.679 73.1772C132.914 73.9601 132.4 74.9546 132.204 76.0323C132.009 77.11 132.141 78.2215 132.583 79.2235V79.4893C133.004 80.4719 133.704 81.3099 134.595 81.9002C135.486 82.4905 136.531 82.8072 137.6 82.8115H138.164C139.927 82.8115 141.617 83.5115 142.863 84.7576C144.109 86.0037 144.809 87.6937 144.809 89.4559C144.809 91.2181 144.109 92.9081 142.863 94.1542C141.617 95.4002 139.927 96.1003 138.164 96.1003H137.865C136.796 96.1045 135.752 96.4213 134.861 97.0116C133.969 97.6019 133.27 98.4399 132.849 99.4225Z"
      fill="white"
      stroke="#5C5D76"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M108.265 100.204C114.201 100.204 119.013 95.392 119.013 89.4559C119.013 83.5198 114.201 78.7076 108.265 78.7076C102.329 78.7076 97.5165 83.5198 97.5165 89.4559C97.5165 95.392 102.329 100.204 108.265 100.204Z"
      fill="#FFAB00"
    />
    <rect
      width="14.0128"
      height="17.516"
      transform="matrix(4.37114e-08 1 1 -4.37114e-08 29.2673 65.9683)"
      fill="white"
    />
    <path
      d="M101.959 65.5303C101.959 75.446 93.9206 83.4843 84.005 83.4843C74.0893 83.4843 66.051 75.446 66.051 65.5303C66.051 55.6147 74.0893 47.5764 84.005 47.5764C93.9206 47.5764 101.959 55.6147 101.959 65.5303Z"
      fill="#FFAB00"
      stroke="#5C5D76"
      strokeWidth="1.38284"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.5636 65.914L29.9687 65.8295M29.9687 65.8295L29.8419 79.9372L46.3007 79.7893L46.4275 65.6817M29.9687 65.8295L46.4275 65.6817M65.7549 65.508C65.7171 67.9201 66.1567 70.3073 67.0484 72.5321C67.9402 74.7569 69.2664 76.7755 70.9509 78.4714C72.6353 80.1674 74.6446 81.5074 76.8631 82.4141C79.0817 83.3209 81.4656 83.7765 83.8775 83.7549C86.2895 83.7332 88.682 83.2346 90.9172 82.2879C93.1524 81.3411 95.1861 79.9648 96.9013 78.2383C98.6165 76.5118 99.9793 74.4691 100.911 72.2279C101.843 69.9867 102.326 67.5912 102.331 65.1794C102.291 60.3855 100.369 55.833 96.9789 52.5025C93.5889 49.1719 89.0023 47.3298 84.2069 47.3729C79.4115 47.416 74.7911 49.3408 71.3407 52.7328C67.8903 56.1248 65.886 60.7126 65.7596 65.508L65.7549 65.508ZM65.7549 65.508L46.4275 65.6817"
      stroke="#5C5D76"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M112.5 19L114.818 23.695L120 24.4525L116.25 28.105L117.135 33.265L112.5 30.8275L107.865 33.265L108.75 28.105L105 24.4525L110.182 23.695L112.5 19Z"
      stroke="#FFAB00"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M68.5 19L70.8175 23.695L76 24.4525L72.25 28.105L73.135 33.265L68.5 30.8275L63.865 33.265L64.75 28.105L61 24.4525L66.1825 23.695L68.5 19Z"
      stroke="#FFAB00"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M90.5 16L93.7445 22.573L101 23.6335L95.75 28.747L96.989 35.971L90.5 32.5585L84.011 35.971L85.25 28.747L80 23.6335L87.2555 22.573L90.5 16Z"
      fill="#FFAB00"
      stroke="#FFAB00"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default OwnerIcon;
