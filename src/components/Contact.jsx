import React from "react";
import Layout from "./Layout";
import Instagram from '../assets/svgs/Insta.svg'
import Whatsapp from "../assets/svgs/whatsapp.svg";
import Gmail from "../assets/svgs/gmail.svg";
import Linkedin from "../assets/svgs/linkedin.svg";

export const Contact = () => {
  return (
    <div id="contacto" className="bg-green text-white shadow-lg">
      <Layout>
        <div className="flex flex-col gap-12 lg:gap-14 justify-between items-center py-16 lg:py-32">
            <div>
                <p className="text-4xl lg:text-6xl text-center lg:text-start">
                    Podés encontrarnos en
                </p>
            </div>
            <div className="flex items-center gap-10 lg:gap-14">
              <a target="_blank" rel="noopener noreferer" title="Ir al chat de Whatsapp" href="https://wa.me/5491122900189"><img className="w-11 lg:w-14" src={Whatsapp} alt="Whatsapp" /></a>
              <a target="_blank" rel="noopener noreferer" title="Visitanos en Instagram" href="https://www.instagram.com/clean.garden.arg"><img className="w-11 lg:w-14" src={Instagram} alt="Instagram" /></a>
              <a title="Enviar un e-mail" href="mailto:contacto.cgarden@gmail.com"><img className="w-12 lg:w-[4.2rem]" src={Gmail} alt="Gmail" /></a>
              <a target="_blank" rel="noopener noreferer" title="Visitanos en Linkedin" href="https://www.linkedin.com/company/cg-serviciosintegrales/"><img className="w-11 lg:w-14" src={Linkedin} alt="Linkedin" /></a>
            </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
