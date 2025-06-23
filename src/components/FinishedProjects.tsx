import React, { useState } from 'react';
import { Building, MapPin, Calendar, Users, CheckCircle, Star, Award, ChevronRight } from 'lucide-react';

interface FinishedProjectsProps {
  onProjectView?: (projectId: string) => void;
}

const FinishedProjects: React.FC<FinishedProjectsProps> = ({ onProjectView }) => {
  const [filter, setFilter] = useState('all');

  const finishedProjects = [
    {
      id: 'hsg-prime-residency',
      title: "HSG Prime Residency",
      type: "residential",
      location: "Jayanagar, Bangalore",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      units: 24,
      completedYear: "2023",
      duration: "18 months",
      satisfaction: 98,
      description: "Luxury residential complex with modern amenities completed ahead of schedule.",
      highlights: [
        "Completed 2 months ahead of schedule",
        "100% unit sales within 6 months",
        "RERA certified project",
        "Excellent customer satisfaction"
      ],
      testimonial: {
        text: "HSG delivered exactly what they promised. The quality is exceptional and we're very satisfied.",
        author: "Rajesh Kumar",
        designation: "Investor"
      }
    },
    {
      id: 'hsg-tech-center',
      title: "HSG Tech Center",
      type: "commercial",
      location: "Whitefield, Bangalore",
      image: "https://images.pexels.com/photos/2631613/pexels-photo-2631613.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      units: 28,
      completedYear: "2023",
      duration: "24 months",
      satisfaction: 96,
      description: "Premium office spaces designed for technology companies and startups.",
      highlights: [
        "Green building certification",
        "100% occupancy within 3 months",
        "Premium rental yields achieved",
        "Award-winning architecture"
      ],
      testimonial: {
        text: "The commercial project exceeded all expectations. The location and quality attracted top-tier tenants immediately.",
        author: "Priya Sharma",
        designation: "Business Owner"
      }
    },
    {
      id: 'hsg-green-farms',
      title: "HSG Green Farms",
      type: "farming",
      location: "Kanakapura Road, Bangalore",
      image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      units: 50,
      completedYear: "2022",
      duration: "12 months",
      satisfaction: 100,
      description: "Sustainable farming project with organic certification and excellent yields.",
      highlights: [
        "Organic certification achieved",
        "Water source secured for 20 years",
        "Direct market tie-ups established",
        "Highest satisfaction in farming category"
      ],
      testimonial: {
        text: "The farming project has been incredibly rewarding. The organic produce quality is excellent and management is professional.",
        author: "Arun Krishnan",
        designation: "Agricultural Investor"
      }
    },
    {
      id: 'hsg-business-park',
      title: "HSG Business Park",
      type: "commercial",
      location: "Electronic City, Bangalore",
      image: "https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      units: 32,
      completedYear: "2022",
      duration: "20 months",
      satisfaction: 94,
      description: "Modern business park with state-of-the-art facilities in IT corridor.",
      highlights: [
        "Metro connectivity advantage",
        "IT companies as primary tenants",
        "Smart building features",
        "Excellent infrastructure"
      ],
      testimonial: {
        text: "Strategic location and quality construction made this project a huge success. Very satisfied with the outcome.",
        author: "Meera Nair",
        designation: "Real Estate Investor"
      }
    },
    {
      id: 'hsg-garden-homes',
      title: "HSG Garden Homes",
      type: "residential",
      location: "Sarjapur Road, Bangalore",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      units: 36,
      completedYear: "2021",
      duration: "22 months",
      satisfaction: 97,
      description: "Family-friendly residential project with extensive green spaces.",
      highlights: [
        "40% green space maintained",
        "Children-friendly amenities",
        "Vastu-compliant design",
        "Strong community formation"
      ],
      testimonial: {
        text: "Perfect family home with great community. The kids love the play areas and the quality is outstanding.",
        author: "Suresh Reddy",
        designation: "Family Investor"
      }
    },
    {
      id: 'hsg-organic-orchards',
      title: "HSG Organic Orchards",
      type: "farming",
      location: "Mysore Road, Bangalore",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      units: 40,
      completedYear: "2021",
      duration: "10 months",
      satisfaction: 99,
      description: "Fruit orchard project with premium organic produce and export quality.",
      highlights: [
        "Export quality certification",
        "Premium fruit varieties",
        "Drip irrigation system",
        "Highest satisfaction rating"
      ],
      testimonial: {
        text: "Amazing results from organic farming. The fruit quality is export-grade and the management is excellent.",
        author: "Lakshmi Devi",
        designation: "Agricultural Investor"
      }
    }
  ];

  const filteredProjects = filter === 'all' 
    ? finishedProjects 
    : finishedProjects.filter(project => project.type === filter);

  const getTypeColor = (type: string) => {
    switch (type) {
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

  const handleProjectClick = (projectId: string | number) => {
    if (onProjectView && typeof projectId === 'string') {
      onProjectView(projectId);
    }
  };

  const totalStats = {
    projects: finishedProjects.length,
    totalUnits: finishedProjects.reduce((sum, project) => sum + project.units, 0),
    avgSatisfaction: Math.round(finishedProjects.reduce((sum, project) => sum + project.satisfaction, 0) / finishedProjects.length)
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full text-green-800 text-sm font-medium mb-4">
            <CheckCircle className="h-4 w-4" />
            <span>Completed Projects</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Successfully <span className="text-green-600">Delivered</span> Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of completed projects that have delivered exceptional quality 
            and exceeded expectations across residential, commercial, and farming sectors.
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{totalStats.projects}</div>
            <div className="text-gray-600 text-sm">Completed Projects</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <Building className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{totalStats.totalUnits}</div>
            <div className="text-gray-600 text-sm">Total Units Delivered</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
              <Star className="h-6 w-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{totalStats.avgSatisfaction}%</div>
            <div className="text-gray-600 text-sm">Satisfaction Rate</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'residential', label: 'Residential' },
            { id: 'commercial', label: 'Commercial' },
            { id: 'farming', label: 'Farming' }
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === id
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
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
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(project.type)}`}>
                    {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-medium flex items-center">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Completed
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                    {project.completedYear}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{project.units} Units</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-1 gap-4 mb-4">
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-600">{project.satisfaction}%</div>
                    <div className="text-xs text-gray-600">Customer Satisfaction</div>
                    <div className="flex justify-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-3 w-3 ${i < Math.floor(project.satisfaction / 20) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Achievements</h4>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-gray-600">
                        <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700 italic mb-2">"{project.testimonial.text}"</p>
                  <div className="text-xs text-gray-600">
                    <span className="font-medium">{project.testimonial.author}</span>
                    <span className="text-gray-400"> • {project.testimonial.designation}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-gray-600">Completed: </span>
                    <span className="font-semibold text-gray-900">{project.completedYear}</span>
                  </div>
                  <button 
                    className="text-green-600 font-medium text-sm hover:text-green-700 transition-colors flex items-center"
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

        {/* Success Story CTA */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Join Our Success Story</h3>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            With 6 successfully completed projects and an average satisfaction rate of {totalStats.avgSatisfaction}%, 
            HSG Projects continues to deliver on its promises. Be part of our next success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              View Current Projects
            </button>
            <button className="px-8 py-4 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors">
              Download Success Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinishedProjects;