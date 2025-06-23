import React, { useState } from 'react';
import { ArrowLeft, MapPin, Calendar, Users, Building, CheckCircle, Star, Phone, Mail, ChevronRight, ChevronLeft, X, ZoomIn } from 'lucide-react';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onBack }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Project data - in a real app, this would come from an API or database
  const projectsData: { [key: string]: any } = {
    'hsg-prime-residency': {
      id: 'hsg-prime-residency',
      title: "HSG Prime Residency",
      type: "Residential",
      status: "completed",
      location: "Jayanagar, Bangalore",
      images: [
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
      ],
      units: 24,
      year: "2023",
      duration: "18 months",
      satisfaction: 98,
      description: "HSG Prime Residency stands as a testament to luxury living in the heart of Jayanagar. This premium residential complex features 24 meticulously designed units with modern amenities and world-class facilities.",
      highlights: [
        "Completed 2 months ahead of schedule",
        "100% unit sales within 6 months",
        "RERA certified project",
        "Vastu compliant design",
        "Earthquake resistant structure",
        "Premium location advantage"
      ],
      amenities: [
        "Swimming Pool", "Gymnasium", "Children's Play Area", "24/7 Security",
        "Power Backup", "Covered Parking", "Landscaped Gardens", "Clubhouse",
        "Intercom Facility", "Rainwater Harvesting", "Solar Water Heating", "Lift"
      ],
      specifications: {
        "Total Area": "2.5 Acres",
        "Built-up Area": "1200-1800 sq ft",
        "Floors": "G+4",
        "Unit Types": "2BHK, 3BHK",
        "Parking": "Covered parking for each unit",
        "Approval": "RERA, BBMP, BESCOM"
      },
      testimonials: [
        {
          name: "Rajesh Kumar",
          designation: "Software Engineer",
          content: "HSG delivered exactly what they promised. The quality is exceptional and we're very satisfied with our investment.",
          rating: 5
        },
        {
          name: "Priya Sharma",
          designation: "Business Owner",
          content: "The location is perfect and the amenities are world-class. Very satisfied with the overall experience.",
          rating: 5
        }
      ]
    },
    'hsg-commercial-hub': {
      id: 'hsg-commercial-hub',
      title: "HSG Commercial Hub",
      type: "Commercial",
      status: "ongoing",
      location: "BTM Layout, Bangalore",
      images: [
        "https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "https://images.pexels.com/photos/2631613/pexels-photo-2631613.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
      ],
      units: 32,
      year: "2024",
      duration: "24 months",
      progress: 45,
      description: "HSG Commercial Hub is a state-of-the-art commercial complex designed for modern businesses. Located in the prime area of BTM Layout, it offers premium office spaces with world-class amenities.",
      highlights: [
        "Prime location in BTM Layout",
        "Grade A office spaces",
        "Metro connectivity advantage",
        "Green building certified",
        "Flexible floor plans",
        "High-speed internet ready"
      ],
      amenities: [
        "High-speed Elevators", "Central AC", "Conference Rooms", "Cafeteria",
        "Ample Parking", "24/7 Security", "Power Backup", "Fire Safety Systems",
        "CCTV Surveillance", "Reception Area", "Maintenance Services", "Wi-Fi Ready"
      ],
      specifications: {
        "Total Area": "3.2 Acres",
        "Built-up Area": "800-2500 sq ft",
        "Floors": "G+8",
        "Unit Types": "Office Spaces, Retail Shops",
        "Parking": "Multi-level parking",
        "Approval": "RERA, BBMP, Fire Department"
      },
      testimonials: [
        {
          name: "Meera Nair",
          designation: "Real Estate Investor",
          content: "Strategic location and quality construction made this project very promising. Very satisfied with the progress so far.",
          rating: 5
        }
      ]
    },
    'hsg-green-farms': {
      id: 'hsg-green-farms',
      title: "HSG Green Farms",
      type: "Farming",
      status: "completed",
      location: "Kanakapura Road, Bangalore",
      images: [
        "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "https://images.pexels.com/photos/2518861/pexels-photo-2518861.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "https://images.pexels.com/photos/2518863/pexels-photo-2518863.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
      ],
      units: 50,
      year: "2022",
      duration: "12 months",
      satisfaction: 100,
      description: "HSG Green Farms represents our commitment to sustainable agriculture and environmental responsibility. This organic farming project offers excellent quality while promoting eco-friendly farming practices.",
      highlights: [
        "Organic certification achieved",
        "Water source secured for 20 years",
        "Direct market tie-ups established",
        "Highest satisfaction in farming category",
        "Sustainable farming practices",
        "Expert farm management"
      ],
      amenities: [
        "Drip Irrigation System", "Organic Certification", "Farm House", "Storage Facility",
        "Transportation Access", "Expert Guidance", "Water Bore Wells", "Fencing",
        "Soil Testing Lab", "Composting Unit", "Equipment Storage", "Caretaker Facility"
      ],
      specifications: {
        "Total Area": "25 Acres",
        "Plot Size": "0.5 Acres each",
        "Soil Type": "Red soil, ideal for organic farming",
        "Water Source": "Bore wells + rainwater harvesting",
        "Crops": "Vegetables, fruits, grains",
        "Certification": "Organic certification from APEDA"
      },
      testimonials: [
        {
          name: "Arun Krishnan",
          designation: "Agricultural Investor",
          content: "The farming project has been incredibly rewarding. The organic produce quality is excellent and management is professional.",
          rating: 5
        }
      ]
    }
  };

  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h2>
          <button
            onClick={onBack}
            className="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

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

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Full Screen Image Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setIsGalleryOpen(false)}
            className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="w-full h-full flex items-center justify-center p-8">
            <img
              src={project.images[selectedImageIndex]}
              alt={`${project.title} - Image ${selectedImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {project.images.map((_: string, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === selectedImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="inline-flex items-center text-gray-600 hover:text-amber-600 transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
              <div className="flex items-center space-x-4 mt-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(project.type)}`}>
                  {project.type}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-amber-600">{project.units} Units</div>
              <div className="text-sm text-gray-600">Total Units</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Image Section */}
        <div className="mb-8">
          <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
            <img
              src={project.images[selectedImageIndex]}
              alt={`${project.title} - Main Image`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            
            {/* Image Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Zoom Button */}
            <button
              onClick={() => setIsGalleryOpen(true)}
              className="absolute top-4 right-4 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ZoomIn className="h-5 w-5" />
            </button>

            {/* Project Info Overlay */}
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center space-x-4 mb-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{project.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">{project.units} Units</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{project.year}</span>
                </div>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
              {selectedImageIndex + 1} / {project.images.length}
            </div>
          </div>

          {/* Image Thumbnails */}
          <div className="flex space-x-3 mt-4 overflow-x-auto pb-2">
            {project.images.map((image: string, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                  index === selectedImageIndex 
                    ? 'ring-3 ring-amber-500 scale-105' 
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={image}
                  alt={`${project.title} - Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Description */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{project.description}</p>
            </div>

            {/* Key Highlights */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Amenities & Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.amenities.map((amenity: string, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                    <span className="text-sm font-medium text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Specifications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(project.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-xl">
                    <span className="font-medium text-gray-900">{key}:</span>
                    <span className="text-gray-700 font-semibold">{value as string}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            {project.testimonials && project.testimonials.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What Investors Say</h2>
                <div className="space-y-6">
                  {project.testimonials.map((testimonial: any, index: number) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4 text-lg">"{testimonial.content}"</p>
                      <div className="text-sm">
                        <span className="font-semibold text-gray-900">{testimonial.name}</span>
                        <span className="text-gray-600"> • {testimonial.designation}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Performance Metrics */}
            {project.status === 'completed' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Project Metrics</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">{project.satisfaction}%</div>
                    <div className="text-sm text-gray-600">Customer Satisfaction</div>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-1">{project.duration}</div>
                    <div className="text-sm text-gray-600">Project Duration</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">{project.year}</div>
                    <div className="text-sm text-gray-600">Completion Year</div>
                  </div>
                </div>
              </div>
            )}

            {/* Progress for Ongoing Projects */}
            {project.status === 'ongoing' && project.progress && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Project Progress</h3>
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-3">
                    <span>Completion</span>
                    <span className="font-semibold">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div 
                      className="h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-1000"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-600">{project.duration}</div>
                  <div className="text-sm text-gray-600">Expected Duration</div>
                </div>
              </div>
            )}

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Get More Information</h3>
              <div className="space-y-4">
                <a
                  href="tel:9844028280"
                  className="flex items-center space-x-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-md transition-all duration-300 group"
                >
                  <div className="p-2 bg-blue-500 rounded-lg group-hover:scale-110 transition-transform">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Call Us</div>
                    <div className="text-sm text-gray-600">9844 028 280</div>
                  </div>
                </a>
                <a
                  href="mailto:hsgprojects@yahoo.co.in"
                  className="flex items-center space-x-3 p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl hover:shadow-md transition-all duration-300 group"
                >
                  <div className="p-2 bg-amber-500 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email Us</div>
                    <div className="text-sm text-gray-600">hsgprojects@yahoo.co.in</div>
                  </div>
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-3">Interested in Similar Projects?</h3>
              <p className="text-amber-100 text-sm mb-6">
                Explore our current opportunities and join our community of satisfied investors.
              </p>
              <button 
                onClick={onBack}
                className="w-full bg-white text-amber-600 font-semibold py-3 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                View Current Projects
                <ChevronRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;