import React, { useState } from 'react';
import { 
  Home, 
  Building2, 
  Factory, 
  Wrench, 
  FileCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Phone, 
  Mail, 
  User, 
  MapPin, 
  Send, 
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PropertyType, ServiceType, QuoteFormData, QuoteSubmission } from '../../types';
import { submitQuoteRequest } from '../../lib/firestoreService';
import { Button } from '../ui/Button';
import { FormInput } from '../ui/FormInput';
import { COMPANY_INFO } from '../../data/roofingData';

interface QuoteFormProps {
  initialService?: ServiceType;
  onSuccess?: (submission: QuoteSubmission) => void;
  onViewSubmissions?: () => void;
  isModal?: boolean;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialService = 'roof-replacement',
  onSuccess,
  onViewSubmissions,
  isModal = false
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    propertyType: 'residential',
    serviceRequired: initialService,
    estimatedSqFt: '2,000 – 3,500 sq ft',
    roofAge: '15 – 20 years',
    urgency: 'immediate',
    address: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submittedResult, setSubmittedResult] = useState<QuoteSubmission | null>(null);

  // Property types options
  const propertyTypes: { type: PropertyType; label: string; icon: React.ReactNode; desc: string }[] = [
    { 
      type: 'residential', 
      label: 'Residential Home', 
      icon: <Home className="w-4 h-4" />,
      desc: 'Single-family or townhouse'
    },
    { 
      type: 'commercial', 
      label: 'Commercial Flat', 
      icon: <Building2 className="w-4 h-4" />,
      desc: 'Retail, office, warehouse'
    },
    { 
      type: 'multi-family', 
      label: 'Multi-Family / HOA', 
      icon: <Building2 className="w-4 h-4" />,
      desc: 'Condos or apartments'
    },
    { 
      type: 'industrial', 
      label: 'Industrial / Plant', 
      icon: <Factory className="w-4 h-4" />,
      desc: 'Manufacturing facility'
    }
  ];

  // Service required options
  const serviceOptions: { type: ServiceType; label: string; icon: React.ReactNode }[] = [
    { type: 'roof-replacement', label: 'Roof Replacement', icon: <Home className="w-4 h-4" /> },
    { type: 'roof-repair', label: 'Roof & Leak Repair', icon: <Wrench className="w-4 h-4" /> },
    { type: 'commercial-roofing', label: 'Commercial Systems', icon: <Building2 className="w-4 h-4" /> },
    { type: 'roof-inspection', label: 'Drone Inspection (Free)', icon: <FileCheck className="w-4 h-4" /> },
    { type: 'emergency-repair', label: 'Emergency Storm Repair', icon: <AlertTriangle className="w-4 h-4 text-amber-500" /> }
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please provide your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!phoneDigits || phoneDigits.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit phone number.';
    }

    if (!formData.propertyType) {
      newErrors.propertyType = 'Please choose your property type.';
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = 'Please choose the required service.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    try {
      const submission = await submitQuoteRequest(formData);
      setSubmittedResult(submission);
      if (onSuccess) onSuccess(submission);
    } catch (err) {
      console.error('Submission failed:', err);
      setErrors({
        fullName: 'An unexpected error occurred while saving your quote request. Please try again or call our hotline.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSubmittedResult(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      propertyType: 'residential',
      serviceRequired: initialService,
      estimatedSqFt: '2,000 – 3,500 sq ft',
      roofAge: '15 – 20 years',
      urgency: 'immediate',
      address: '',
      message: ''
    });
    setErrors({});
  };

  if (submittedResult) {
    return (
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-xl text-center max-w-xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-sm animate-in zoom-in-75 duration-300">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-2">
          <span>Quote Request Received</span>
        </div>

        <h3 className="text-2xl font-extrabold text-[#0B192C]">
          Thank You, {submittedResult.fullName.split(' ')[0]}!
        </h3>

        <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
          Your request has been successfully assigned to our estimating team. An Apex senior roofing specialist will review your details and reach out within 2 hours.
        </p>

        {/* Tracking confirmation card */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-200">
            <span>Tracking Reference Code:</span>
            <span className="font-mono font-bold text-[#E8681A] text-sm bg-white px-2 py-0.5 rounded border border-slate-200">
              {submittedResult.referenceNumber}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs pt-1">
            <div>
              <span className="text-slate-400">Service:</span>
              <p className="font-semibold text-[#0B192C] capitalize">
                {submittedResult.serviceRequired.replace('-', ' ')}
              </p>
            </div>
            <div>
              <span className="text-slate-400">Property:</span>
              <p className="font-semibold text-[#0B192C] capitalize">
                {submittedResult.propertyType}
              </p>
            </div>
          </div>
        </div>

        {/* Action triggers */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="primary"
            size="md"
            onClick={handleReset}
            className="w-full sm:w-auto"
          >
            Submit Another Request
          </Button>

          {onViewSubmissions && (
            <Button
              variant="outline"
              size="md"
              onClick={onViewSubmissions}
              className="w-full sm:w-auto"
            >
              View In Leads Manager
            </Button>
          )}
        </div>

        <div className="mt-6 text-xs text-slate-400">
          Need immediate storm assistance? Call our 24/7 hotline at{' '}
          <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-[#E8681A] font-bold underline">
            {COMPANY_INFO.phone}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow ${
        isModal ? '' : 'max-w-3xl mx-auto'
      }`}
    >
      {/* Form Header */}
      <div className="mb-6 pb-5 border-b border-slate-100">
        <div className="flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E8681A]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast Quote Calculator & Dispatch</span>
          </div>
          <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            No Obligation
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C] mt-1">
          Request Your Free Roofing Estimate
        </h3>
        <p className="text-xs sm:text-sm text-[#64748B] mt-1">
          Complete the details below to receive a certified drone inspection and itemized transparent quote.
        </p>
      </div>

      <div className="space-y-6">
        {/* 1. Property Type Selection */}
        <div>
          <label className="block text-xs font-bold text-[#0B192C] uppercase tracking-wider mb-2">
            1. Select Property Type <span className="text-[#E8681A]">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {propertyTypes.map(item => {
              const isSelected = formData.propertyType === item.type;
              return (
                <button
                  type="button"
                  key={item.type}
                  onClick={() => setFormData(prev => ({ ...prev, propertyType: item.type }))}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#E8681A] bg-[#FFF5EE] ring-2 ring-[#E8681A]/20 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center mb-2 ${
                    isSelected ? 'bg-[#E8681A] text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0B192C]">{item.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5 leading-tight">{item.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Service Required Selection */}
        <div>
          <label className="block text-xs font-bold text-[#0B192C] uppercase tracking-wider mb-2">
            2. Roofing Service Needed <span className="text-[#E8681A]">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {serviceOptions.map(opt => {
              const isSelected = formData.serviceRequired === opt.type;
              return (
                <button
                  type="button"
                  key={opt.type}
                  onClick={() => setFormData(prev => ({ ...prev, serviceRequired: opt.type }))}
                  className={`px-3 py-2.5 rounded-lg border text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#E8681A] bg-[#FFF5EE] text-[#0B192C] ring-2 ring-[#E8681A]/20 font-bold'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <span className={isSelected ? 'text-[#E8681A]' : 'text-slate-400'}>
                    {opt.icon}
                  </span>
                  <span className="truncate">{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Contact Information (Inputs) */}
        <div>
          <label className="block text-xs font-bold text-[#0B192C] uppercase tracking-wider mb-2">
            3. Contact & Property Details
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput
              label="Full Name"
              required
              placeholder="e.g. Michael Vance"
              value={formData.fullName}
              error={errors.fullName}
              onChange={e => setFormData({ ...formData, fullName: e.target.value })}
              leftIcon={<User className="w-4 h-4" />}
            />

            <FormInput
              label="Phone Number"
              type="tel"
              required
              placeholder="(555) 000-0000"
              value={formData.phone}
              error={errors.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
              leftIcon={<Phone className="w-4 h-4" />}
            />

            <FormInput
              label="Email Address"
              type="email"
              required
              placeholder="name@example.com"
              value={formData.email}
              error={errors.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              leftIcon={<Mail className="w-4 h-4" />}
            />

            <FormInput
              label="Property Address / City"
              placeholder="e.g. 1420 Congress Ave, Austin TX"
              value={formData.address}
              onChange={e => setFormData({ ...formData, address: e.target.value })}
              leftIcon={<MapPin className="w-4 h-4" />}
              helperText="Enables accurate aerial roof geometry calculation"
            />
          </div>
        </div>

        {/* 4. Project Specifics (Square footage & roof age) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
          <div>
            <label className="block text-xs font-semibold text-[#0B192C] mb-1.5">
              Estimated Size
            </label>
            <select
              value={formData.estimatedSqFt}
              onChange={e => setFormData({ ...formData, estimatedSqFt: e.target.value })}
              className="w-full text-xs sm:text-sm rounded-lg bg-white border border-slate-300 py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-[#E8681A]/20 focus:border-[#E8681A] text-[#0B192C]"
            >
              <option value="Under 1,800 sq ft">Under 1,800 sq ft</option>
              <option value="2,000 – 3,500 sq ft">2,000 – 3,500 sq ft (Typical)</option>
              <option value="3,500 – 5,000 sq ft">3,500 – 5,000 sq ft</option>
              <option value="5,000+ sq ft / Commercial">5,000+ sq ft / Commercial</option>
              <option value="Not Sure">Not Sure (Measure for Me)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0B192C] mb-1.5">
              Approximate Roof Age
            </label>
            <select
              value={formData.roofAge}
              onChange={e => setFormData({ ...formData, roofAge: e.target.value })}
              className="w-full text-xs sm:text-sm rounded-lg bg-white border border-slate-300 py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-[#E8681A]/20 focus:border-[#E8681A] text-[#0B192C]"
            >
              <option value="Under 5 years">Under 5 years</option>
              <option value="5 – 12 years">5 – 12 years</option>
              <option value="15 – 20 years">15 – 20 years</option>
              <option value="20+ years">20+ years old</option>
              <option value="Unknown">Unknown</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0B192C] mb-1.5">
              Project Timeline
            </label>
            <select
              value={formData.urgency}
              onChange={e => setFormData({ ...formData, urgency: e.target.value as any })}
              className="w-full text-xs sm:text-sm rounded-lg bg-white border border-slate-300 py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-[#E8681A]/20 focus:border-[#E8681A] text-[#0B192C]"
            >
              <option value="immediate">Immediate / Emergency</option>
              <option value="within-month">Within 30 Days</option>
              <option value="planning">Budgeting / Planning Phase</option>
            </select>
          </div>
        </div>

        {/* 5. Message / Notes */}
        <div>
          <label className="block text-xs font-semibold text-[#0B192C] mb-1.5">
            Describe Any Known Issues or Leaks (Optional)
          </label>
          <textarea
            rows={3}
            placeholder="Tell us about leaks, missing shingles, storm hail damage, or specific material preferences (Architectural shingles, metal, etc.)..."
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
            className="w-full text-xs sm:text-sm rounded-lg bg-white border border-slate-300 py-2.5 px-3.5 focus:outline-none focus:ring-2 focus:ring-[#E8681A]/20 focus:border-[#E8681A] text-[#0B192C] placeholder:text-slate-400"
          />
        </div>

        {/* Submission Button & Trust Guarantee */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isLoading}
            className="w-full shadow-md hover:shadow-lg"
            rightIcon={<Send className="w-4 h-4" />}
          >
            Submit Quote Request & Schedule Inspection
          </Button>

          <p className="text-[11px] text-center text-[#64748B] mt-3">
            🔒 Your contact information is kept private. Never sold to third-party brokers.
          </p>
        </div>
      </div>
    </form>
  );
};
