import React, { useState } from 'react';
import { Building, MapPin, Calendar, Users, Clock, TrendingUp, ChevronRight } from 'lucide-react';

const OngoingProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const ongoingProjects = [
    {
      id: 1,
      title: "HSG Vista Apartments",
      type: "Residential",
      location: "Electronic City, Bangalore",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      totalUnits: 48,
      soldUnits: 32,
      startDate: "January 2024",
      expectedCompletion: "December 2025",
      progress: 35,
      investment: "₹12 Crores",
      monthlyReturns: "8-10%",
      amenities: ["Swimming Pool", "Gym", "Children's Play Area", "24/7 Security", "Power Backup", "Parking"],
      description: "Premium residential complex in the heart of Electronic City with world-class amenities and modern architecture.",
      highlights: [
        "Prime location near IT corridor",
        "RERA approved project",
        "Vastu compliant design",
        "Earthquake resistant structure"
      ]
    },
    {
      id: 2,
      title: "HSG Commercial Hub Phase 2",
      type: "Commercial",
      location: "BTM Layout, Bangalore",
      image: "https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      totalUnits: 24,
      soldUnits: 18,
      startDate: "March 2024",
      expectedCompletion: "August 2025",
      progress: 45,
      investment: "₹18 Crores",
      monthlyReturns: "10-12%",
      amenities: ["High-speed Elevators", "Central AC", "Conference Rooms", "Cafeteria", "Ample Parking", "24/7 Security"],
      description: "State-of-the-art commercial complex designed for modern businesses with premium office spaces.",
      highlights: [
        "Grade A office spaces",
        "Metro connectivity",
        "Green building certified",
        "Flexible floor plans"
      ]
    },
    {
      id: 3,
      title: "HSG Organic Estates",
      type: "Farming",
      location: "Mysore Road, Bangalore",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      totalUnits: 75,
      soldUnits: 45,
      startDate: "February 2024",
      expectedCompletion: "November 2024",
      progress: 60,
      investment: "₹8 Crores",
      monthlyReturns: "12-15%",
      amenities: ["Drip Irrigation", "Organic Certification", "Farm House", "Storage Facility", "Transportation", "Expert Guidance"],
      description: "Sustainable organic farming project offering excellent returns through agricultural investments.",
      highlights: [
        "Certified organic farming",
        "Water source guaranteed",
        "Expert farm management",
        "Direct market access"
      ]
    },
    {
      id: 4,
      title: "HSG Premium Villas",
      type: "Residential",
      location: "Sarjapur Road, Bangalore",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      totalUnits: 20,
      soldUnits: 12,
      startDate: "April 2024",
      expectedCompletion: "March 2026",
      progress: 25,
      investment: "₹25 Crores",
      monthlyReturns: "9-11%",
      amenities: ["Private Garden", "Swimming Pool", "Home Automation", "Solar Panels", "Clubhouse", "Security"],
      description: "Luxury villa project offering spacious homes with premium amenities and modern lifestyle.",
      highlights: [
        "Gated community",
        "Smart home features",
        "Eco-friendly design",
        "Premium location"
      ]
    }
  ];

  const getProgressColor = (progress: number) => {
    if (progress < 30) return 'bg-red-500';
    if (progress < 60) return 'bg-amber-500';
    return 'bg-green-500';
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'residential':
        return 'bg-blue-100 text-blue-800';
      case 'commercial':
        return 'bg-purple-100 text-purple-800';
      case 'farming':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full text-amber-800 text-sm font-medium mb-4">
            <Clock className="h-4 w-4" />
            <span>Ongoing Projects</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Projects in <span className="text-amber-600">Progress</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our current projects that are actively under development, offering excellent 
            investment opportunities with guaranteed returns and quality construction.
          </p>
        </div>

        {/* Projects Overview Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full mb-4">
              <Building className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">4</div>
            <div className="text-gray-600 text-sm">Active Projects</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-full mb-4">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">₹63Cr</div>
            <div className="text-gray-600 text-sm">Total Investment</div>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500 rounded-full mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">167</div>
            <div className="text-gray-600 text-sm">Total Units</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500 rounded-full mb-4">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">41%</div>
            <div className="text-gray-600 text-sm">Avg Progress</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {ongoingProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(project.type)}`}>
                    {project.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                    {project.progress}% Complete
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getProgressColor(project.progress)}`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{project.soldUnits}/{project.totalUnits} Units Sold</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{project.expectedCompletion}</span>
                    </div>
                  </div>
                </div>

                {/* Investment Info */}
                <div className="mt-4 p-4 bg-amber-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Investment Value</p>
                      <p className="font-bold text-gray-900">{project.investment}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Monthly Returns</p>
                      <p className="font-bold text-green-600">{project.monthlyReturns}</p>
                    </div>
                  </div>
                </div>

                {/* Expandable Details */}
                {selectedProject === project.id && (
                  <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Highlights</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Amenities</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.amenities.map((amenity, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6 flex items-center justify-between">
                  <button className="text-amber-600 font-medium text-sm hover:text-amber-700 transition-colors">
                    {selectedProject === project.id ? 'Show Less' : 'View Details'}
                  </button>
                  <ChevronRight className={`h-4 w-4 text-amber-600 transition-transform ${
                    selectedProject === project.id ? 'rotate-90' : ''
                  }`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Investment CTA */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Invest in Ongoing Projects</h3>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Join our ongoing projects and secure your investment with guaranteed returns. 
            Limited units available in each project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Schedule Site Visit
            </button>
            <button className="px-8 py-4 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 transition-colors">
              Download Project Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;