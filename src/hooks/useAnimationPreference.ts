import { useState } from 'react';

const STORAGE_KEY = 'soltheros:animations-enabled';

function getInitialValue(): boolean {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return false;
  }
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === null ? true : stored === 'true';
}

export function useAnimationPreference() {
  const [enabled, setEnabled] = useState<boolean>(getInitialValue);

  const toggle = () => {
    setEnabled((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  };

  return { enabled, toggle };
}
