import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, ChevronRight, Filter } from 'lucide-react';

const Events: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: "HSG Projects Annual Investor Meet 2024",
      type: "investor-meet",
      date: "2024-03-15",
      time: "10:00 AM - 4:00 PM",
      location: "The Leela Palace, Bangalore",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      attendees: 150,
      status: "completed",
      description: "Annual gathering of investors to review performance, discuss upcoming projects, and celebrate achievements.",
      highlights: [
        "Project performance review",
        "New project launches",
        "Investor recognition ceremony",
        "Networking dinner"
      ]
    },
    {
      id: 2,
      title: "Sustainable Construction Workshop",
      type: "workshop",
      date: "2024-02-20",
      time: "9:00 AM - 1:00 PM",
      location: "HSG Projects Office, Jayanagar",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      attendees: 45,
      status: "completed",
      description: "Educational workshop on sustainable construction practices and green building technologies.",
      highlights: [
        "Green building certification process",
        "Sustainable materials showcase",
        "Cost-benefit analysis",
        "Expert panel discussion"
      ]
    },
    {
      id: 3,
      title: "HSG Vista Apartments Groundbreaking Ceremony",
      type: "project-launch",
      date: "2024-01-10",
      time: "11:00 AM - 2:00 PM",
      location: "Electronic City, Bangalore",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      attendees: 80,
      status: "completed",
      description: "Official groundbreaking ceremony for HSG Vista Apartments with investors and stakeholders.",
      highlights: [
        "Project overview presentation",
        "Site blessing ceremony",
        "Investor interaction",
        "Media coverage"
      ]
    },
    {
      id: 4,
      title: "Real Estate Investment Seminar",
      type: "seminar",
      date: "2024-04-25",
      time: "2:00 PM - 6:00 PM",
      location: "ITC Gardenia, Bangalore",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      attendees: 200,
      status: "upcoming",
      description: "Comprehensive seminar on real estate investment strategies and market trends in Bangalore.",
      highlights: [
        "Market analysis and trends",
        "Investment strategies",
        "Tax benefits and planning",
        "Q&A with experts"
      ]
    },
    {
      id: 5,
      title: "Organic Farming Success Stories",
      type: "workshop",
      date: "2024-05-15",
      time: "10:00 AM - 3:00 PM",
      location: "HSG Organic Estates, Mysore Road",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      attendees: 60,
      status: "upcoming",
      description: "Field visit and workshop showcasing successful organic farming practices and returns.",
      highlights: [
        "Farm tour and demonstration",
        "Organic certification process",
        "Return on investment analysis",
        "Farmer interaction session"
      ]
    },
    {
      id: 6,
      title: "HSG Projects 20th Anniversary Celebration",
      type: "celebration",
      date: "2024-06-10",
      time: "6:00 PM - 10:00 PM",
      location: "Taj West End, Bangalore",
      image: "https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      attendees: 300,
      status: "upcoming",
      description: "Grand celebration marking 20 years of excellence in real estate development and investor trust.",
      highlights: [
        "Company journey showcase",
        "Investor appreciation awards",
        "Cultural performances",
        "Gala dinner"
      ]
    }
  ];

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.type === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'investor-meet':
        return 'bg-purple-100 text-purple-800';
      case 'workshop':
        return 'bg-amber-100 text-amber-800';
      case 'project-launch':
        return 'bg-blue-100 text-blue-800';
      case 'seminar':
        return 'bg-green-100 text-green-800';
      case 'celebration':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const upcomingEvents = events.filter(event => event.status === 'upcoming').length;
  const completedEvents = events.filter(event => event.status === 'completed').length;
  const totalAttendees = events.reduce((sum, event) => sum + event.attendees, 0);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full text-blue-800 text-sm font-medium mb-4">
            <Calendar className="h-4 w-4" />
            <span>Events & Activities</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Events</span> & Workshops
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with HSG Projects through our regular events, workshops, and celebrations. 
            Join us for investor meets, educational seminars, and project launches.
          </p>
        </div>

        {/* Event Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{upcomingEvents}</div>
            <div className="text-gray-600 text-sm">Upcoming Events</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{totalAttendees}+</div>
            <div className="text-gray-600 text-sm">Total Attendees</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{completedEvents}</div>
            <div className="text-gray-600 text-sm">Events Completed</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'all', label: 'All Events' },
            { id: 'investor-meet', label: 'Investor Meets' },
            { id: 'workshop', label: 'Workshops' },
            { id: 'project-launch', label: 'Project Launches' },
            { id: 'seminar', label: 'Seminars' },
            { id: 'celebration', label: 'Celebrations' }
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === id
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(event.type)}`}>
                    {event.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>{event.attendees} Attendees</span>
                  </div>
                </div>

                {/* Event Highlights */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Event Highlights</h4>
                  <ul className="space-y-1">
                    {event.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-gray-600">Status: </span>
                    <span className={`font-semibold ${event.status === 'upcoming' ? 'text-blue-600' : 'text-green-600'}`}>
                      {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                    </span>
                  </div>
                  <button className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors flex items-center">
                    {event.status === 'upcoming' ? 'Register Now' : 'View Details'}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Don't Miss Our Upcoming Events</h3>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Stay updated with our latest events and workshops. Join our community of investors 
            and industry professionals for networking and learning opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              View Event Calendar
            </button>
            <button className="px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;