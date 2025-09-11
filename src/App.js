import React from 'react';
import Navbar from './components/Navbar';
import Hello from './components/Hello';
import Section1 from './components/Section1';
import Section2 from './components/Section2'; // Assuming Section2 is the skills section
import Section3 from './components/Section3'; // Assuming Section3 is another section you want to include
import SectionContact from './components/Section4';
import Footer from './components/Footer'; // Assuming you have a Footer component
export default function App() {
  return (
    <>
      <Navbar />
      
      <Hello />
      <Section1 />
      <Section2 /> 
      <Section3 />
       <SectionContact />
      <Footer /> 
      {/* Add any other sections you want to include here */}
    </>
  );
}
