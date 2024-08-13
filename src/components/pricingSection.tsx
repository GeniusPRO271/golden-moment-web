import React from 'react';

const PricingSection = () => {
  return (
    <div className="my-[90px] mx-2 sm:mx-7 5xl:mx-0 p-2 xs:p-0 sm:p-0 flex flex-col gap-7 sm:gap-3 max-w-4xl self-center w-full ">
      <h1 className="text-4xl pb-4 font-bold text-center text-slate-900 tracking-tight">
        Empieza hoy
      </h1>
      <div className="sm:mt-2 flex flex-col-reverse md:flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 md:m-0 sm:m-12">
        <div className="rounded-xl border-2 transition-colors border-slate-200/50 hover:border-slate-200 md:mt-[3.25rem] p-6 sm:p-8 w-full flex flex-col text-center items-center justify-center">
          <h3 className="pt-5 text-3xl font-semibold text-slate-800 mb-1.5">Free</h3>
          <h4 className="text-xl text-slate-500 font-semibold">Access your data forever.</h4>
          <div className="flex gap-2 items-center mt-3">
            <span className="font-bold text-5xl text-slate-900">$0</span>
            <span className="text-slate-500/80 text-base font-medium">per month</span>
          </div>
          <a title="Sign up for Limitless" href="https://app.limitless.ai">
            <button className="shadow-button-light select-none active:shadow-none active:ring-[0.5px] active:ring-zinc-900/10 inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-[0.5px] border-zinc-400/40 h-8 sm:h-8 mt-7 mb-5 bg-gray-100 border-none text-black text-[1.1rem] pt-5 px-6 pb-[1.4rem] rounded-xl shadow-none font-semibold hover:bg-gray-200/75 active:bg-gray-200" id="pricing-sign-up">
              <div className="flex flex-row">
                <div className="flex gap-1 items-center justify-center" style={{ width: 'auto', opacity: 1 }}>
                  Sign up
                </div>
              </div>
            </button>
          </a>
          <div className="text-slate-600/60 text-[1.05rem] font-semibold">
            <button data-state="closed">
              <p className="inline-block text-left">
                10 hours per month of AI features
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="inline-block w-4 h-4 self-center opacity-50 ml-1">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 11.333V10a1.778 1.778 0 1 0-1.778-1.778"></path>
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16"></path>
                  <path fill="currentColor" d="M10 12.583a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"></path>
                </svg>
              </p>
            </button>
          </div>
        </div>
        <div className="rounded-xl border-2 transition-colors border-slate-200/50 hover:border-slate-200 md:mt-[3.25rem] p-6 sm:p-8 w-full flex flex-col text-center items-center justify-center">
          <h3 className="pt-5 text-3xl font-semibold text-slate-800 mb-1.5">Free</h3>
          <h4 className="text-xl text-slate-500 font-semibold">Access your data forever.</h4>
          <div className="flex gap-2 items-center mt-3">
            <span className="font-bold text-5xl text-slate-900">$0</span>
            <span className="text-slate-500/80 text-base font-medium">per month</span>
          </div>
          <a title="Sign up for Limitless" href="https://app.limitless.ai">
            <button className="shadow-button-light select-none active:shadow-none active:ring-[0.5px] active:ring-zinc-900/10 inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-[0.5px] border-zinc-400/40 h-8 sm:h-8 mt-7 mb-5 bg-gray-100 border-none text-black text-[1.1rem] pt-5 px-6 pb-[1.4rem] rounded-xl shadow-none font-semibold hover:bg-gray-200/75 active:bg-gray-200" id="pricing-sign-up">
              <div className="flex flex-row">
                <div className="flex gap-1 items-center justify-center" style={{ width: 'auto', opacity: 1 }}>
                  Sign up
                </div>
              </div>
            </button>
          </a>
          <div className="text-slate-600/60 text-[1.05rem] font-semibold">
            <button data-state="closed">
              <p className="inline-block text-left">
                10 hours per month of AI features
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
    </div>
  );
};

export default PricingSection;

