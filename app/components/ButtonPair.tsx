'use client';

import React, { useState } from 'react';
import { useRouter } from "next/navigation";

export default function ButtonPair() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isYesButtonBigger, setIsYesButtonBigger] = useState(false);
  const router = useRouter();

  // Function to calculate a random position for the "No" button
  const getRandomPosition = () => {
    const offset = 10; // Minimum margin
    const containerWidth = 300; // Approximate width of the button container
    const containerHeight = 50; // Approximate height of the button container

    const randomX = Math.floor(Math.random() * (containerWidth - offset));
    const randomY = Math.floor(Math.random() * (containerHeight - offset));

    return { x: randomX, y: randomY };
  };

  // Handle "No" button click
  const handleNoButtonClick = () => {
    const newPosition = getRandomPosition();
    setNoButtonPosition(newPosition);
    setIsYesButtonBigger(true);
  };

  // Handle "Yes" button click
  const handleYesButtonClick = () => {
    router.push("/planning"); // Placeholder for redirection logic
  };

  return (
    <div className="flex justify-end space-x-4 mt-4 relative">
      {/* "Yes" Button */}
      <button
        className={`yes-button px-6 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition duration-300 ${
          isYesButtonBigger ? 'scale-125' : ''
        }`}
        onClick={handleYesButtonClick}
      >
        Cóa
      </button>

      {/* "No" Button */}
      <button
        className="no-button px-6 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition duration-300"
        style={{
          transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
        }}
        onClick={handleNoButtonClick}
      >
        Hong...
      </button>
    </div>
  );
}
