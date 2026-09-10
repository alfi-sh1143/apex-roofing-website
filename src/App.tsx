import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { fetchAllSubmissions } from './lib/firestoreService';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { Pricing } from './pages/Pricing';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { FreeTrialModal } from './components/modals/FreeTrialModal';
import { SubmissionsModal } from './components/modals/SubmissionsModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [trialInitialPlan, setTrialInitialPlan] = useState('Pro');
  const [trialInitialEmail, setTrialInitialEmail] = useState('');
  const [submissionsModalOpen, setSubmissionsModalOpen] = useState(false);
  const [submissionsCount, setSubmissionsCount] = useState(0);

  const refreshSubmissionsCount = async () => {
    try {
      const data = await fetchAllSubmissions();
      setSubmissionsCount(data.trials.length + data.inquiries.length);
    } catch (err) {
      console.warn('Could not load submissions count:', err);
    }
  };

  useEffect(() => {
    refreshSubmissionsCount();
  }, []);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenTrial = (planId?: string, email?: string) => {
    if (planId) setTrialInitialPlan(planId);
    if (email) setTrialInitialEmail(email);
    setTrialModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#0F172A] selection:bg-[#2563EB] selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenTrialModal={handleOpenTrial}
        onOpenSubmissionsModal={() => setSubmissionsModalOpen(true)}
        submissionsCount={submissionsCount}
      />

      {/* Main Page Routing */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <Home
            onNavigate={handleNavigate}
            onOpenTrial={handleOpenTrial}
          />
        )}

        {currentPage === 'features' && (
          <Features
            onNavigate={handleNavigate}
            onOpenTrial={handleOpenTrial}
          />
        )}

        {currentPage === 'pricing' && (
          <Pricing
            onNavigate={handleNavigate}
            onOpenTrial={handleOpenTrial}
          />
        )}

        {currentPage === 'about' && (
          <About
            onNavigate={handleNavigate}
            onOpenTrial={() => handleOpenTrial('Pro')}
          />
        )}

        {currentPage === 'contact' && (
          <Contact
            onNavigate={handleNavigate}
            onOpenTrial={() => handleOpenTrial('Enterprise')}
          />
        )}
      </main>

      {/* Global SaaS Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenTrial={() => handleOpenTrial('Pro')}
      />

      {/* 14-Day Free Trial Lead Capture Modal */}
      <FreeTrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        initialPlan={trialInitialPlan}
        initialEmail={trialInitialEmail}
        onSuccess={refreshSubmissionsCount}
      />

      {/* Submissions & Firestore Records Inspector Modal */}
      <SubmissionsModal
        isOpen={submissionsModalOpen}
        onClose={() => setSubmissionsModalOpen(false)}
        onSubmissionsUpdated={setSubmissionsCount}
      />
    </div>
  );
}
