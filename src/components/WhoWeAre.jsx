import React from "react";
import Layout from "./Layout";
import LogoWhoWeAre from "../assets/svgs/navLogo.svg";

const WhoWeAre = () => {
  return (
    <Layout>
      <div id="nosotros" className="flex flex-col text-black text-5xl md:text-7xl lg:text-8xl font-medium mb-10 lg:mb-20 text-start">
        <h1 className="w-fit flex flex-col items-end">
          <span className="text-black">Quiénes <span className="text-green">somos</span></span>
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

          <button className="text-lg font-semibold tracking-wide text-white bg-[#889C39] px-8 py-2 md:px-9 md:py-[10px] rounded-lg shadow-lg">
            <a target="_blank" rel="noopener noreferer" title="Ir al chat de Whatsapp" href="https://wa.me/5491122900189">Hablemos</a>
          </button>
        </div>

        <figure className="hidden lg:block">
          <img
            className="w-[28rem]"
            loading="lazy"
            src={LogoWhoWeAre}
            alt="Clean & Garden servicios integrales de limpieza"
          />
        </figure>
      </div>
    </Layout>
  );
};

export default WhoWeAre;
