import React from "react";
import Layout from "./Layout";
import LogoWhoWeAre from "../assets/imgs/logoWho.png";

const WhoWeAre = () => {
  return (
    <Layout>
      <div className="text-black text-5xl md:text-7xl lg:text-8xl font-medium mb-10 lg:mb-20 text-start">
        <h1>
          Quienes <span className="text-green">somos</span>
        </h1>
      </div>

      <div className="flex md:flex-row flex-col justify-between items-center">
        <div className="lg:w-[50%]">
          <div className="h-full flex flex-col gap-8 mb-12 text-lg">
            <p>
              Clean & Garden nace como una solución integral a la demanda de
              servicios de limpieza y mantenimiento de calidad de espacios
              verdes en la zona Campana, Zárate y Cardales.
            </p>
            <p>
              Caracterizados por los vínculos de confianza que creamos con
              nuestros clientes, nos gusta formar un ambiente comunicativo. De
              esta manera podemos llevar a cabo de manera eficiente nuestro
              labor, persiguiendo la excelencia desde el momento 0.
            </p>
            <p>
              Contamos con personal altamente capacitado para realizar todo tipo
              de labores de limpieza y parquización con resultados que superan
              expectativas.
            </p>
          </div>

          <button className="text-lg font-medium text-white bg-green md:px-10  md:py-3  rounded-lg shadow-lg">
            Hablemos
          </button>
        </div>

        <figure className="hidden lg:block">
          <img
            className="w-[28rem]"
            src={LogoWhoWeAre}
            alt="Clear & Garden servicios integrales de limpieza"
          />
        </figure>
      </div>
    </Layout>
  );
};

export default WhoWeAre;
