import React, { useState } from 'react';
import { Page, ContactInquiryType } from '../types';
import { submitContactInquiry } from '../lib/firestoreService';
import { Button } from '../components/ui/Button';
import {
  Mail,
  Building,
  Clock,
  CheckCircle2,
  Send,
  MessageSquare,
  Shield,
  MapPin,
  Sparkles,
  Phone
} from 'lucide-react';

interface ContactProps {
  onNavigate: (page: Page) => void;
  onOpenTrial: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onNavigate, onOpenTrial }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [inquiryType, setInquiryType] = useState<ContactInquiryType>('sales');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    try {
      const result = await submitContactInquiry({
        fullName,
        email,
        company,
        inquiryType,
        subject,
        message
      });

      setIsLoading(false);
      setSubmittedRef(result.referenceNumber);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      setErrorMessage('Could not record your message. Please try again.');
    }
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setFullName('');
    setEmail('');
    setCompany('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="w-full bg-[#FAFAFA] text-[#0F172A]">
      {/* Header */}
      <section className="bg-white border-b border-[#E2E8F0] pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-semibold text-[#2563EB] mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Channels</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-tight mb-4">
            Let’s discuss your team’s workflow challenges.
          </h1>

          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            Whether you want a custom architecture walkthrough, an enterprise security audit, or licensing inquiries, our engineers are ready.
          </p>
        </div>
      </section>

      {/* Main Content: Form + Office Locations */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form / Success State */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-10 shadow-sm">
              {submittedRef ? (
                /* Success View */
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-[#475569] max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <strong>{fullName}</strong>. Your inquiry has been routed to our solutions team.
                  </p>

                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 max-w-sm mx-auto text-left text-xs mb-6 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Reference Number:</span>
                      <span className="font-mono font-bold text-[#2563EB]">{submittedRef}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Channel:</span>
                      <span className="font-semibold capitalize text-[#0F172A]">{inquiryType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">SLA Target:</span>
                      <span className="font-semibold text-[#059669]">Under 15 minutes</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg text-xs text-[#2563EB] max-w-sm mx-auto mb-6">
                    💡 <em>Saved to Database:</em> Check the top navigation "Submissions Log" to verify this record in Firestore/local storage.
                  </div>

                  <Button
                    variant="outline"
                    size="md"
                    onClick={handleReset}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                /* Contact Form */
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-1">
                    Send a Message
                  </h3>
                  <p className="text-xs text-[#64748B] mb-6">
                    Fill out the form below and an engineer will respond within our stated SLA.
                  </p>

                  {errorMessage && (
                    <div className="p-3 mb-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                      {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#334155] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={e => setFullName(e.target.value)}
                          placeholder="Devon Patel"
                          className="w-full px-3.5 py-2 text-xs bg-white border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#334155] mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          placeholder="devon@company.com"
                          className="w-full px-3.5 py-2 text-xs bg-white border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#334155] mb-1">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={company}
                          onChange={e => setCompany(e.target.value)}
                          placeholder="Stripe Systems"
                          className="w-full px-3.5 py-2 text-xs bg-white border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#334155] mb-1">
                          Inquiry Type *
                        </label>
                        <select
                          value={inquiryType}
                          onChange={e => setInquiryType(e.target.value as ContactInquiryType)}
                          className="w-full px-3 py-2 text-xs bg-white border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                        >
                          <option value="sales">Product Demo & Enterprise Sales</option>
                          <option value="demo">Interactive Sandbox Walkthrough</option>
                          <option value="support">Technical & Integration Support</option>
                          <option value="partnership">Partner Ecosystem & Resellers</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#334155] mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        placeholder="e.g. Scaling FlowDesk AI across a 40-person engineering squad"
                        className="w-full px-3.5 py-2 text-xs bg-white border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#334155] mb-1">
                        Message Details *
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Tell us about your current tool stack (GitHub, Slack, Jira, etc.) and what bottlenecks you want to resolve..."
                        className="w-full px-3.5 py-2 text-xs bg-white border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full sm:w-auto"
                        isLoading={isLoading}
                        rightIcon={<Send className="w-4 h-4" />}
                      >
                        Submit Inquiry
                      </Button>
                    </div>

                    <div className="flex items-center gap-2 pt-2 text-[11px] text-[#64748B]">
                      <Shield className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>Confidentiality guaranteed &middot; Never shared with third parties</span>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Office Cards & SLA Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            {/* SLA Response Guarantee Box */}
            <div className="bg-[#0F172A] text-white rounded-2xl p-6 sm:p-7 border border-[#1E293B]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#60A5FA] mb-3">
                <Clock className="w-4 h-4" />
                <span>Rapid Response SLAs</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Guaranteed response within 15 minutes.
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Enterprise and trial inquiries are routed straight to our Solutions Engineering team on duty, 24/7 across US and European hours.
              </p>
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <span>Enterprise SLA: &lt;15 mins</span>
                <span className="text-[#10B981] font-bold">99.98% On-Time</span>
              </div>
            </div>

            {/* Direct Email / Phone */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-xs">
              <h4 className="text-sm font-bold text-[#0F172A] mb-3">
                Direct Contact Lines
              </h4>
              <div className="space-y-2.5 text-xs text-[#475569]">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#2563EB]" />
                  <span>Enterprise Inquiries: <strong>sales@flowdesk-ai.fictional</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#2563EB]" />
                  <span>Developer Relations: <strong>api@flowdesk-ai.fictional</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#2563EB]" />
                  <span>Toll-Free (US): <strong>+1 (888) 555-FLOW</strong></span>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-xs">
              <h4 className="text-sm font-bold text-[#0F172A] mb-4">
                Global Engineering Hubs
              </h4>
              <div className="space-y-4 text-xs">
                <div className="border-b border-[#F1F5F9] pb-3">
                  <div className="font-bold text-[#0F172A] flex items-center gap-1.5 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>San Francisco (Global HQ)</span>
                  </div>
                  <p className="text-[#64748B]">548 Market Street, Suite 89201, San Francisco, CA 94104</p>
                </div>

                <div className="border-b border-[#F1F5F9] pb-3">
                  <div className="font-bold text-[#0F172A] flex items-center gap-1.5 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>New York (Enterprise Hub)</span>
                  </div>
                  <p className="text-[#64748B]">175 Varick St, New York, NY 10014</p>
                </div>

                <div>
                  <div className="font-bold text-[#0F172A] flex items-center gap-1.5 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>London (EMEA Operations)</span>
                  </div>
                  <p className="text-[#64748B]">100 Liverpool Street, Broadgate, London EC2M 2AT, UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
