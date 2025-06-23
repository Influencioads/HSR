import React, { useState } from 'react';
import { Briefcase, Users, TrendingUp, Award, MapPin, Clock, ChevronRight, Send } from 'lucide-react';

const Career: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null as File | null
  });

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Project Manager",
      department: "Operations",
      location: "Bangalore",
      type: "Full-time",
      experience: "5-8 years",
      salary: "₹8-12 LPA",
      description: "Lead and manage multiple real estate development projects from conception to completion.",
      requirements: [
        "Bachelor's degree in Civil Engineering or Construction Management",
        "5+ years of project management experience in real estate",
        "Strong knowledge of construction processes and regulations",
        "Excellent leadership and communication skills",
        "PMP certification preferred"
      ],
      responsibilities: [
        "Oversee project planning, execution, and delivery",
        "Coordinate with architects, contractors, and vendors",
        "Ensure projects meet quality standards and timelines",
        "Manage project budgets and resource allocation",
        "Maintain relationships with stakeholders and investors"
      ]
    },
    {
      id: 2,
      title: "Sales Executive",
      department: "Sales & Marketing",
      location: "Bangalore",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹4-6 LPA + Incentives",
      description: "Drive sales growth by building relationships with potential investors and promoting our projects.",
      requirements: [
        "Bachelor's degree in Business, Marketing, or related field",
        "2+ years of sales experience, preferably in real estate",
        "Strong interpersonal and negotiation skills",
        "Knowledge of Bangalore real estate market",
        "Proficiency in CRM software"
      ],
      responsibilities: [
        "Generate leads and convert prospects into investors",
        "Conduct site visits and project presentations",
        "Maintain customer relationships and provide after-sales support",
        "Achieve monthly and quarterly sales targets",
        "Participate in marketing events and exhibitions"
      ]
    },
    {
      id: 3,
      title: "Financial Analyst",
      department: "Finance",
      location: "Bangalore",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹6-9 LPA",
      description: "Analyze financial data, prepare reports, and support investment decision-making processes.",
      requirements: [
        "Bachelor's degree in Finance, Accounting, or Economics",
        "3+ years of financial analysis experience",
        "Strong analytical and Excel skills",
        "Knowledge of real estate financial modeling",
        "CFA or CA qualification preferred"
      ],
      responsibilities: [
        "Prepare financial models and investment analysis",
        "Monitor project profitability and cash flows",
        "Create investor reports and presentations",
        "Support budgeting and forecasting processes",
        "Ensure compliance with financial regulations"
      ]
    },
    {
      id: 4,
      title: "Civil Engineer",
      department: "Engineering",
      location: "Bangalore",
      type: "Full-time",
      experience: "2-5 years",
      salary: "₹5-8 LPA",
      description: "Oversee construction activities, ensure quality standards, and manage site operations.",
      requirements: [
        "Bachelor's degree in Civil Engineering",
        "2+ years of construction site experience",
        "Knowledge of building codes and regulations",
        "Strong problem-solving and technical skills",
        "Familiarity with construction software and tools"
      ],
      responsibilities: [
        "Monitor construction progress and quality",
        "Coordinate with contractors and subcontractors",
        "Ensure compliance with safety standards",
        "Review and approve construction drawings",
        "Resolve technical issues and challenges"
      ]
    },
    {
      id: 5,
      title: "Marketing Coordinator",
      department: "Marketing",
      location: "Bangalore",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹3-5 LPA",
      description: "Support marketing initiatives, manage digital campaigns, and coordinate promotional activities.",
      requirements: [
        "Bachelor's degree in Marketing, Communications, or related field",
        "1+ years of marketing experience",
        "Knowledge of digital marketing tools and platforms",
        "Creative thinking and content creation skills",
        "Strong organizational and project management abilities"
      ],
      responsibilities: [
        "Develop and execute marketing campaigns",
        "Manage social media presence and content",
        "Coordinate events and promotional activities",
        "Create marketing materials and brochures",
        "Track and analyze marketing performance metrics"
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with performance bonuses"
    },
    {
      icon: Award,
      title: "Career Growth",
      description: "Clear career progression paths with regular skill development programs"
    },
    {
      icon: Users,
      title: "Team Environment",
      description: "Collaborative work culture with supportive colleagues and mentorship"
    },
    {
      icon: Briefcase,
      title: "Work-Life Balance",
      description: "Flexible working hours and comprehensive leave policies"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setApplicationForm({
      ...applicationForm,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setApplicationForm({
        ...applicationForm,
        resume: e.target.files[0]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', applicationForm);
    // Reset form
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      resume: null
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full text-blue-800 text-sm font-medium mb-4">
            <Briefcase className="h-4 w-4" />
            <span>Career Opportunities</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our <span className="text-blue-600">Growing Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build your career with HSG Projects, where innovation meets opportunity. 
            Join a team that's shaping Bangalore's real estate landscape with integrity and excellence.
          </p>
        </div>

        {/* Company Culture Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">20+</div>
            <div className="text-gray-600 text-sm">Team Members</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">5+</div>
            <div className="text-gray-600 text-sm">Departments</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-amber-600 mb-1">18</div>
            <div className="text-gray-600 text-sm">Years Experience</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">95%</div>
            <div className="text-gray-600 text-sm">Employee Satisfaction</div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Why Work With Us?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Openings */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Current Openings</h3>
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="mb-4 lg:mb-0">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600 mb-1">{job.salary}</div>
                      <div className="text-sm text-gray-600">{job.experience}</div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{job.description}</p>

                  {selectedJob === job.id && (
                    <div className="border-t border-gray-100 pt-6 mt-6 space-y-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3">Requirements</h5>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3">Responsibilities</h5>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-6">
                    <button
                      onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                      className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors"
                    >
                      {selectedJob === job.id ? 'Show Less' : 'View Details'}
                    </button>
                    <button className="inline-flex items-center px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors">
                      Apply Now
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Apply for a Position</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={applicationForm.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={applicationForm.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={applicationForm.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                  Position Applied For *
                </label>
                <select
                  id="position"
                  name="position"
                  value={applicationForm.position}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select a position</option>
                  {jobOpenings.map((job) => (
                    <option key={job.id} value={job.title}>{job.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={applicationForm.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-8">5-8 years</option>
                  <option value="8+">8+ years</option>
                </select>
              </div>
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Resume *
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Submit Application
              <Send className="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Career;