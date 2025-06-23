import React, { useState } from 'react';
import { Users, TrendingUp, Shield, DollarSign, Star, Quote, ChevronLeft, ChevronRight, Award, CheckCircle } from 'lucide-react';

const Investors: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      title: "Senior Software Engineer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "HSG Projects has been my trusted partner for real estate investments for over 5 years. Their transparency and consistent returns have exceeded my expectations. The team's professionalism and commitment to quality is truly remarkable.",
      rating: 5,
      investment: "3 Projects",
      returns: "12.5% avg",
      location: "Bangalore"
    },
    {
      id: 2,
      name: "Priya Sharma",
      title: "Business Owner",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "The farming project investments have provided excellent monthly returns. HSG's commitment to quality and timely delivery is truly commendable. I've recommended them to all my friends and family.",
      rating: 5,
      investment: "2 Projects",
      returns: "14.8% avg",
      location: "Chennai"
    },
    {
      id: 3,
      name: "Arun Krishnan",
      title: "Financial Consultant",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "What sets HSG apart is their integrity and long-term vision. They've helped me build a substantial real estate portfolio with consistent growth. The transparency in their operations is unmatched.",
      rating: 5,
      investment: "5 Projects",
      returns: "11.2% avg",
      location: "Hyderabad"
    },
    {
      id: 4,
      name: "Meera Nair",
      title: "IT Manager",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "HSG Projects delivered exactly what they promised. The quality construction and prime locations have resulted in excellent appreciation. Very satisfied with my investment decisions.",
      rating: 5,
      investment: "4 Projects",
      returns: "13.1% avg",
      location: "Mumbai"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Consistent Returns",
      description: "Average monthly returns of 8-15% across our diversified project portfolio with proven track record",
      color: "from-green-500 to-green-600",
      stats: "8-15% Returns"
    },
    {
      icon: Shield,
      title: "Secure Investments",
      description: "All projects backed by proper documentation, legal compliance, and RERA certification for maximum security",
      color: "from-blue-500 to-blue-600",
      stats: "100% RERA Approved"
    },
    {
      icon: DollarSign,
      title: "Flexible Investment",
      description: "Multiple investment options starting from ₹5 lakhs with flexible payment plans and easy EMI options",
      color: "from-purple-500 to-purple-600",
      stats: "From ₹5 Lakhs"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "20+ years of experience in Bangalore real estate market with dedicated relationship managers",
      color: "from-amber-500 to-amber-600",
      stats: "20+ Years Experience"
    }
  ];

  const stats = [
    { number: "106+", label: "Happy Investors", icon: Users, color: "from-blue-500 to-blue-600" },
    { number: "₹50Cr+", label: "Investments Managed", icon: DollarSign, color: "from-green-500 to-green-600" },
    { number: "15+", label: "Successful Projects", icon: TrendingUp, color: "from-purple-500 to-purple-600" },
    { number: "95%", label: "Investor Retention", icon: Shield, color: "from-amber-500 to-amber-600" }
  ];

  const investmentProcess = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Schedule a free consultation to discuss your investment goals and preferences",
      icon: Users
    },
    {
      step: "02",
      title: "Project Selection",
      description: "Choose from our curated portfolio of residential, commercial, and farming projects",
      icon: TrendingUp
    },
    {
      step: "03",
      title: "Site Visit",
      description: "Visit the project site with our team to see the location and construction quality",
      icon: CheckCircle
    },
    {
      step: "04",
      title: "Investment & Returns",
      description: "Complete the investment process and start receiving consistent monthly returns",
      icon: Award
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 px-6 py-3 rounded-full text-amber-800 font-medium mb-6">
            <Users className="h-5 w-5" />
            <span>Our Investor Community</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">106+ Investors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            For over two decades, we've built lasting relationships with investors who trust us 
            to deliver consistent returns and exceptional real estate opportunities across Bangalore.
          </p>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center transform hover:scale-105">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced Benefits Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose HSG Projects?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group text-center transform hover:scale-105 transition-all duration-500">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-4">{benefit.description}</p>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 rounded-full text-sm font-semibold">
                  {benefit.stats}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Testimonials Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Investors Say</h3>
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100"></div>
            <div className="relative p-12">
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={prevTestimonial}
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-600" />
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-amber-500 scale-125' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                >
                  <ChevronRight className="h-6 w-6 text-gray-600" />
                </button>
              </div>

              <div className="text-center">
                <Quote className="h-12 w-12 text-amber-500 mx-auto mb-6" />
                <p className="text-2xl text-gray-700 leading-relaxed mb-8 italic max-w-4xl mx-auto">
                  "{testimonials[currentTestimonial].content}"
                </p>
                
                <div className="flex items-center justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-amber-500 fill-current" />
                  ))}
                </div>

                <div className="flex items-center justify-center space-x-6">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="text-left">
                    <h5 className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</h5>
                    <p className="text-gray-600">{testimonials[currentTestimonial].title}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <span>{testimonials[currentTestimonial].investment}</span>
                      <span>•</span>
                      <span className="text-green-600 font-semibold">{testimonials[currentTestimonial].returns}</span>
                      <span>•</span>
                      <span>{testimonials[currentTestimonial].location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Process */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Simple Investment Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentProcess.map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <process.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-amber-600">{process.step}</span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h4>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Investment CTA */}
        <div className="relative overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 rounded-3xl p-12 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-transparent"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-6">Ready to Join Our Investor Community?</h3>
              <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Start your real estate investment journey with HSG Projects and experience 
                the trust and returns that 106+ investors already enjoy. Your financial future starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="inline-flex items-center px-10 py-4 bg-white text-amber-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Schedule Free Consultation
                  <Users className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex items-center px-10 py-4 bg-amber-700 text-white font-bold rounded-2xl hover:bg-amber-800 transition-all duration-300 transform hover:scale-105 border-2 border-amber-400">
                  Download Investment Guide
                  <TrendingUp className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investors;