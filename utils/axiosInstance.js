'use client';

import axios from 'axios';
import { getApiBaseUrl } from '@/utils';

const axiosInstance = axios.create({
  baseURL: getApiBaseUrl()
});

export default axiosInstance;
