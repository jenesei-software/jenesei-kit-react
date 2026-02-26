import { useEffect } from 'react';

export const useRemovePreviewLoader = () => {
  useEffect(() => {
    const loader = document.querySelector('.preview-wrapper') as HTMLElement;

    const handleDomReady = () => {
      if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.remove();
        }, 500);
      }
    };

    if (document.readyState === 'complete') {
      handleDomReady();
    } else {
      window.addEventListener('load', handleDomReady);
    }

    return () => {
      window.removeEventListener('load', handleDomReady);
    };
  }, []);
};
