import React from 'react';
import { Users, Award, Briefcase, Mail, Phone, Linkedin } from 'lucide-react';

const Directors: React.FC = () => {
  const directors = [
    {
      id: 1,
      name: "Suraj Budgiri Krishnamurthy",
      position: "Managing Director & Founder",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      experience: "20+ Years",
      specialization: "Real Estate Development & Investment Strategy",
      description: "Visionary leader who founded HSG Projects in 2005 with a commitment to delivering consistent returns for investors. Under his leadership, the company has grown from a 200 sq ft office to a 2,000 sq ft operation with 15+ successful projects.",
      achievements: [
        "Founded HSG Projects in 2005",
        "Successfully delivered 15+ projects",
        "Built trust with 106+ investors",
        "Expanded from 200 sq ft to 2,000 sq ft office"
      ],
      contact: {
        email: "hsgprojects@yahoo.co.in",
        phone: "9844028280"
      }
    },
    {
      id: 2,
      name: "Rajesh Kumar Sharma",
      position: "Director - Operations",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      experience: "15+ Years",
      specialization: "Project Management & Quality Control",
      description: "Experienced operations director ensuring seamless project execution and maintaining HSG's commitment to quality. Oversees all construction activities and vendor relationships.",
      achievements: [
        "Managed 10+ residential projects",
        "Implemented quality control systems",
        "Reduced project delivery time by 20%",
        "Established vendor network across Bangalore"
      ],
      contact: {
        email: "operations@hsgprojects.com",
        phone: "9844028281"
      }
    },
    {
      id: 3,
      name: "Priya Menon",
      position: "Director - Finance & Investor Relations",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      experience: "12+ Years",
      specialization: "Financial Planning & Investor Management",
      description: "Financial expert managing investor relations and ensuring transparent financial practices. Responsible for maintaining strong relationships with our 106+ investors.",
      achievements: [
        "Managed ₹50Cr+ in investments",
        "Maintained 95% investor retention rate",
        "Implemented transparent reporting systems",
        "Developed investor communication protocols"
      ],
      contact: {
        email: "finance@hsgprojects.com",
        phone: "9844028282"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full text-amber-800 text-sm font-medium mb-4">
            <Users className="h-4 w-4" />
            <span>Leadership Team</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-amber-600">Directors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced leadership team brings together decades of expertise in real estate development, 
            project management, and investor relations to deliver exceptional results.
          </p>
        </div>

        {/* Directors Grid */}
        <div className="space-y-12">
          {directors.map((director, index) => (
            <div 
              key={director.id} 
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Director Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={director.image}
                      alt={director.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-600">{director.experience}</div>
                      <div className="text-sm text-gray-600">Experience</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Director Information */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{director.name}</h3>
                    <p className="text-xl text-amber-600 font-semibold mb-4">{director.position}</p>
                    <div className="inline-flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                      <Briefcase className="h-4 w-4" />
                      <span>{director.specialization}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-lg">{director.description}</p>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Award className="h-5 w-5 text-amber-600 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {director.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h4>
                    <div className="space-y-3">
                      <a 
                        href={`mailto:${director.contact.email}`}
                        className="flex items-center space-x-3 text-gray-600 hover:text-amber-600 transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                        <span>{director.contact.email}</span>
                      </a>
                      <a 
                        href={`tel:${director.contact.phone}`}
                        className="flex items-center space-x-3 text-gray-600 hover:text-amber-600 transition-colors"
                      >
                        <Phone className="h-5 w-5" />
                        <span>{director.contact.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Leadership Stats */}
        <div className="mt-20 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Leadership Excellence</h3>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Our directors bring together a combined experience of 47+ years in real estate, 
              ensuring every project meets the highest standards of quality and investor satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">47+</div>
              <div className="text-amber-100">Combined Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-amber-100">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">106+</div>
              <div className="text-amber-100">Investors Managed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₹50Cr+</div>
              <div className="text-amber-100">Investments Handled</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directors;