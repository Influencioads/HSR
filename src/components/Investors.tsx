import React from 'react';
import { Users, TrendingUp, Shield, DollarSign, Star, Quote } from 'lucide-react';

const Investors: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      title: "Senior Software Engineer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "HSG Projects has been my trusted partner for real estate investments for over 5 years. Their transparency and consistent returns have exceeded my expectations.",
      rating: 5,
      investment: "3 Projects"
    },
    {
      id: 2,
      name: "Priya Sharma",
      title: "Business Owner",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "The farming project investments have provided excellent monthly returns. HSG's commitment to quality and timely delivery is truly commendable.",
      rating: 5,
      investment: "2 Projects"
    },
    {
      id: 3,
      name: "Arun Krishnan",
      title: "Financial Consultant",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "What sets HSG apart is their integrity and long-term vision. They've helped me build a substantial real estate portfolio with consistent growth.",
      rating: 5,
      investment: "5 Projects"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Consistent Returns",
      description: "Average monthly returns of 8-12% across our project portfolio"
    },
    {
      icon: Shield,
      title: "Secure Investments",
      description: "All projects backed by proper documentation and legal compliance"
    },
    {
      icon: DollarSign,
      title: "Flexible Investment",
      description: "Multiple investment options starting from ₹5 lakhs"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "20+ years of experience in Bangalore real estate market"
    }
  ];

  const stats = [
    { number: "106+", label: "Happy Investors", icon: Users },
    { number: "₹50Cr+", label: "Investments Managed", icon: DollarSign },
    { number: "15+", label: "Successful Projects", icon: TrendingUp },
    { number: "95%", label: "Investor Retention", icon: Shield }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full text-amber-800 text-sm font-medium mb-4">
            <Users className="h-4 w-4" />
            <span>Our Investors</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-amber-600">106+ Investors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over two decades, we've built lasting relationships with investors who trust us 
            to deliver consistent returns and exceptional real estate opportunities.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                <stat.icon className="h-6 w-6 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Why Choose HSG Projects?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">What Our Investors Say</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-amber-500 mb-4" />
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-500 fill-current" />
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="font-semibold text-gray-900">{testimonial.name}</h5>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                    <p className="text-xs text-amber-600 font-medium">{testimonial.investment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment CTA */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Join Our Investor Community?</h3>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Start your real estate investment journey with HSG Projects and experience 
            the trust and returns that 106+ investors already enjoy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investors;