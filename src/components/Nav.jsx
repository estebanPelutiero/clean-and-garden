import React, { useEffect, useState } from "react";

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import navLogo from "../assets/svgs/navLogo.svg";
 
const NavList = () => {

  return (
    <ul className="z-10 mt-6 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex justify-end lg:px-4 py-2 border-b-[1px] lg:border-none"
      >
        <a href="#" className="flex items-center font-urbanist font-medium text-lg tracking-wider transition-colors">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex justify-end lg:px-4 py-2 border-b-[1px] lg:border-none"
      >
        <a href="#" className="flex items-center font-urbanist font-medium text-lg tracking-wider transition-colors">
          Nuestros servicios
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex justify-end lg:px-4 py-2 border-b-[1px] lg:border-none"
      >
        <a href="#" className="flex items-center font-urbanist font-medium text-lg tracking-wider transition-colors">
          Contacto
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex justify-end lg:pl-4 pt-2 pb-1 lg:pb-2"
      >
        <a href="#" className="flex items-center font-urbanist font-medium text-lg tracking-wider transition-colors">
          Nosotros
        </a>
      </Typography>
    </ul>
  );
}
 
const Nav = () => {

  const [openNav, setOpenNav] = useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
  <div className="z-50 fixed top-0 w-full shadow-md bg-white">
    <Navbar className="mx-auto max-w-[1120px] shadow-none px-4 md:px-8 py-3 lg:px-0 border-none">
      <div className="flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <img className="w-12 lg:w-14" src={navLogo} alt="Clear & Garden | Servicios integrales de limpieza" />
            <h3 className="tracking-wide leading-5 font-comforta font-medium text-lg text-black">
              Clean & Garden <br /> <span className="text-sm tracking-normal">Limpieza Integral</span>
            </h3>
          </div>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="w-7 text-black" strokeWidth={1.5} />
          ) : (
            <Bars3Icon className="w-7 text-black" strokeWidth={1.5} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  </div>
  );
}

export default Nav;