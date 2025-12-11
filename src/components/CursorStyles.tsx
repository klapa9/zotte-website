// CursorStyles.jsx
import React from "react";

interface CursorStylesProps {
  children?: React.ReactNode;
  className?: string;
}

const CursorStyles = ({ children }: CursorStylesProps) => {
  return (
    <>
      {children}

      <style jsx global>{`
        /* Default cursor for entire document */
        body {
          cursor: default;
        }

        /* Always show hand cursor for clickable UI elements */
        a,
        button,
        [role="button"],
        .cursor-pointer,
        [data-clickable="true"] {
          cursor: pointer !important;
        }

        /* Optional: remove pointer cursor on disabled elements */
        button:disabled,
        .disabled,
        [aria-disabled="true"] {
          cursor: not-allowed !important;
        }
      `}</style>
    </>
  );
};

export default CursorStyles;
