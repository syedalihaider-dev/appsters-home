"use client";

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function GoogleConversionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname && pathname.includes('thank-you')) {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-16476280714/MD9mCJjo2ZkcEIqvwLA9'
        });
      }
    }
  }, [pathname]);

  return null;
}
