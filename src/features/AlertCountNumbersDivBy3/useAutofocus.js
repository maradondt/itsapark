import { useRef, useEffect } from 'react';

const useAutofocus = () => {
  const autoFocusRef = useRef(null);

  useEffect(() => {
    if (autoFocusRef.current) {
      autoFocusRef.current.focus();
    }
  }, [autoFocusRef]);
  return autoFocusRef;
};

export default useAutofocus;
