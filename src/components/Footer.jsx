import React from "react";
import Layout from "./Layout";
import Instagram from "../assets/icons/instagram.png";
import Whatsapp from "../assets/icons/whatsapp.png";
import Gmail from "../assets/icons/gmail.png";
import Linkedin from "../assets/icons/Linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-green text-white">
      <Layout>
        <section className="flex flex-col md:flex-row justify-between items-center py-16 gap-14">
          <div>
            <h3 className="font-comforta text-center md:text-left">
              <span className="text-xl font-semibold">Clean & Garden</span><br />
              <span className="text-sm">Servicios Integrales</span>
            </h3>
          </div>

          <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 md:items-end w-1/2">
            <ul className="hidden lg:block text-center lg:text-start">
              <h4 className="font-semibold mb-2">Navegación</h4>
              <a href="#"><li className="py-[3px]">Home</li></a>
              <a href="#"><li className="py-[3px]">Servicios</li></a>
              <a href="#"><li className="pt-[3px]">Nosotros</li></a>
            </ul>

            <div className="flex items-center gap-5 h-full">
              <a href="#">
                <img className="w-6" src={Instagram} alt="Instagram" />
              </a>
              <a href="#">
                <img className="w-6" src={Whatsapp} alt="Whatsapp" />
              </a>
              <a href="#">
                <img className="w-7" src={Gmail} alt="Gmail" />
              </a>
              <a href="#">
                <img className="w-6" src={Linkedin} alt="Linkedin" />
              </a>
            </div>
          </div>

          
        </section>
      </Layout>
    </footer>
  );
};

export default Footer;
