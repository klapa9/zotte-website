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
        /* Global cursor rules */
        a, button, [onclick], [role="button"] {
          cursor: pointer !important;
        }

        p:not(a):not(button):not([onclick]):not([role="button"]),
        h1:not(a):not(button):not([onclick]):not([role="button"]),
        h2:not(a):not(button):not([onclick]):not([role="button"]),
        h3:not(a):not(button):not([onclick]):not([role="button"]),
        h4:not(a):not(button):not([onclick]):not([role="button"]),
        h5:not(a):not(button):not([onclick]):not([role="button"]),
        h6:not(a):not(button):not([onclick]):not([role="button"]),
        span:not(a):not(button):not([onclick]):not([role="button"]):not(.cursor-pointer),
        div:not(a):not(button):not([onclick]):not([role="button"]):not(.cursor-pointer) {
          cursor: default !important;
        }

        .cursor-pointer {
          cursor: pointer !important;
        }

        .cursor-default {
          cursor: default !important;
        }
      `}</style>
    </>
  );
};

export default CursorStyles;