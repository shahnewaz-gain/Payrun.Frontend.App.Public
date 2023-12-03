'use client';

import posthog from 'posthog-js';

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'development') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST
  });
}
export default posthog;
