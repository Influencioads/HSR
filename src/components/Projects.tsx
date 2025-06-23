import React, { useState } from 'react';
import { Building, MapPin, Calendar, Users, Filter, ChevronRight, Star, TrendingUp, Award } from 'lucide-react';

interface ProjectsProps {
  onProjectView?: (projectId: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectView }) => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    {
      id: 'hsg-prime-residency',
      title: "HSG Prime Residency",
      type: "residential",
      status: "completed",
      location: "Jayanagar, Bangalore",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      units: "24 Units",
      year: "2023",
      investment: "₹8 Crores",
      returns: "11.5%",
      rating: 4.9,
      description: "Luxury residential complex with modern amenities and prime location access.",
      highlights: ["RERA Approved", "100% Sold", "Premium Location", "High ROI"]
    },
    {
      id: 'hsg-commercial-hub',
      title: "HSG Commercial Hub",
      type: "commercial",
      status: "ongoing",
      location: "BTM Layout, Bangalore",
      image: "https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      units: "32 Offices",
      year: "2024",
      investment: "₹18 Crores",
      returns: "10-12%",
      rating: 4.8,
      description: "State-of-the-art commercial complex designed for modern businesses.",
      highlights: ["Grade A Offices", "Metro Connectivity", "Green Certified", "IT Corridor"]
    },
    {
      id: 'hsg-green-farms',
      title: "HSG Green Farms",
      type: "farming",
      status: "completed",
      location: "Kanakapura Road, Bangalore",
      image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      units: "50 Plots",
      year: "2022",
      investment: "₹6 Crores",
      returns: "14.8%",
      rating: 5.0,
      description: "Sustainable farming project offering long-term agricultural investment opportunities.",
      highlights: ["Organic Certified", "Water Source", "Expert Management", "High Returns"]
    },
    {
      id: 'hsg-vista-apartments',
      title: "HSG Vista Apartments",
      type: "residential",
      status: "upcoming",
      location: "Electronic City, Bangalore",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      units: "48 Units",
      year: "2025",
      investment: "₹12 Crores",
      returns: "8-10%",
      rating: 4.7,
      description: "Modern apartments with world-class amenities in IT corridor.",
      highlights: ["IT Corridor", "Modern Design", "Premium Amenities", "Investment Ready"]
    },
    {
      id: 'hsg-tech-center',
      title: "HSG Tech Center",
      type: "commercial",
      status: "completed",
      location: "Whitefield, Bangalore",
      image: "https://images.pexels.com/photos/2631613/pexels-photo-2631613.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      units: "28 Offices",
      year: "2023",
      investment: "₹15 Crores",
      returns: "13.2%",
      rating: 4.9,
      description: "Premium office spaces designed for technology companies and startups.",
      highlights: ["Tech Hub", "Premium Location", "High Occupancy", "Excellent Returns"]
    },
    {
      id: 'hsg-organic-estates',
      title: "HSG Organic Estates",
      type: "farming",
      status: "ongoing",
      location: "Mysore Road, Bangalore",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      units: "75 Plots",
      year: "2024",
      investment: "₹8 Crores",
      returns: "12-15%",
      rating: 4.8,
      description: "Organic farming initiative promoting sustainable agriculture practices.",
      highlights: ["Organic Farming", "Sustainable", "Expert Guidance", "Consistent Returns"]
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'upcoming':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'residential':
        return Building;
      case 'commercial':
        return TrendingUp;
      case 'farming':
        return Award;
      default:
        return Building;
    }
  };

  const handleProjectClick = (projectId: string | number) => {
    if (onProjectView && typeof projectId === 'string') {
      onProjectView(projectId);
    }
  };

  const filterOptions = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'residential', label: 'Residential', count: projects.filter(p => p.type === 'residential').length },
    { id: 'commercial', label: 'Commercial', count: projects.filter(p => p.type === 'commercial').length },
    { id: 'farming', label: 'Farming', count: projects.filter(p => p.type === 'farming').length }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 px-6 py-3 rounded-full text-amber-800 font-medium mb-6">
            <Building className="h-5 w-5" />
            <span>Our Projects Portfolio</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Delivering <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Excellence</span> Across Sectors
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From residential complexes to commercial hubs and sustainable farming initiatives, 
            explore our diverse portfolio of successful projects that have delivered exceptional returns to our investors.
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filterOptions.map(({ id, label, count }) => {
            const IconComponent = getTypeIcon(id === 'all' ? 'residential' : id);
            return (
              <button
                key={id}
                onClick={() => setFilter(id)}
                className={`group inline-flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 ${
                  filter === id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-xl'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg border border-gray-200'
                }`}
              >
                <IconComponent className="h-5 w-5" />
                <span>{label}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                  filter === id 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-100 text-gray-600 group-hover:bg-amber-100 group-hover:text-amber-700'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden cursor-pointer transform hover:scale-105"
              onClick={() => handleProjectClick(project.id)}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getStatusColor(project.status)}`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>
                
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-amber-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-900">{project.rating}</span>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-amber-600/90 to-transparent transition-opacity duration-500 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.highlights.slice(0, 2).map((highlight, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <MapPin className="h-4 w-4 text-amber-500" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-amber-500" />
                      <span>{project.units}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-amber-500" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>

                {/* Investment Info */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-600 font-medium">Investment</p>
                      <p className="font-bold text-gray-900 text-lg">{project.investment}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-600 font-medium">Returns</p>
                      <p className="font-bold text-green-600 text-lg">{project.returns}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className={`w-3 h-3 rounded-full ${
                      project.status === 'completed' ? 'bg-green-500' :
                      project.status === 'ongoing' ? 'bg-blue-500' : 'bg-amber-500'
                    }`}></span>
                    <span className="text-sm font-medium text-gray-600 capitalize">{project.status}</span>
                  </div>
                  <button 
                    className="inline-flex items-center text-amber-600 font-semibold text-sm hover:text-amber-700 transition-colors group-hover:translate-x-1 transform duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project.id);
                    }}
                  >
                    View Details
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="relative overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 rounded-3xl p-12 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-transparent"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-6">
                Ready to Invest in Your Future?
              </h3>
              <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join our community of 106+ satisfied investors and explore upcoming projects 
                that deliver consistent returns and long-term value. Your investment journey starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="inline-flex items-center px-10 py-4 bg-white text-amber-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore Current Projects
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex items-center px-10 py-4 bg-amber-700 text-white font-bold rounded-2xl hover:bg-amber-800 transition-all duration-300 transform hover:scale-105 border-2 border-amber-400">
                  Schedule Consultation
                  <Calendar className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;