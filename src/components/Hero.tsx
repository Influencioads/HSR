import React from 'react';
import { ChevronRight, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Modern residential complex"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-amber-200 text-sm font-medium">
                <Award className="h-4 w-4" />
                <span>Trusted Since 2005</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Building Trust,
                <span className="block text-amber-400">Delivering Excellence</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-xl leading-relaxed">
                From a 200 sq ft office to 2,000 sq ft of excellence. HSG Projects has delivered 15+ successful projects with unwavering commitment to quality and investor satisfaction.
              </p>
            </div>

            {/* USPs */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle className="h-6 w-6 text-amber-400 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm">Trustworthy</h3>
                  <p className="text-xs text-gray-300">Committed to promises</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle className="h-6 w-6 text-amber-400 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm">High Quality</h3>
                  <p className="text-xs text-gray-300">No compromises</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle className="h-6 w-6 text-amber-400 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm">Best Pricing</h3>
                  <p className="text-xs text-gray-300">Industry competitive</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Explore Projects
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500/30 rounded-full mb-4">
                  <TrendingUp className="h-6 w-6 text-amber-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-gray-300 text-sm">Successful Projects</div>
              </div>
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500/30 rounded-full mb-4">
                  <Users className="h-6 w-6 text-amber-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">106+</div>
                <div className="text-gray-300 text-sm">Satisfied Investors</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 backdrop-blur-md rounded-2xl p-6 border border-amber-400/20">
              <h3 className="text-white font-semibold mb-2">Our Journey</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Started in 2005 with a small 200 sq ft office, we've grown to a 2,000 sq ft space, delivering consistent monthly returns through residential, commercial, and farming projects across Bangalore.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;