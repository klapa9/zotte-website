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
      /* Default cursor for everything */
      body {
        cursor: default;
      }

      /* Pointer cursor voor klikbare elementen */
      a,
      button,
      [role="button"],
      .cursor-pointer {
        cursor: pointer !important;
      }
    `}</style>

    </>
  );
};

export default CursorStyles;