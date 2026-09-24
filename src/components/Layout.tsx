import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppButton, MobileStickyBar } from './WhatsAppButton';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export function Layout() {
  useScrollReveal();
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pt-20 sm:pt-24 md:pt-40">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
      <div className="h-14 lg:hidden" />
    </div>
  );
}