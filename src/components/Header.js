import React from "react";

const Header = () => {
  return (
    <header className="relative h-screen flex flex-col items-center justify-center text-white text-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ 
        backgroundImage: "url('https://source.unsplash.com/1600x900/?farm,agriculture')", 
        filter: "brightness(60%)" 
      }}></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4">Harvestify</h1>
        <p className="text-lg">A Smart Way to Improve Agriculture</p>
        
        {/* Questions */}
        <div className="mt-6 space-y-2">
          <p className="text-xl">🌱 Which crop should I grow?</p>
          <p className="text-xl">🌿 Which fertilizer is best?</p>
          <p className="text-xl">🌾 How to prevent crop diseases?</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
