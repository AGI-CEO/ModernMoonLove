const Hero = () => {
  return (
    <>
      <div
        className="hero flex h-screen flex-col items-center justify-center bg-cover bg-center object-fill px-10 py-24 text-white shadow-2xl"
        style={{
          fontSize: '1em',
          backgroundImage: 'url(/img/modernmoonlove.png)',
          maxHeight: '50vh',
          backgroundSize: '50vw', // or specify a certain width and height like '500px 300px'
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat' // add this line
        }}
      >
        <h1 className="mb-4 rounded-lg bg-white bg-opacity-80 p-2 text-4xl font-bold">
          Enchanting Boho Styles Meet Playful Charm!
        </h1>
        <p className="rounded-lg bg-white bg-opacity-80 p-2 text-xl">
          Explore our modern boho attire for children, crafted with love.
        </p>
      </div>
    </>
  );
};

export default Hero;
