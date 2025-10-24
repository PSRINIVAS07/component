import React, { useState } from "react";
import Section from "../src/components/section.jsx";
import Card from "../src/components/card.jsx"

import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 font-sans p-4">
  
      <header className="text-center py-8 mb-8 border-b border-indigo-100">
        <h1 className="text-3xl font-extrabold text-indigo-600">
          Components
        </h1>
       
        
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        <Section>
          <Card 
            title="Card Title 1" 
            description="this is first card" 
          />
          <Card 
            title="Card Title 2" 
            description="this is second card" 
          />
          <Card 
            title="Card Title 3" 
            description="this is third card" 
          />
          
        </Section>
      </main>
    </div>
  );
}
