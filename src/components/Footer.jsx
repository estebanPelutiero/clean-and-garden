import React from "react";
import Layout from "./Layout";
import Instagram from '../assets/svgs/Insta.svg'
import Whatsapp from "../assets/svgs/whatsapp.svg";
import Gmail from "../assets/svgs/gmail.svg";
import Linkedin from "../assets/svgs/linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-green text-white">
      <Layout>
        <section className="flex flex-col md:flex-row justify-between items-center py-16 gap-14">
          <div>
            <h3 className="font-comforta text-center md:text-left">
              <span className="text-2xl font-semibold">Clean & Garden</span><br />
              <span className="text-base">Servicios Integrales</span>
            </h3>
          </div>

          <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 md:items-end w-1/2">
            <ul className="hidden lg:block text-center lg:text-start">
              <h4 className="font-semibold mb-2">Navegación</h4>
              <a href="#"><li className="py-[3px] tracking-wide">Home</li></a>
              <a href="#"><li className="py-[3px] tracking-wide">Servicios</li></a>
              <a href="#"><li className="py-[3px] tracking-wide">Nosotros</li></a>
              <a href="#"><li className="pt-[3px] tracking-wide">Contacto</li></a>
            </ul>

            <div className="flex items-center gap-7 h-full">
              <a target="_blank" rel="noopener noreferer" title="Ir al chat de Whatsapp" href="#">
                <img className="w-7" src={Whatsapp} alt="Whatsapp" />
              </a>
              <a target="_blank" rel="noopener noreferer" title="Visitanos en Instagram" href="#">
                <img className="w-7" src={Instagram} alt="Instagram" />
              </a>
              <a title="Enviar un e-mail" href="#">
                <img className="w-9" src={Gmail} alt="Gmail" />
              </a>
              <a target="_blank" rel="noopener noreferer" title="Visitanos en Linkedin" href="#">
                <img className="w-7" src={Linkedin} alt="Linkedin" />
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </footer>
  );
};

export default Footer;
