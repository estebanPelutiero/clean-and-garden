import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="bg-[url('./assets/imgs/HeroImg.webp')] bg-cover bg-center z-[-1] h-[90vh] lg:h-[100vh]">
      <div className="overflow-x-hidden absolute z-0 w-full h-[90vh] lg:h-[100vh] backdrop-brightness-[.4] lg:backdrop-brightness-100 lg:bg-gradient-to-r from-blackbg/70 to-black/20"></div>
      <section id="home" className="relative z-10 h-full flex items-center mt-16 mx-auto px-4 md:px-8 lg:px-0 lg:max-w-[1120px] font-urbanist">
          <div className="md:w-[65%] lg:w-[56%]">
            <div className="mb-8">
              <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-semibold">
                Cuidamos <br /> <span className="text-[#889C39]">tus espacios</span>
              </h1>
            </div>

            <div>
              <p className="text-white text-base md:text-xl mb-10">
                Más de 5 años en el sector de limpieza integral y mantenimiento de
                espacios verdes de calidad. <br /> Nos especializamos en ofrecer un
                servicio único, caraterizado por un trato personalizado para cada cliente.
              </p>
              <Link
              smooth={true}
              to="servicios"
              offset={-100}
              duration={1300}>
                <button className="text-lg tracking-wide font-semibold text-white bg-[#889C39] px-8 py-2 lg:px-9 lg:py-[10px] rounded-lg shadow-lg">Ver Servicios</button>
              </Link>
            </div>
          </div>
      </section>
    </div>
  );
};

export default Hero;
