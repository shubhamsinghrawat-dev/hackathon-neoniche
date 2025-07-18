import React, { useState } from 'react';
import TeamCard from './TeamCard';
import dummyImg from '../../assets/images/dummy-img.png';

const panelMembers = [
  { name: 'Nishu Goyal ', title: 'Chief Technology Officer', image: dummyImg },
  { name: 'Abhishek Bharti ', title: 'SVP of Technology', image: dummyImg },
  { name: 'Bharat Bhatia', title: 'Chief Marketing Officer', image: dummyImg },
  { name: 'Apoorv Kalra', title: 'Chief Product Officer', image: dummyImg },
];

const juryMembers = [
  { name: 'Anjali Jain', title: 'Project Manager', image: dummyImg },
  { name: 'Rohit Bansal', title: 'Product Owner', image: dummyImg },
  { name: 'Sneha Arora', title: 'Strategy Head', image: dummyImg },
  { name: 'Vivek Agarwal', title: 'Design Lead', image: dummyImg },
];

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('panel');

  const members = activeTab === 'panel' ? panelMembers : juryMembers;

  return (
    <section className="tabs-section">
      <div className="tabs">
        <button
          className={activeTab === 'panel' ? 'active' : ''}
          onClick={() => setActiveTab('panel')}
        >
          Jury
        </button>
        <button
          className={activeTab === 'jury' ? 'active' : ''}
          onClick={() => setActiveTab('jury')}
        >
          Organizing Committee
        </button>
      </div>

      <div className="cards-grid mt-5">
        {members.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            title={member.title}
            image={member.image}
            variant={index % 2 === 0 ? 'red' : 'orange'}
          />
        ))}
      </div>
    </section>
  );
};

export default TabsSection;
