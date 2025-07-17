import React, { useState } from 'react'; import { Users, School, Search, MapPin, User, Award, Star } from 'lucide-react';

const MembersPage = () => { const [searchQuery, setSearchQuery] = useState('');

const members = [ { id: 1, name: 'Mwl. Daudi Musula Manumba', schools: 'Nyankumbu Girls SS', role: 'EXAMINATION COORDINATOR', about: 'Professional Geography teacher with extensive experience in secondary education. Has taught at multiple institutions including Chato SS, Janeth Magufuli Girls SS, and Nyankumbu Girls SS, bringing years of expertise in Geography education and examination coordination.' }, { id: 2, name: 'Mwl. Baluhya Mbonge', schools: 'Muungano Boys SS' }, { id: 3, name: 'Mwl. Mapambano Muhike', schools: 'Nyankumbu Girls SS' }, { id: 4, name: 'Mwl. Hassan L', schools: 'Chato Technical SS' }, { id: 5, name: 'Mwl. Lameck Mubilizi', schools: 'Muungano Boys SS' }, { id: 6, name: 'Jastine J', schools: 'Muungano Boys SS' }, { id: 7, name: 'Lazaro Wilson', schools: 'Dr Olsen SS' }, { id: 8, name: 'Nestory Ernest', schools: 'Kagango SS' }, { id: 9, name: 'Dalton Kawiche', schools: 'Carmel Mount Girls SS' }, { id: 10, name: 'Kastory Epimack Maligite', schools: 'Lucas Malia SS' }, { id: 11, name: 'John Mgina', schools: 'Mpemba SS' }, { id: 12, name: 'Omary Jalali Mombo', schools: 'Arusha Science SS' }, { id: 13, name: 'Elizabeth Justine Mlazi', schools: 'Kifungilo Girls SS' }, { id: 14, name: 'Shukuru Sizya Kadondo', schools: 'Chato Technical SS' }, { id: 15, name: 'Winfrida Daudi Kirai', schools: 'Chato Technical SS' }, { id: 16, name: 'Fr. Prophilius', schools: 'Rubya Seminary' }, { id: 17, name: 'Makame Mwadini', schools: 'High View School of Zanzibar' }, { id: 18, name: 'Pontien Tushabe', schools: 'Bukama SS' }, { id: 19, name: 'Samson Paulo Kususiya', schools: 'Geita Adventist SS & Mwatulole SS' }, { id: 20, name: 'Juma J.', schools: 'Jikomboe High School' }, { id: 21, name: 'Jimmy Mrema', schools: 'Korona SS' }, { id: 22, name: 'Dk. Mmari', schools: 'Korona SS' }, { id: 23, name: 'Fidelis Ngowi', schools: 'Marangu SS' }, { id: 24, name: 'Amos A', schools: 'Beroya SS' }, { id: 25, name: 'Flourece Kahima', schools: 'Nyantakara SS' }, { id: 26, name: 'Jonas Bichwa', schools: 'Mwilamvya SS' }, { id: 27, name: 'Mussa Choyo', schools: 'Dr. Samia Suluhu Hassan Girls SS' }, { id: 28, name: 'Abdulasaid Bashiru', schools: 'Laureate School of Zanzibar' }, { id: 29, name: 'Detrick Buberwa', schools: 'Rugambwa Girls SS' }, { id: 30, name: 'Theodory Fulgence', schools: 'Mwisi SS' } ];

const filteredMembers = members.filter(member => member.name.toLowerCase().includes(searchQuery.toLowerCase()) || member.schools.toLowerCase().includes(searchQuery.toLowerCase()) || (member.role && member.role.toLowerCase().includes(searchQuery.toLowerCase())) );

const statistics = [ { icon: Users, title: 'Total Members', value: '30', description: 'Active TASSA members' }, { icon: School, title: 'Schools Represented', value: '25+', description: 'Secondary schools' }, { icon: Award, title: 'Excellence Network', value: '100%', description: 'Committed to quality education' } ];

return ( <div className="min-h-screen py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Existing content... */}

{/* Series Examination Fees Section */}
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Series Examinations Fees</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">School Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher's Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Series No 1</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Series No 2</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Series No 3</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Series No 4</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Series No 5 - 8</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remarks</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap"><input type="text" className="border rounded px-2 py-1 w-full" placeholder="School Name" /></td>
              <td className="px-6 py-4 whitespace-nowrap"><input type="text" className="border rounded px-2 py-1 w-full" placeholder="Teacher Name" /></td>
              <td className="px-6 py-4 whitespace-nowrap"><input type="number" className="border rounded px-2 py-1 w-full" /></td>
              <td className="px-6 py-4 whitespace-nowrap"><input type="number" className="border rounded px-2 py-1 w-full" /></td>
              <td className="px-6 py-4 whitespace-nowrap"><input type="number" className="border rounded px-2 py-1 w-full" /></td>
              <td className="px-6 py-4 whitespace-nowrap"><input type="number" className="border rounded px-2 py-1 w-full" /></td>
              <td className="px-6 py-4 whitespace-nowrap"><input type="number" className="border rounded px-2 py-1 w-full" /></td>
              <td className="px-6 py-4 whitespace-nowrap"><input type="text" className="border rounded px-2 py-1 w-full" placeholder="Remarks" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

); };

export default MembersPage;

