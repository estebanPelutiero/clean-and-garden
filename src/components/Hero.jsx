import React from "react";

const Hero = () => {
  return (
    <div className="bg-[url('./assets/imgs/heroImg.jpg')] bg-cover bg-center z-[-1] h-[70vh] lg:h-[100vh]">
      <div className="absolute z-0 w-full h-[70vh] lg:h-[100vh] backdrop-brightness-[.3] lg:backdrop-brightness-100 lg:bg-gradient-to-r from-blackbg/80 to-black/20"></div>
      <section className="relative z-10 h-full flex items-center mt-20 mx-auto px-4 md:px-8 lg:px-0 lg:max-w-[1120px] font-urbanist">
          <div className="lg:w-1/2">
            <div className="mb-8">
              <h1 className="text-white text-6xl lg:text-8xl font-semibold">
                Cuidamos <br /> <span className="text-green">tus espacios</span>
              </h1>
            </div>

            <div>
              <p className="text-white text-base md:text-lg mb-10">
                Más de <span className="text-white">5 años</span> en el sector de limpieza integral y mantenimiento de
                espacios verdes <span className="text-white">de calidad</span>. <br /> Nos especializamos en ofrecer un
                <span className="text-white"> servicio único</span>, caraterizado por un trato personalizado <span className="text-white">para cada
                cliente</span>.
              </p>
              <button className="text-base font-medium text-white bg-green px-8 py-2 rounded-lg shadow-lg">Ver Servicios</button>
            </div>
          </div>
      </section>
    </div>
  );
};

export default Hero;
