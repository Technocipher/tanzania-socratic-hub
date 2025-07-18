import React from 'react';
import { ExternalLink, Users, BookOpen, Award, UserPlus } from 'lucide-react';

const HomePage = () => {
  const handleJoinAssociation = () => {
    window.open('https:                                                                
  };

  const handleCheckMembership = () => {
    window.open('https://rococo-paprenjak-bc8e21.netlify.app/', '_blank');
  };

  return (
    // ... existing code ...

    {/* Call to Action */}
    <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Join Our Educational Community?
        </h2>
        <p className="text-xl mb-8 text-green-100">
          Connect with fellow educators and students. Access quality Geography materials and examinations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleJoinAssociation}
            className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Users className="mr-2" size={24} />
            Join Our WhatsApp Group
            <ExternalLink className="ml-2" size={20} />
          </button>
          <button
            onClick={() => window.location.hash = '#register'}
            className="inline-flex items-center px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white"
          >
            <UserPlus className="mr-2" size={24} />
            Become a Member
          </button>
          <button
            onClick={handleCheckMembership}
            className="inline-flex items-center px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white"
          >
            Check Membership & Payment Status
          </button>
        </div>
      </div>
    </section>

    // ... existing code ...
  );
};

export default HomePage;
