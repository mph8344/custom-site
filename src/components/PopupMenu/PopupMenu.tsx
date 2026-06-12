import React, {
  useEffect,
  useRef,
  useState,
  type PropsWithChildren,
} from 'react';
import { createPortal } from 'react-dom';

type Props = PropsWithChildren<{
  placement?: 'beside' | 'below';
  distance?: number;
}>;

type MenuPosition = {
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
};

/**
 * Function to create a popup-menu position calculator
 *
 * Popup menus should appear moving left-to-right, top-to-bottom, only
 * shifting if the content will go off screen
 * @param placement whether the menu should be placed below or beside the trigger
 * @param distance the distance from the menu to the trigger
 * @returns
 */
const positionCalculator =
  (placement: 'beside' | 'below', distance: number) => (rect: DOMRect) => {
    // For 'left': we need to set the position to right: so that the content is
    // properly aligned
    // Same goes for left

    const menuWidth = 150;
    const menuHeight = 200;

    const pos: MenuPosition = {
      bottom: undefined,
      top: undefined,
      left: undefined,
      right: undefined,
    };

    if (placement === 'beside') {
      const proposedLeft = rect.right + distance;

      if (proposedLeft + menuWidth > window.innerWidth) {
        pos.right = window.innerWidth - rect.left + distance;
      } else {
        pos.left = proposedLeft;
      }

      const proposedTop = rect.top;

      if (proposedTop + menuHeight > window.innerHeight) {
        pos.bottom = window.innerHeight - rect.bottom;
      } else {
        pos.top = proposedTop;
      }

      return pos;
    }

    if (placement === 'below') {
      const proposedTop = rect.bottom + distance;

      if (proposedTop + menuHeight > window.innerHeight) {
        pos.bottom = window.innerHeight - rect.top + distance;
      } else {
        pos.top = proposedTop;
      }

      const proposedLeft = rect.left;

      if (proposedLeft + menuWidth > window.innerWidth) {
        console.log('here', window.innerWidth, rect.right);
        pos.right = window.innerWidth - rect.right;
      } else {
        pos.left = proposedLeft;
      }

      return pos;
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

  const determinePosition = positionCalculator(placement, distance);

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
