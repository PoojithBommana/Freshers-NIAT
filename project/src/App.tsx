import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ActivitiesSection } from './components/activities/ActivitiesSection';
import { Highlights } from './components/Highlights';
import { Gallery } from './components/Gallery';
import { Sponsors } from './components/Sponsors';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
     
      <Hero />
      <ActivitiesSection />
      <Highlights />
      <Gallery />
      {/* <Sponsors /> */}
      <FAQ />
     
    </div>
  );
}

export default App;