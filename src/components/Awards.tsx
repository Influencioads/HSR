import React from 'react';
import { Award, Trophy, Star, Medal, Calendar, Building2 } from 'lucide-react';

const Awards: React.FC = () => {
  const awards = [
    {
      id: 1,
      title: "Best Real Estate Developer - Bangalore",
      organization: "Karnataka Real Estate Association",
      year: "2023",
      category: "Excellence in Development",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      description: "Recognized for outstanding contribution to Bangalore's real estate development with focus on quality and investor satisfaction.",
      icon: Trophy
    },
    {
      id: 2,
      title: "Sustainable Development Award",
      organization: "Green Building Council of India",
      year: "2023",
      category: "Environmental Excellence",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      description: "Awarded for implementing eco-friendly practices in construction and promoting sustainable farming initiatives.",
      icon: Award
    },
    {
      id: 3,
      title: "Investor's Choice Award",
      organization: "Real Estate Investment Forum",
      year: "2022",
      category: "Trust & Transparency",
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      description: "Honored for maintaining highest standards of transparency and delivering consistent returns to 106+ investors.",
      icon: Star
    },
    {
      id: 4,
      title: "Quality Construction Excellence",
      organization: "Builders Association of India",
      year: "2022",
      category: "Construction Quality",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      description: "Recognized for uncompromising quality standards and use of premium materials in all construction projects.",
      icon: Medal
    },
    {
      id: 5,
      title: "Innovation in Farming Projects",
      organization: "Agricultural Development Board",
      year: "2021",
      category: "Agricultural Innovation",
      image: "https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      description: "Awarded for pioneering organic farming projects that provide sustainable returns and promote eco-friendly agriculture.",
      icon: Award
    },
    {
      id: 6,
      title: "Customer Satisfaction Excellence",
      organization: "Consumer Choice Awards",
      year: "2021",
      category: "Customer Service",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      description: "Recognized for achieving 95%+ customer satisfaction rate and maintaining long-term relationships with investors.",
      icon: Star
    }
  ];

  const certifications = [
    {
      title: "RERA Certified Developer",
      description: "All projects registered under Real Estate Regulatory Authority",
      icon: Building2
    },
    {
      title: "ISO 9001:2015 Certified",
      description: "Quality management system certification for construction processes",
      icon: Award
    },
    {
      title: "Green Building Certified",
      description: "Certified for sustainable and eco-friendly construction practices",
      icon: Trophy
    },
    {
      title: "CREDAI Member",
      description: "Proud member of Confederation of Real Estate Developers' Associations",
      icon: Medal
    }
  ];

  const milestones = [
    { year: "2005", achievement: "Company Founded", description: "Started with vision in 200 sq ft office" },
    { year: "2010", achievement: "First Major Project", description: "Completed first residential complex" },
    { year: "2015", achievement: "50+ Investors", description: "Reached milestone of 50 satisfied investors" },
    { year: "2020", achievement: "10+ Projects", description: "Successfully delivered 10th project" },
    { year: "2023", achievement: "Industry Recognition", description: "Received multiple industry awards" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full text-amber-800 text-sm font-medium mb-4">
            <Trophy className="h-4 w-4" />
            <span>Awards & Recognition</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Celebrating <span className="text-amber-600">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality, transparency, and innovation has been recognized by leading 
            industry organizations and associations across India.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {awards.map((award) => (
            <div
              key={award.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-amber-500 text-white p-2 rounded-full">
                    <award.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {award.year}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium mb-2">
                    {award.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{award.title}</h3>
                  <p className="text-sm text-gray-600 font-medium">{award.organization}</p>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-4">{award.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{award.year}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Certifications & Memberships</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mb-4">
                  <cert.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h4>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Journey of Excellence</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 to-amber-300"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-amber-600 mb-2">{milestone.year}</div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{milestone.achievement}</h4>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-amber-500 rounded-full border-4 border-white shadow-lg z-10">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recognition Stats */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Recognition by Numbers</h3>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Our achievements reflect our unwavering commitment to excellence and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-amber-100">Industry Awards</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-amber-100">Certifications</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-amber-100">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">18</div>
              <div className="text-amber-100">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;