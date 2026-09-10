import React, { useState, useEffect } from 'react';
import { Page, ServiceType, QuoteSubmission } from './types';
import { fetchAllQuoteSubmissions } from './lib/firestoreService';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ServiceDetails } from './pages/ServiceDetails';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { QuoteModal } from './components/modals/QuoteModal';
import { QuoteSubmissionsModal } from './components/modals/QuoteSubmissionsModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceType>('roof-replacement');
  
  // Modals state
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteModalService, setQuoteModalService] = useState<ServiceType>('roof-replacement');
  const [submissionsModalOpen, setSubmissionsModalOpen] = useState(false);

  // Submissions list
  const [submissions, setSubmissions] = useState<QuoteSubmission[]>([]);

  const loadSubmissions = async () => {
    try {
      const data = await fetchAllQuoteSubmissions();
      setSubmissions(data);
    } catch (err) {
      console.warn('Could not load submissions:', err);
    }
  };

  useEffect(() => {
    loadSubmissions();
  }, []);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (serviceId: ServiceType) => {
    setSelectedServiceId(serviceId);
    setCurrentPage('service-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (serviceId?: ServiceType) => {
    if (serviceId) {
      setQuoteModalService(serviceId);
    }
    setQuoteModalOpen(true);
  };

  const handleQuoteSubmitted = () => {
    loadSubmissions();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-[#1E293B]">
      {/* Sticky Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuote()}
        onOpenSubmissionsModal={() => setSubmissionsModalOpen(true)}
        submissionsCount={submissions.length}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <Home
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentPage === 'services' && (
          <Services
            onSelectService={handleSelectService}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentPage === 'service-details' && (
          <ServiceDetails
            selectedServiceId={selectedServiceId}
            onSelectService={setSelectedServiceId}
            onOpenQuote={handleOpenQuote}
            onViewSubmissions={() => setSubmissionsModalOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <About onOpenQuote={() => handleOpenQuote()} />
        )}

        {currentPage === 'contact' && (
          <Contact
            onViewSubmissions={() => setSubmissionsModalOpen(true)}
          />
        )}
      </main>

      {/* Global Agency Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectService={handleSelectService}
        onOpenQuote={() => handleOpenQuote()}
        onOpenSubmissionsModal={() => setSubmissionsModalOpen(true)}
      />

      {/* Reusable Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        selectedService={quoteModalService}
        onViewSubmissions={() => setSubmissionsModalOpen(true)}
      />

      {/* Submissions & Leads Inspector Modal */}
      <QuoteSubmissionsModal
        isOpen={submissionsModalOpen}
        onClose={() => setSubmissionsModalOpen(false)}
        submissions={submissions}
        onRefresh={loadSubmissions}
      />
    </div>
  );
}
