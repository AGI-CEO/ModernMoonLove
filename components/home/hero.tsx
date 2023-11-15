const Hero = () => {
  return (
    <>
      <div
        className="hero flex h-screen flex-col items-center justify-center bg-cover bg-center object-fill px-10 py-24 text-white shadow-2xl"
        style={{
          fontSize: '1em',
          backgroundImage: 'url(/img/modernmoonlove.png)',
          maxHeight: '50vh'
        }}
      >
        <h1 className="mb-4 text-4xl font-bold">
          Embrace the Moonlight with Modern Moon Love Apparel
        </h1>
        <p className="text-xl">Explore our modern boho attire for children, crafted with love.</p>
      </div>
    </>
  );
};

export default Hero;
