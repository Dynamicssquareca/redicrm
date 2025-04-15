// hooks/useSkeletonLoading.js
import { useState, useEffect } from 'react';

export default function useSkeletonLoading(delay = 1000) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoading;
}
