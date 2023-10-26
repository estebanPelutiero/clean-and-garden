import React from "react";
import HeroImg from "../assets/imgs/HeroImg.jpg";
import Layout from "./Layout";

const Hero = () => {
  return (
    <Layout>
      <div className="mb-10 md:mb-24 text-center">
        <h1 className="hidden md:block text-6xl">
          Cuidamos <span className="text-green">tus espacios</span>
        </h1>
        <h1 className="md:hidden text-5xl">
          Cuidamos <br /> <span className="text-green">tus espacios</span>
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <img
          src={HeroImg}
          className="w-[36rem]"
          alt="Persona con guantes de goma preparada para ofrecer servicio de limpieza"
        />
        <div>
          <p className="text-black text-base md:text-lg mb-8">
            Más de <span className="text-green">5 años</span> en el sector de limpieza integral y mantenimiento de
            espacios verdes <span className="text-green">de calidad</span>. <br /> Nos especializamos en ofrecer un
            <span className="text-green"> servicio único</span>, caraterizado por un trato personalizado <span className="text-green">para cada
            cliente</span>.
          </p>
          <button className="text-base font-medium text-white bg-green px-8 py-2 rounded-lg">Ver Servicios</button>
        </div>
      </div>
    </Layout>
  );
};

export default Hero;
