import React from 'react';

const TeamCard = ({ name, title, image, variant }) => {
  return (
    <div className="team-card">
      <img src={image} alt={name} className="team-card-img" />
      <div className={`team-card-body ${variant}`}>
        <h5>{name}</h5>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default TeamCard;
