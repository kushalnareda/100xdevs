import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import Card from './components/Card';
import './App.css';
import './assets/k.png';

function App() {
  const personalData ={
    name : 'Kushal Singh',
    description: 'likes to make movies',
    socialMedia : {
      linkedin : 'https://www.linkedin.com/in/kushal-singh-nareda-4a4890213/',
      twitter : 'https://twitter.com/kushal_nar12882'
    },
    interests : ['Filmmaking','Development','Gym'],
    imageSrc: './assets/k.png',
  };

  return (
    <div className="App">
      <Card 
        name={personalData.name}
        image = {personalData.imageSrc}
        description={personalData.description}
        socialMedia={personalData.socialMedia}
        interests={personalData.interests}
      />
    </div>
  )
}

export default App
