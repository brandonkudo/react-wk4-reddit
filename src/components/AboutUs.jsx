import React from 'react';
import Person from './Person';
import pictre from '../assets/images/pictre.jpg';
import picture from '../assets/images/picture2.jpg';

const masterPersonList = [
  {
    image: pictre,
    name: 'Valia',
    bio: 'lorem'
  },
  {
    image: picture,
    name: 'Brandon',
    bio: 'lorem'
  }
];

function AboutUs(){

  return (
    <div>
      {masterPersonList.map((person, index) =>
        <Person image={person.image}
          name={person.name}
          bio={person.bio}
          key={index}/>
      )}
    </div>
  );
}

export default AboutUs;
