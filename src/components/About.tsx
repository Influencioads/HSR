import React from 'react';
import { Building2, Target, Eye, Users, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full text-amber-800 text-sm font-medium mb-4">
            <Building2 className="h-4 w-4" />
            <span>About HSG Projects</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Two Decades of <span className="text-amber-600">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to becoming Bangalore's trusted real estate partner, 
            our journey is defined by integrity, quality, and investor success.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 to-amber-300"></div>
                
                <div className="relative flex items-start space-x-6 mb-8">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">2005 - The Beginning</h3>
                    <p className="text-gray-600">Started with a vision in a modest 200 sq ft office, committed to delivering quality real estate solutions for investors through strategic investments.</p>
                  </div>
                </div>

                <div className="relative flex items-start space-x-6 mb-8">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">2010-2020 - Growth</h3>
                    <p className="text-gray-600">Expanded operations and successfully delivered multiple residential and commercial projects, building a strong reputation for quality and reliability.</p>
                  </div>
                </div>

                <div className="relative flex items-start space-x-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Today - Excellence</h3>
                    <p className="text-gray-600">Operating from a 2,000 sq ft office with 15+ successful projects and 106+ satisfied investors, continuing our legacy of trust and excellence.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <TrendingUp className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">15+</h3>
                <p className="text-gray-600 text-sm">Successful Projects Delivered</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">106+</h3>
                <p className="text-gray-600 text-sm">Satisfied Investors</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <Award className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">20+</h3>
                <p className="text-gray-600 text-sm">Years of Experience</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <Building2 className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">2000</h3>
                <p className="text-gray-600 text-sm">Sq Ft Office Space</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500 rounded-full mb-6">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver exceptional quality real estate solutions for our investors through strategic investments, 
              maintaining the highest standards of quality and transparency while building long-term wealth 
              creation opportunities in Bangalore's thriving real estate market.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full mb-6">
              <Eye className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be Bangalore's most trusted real estate development company, known for our unwavering 
              commitment to quality, innovative projects, and creating sustainable value for investors 
              while contributing to the city's urban development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;