import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import AdminLogin from "@/pages/AdminLogin";
import Index from "./pages/Index";
import { NIP19Page } from "./pages/NIP19Page";
import NotFound from "./pages/NotFound";
import WeesZot from "./pages/WeesZot";
import Leven from "./pages/Leven";
import Liefde from "./pages/Liefde";
import ZiekZot from "./pages/ZiekZot";
import OpenJeGeest from "./pages/OpenJeGeest";
import Geld from "./pages/Geld";
import OldIndex from "./pages/Index.old";
import CommentsOverviewPage from "./pages/CommentsOverviewPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/old" element={<OldIndex />} />
        <Route path="/geld" element={<Geld />} />
        <Route path="/weeszot" element={<WeesZot />} />
        <Route path="/leven" element={<Leven />} />
        <Route path="/liefde" element={<Liefde />} />
        <Route path="/ziekzot" element={<ZiekZot />} />
        <Route path="/openjegeest" element={<OpenJeGeest />} />
        <Route path="/reacties" element={<CommentsOverviewPage />} />
        {/* NIP-19 route for npub1, note1, naddr1, nevent1, nprofile1 */}
        <Route path="/:nip19" element={<NIP19Page />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;