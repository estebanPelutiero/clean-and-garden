import React from "react";
import Layout from "./Layout";
import Instagram from "../assets/svgs/Insta.svg";
import Whatsapp from "../assets/svgs/whatsapp.svg";
import Gmail from "../assets/svgs/gmail.svg";
import Linkedin from "../assets/svgs/linkedin.svg";
import whiteLogo from "../assets/svgs/whiteLogo.svg";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <section className="mx-auto px-4 md:px-8 lg:px-0 lg:max-w-[1120px] font-urbanist">
        <section className="flex flex-col md:flex-row justify-between items-center py-16 gap-14">
          <div className="flex-col items-center">
            <div className="flex items-center gap-4">
              <Link
                offset={-80}
                duration={1300}
                to="home"
                smooth={true}
                className="cursor-pointer"
              >
                <img
                  className="w-12 lg:w-14"
                  loading="lazy"
                  src={whiteLogo}
                  alt="Clear & Garden | Servicios integrales de limpieza"
                />
              </Link>
              <h3 className="tracking-wide leading-5 font-comforta font-medium text-lg">
                Clean & Garden
                <br />
                <span className="text-sm tracking-normal">
                  Limpieza Integral
                </span>
              </h3>
            </div>
            <div className="pt-2 text-center md:text-start">© 2023</div>
          </div>
          <div className="hidden lg:block justify-between items-center gap-10 md:items-end">
            <ul className="text-center lg:text-start">
              <h4 className="font-semibold mb-2">Navegación</h4>
              <Link offset={-80} duration={1300} smooth={true} to="home">
                <li className="cursor-pointer py-[3px] tracking-wide">Home</li>
              </Link>
              <Link duration={1300} smooth={true} offset={-100} to="servicios">
                <li className="cursor-pointer py-[3px] tracking-wide">
                  Servicios
                </li>
              </Link>
              <Link duration={1300} smooth={true} offset={-100} to="nosotros">
                <li className="cursor-pointer py-[3px] tracking-wide">
                  Nosotros
                </li>
              </Link>
              <Link duration={1300} smooth={true} offset={-150} to="contacto">
                <li className="cursor-pointer pt-[3px] tracking-wide">
                  Contacto
                </li>
              </Link>
            </ul>
          </div>
        </section>
      </section>
      <div className="text-sm mx-auto px-4 md:px-8 lg:px-0 lg:max-w-[1120px] font-urbanist py-6 border-t border-t-white/10">
        Desarrollado en
        <a className="font-semibold hover:tracking-widest hover:text-green ease-in-out duration-200" target="_blank" rel="noopener noreferer" href="https://osswebstudio.tech/"> Oss Web Studio</a>
      </div>
    </footer>
  );
};

export default Footer;
