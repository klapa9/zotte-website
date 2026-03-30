import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HEADER_OFFSET = 100; // pas aan aan je vaste header

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const id = decodeURIComponent(hash.slice(1));

    const scrollToAnchor = () => {
      const element = document.getElementById(id);
      if (!element) return;

      const y =
        element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

      window.scrollTo({
        top: y,
        left: 0,
        behavior: "auto",
      });
    };

    // wacht tot de pagina gerenderd is
    const timeout = setTimeout(scrollToAnchor, 100);

    return () => clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
}