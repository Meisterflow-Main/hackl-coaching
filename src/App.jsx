import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
// Add page imports here
import SiteLayout from '@/components/SiteLayout';
import Home from '@/pages/Home';
import Aengste from '@/pages/Aengste';
import Verhaltensmuster from '@/pages/Verhaltensmuster';
import Burnout from '@/pages/Burnout';
import Beziehungskonflikte from '@/pages/Beziehungskonflikte';
import UeberMich from '@/pages/UeberMich';
import Erfahrungsberichte from '@/pages/Erfahrungsberichte';
import Prinzip from '@/pages/Prinzip';
import Kontakt from '@/pages/Kontakt';
import AuftragBewerten from '@/pages/AuftragBewerten';
import Impressum from '@/pages/Impressum';
import Datenschutz from '@/pages/Datenschutz';
import Regionen from '@/pages/Regionen';
import RegionPage from '@/pages/RegionPage';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aengste" element={<Aengste />} />
        <Route path="/verhaltensmuster" element={<Verhaltensmuster />} />
        <Route path="/burnout" element={<Burnout />} />
        <Route path="/beziehungskonflikte" element={<Beziehungskonflikte />} />
        <Route path="/ueber-mich" element={<UeberMich />} />
        <Route path="/erfahrungsberichte" element={<Erfahrungsberichte />} />
        <Route path="/prinzip-der-aufloesung" element={<Prinzip />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/regionen" element={<Regionen />} />
        <Route path="/regionen/:slug" element={<RegionPage />} />
      </Route>
      {/* Standalone page (no shared layout) */}
      <Route path="/auftrag-bewerten" element={<AuftragBewerten />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App