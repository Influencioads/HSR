import React, { useState } from 'react';
import { Building2, Target, Eye, Users, Award, TrendingUp, ChevronRight, Play, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('journey');

  const tabs = [
    { id: 'journey', label: 'Our Journey', icon: TrendingUp },
    { id: 'mission', label: 'Mission & Vision', icon: Target },
    { id: 'values', label: 'Our Values', icon: Award }
  ];

  const milestones = [
    {
      year: "2005",
      title: "The Beginning",
      description: "Started with a vision in a modest 200 sq ft office, committed to delivering consistent monthly income for investors through strategic real estate investments.",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      achievement: "Founded with ₹10 Lakhs"
    },
    {
      year: "2010",
      title: "First Major Success",
      description: "Completed our first residential project with 100% investor satisfaction, establishing our reputation for quality and reliability.",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      achievement: "First Project Delivered"
    },
    {
      year: "2015",
      title: "Expansion & Growth",
      description: "Expanded operations and successfully delivered multiple residential and commercial projects, building a strong reputation for quality and reliability.",
      image: "https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      achievement: "50+ Investors Onboard"
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Embraced technology and digital processes while maintaining our core values of transparency and quality construction.",
      image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      achievement: "10+ Projects Completed"
    },
    {
      year: "2024",
      title: "Excellence Achieved",
      description: "Operating from a 2,000 sq ft office with 15+ successful projects and 106+ satisfied investors, continuing our legacy of trust and excellence.",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      achievement: "Industry Leadership"
    }
  ];

  const values = [
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "We maintain the highest standards of honesty and transparency in all our dealings with investors and partners.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Award,
      title: "Quality",
      description: "No compromises on construction quality or materials. We deliver projects that stand the test of time.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Trust",
      description: "Building lasting relationships with our investors through consistent performance and reliable returns.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Embracing new technologies and sustainable practices to create better living and working spaces.",
      color: "from-amber-500 to-amber-600"
    }
  ];

  const stats = [
    { number: "15+", label: "Successful Projects", icon: Building2, color: "text-blue-600" },
    { number: "106+", label: "Satisfied Investors", icon: Users, color: "text-green-600" },
    { number: "20+", label: "Years Experience", icon: Award, color: "text-purple-600" },
    { number: "2000", label: "Sq Ft Office Space", icon: TrendingUp, color: "text-amber-600" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 px-6 py-3 rounded-full text-amber-800 font-medium mb-6">
            <Building2 className="h-5 w-5" />
            <span>About HSG Projects</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Two Decades of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From humble beginnings to becoming Bangalore's trusted real estate partner, 
            our journey is defined by integrity, quality, and investor success.
          </p>
        </div>

        {/* Interactive Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center transform hover:scale-105">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color === 'text-blue-600' ? 'from-blue-500 to-blue-600' : stat.color === 'text-green-600' ? 'from-green-500 to-green-600' : stat.color === 'text-purple-600' ? 'from-purple-500 to-purple-600' : 'from-amber-500 to-amber-600'} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-amber-600 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-20">
          {activeTab === 'journey' && (
            <div className="space-y-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Growth Story</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Follow our remarkable journey from a small office to becoming one of Bangalore's most trusted real estate developers.
                </p>
              </div>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 via-amber-400 to-amber-300"></div>
                
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                        <div className="mb-6">
                          <img
                            src={milestone.image}
                            alt={milestone.title}
                            className="w-full h-48 object-cover rounded-2xl"
                          />
                        </div>
                        <div className="text-3xl font-bold text-amber-600 mb-2">{milestone.year}</div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h4>
                        <p className="text-gray-600 leading-relaxed mb-4">{milestone.description}</p>
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 rounded-full text-sm font-semibold">
                          <Award className="h-4 w-4 mr-2" />
                          {milestone.achievement}
                        </div>
                      </div>
                    </div>
                    
                    {/* Timeline Node */}
                    <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full border-4 border-white shadow-xl z-10">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'mission' && (
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 rounded-3xl p-10 transform hover:scale-105 transition-all duration-500">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl mb-8">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  To deliver consistent monthly income for our investors through strategic real estate investments, 
                  maintaining the highest standards of quality and transparency while building long-term wealth 
                  creation opportunities in Bangalore's thriving real estate market.
                </p>
                <div className="flex items-center text-amber-700 font-semibold">
                  <ChevronRight className="h-5 w-5 mr-2" />
                  <span>Building Wealth, Creating Trust</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-3xl p-10 transform hover:scale-105 transition-all duration-500">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-8">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  To be Bangalore's most trusted real estate development company, known for our unwavering 
                  commitment to quality, innovative projects, and creating sustainable value for investors 
                  while contributing to the city's urban development.
                </p>
                <div className="flex items-center text-blue-700 font-semibold">
                  <ChevronRight className="h-5 w-5 mr-2" />
                  <span>Shaping Tomorrow's Bangalore</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'values' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group text-center transform hover:scale-105 transition-all duration-500">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${value.color} rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-6">Ready to Join Our Success Story?</h3>
            <p className="text-xl mb-8 text-amber-100 max-w-3xl mx-auto">
              With 18 years of excellence and 106+ satisfied investors, HSG Projects continues to deliver 
              on its promises. Be part of our next chapter of growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="inline-flex items-center px-10 py-4 bg-white text-amber-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Projects
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-10 py-4 bg-amber-700 text-white font-bold rounded-2xl hover:bg-amber-800 transition-all duration-300 transform hover:scale-105 border-2 border-amber-400">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;