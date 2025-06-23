import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqData = [
    {
      id: 1,
      category: 'investment',
      question: "What is the minimum investment amount for HSG Projects?",
      answer: "The minimum investment amount varies by project type. For residential projects, it typically starts from ₹5 lakhs, commercial projects from ₹8 lakhs, and farming projects from ₹3 lakhs. We offer flexible payment plans to accommodate different investment capacities."
    },
    {
      id: 2,
      category: 'investment',
      question: "What kind of returns can I expect from my investment?",
      answer: "Our projects typically deliver 8-15% monthly returns depending on the project type. Residential projects average 8-10%, commercial projects 10-12%, and farming projects 12-15%. These returns are based on our historical performance over 15+ completed projects."
    },
    {
      id: 3,
      category: 'investment',
      question: "How long is the typical investment period?",
      answer: "Investment periods vary by project type. Residential projects typically take 18-24 months, commercial projects 20-30 months, and farming projects 10-15 months. We provide detailed timelines for each project before investment."
    },
    {
      id: 4,
      category: 'projects',
      question: "Are all HSG Projects RERA approved?",
      answer: "Yes, all our residential and commercial projects are RERA (Real Estate Regulatory Authority) approved. We ensure complete legal compliance and provide all necessary documentation to our investors for transparency and security."
    },
    {
      id: 5,
      category: 'projects',
      question: "Can I visit the project sites before investing?",
      answer: "Absolutely! We encourage site visits and provide guided tours of all our ongoing and upcoming projects. You can schedule a visit by contacting our team at 9844028280 or through our website contact form."
    },
    {
      id: 6,
      category: 'projects',
      question: "What happens if a project gets delayed?",
      answer: "While we maintain an excellent track record of on-time delivery, if delays occur due to unforeseen circumstances, we provide regular updates and may offer compensation as per the agreement terms. Our transparent communication ensures investors are always informed."
    },
    {
      id: 7,
      category: 'company',
      question: "How long has HSG Projects been in business?",
      answer: "HSG Projects was founded in 2005, making us a trusted name in Bangalore's real estate market for over 18 years. We've successfully delivered 15+ projects and have 106+ satisfied investors."
    },
    {
      id: 8,
      category: 'company',
      question: "What makes HSG Projects different from other developers?",
      answer: "Our key differentiators include: 1) Unwavering commitment to quality with no cost-cutting on materials, 2) Complete transparency in all dealings, 3) Consistent track record of delivering promised returns, 4) Personal attention to each investor, and 5) Diverse portfolio across residential, commercial, and farming sectors."
    },
    {
      id: 9,
      category: 'legal',
      question: "What legal documents will I receive as an investor?",
      answer: "Investors receive comprehensive documentation including: Investment agreement, Project approval certificates, RERA registration documents, Title deeds, Construction permits, and Regular progress reports. All documents are legally verified and transparent."
    },
    {
      id: 10,
      category: 'legal',
      question: "Is my investment insured or guaranteed?",
      answer: "While we cannot provide insurance guarantees, we ensure security through: Legal documentation, RERA compliance, Transparent fund utilization, Regular project monitoring, and our 18-year track record of successful project delivery."
    },
    {
      id: 11,
      category: 'process',
      question: "How do I start investing with HSG Projects?",
      answer: "The process is simple: 1) Contact us for project details, 2) Schedule a consultation and site visit, 3) Review project documents and investment terms, 4) Complete the investment agreement, 5) Make the initial payment, and 6) Receive regular updates on project progress."
    },
    {
      id: 12,
      category: 'process',
      question: "How often will I receive updates on my investment?",
      answer: "We provide monthly progress reports with photos, quarterly financial updates, and immediate communication for any significant developments. Investors can also visit sites anytime and contact our team for real-time updates."
    },
    {
      id: 13,
      category: 'returns',
      question: "When do I start receiving returns on my investment?",
      answer: "Return schedules vary by project type. For rental-based projects, returns typically start within 6-12 months of project completion. For sale-based projects, returns are realized upon project completion and unit sales. Detailed return schedules are provided for each project."
    },
    {
      id: 14,
      category: 'returns',
      question: "Can I reinvest my returns into new projects?",
      answer: "Yes, many of our investors choose to reinvest their returns into new projects. We offer priority access to new projects for existing investors and can facilitate seamless reinvestment processes."
    },
    {
      id: 15,
      category: 'support',
      question: "What support do you provide to investors?",
      answer: "We provide comprehensive support including: Dedicated relationship manager, Regular project updates, Site visit coordination, Documentation assistance, Investment planning guidance, and 24/7 customer support through phone and WhatsApp."
    }
  ];

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'investment', label: 'Investment' },
    { id: 'projects', label: 'Projects' },
    { id: 'company', label: 'Company' },
    { id: 'legal', label: 'Legal' },
    { id: 'process', label: 'Process' },
    { id: 'returns', label: 'Returns' },
    { id: 'support', label: 'Support' }
  ];

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full text-blue-800 text-sm font-medium mb-4">
            <HelpCircle className="h-4 w-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Got <span className="text-blue-600">Questions?</span> We Have Answers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to the most commonly asked questions about investing with HSG Projects, 
            our processes, and what makes us different.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4 mb-12">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openFAQ === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === faq.id && (
                  <div className="px-6 pb-5">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-center text-white">
          <MessageCircle className="h-12 w-12 mx-auto mb-4 text-blue-100" />
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our experienced team is here to help you 
            with any questions about investments, projects, or our processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9844028280"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Call Us: 9844 028 280
            </a>
            <a
              href="mailto:hsgprojects@yahoo.co.in"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Email Us
            </a>
            <a
              href="https://wa.me/919844028280"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">106+</div>
            <div className="text-gray-600">Satisfied Investors</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-amber-600 mb-2">18</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;