import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Oficinas from '../assets/imgs/oficinas.jpg'
import Industrial from '../assets/imgs/industrial.jpg'
import Consorcios from '../assets/imgs/consorcios.jpeg'
import Instituciones from '../assets/imgs/instituciones.jpg'
import Laboratorios from '../assets/imgs/laboratorios.jpg'
import Layout from "./Layout";
 
const HorizontalCard = () => {
  return (
    <Layout>

      <Card className="w-full flex-col md:flex-row shadow-lg mb-20">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 md:w-2/5 lg:w-2/5 h-auto md:shrink-0 rounded-b-none md:rounded-l-lg md:rounded-r-none"
        >
          <img
            src={Oficinas}
            alt="Limpieza en oficinas"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" className="mb-4 uppercase font-urbanist text-green">
            Limpieza en oficinas
          </Typography>
          <Typography color="gray" className=" font-normal font-urbanist">
            Mantener limpias las oficinas es crucial para asegurar un ambiente laboral adecuado y armónico, siendo uno de los lugares donde se pasan la mayoría de las horas del día, conviviendo con muchas personas. <br />
            Por ello es importante mantener una limpieza e higiene adecuadas, con una frecuencia y profundidad establecida. <br />
            En <span className="font-comforta text-green">Clear & Garden</span> nos encargamos de eliminar la suciedad que se va aculumando en el mobiliario, baños, puestos de trabajo, cocina, sala de reuniones, recepciones y más.
          </Typography>
        </CardBody>
      </Card>

      <Card className="w-full flex-col lg:items-center md:flex-row-reverse shadow-lg mb-20">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 md:w-2/5 lg:w-2/5 h-auto md:shrink-0 rounded-b-none md:rounded-r-lg md:rounded-l-none"
        >
          <img
            src={Industrial}
            alt="Limpieza en oficinas"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" className="mb-4 uppercase font-urbanist text-green">
            Limpieza industrial
          </Typography>
          <Typography color="gray" className=" font-normal font-urbanist">
            La industria es quien mueve la manufactura de país y como todos los demás rubros, el mantenimiento de la limpieza es de suma importancia para su buen funcionamiento. <br />
            En <span className="font-comforta text-green">Clear & Garden</span> sabemos mantener las instalaciones industriales en perfectas condiciones higiénicas, tanto para la salud de los trabajadores como para el buen funcionamiento a largo plazo de la maquinaria y equipos de la linea productiva.
          </Typography>
        </CardBody>
      </Card>

      <Card className="w-full flex-col md:flex-row shadow-lg mb-20">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 md:w-2/5 lg:w-2/5 h-auto md:shrink-0 rounded-b-none md:rounded-l-lg md:rounded-r-none"
        >
          <img
            src={Consorcios}
            alt="Limpieza en oficinas"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" className="mb-4 uppercase font-urbanist text-green">
            Servicio integral para consorcios
          </Typography>
          <Typography color="gray" className=" font-normal font-urbanist">
            Sabemos de la importancia de la limpieza en un edificio, que las zonas de alto tránsito permanezcan limpias y con buen aroma. Así mismo cuidar los artefactos y zonas de uso común logrando un buen ambiente y una mejor convivencia. <br />
            Aquí es donde desplegamos todo nuestro potencial, ya que nuestro servicio es <span className="text-green uppercase">INTEGRAL</span> ahorrando la necesidad a nuestros clientes de contratar servicios por separado, proporcionando una solución completa para todas sus necesidades. <br />
            No solo nos ocupamos de la limpieza en el interior, también contamos con un equipo especializado en mantenimiento y reacondicionamiento de <span className="text-green">espacios verdes</span>.
          </Typography>
        </CardBody>
      </Card>

      <Card className="w-full flex-col lg:items-center md:flex-row-reverse shadow-lg mb-20">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 md:w-2/5 lg:w-2/5 h-auto md:shrink-0 rounded-b-none md:rounded-r-lg md:rounded-l-none"
        >
          <img
            src={Instituciones}
            alt="Limpieza en oficinas"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" className="mb-4 uppercase font-urbanist text-green">
            Limpieza en instituciones
          </Typography>
          <Typography color="gray" className=" font-normal font-urbanist">
          Los espacios como colegios, jardines de infante, facultades e institutos, son áreas donde hay un gran tráfico de personas constantemente, con lo cual se les debe prestar una atención, cuidado y limpieza extraordinaria.
          Con una mayor periodicidad y con un nivel de profundidad aún mayor, para asegurar de cortar con cualquier foco de infección.
          </Typography>
        </CardBody>
      </Card>

      <Card className="w-full flex-col md:flex-row shadow-lg mb-20">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 md:w-2/5 lg:w-2/5 h-auto md:shrink-0 rounded-b-none md:rounded-l-lg md:rounded-r-none"
        >
          <img
            src={Laboratorios}
            alt="Limpieza en oficinas"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" className="mb-4 uppercase font-urbanist text-green">
            Clinicas y laboratorios
          </Typography>
          <Typography color="gray" className=" font-normal font-urbanist">
            En <span className="font-comforta text-green">Clean & Garden</span>  disponemos de personal altamente capacitado y entrenado para ajustarse a los estándares de higiene en recintos de área de salud. <br /> <br />
            <span className="text-dark-green font-medium underline decoration-gray-500 underline-offset-2">Riesgo alto</span>: Quirófanos, laboratorios, y unidades de cuidados intensivos. Limpieza exhaustiva y con productos específicos para la esterilización. <br />
            <span className="text-dark-green font-medium underline decoration-gray-500 underline-offset-2">Riesgo medio</span>: Habitaciones en las que se encuentran los pacientes internos, salas de consulta y cocina interna. <br />
            <span className="text-dark-green font-medium underline decoration-gray-500 underline-offset-2">Riesgo bajo</span>: Pasillos, oficinas y escaleras, donde la limpieza es algo mas convencional, pero no deja de ser igual de importante.
          </Typography>
        </CardBody>
      </Card>
    </Layout>
  );
}

export default HorizontalCard