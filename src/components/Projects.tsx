import React, { useState } from 'react';
import { Building, MapPin, Calendar, Users, Filter, ChevronRight } from 'lucide-react';

interface ProjectsProps {
  onProjectView?: (projectId: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectView }) => {
  const [filter, setFilter] = useState('all');

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
      description: "Luxury residential complex with modern amenities and prime location access."
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
      description: "State-of-the-art commercial complex designed for modern businesses."
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
      description: "Sustainable farming project offering long-term agricultural investment opportunities."
    },
    {
      id: 4,
      title: "HSG Vista Apartments",
      type: "residential",
      status: "upcoming",
      location: "Electronic City, Bangalore",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      units: "48 Units",
      year: "2025",
      description: "Modern apartments with world-class amenities in IT corridor."
    },
    {
      id: 5,
      title: "HSG Tech Center",
      type: "commercial",
      status: "completed",
      location: "Whitefield, Bangalore",
      image: "https://images.pexels.com/photos/2631613/pexels-photo-2631613.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      units: "28 Offices",
      year: "2023",
      description: "Premium office spaces designed for technology companies and startups."
    },
    {
      id: 6,
      title: "HSG Organic Estates",
      type: "farming",
      status: "ongoing",
      location: "Mysore Road, Bangalore",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      units: "75 Plots",
      year: "2024",
      description: "Organic farming initiative promoting sustainable agriculture practices."
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800';
      case 'upcoming':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleProjectClick = (projectId: string | number) => {
    if (onProjectView && typeof projectId === 'string') {
      onProjectView(projectId);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full text-amber-800 text-sm font-medium mb-4">
            <Building className="h-4 w-4" />
            <span>Our Projects</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Delivering <span className="text-amber-600">Excellence</span> Across Sectors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential complexes to commercial hubs and sustainable farming initiatives, 
            explore our diverse portfolio of successful projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'all', label: 'All Projects', icon: Building },
            { id: 'residential', label: 'Residential', icon: Building },
            { id: 'commercial', label: 'Commercial', icon: Building },
            { id: 'farming', label: 'Farming', icon: Building }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === id
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                    {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{project.units}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <button 
                    className="text-amber-600 font-medium text-sm hover:text-amber-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project.id);
                    }}
                  >
                    View Details
                  </button>
                  <ChevronRight className="h-4 w-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Invest in Your Future?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our community of 106+ satisfied investors and explore upcoming projects 
              that deliver consistent returns and long-term value.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
              Contact Our Team
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;