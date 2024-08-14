import React from 'react';

const PricingSection = () => {
  return (
    <div id="planes" className="my-[90px] mx-2 sm:mx-7 5xl:mx-0 p-2 xs:p-0 sm:p-0 flex flex-col gap-7 sm:gap-3 max-w-4xl self-center w-full ">
      <h1 className="text-4xl pb-4 font-bold text-center text-primary tracking-tight">
        Empieza hoy
      </h1>
      <div className="sm:mt-2 flex flex-col-reverse md:flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 md:m-0 sm:m-12">
        <div className="rounded-xl border-2 transition-colors border-foreground hover:border-lightgold md:mt-[3.25rem] p-6 sm:p-8 w-full flex flex-col text-center items-center justify-center">
          <h3 className="pt-5 text-3xl font-semibold text-primary mb-1.5">Entrega Mensual</h3>
          <h4 className="text-xl text-subtitle font-semibold">Recibe un nuevo paquete cada mes.</h4>
          <div className="flex gap-2 items-center mt-3">
            <span className="font-bold text-5xl text-primary">$5.000</span>
            <span className="text-subtitle text-base font-medium">CLP al mes</span>
          </div>
          <a title="Sign up for Limitless" >
            <button className="shadow-button-light select-none active:shadow-none active:ring-[0.5px] active:ring-foreground inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-[0.5px] border-foreground h-8 sm:h-8 mt-7 mb-5 bg-gray-100 border-none text-primary text-[1.1rem] pt-5 px-6 pb-[1.4rem] rounded-xl shadow-none font-semibold hover:bg-foreground active:bg-foreground" id="pricing-sign-up">
              <div className="flex flex-row">
                <div className="flex gap-1 items-center justify-center" style={{ width: 'auto', opacity: 1 }}>
                  Suscribete
                </div>
              </div>
            </button>
          </a>
          <div className="flex flex-col items-start w-full text-slate-600/60 text-[1.05rem] font-semibold text-start">
            <button data-state="closed">
              <p className="inline-block text-left py-2">
                Paquetes mensuales
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="inline-block w-4 h-4 self-center opacity-50 ml-1">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 11.333V10a1.778 1.778 0 1 0-1.778-1.778"></path>
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16"></path>
                  <path fill="currentColor" d="M10 12.583a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"></path>
                </svg>
              </p>
            </button>
            <button data-state="closed">
              <p className="inline-block text-left py-2">
                Contenido consistente
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="inline-block w-4 h-4 self-center opacity-50 ml-1">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 11.333V10a1.778 1.778 0 1 0-1.778-1.778"></path>
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16"></path>
                  <path fill="currentColor" d="M10 12.583a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"></path>
                </svg>
              </p>
            </button>
            <button data-state="closed">
              <p className="inline-block text-left py-2">
                Temas estacionales
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="inline-block w-4 h-4 self-center opacity-50 ml-1">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 11.333V10a1.778 1.778 0 1 0-1.778-1.778"></path>
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16"></path>
                  <path fill="currentColor" d="M10 12.583a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"></path>
                </svg>
              </p>
            </button>
          </div>
        </div>
        <div className="rounded-xl border-2 transition-colors border-foreground hover:border-lightgold md:mt-[3.25rem] p-6 sm:p-8 w-full flex flex-col text-center items-center justify-center">
          <h3 className="pt-5 text-3xl font-semibold text-primary mb-1.5">Entrega Semanal</h3>
          <h4 className="text-xl text-subtitle font-semibold">Recibe un nuevo paquete cada semana.</h4>
          <div className="flex gap-2 items-center mt-3">
            <span className="font-bold text-5xl text-primary">$10.000</span>
            <span className="text-subtitle text-base font-medium">CLP al mes</span>
          </div>
          <a title="Sign up for Limitless" >
            <button className="shadow-button-light select-none active:shadow-none active:ring-[0.5px] active:ring-foreground inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-[0.5px] border-foreground h-8 sm:h-8 mt-7 mb-5 bg-gray-100 border-none text-primary text-[1.1rem] pt-5 px-6 pb-[1.4rem] rounded-xl shadow-none font-semibold hover:bg-foreground active:bg-foreground" id="pricing-sign-up">
              <div className="flex flex-row">
                <div className="flex gap-1 items-center justify-center" style={{ width: 'auto', opacity: 1 }}>
                  Suscribete
                </div>
              </div>
            </button>
          </a>
          <div className="flex flex-col items-start w-full text-slate-600/60 text-[1.05rem] font-semibold text-start">
            <button data-state="closed">
              <p className="inline-block text-left py-2">
                Todo lo del Tier mensual
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="inline-block w-4 h-4 self-center opacity-50 ml-1">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 11.333V10a1.778 1.778 0 1 0-1.778-1.778"></path>
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16"></path>
                  <path fill="currentColor" d="M10 12.583a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"></path>
                </svg>
              </p>
            </button>
            <button data-state="closed">
              <p className="inline-block text-left py-2">
                Paquetes semanales
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="inline-block w-4 h-4 self-center opacity-50 ml-1">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 11.333V10a1.778 1.778 0 1 0-1.778-1.778"></path>
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16"></path>
                  <path fill="currentColor" d="M10 12.583a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"></path>
                </svg>
              </p>
            </button>
            <button data-state="closed">
              <p className="inline-block text-left py-2">
                Contenido personalizado
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="inline-block w-4 h-4 self-center opacity-50 ml-1">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 11.333V10a1.778 1.778 0 1 0-1.778-1.778"></path>
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16"></path>
                  <path fill="currentColor" d="M10 12.583a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"></path>
                </svg>
              </p>
            </button>
            <button data-state="closed">
              <p className="inline-block text-left py-2">
                Estimulación mental frecuente
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="inline-block w-4 h-4 self-center opacity-50 ml-1">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 11.333V10a1.778 1.778 0 1 0-1.778-1.778"></path>
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16"></path>
                  <path fill="currentColor" d="M10 12.583a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"></path>
                </svg>
              </p>
            </button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default PricingSection;

