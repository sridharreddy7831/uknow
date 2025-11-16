import React, { useEffect, useRef, forwardRef } from 'react';

// --- Reusable Grid Item Component ---
const BioluminescentGridItem = forwardRef(({ className, children }, ref) => {
  const itemRef = useRef(null);

  // Effect to track mouse position and update CSS custom properties
  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    const handleMouseMove = (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      item.style.setProperty('--mouse-x', `${x}px`);
      item.style.setProperty('--mouse-y', `${y}px`);
    };

    item.addEventListener('mousemove', handleMouseMove);

    return () => {
      item.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={itemRef} className={`bio-item ${className || ''}`.trim()}>
      <div className="bio-item-content">
        {children}
      </div>
    </div>
  );
});
BioluminescentGridItem.displayName = "BioluminescentGridItem";

// --- Main Grid Container Component ---
export const BioluminescentGrid = forwardRef(({ className, children }, ref) => {
  return (
    <div ref={ref} className={`bio-grid ${className || ''}`.trim()}>
      {children}
    </div>
  );
});
BioluminescentGrid.displayName = "BioluminescentGrid";

// Exporting the item as a named export for clarity
export { BioluminescentGridItem };