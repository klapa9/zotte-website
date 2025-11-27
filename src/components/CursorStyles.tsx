import React from 'react';

interface CursorStylesProps {
  children: React.ReactNode;
  className?: string;
}

export const CursorStyles = ({ children }: CursorStylesProps) => {
  return (
    <>
      {children}
      <style jsx global>{`
        /* Only links and buttons get pointer cursor */
        a, button, [onclick], [role="button"] {
          cursor: pointer !important;
        }
        
        /* Everything else gets default cursor */
        * {
          cursor: default !important;
        }
      `}</style>
    </>
  );
};

export default CursorStyles;