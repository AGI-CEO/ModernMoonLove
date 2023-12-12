'use client';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [backgroundSize, setBackgroundSize] = useState('50vw');

  useEffect(() => {
    setBackgroundSize(window.innerWidth <= 768 ? 'cover' : '50vw');
  }, []);
  return (
    <>
      <div
        className="hero flex h-screen flex-col items-center justify-center bg-cover bg-center object-fill px-10 py-24 text-white shadow-2xl"
        style={{
          fontSize: '1em',
          backgroundImage: 'url(/img/modernmoonlove.png)',
          maxHeight: '50vh',
          backgroundSize: backgroundSize,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat' // add this line
        }}
      >
        <h1 className="mb-4 rounded-lg bg-white bg-opacity-80 p-2 text-4xl font-bold">
          Enchanting Boho Styles Meet Playful Charm
        </h1>
      </div>
    </>
  );
};

export default Hero;
