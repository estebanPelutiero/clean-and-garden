import React from "react";
import Layout from "./Layout";
import Instagram from '../assets/svgs/Insta.svg'
import Whatsapp from "../assets/svgs/whatsapp.svg";
import Gmail from "../assets/svgs/gmail.svg";
import Linkedin from "../assets/svgs/linkedin.svg";

export const Contact = () => {
  return (
    <div className="bg-green text-white">
      <Layout>
        <div className="flex flex-col gap-10 lg:flex-row justify-between items-center py-10 lg:py-24">
            <div>
                <p className="text-3xl lg:text-4xl leading-[3rem] font-light text-center lg:text-start">
                    Ofrecemos asesoría <span className="underline decoration-1 underline-offset-4">gratuita</span> <br />
                    Contactanos!
                </p>
            </div>
            <div className="flex items-center gap-10 lg:gap-14">
              <a title="Ir al chat de Whatsapp" href="#"><img className="w-11 lg:w-14" src={Whatsapp} alt="Whatsapp" /></a>
              <a title="Visitanos en Instagram" href="#"><img className="w-11 lg:w-14" src={Instagram} alt="Instagram" /></a>
              <a title="Enviar un e-mail" href="#"><img className="w-12 lg:w-[4.2rem]" src={Gmail} alt="Gmail" /></a>
              <a title="Visitanos en Linkedin" href="#"><img className="w-11 lg:w-14" src={Linkedin} alt="Linkedin" /></a>
            </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
