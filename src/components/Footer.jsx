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
    <footer className="bg-green text-white">
      <Layout>
        <section className="flex flex-col md:flex-row justify-between items-center py-16 gap-14">
          <div className="flex items-center gap-4">
            <Link duration={1300} to="home" smooth={true} className="cursor-pointer">
              <img
                className="w-12 lg:w-14"
                src={whiteLogo}
                alt="Clear & Garden | Servicios integrales de limpieza"
              />
            </Link>
            <h3 className="tracking-wide leading-5 font-comforta font-medium text-lg">
              Clean & Garden <br />{" "}
              <span className="text-sm tracking-normal">Limpieza Integral</span>
            </h3>
          </div>

          <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 md:items-end w-1/2">
            <ul className="hidden lg:block text-center lg:text-start">
              <h4 className="font-semibold mb-2">Navegación</h4>
              <Link duration={1300} smooth={true} to="home">
                <li className="cursor-pointer py-[3px] tracking-wide">Home</li>
              </Link>
              <Link duration={1300} smooth={true} offset={-100} to="servicios">
                <li className="cursor-pointer py-[3px] tracking-wide">
                  Servicios
                </li>
              </Link>
              <Link duration={1300} smooth={true} offset={-300} to="contacto">
                <li className="cursor-pointer pt-[3px] tracking-wide">
                  Contacto
                </li>
              </Link>
              <Link duration={1300} smooth={true} offset={-150} to="nosotros">
                <li className="cursor-pointer py-[3px] tracking-wide">
                  Nosotros
                </li>
              </Link>
            </ul>

            <div className="flex items-center gap-7 h-full">
              <a
                target="_blank"
                rel="noopener noreferer"
                title="Ir al chat de Whatsapp"
                href="#"
              >
                <img className="w-7" src={Whatsapp} alt="Whatsapp" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferer"
                title="Visitanos en Instagram"
                href="#"
              >
                <img className="w-7" src={Instagram} alt="Instagram" />
              </a>
              <a title="Enviar un e-mail" href="#">
                <img className="w-9" src={Gmail} alt="Gmail" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferer"
                title="Visitanos en Linkedin"
                href="#"
              >
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
