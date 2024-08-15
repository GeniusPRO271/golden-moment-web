import React from 'react';

const OurMission = () => {
  return (
    <div id='nuestraMision' className='flex flex-col h-[80vh]'>
      <h1 className="text-4xl pb-4 font-bold text-center text-primary tracking-tight">
        Nuestra misión
      </h1>
      <div className="bg-white pt-2 relative z-50 mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 sm:gap-y-8 font-medium text-slate-500/75 text-[1.05rem]/[125%] sm:text-lg/[130%] max-w-5xl">
        <div>
          <p className="text-primary font-semibold text-[1.15rem] mb-1">Mejorando la Vida de los Adultos Mayores</p>
          <p className='text-subtitle'>Nuestra misión es enriquecer la vida de los adultos mayores con paquetes personalizados llenos de actividades que combaten el aburrimiento y traen alegría. Creemos que todos merecen sentirse comprometidos y realizados.</p>
        </div>
        <div>
          <p className="text-primary font-semibold text-[1.15rem] mb-1">Promoviendo la Estimulación Mental</p>
          <p className='text-subtitle'>Cada caja incluye actividades que desafían la mente y fomentan la creatividad, desde rompecabezas hasta libros y manualidades, elegidos para inspirar y entretener.</p>

        </div>
        <div>
          <p className="text-primary font-semibold text-[1.15rem] mb-1">Creando Conexiones Significativas</p>
          <p className='text-subtitle'>Nuestro servicio ayuda a fortalecer los lazos familiares, ofreciendo una forma significativa de mostrar amor y cuidado a los padres mayores.</p>
        </div>
        <div>
          <p className="text-primary font-semibold text-[1.15rem] mb-1">Fomentando la Felicidad</p>
          <p className='text-subtitle'>En <span className='text-gold'>GoldenMoment</span>, buscamos que cada entrega sea un momento de alegría y un recordatorio de que los adultos mayores son valorados.</p>
        </div>
        <div>
          <p className="text-primary font-semibold text-[1.15rem] mb-1">Abordando el Aislamiento</p>
          <p className='text-subtitle'>Nos comprometemos a reducir el aislamiento entregando alegría y conexión directamente a los hogares de los adultos mayores.</p>

        </div>
        <div>
          <p className="text-primary font-semibold text-[1.15rem] mb-1">Apoyando un Movimiento</p>
          <p className='text-subtitle'>Únete a nosotros en esta misión transformadora para mejorar la vida de los adultos mayores. Juntos, podemos hacer del envejecimiento una experiencia enriquecedora.</p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
