import React, { useState, useEffect } from 'react';
import { ChevronRight, Users, Award, TrendingUp, CheckCircle, Play, Star, Building2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const heroSlides = [
    {
      image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Building Trust,",
      subtitle: "Delivering Excellence",
      description: "From a 200 sq ft office to 2,000 sq ft of excellence. HSG Projects has delivered 15+ successful projects with unwavering commitment to quality and investor satisfaction."
    },
    {
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Premium Living,",
      subtitle: "Exceptional Returns",
      description: "Experience luxury residential projects that combine modern amenities with strategic investment opportunities, delivering consistent monthly returns to our valued investors."
    },
    {
      image: "https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Commercial Excellence,",
      subtitle: "Future Ready",
      description: "State-of-the-art commercial spaces designed for modern businesses, featuring premium locations and world-class infrastructure for maximum investment potential."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const achievements = [
    { icon: TrendingUp, number: "15+", label: "Successful Projects", color: "from-blue-500 to-blue-600" },
    { icon: Users, number: "106+", label: "Satisfied Investors", color: "from-green-500 to-green-600" },
    { icon: Award, number: "18", label: "Years Experience", color: "from-purple-500 to-purple-600" },
    { icon: Building2, number: "₹50Cr+", label: "Investments Managed", color: "from-amber-500 to-amber-600" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Senior Software Engineer",
      content: "HSG Projects exceeded all my expectations. The quality and returns are exceptional.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Priya Sharma",
      role: "Business Owner",
      content: "Transparent processes and consistent returns. Highly recommend HSG Projects.",
      rating: 5,
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`${slide.title} ${slide.subtitle}`}
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/70"></div>
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 bg-amber-500/20 backdrop-blur-md px-6 py-3 rounded-full text-amber-200 font-medium border border-amber-400/30">
                <Award className="h-5 w-5" />
                <span>Trusted Since 2005 • 18 Years of Excellence</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  {heroSlides[currentSlide].title}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 animate-pulse">
                    {heroSlides[currentSlide].subtitle}
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-200 max-w-2xl leading-relaxed font-light">
                  {heroSlides[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <CheckCircle className="h-8 w-8 text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-sm">Trustworthy</h3>
                  <p className="text-xs text-gray-300">Committed to promises</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <CheckCircle className="h-8 w-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-sm">High Quality</h3>
                  <p className="text-xs text-gray-300">No compromises</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <CheckCircle className="h-8 w-8 text-amber-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-sm">Best Pricing</h3>
                  <p className="text-xs text-gray-300">Industry competitive</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative">Explore Projects</span>
                <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => setIsVideoPlaying(true)}
                className="group inline-flex items-center justify-center px-10 py-5 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold rounded-2xl border border-white/30 transition-all duration-500 transform hover:scale-105"
              >
                <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                Watch Story
              </button>
            </div>
          </div>

          {/* Right Column - Interactive Stats & Testimonials */}
          <div className="space-y-8">
            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="group bg-white/15 backdrop-blur-md rounded-3xl p-6 text-center border border-white/20 hover:bg-white/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {achievement.number}
                  </div>
                  <div className="text-gray-300 text-sm font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
            
            {/* Testimonial Carousel */}
            <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-white font-bold text-xl mb-6 text-center">What Our Investors Say</h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-200 mb-4 italic">"{testimonial.content}"</p>
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                      />
                      <div>
                        <h5 className="font-semibold text-white">{testimonial.name}</h5>
                        <p className="text-sm text-gray-300">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-amber-500 scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white animate-bounce z-20">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-4 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-xs mt-2 text-center text-white/70">Scroll</p>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-gray-900 rounded-2xl p-8 text-center">
              <h3 className="text-white text-2xl font-bold mb-4">HSG Projects Story</h3>
              <p className="text-gray-300 mb-6">
                Watch our journey from a 200 sq ft office to becoming Bangalore's trusted real estate partner.
              </p>
              <div className="bg-gray-800 rounded-xl p-12 text-gray-400">
                <Play className="h-16 w-16 mx-auto mb-4" />
                <p>Video content would be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;