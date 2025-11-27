import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";

import Index from "./pages/Index";
import { NIP19Page } from "./pages/NIP19Page";
import NotFound from "./pages/NotFound";
import WeesZot from "./pages/WeesZot";
import Leven from "./pages/Leven";
import Energie from "./pages/Energie";
import ZiekZot from "./pages/ZiekZot";
import OpenJeGeest from "./pages/OpenJeGeest";

export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/weeszot" element={<WeesZot />} />
        <Route path="/leven" element={<Leven />} />
        <Route path="/energie" element={<Energie />} />
        <Route path="/ziekzot" element={<ZiekZot />} />
        <Route path="/openjegeest" element={<OpenJeGeest />} />
        {/* NIP-19 route for npub1, note1, naddr1, nevent1, nprofile1 */}
        <Route path="/:nip19" element={<NIP19Page />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;