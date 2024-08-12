import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import './index.css'; // Ensure Tailwind CSS is included
import './flip.css'; // Import the custom CSS file for flip effects

const App = () => {
  // Array of items with custom content for each card
  const [items, setItems] = useState(
    Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      front: `Front Content ${i + 1}`, // Replace with your front content
      back: `Back Content ${i + 1}`   // Replace with your back content
    }))
  );
  
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleMouseEnter = (index) => {
    setFlippedIndex(index);
  };

  const handleMouseLeave = () => {
    setFlippedIndex(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter items based on the search term
  const filteredItems = items.filter(item =>
    item.front.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      

      <div className='flex flex-wrap gap-4 p-3'>
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className='flip-container h-[200px] w-[250px] mx-[17px]'
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`flip-card ${flippedIndex === index ? 'rotate-y-180' : ''}`}>
              <div className='flip-card-front flex items-center justify-center bg-blue-500 text-white'>
                <p>{item.front}</p>
              </div>
              <div className='flip-card-back flex items-center justify-center bg-red-500 text-white rotate-y-180'>
                <p>{item.back}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default App;
