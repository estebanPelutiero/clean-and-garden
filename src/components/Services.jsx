import React from 'react'
import Layout from './Layout'
import Escoba from '../assets/icons/escoba.png'
import Hoja from '../assets/icons/hoja.png'

const Services = () => {
  return (
    <Layout>
      <div className='text-start lg:text-center mb-8 lg:tracking-widest'>
        <h1 className='text-5xl lg:text-6xl text-black'>En que podemos <span className='text-green'>ayudarte</span></h1>
      </div>
      <div className='mx-auto text-start md:text-center lg:w-[63%] mb-16 lg:mb-32'>
        <p className='text-base lg:text-lg'>
          Proveemos <span className='text-green'>asesoría gratuita</span> para definir que tipo de limpieza o mantenimiento necesita
          su empresa, clínica, institución, local, consorcio, final de obra <span className='text-green'>y mucho más</span>.
        </p>
      </div>

      <section className='flex flex-col lg:flex-row gap-10 justify-between'>

        {/* card limpieza */}
        <article className='bg-black text-white px-10 py-8 w-full h-fit lg:w-[32rem] rounded-xl card-limpieza'>

          {/* card header */}
          <div className='mb-12'>
            <div className='flex justify-between items-end mb-6'>
              <h2 className='text-3xl lg:text-4xl font-semibold'>
                Limpieza
              </h2>
              <img className='' src={Escoba} alt="Escoba barriendo" />
            </div>

            <h3 className='text-base lg:text-lg pb-4 border-b-[1px]'>
              Servicio de aseo de interiores
            </h3>
          </div>

          {/* Lista de servicios */}
          <ul className='flex flex-col list-disc list-inside'>
            <li className='text-base lg:text-lg  leading-8'>Oficinas</li>
            <li className='text-base lg:text-lg  leading-8'>Industrias</li>
            <li className='text-base lg:text-lg  leading-8'>Edificios</li>
            <li className='text-base lg:text-lg  leading-8'>Centros de salud</li>
            <li className='text-base lg:text-lg  leading-8'>Final de obra</li>
            <li className='text-base lg:text-lg  leading-8'>Instituciones (Bancos, establecimientos educativos, centros de salud, embajadas, etc.)</li>
            <li className='text-base lg:text-lg  leading-8'>Consorcios, depositos logísticos, medios de transporte, y más.</li>
          </ul>
        </article>

        {/* card limpieza */}
        <article className='bg-dark-green text-white px-10 py-8 w-full h-fit lg:w-[32rem] rounded-xl card-parquizacion'>

          {/* card header */}
          <div className='mb-12'>
            <div className='flex justify-between items-end mb-6'>
              <h2 className='text-3xl lg:text-4xl font-semibold'>
                Parquización
              </h2>
              <img className='' src={Hoja} alt="Hoja verde de árbol" />
            </div>

            <h3 className='text-base lg:text-lg pb-4 border-b-[1px]'>
              Mantenimiento de áreas verdes
            </h3>
          </div>

          {/* Lista de servicios */}
          <ul className='flex flex-col list-disc list-inside'>
            <li className='text-base lg:text-lg  leading-8'>Paisajismo</li>
            <li className='text-base lg:text-lg  leading-8'>Resiembra de zonas verdes</li>
            <li className='text-base lg:text-lg  leading-8'>Desmalezamiento</li>
            <li className='text-base lg:text-lg  leading-8'>Sistemas de riego</li>
            <li className='text-base lg:text-lg  leading-8'>Poda de arboles y plantas</li>
            <li className='text-base lg:text-lg  leading-8'>Reposición de plantines de temporada</li>
            <li className='text-base lg:text-lg  leading-8'>Mantenimiento de plantas de interior</li>
            <li className='text-base lg:text-lg  leading-8'>Armados de macetas</li>
            <li className='text-base lg:text-lg  leading-8'>Arreglos florales y más</li>
          </ul>
        </article>

      </section>
    </Layout>
  )
}

export default Services