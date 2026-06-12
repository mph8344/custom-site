import React, {
  useEffect,
  useRef,
  useState,
  type PropsWithChildren,
} from 'react';
import { createPortal } from 'react-dom';

type Props = PropsWithChildren<{
  placement?: 'left' | 'below' | 'right' | 'above';
  distance?: number;
}>;

type MenuPosition = {
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
};

const determinePos =
  (placement: 'left' | 'below' | 'right' | 'above', distance: number) =>
  (rect: DOMRect) => {
    console.log(window.innerWidth, rect.left, rect.right);

    // For 'left': we need to set the position to right: so that the content is
    // properly aligned
    // Same goes for left

    if (placement === 'below') {
      return {
        top: rect.bottom + distance,
        right: window.innerWidth - rect.right,
      };
    }

    if (placement === 'left') {
      return {
        right: window.innerWidth - rect.left + distance,
        top: rect.top,
      };
    }

    if (placement === 'right') {
      return {
        left: rect.right + distance,
        top: rect.top,
      };
    }

    if (placement === 'above') {
      return {
        bottom: window.innerHeight - rect.top + distance,
        right: window.innerWidth - rect.right,
      };
    }

    return null;
  };

export const PopupMenu: React.FC<Props> = ({
  placement = 'below',
  distance = 4,
  children,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPos, setMenuPos] = useState<MenuPosition | null>(null);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const ref = useRef<HTMLButtonElement>(null);

  const determinePosition = determinePos(placement, distance);

  useEffect(() => {
    if (!menuOpen) return;

    function handleOutside(e: MouseEvent) {
      const target = e.target as Node;

      if (
        wrapperRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return;
      }

      setMenuOpen(false);
    }

    document.addEventListener('mousedown', handleOutside);

    return () => document.removeEventListener('mousedown', handleOutside);
  });

  const handleMenuToggle = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!menuOpen && ref.current) {
      const rect = ref.current.getBoundingClientRect();

      // Opens below
      setMenuPos(determinePosition(rect));
    }

    setMenuOpen(!menuOpen);
  };

  return (
    <div ref={wrapperRef}>
      <button
        onClick={handleMenuToggle}
        ref={ref}
        data-variant='tertiary'
        data-compact
        data-accented
      >
        <span className='material-symbols-outlined filled'>{'settings'}</span>
      </button>
      {menuOpen && menuPos
        ? createPortal(
            <div className='popupMenu' ref={menuRef} style={{ ...menuPos }}>
              {children}
              {/* <span>Hello</span> */}
            </div>,
            document.body,
          )
        : null}
    </div>
  );
};
