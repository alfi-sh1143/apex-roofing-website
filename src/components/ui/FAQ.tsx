import React, { useState } from 'react';
import { FAQItem } from '../../types';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  showSearch?: boolean;
}

export const FAQ: React.FC<FAQProps> = ({
  items,
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about FlowDesk AI platform capabilities, security, and pricing.',
  showSearch = true
}) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General' },
    { id: 'features', label: 'Features & Workflows' },
    { id: 'security', label: 'Privacy & Security' },
    { id: 'pricing', label: 'Pricing & Trials' },
    { id: 'integrations', label: 'Integrations' }
  ];

  const filteredItems = items.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-xs font-semibold px-3 py-1 rounded-full mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Clear Answers</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
          {title}
        </h2>
        <p className="text-base text-[#64748B] max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Filter and Search Bar */}
      {showSearch && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#0F172A] text-white'
                    : 'bg-white text-[#475569] border border-[#E2E8F0] hover:bg-[#F8FAFC]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#0F172A] placeholder:text-[#94A3B8]"
            />
          </div>
        </div>
      )}

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 bg-white border border-[#E2E8F0] rounded-xl text-sm text-[#64748B]">
            No questions matching "{searchQuery}". Try selecting another category.
          </div>
        ) : (
          filteredItems.map(item => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className={`bg-white border rounded-xl transition-colors duration-150 overflow-hidden ${
                  isOpen ? 'border-[#2563EB]/40 shadow-xs' : 'border-[#E2E8F0] hover:border-[#CBD5E1]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4.5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none focus:bg-[#F8FAFC]"
                >
                  <span className="text-sm sm:text-base font-semibold text-[#0F172A] leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#EFF6FF] text-[#2563EB] rotate-180'
                        : 'bg-[#F1F5F9] text-[#64748B]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9]">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
