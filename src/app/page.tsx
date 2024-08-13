import PricingSection from "@/components/pricingSection";

export default function Home() {

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center font-bold text-lg mt-4 xs:mt-16 sm:mt-24">
        <div style={{ opacity: 1 }}>
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:R2937rqja:"
            data-state="closed"
          >
            <div
              className="flex items-center gap-2 p-1 xs:p-1.5 rounded-full text-sm xs:text-base font-semibold text-black/60 group transition-colors ease-out select-none beyond-gradient-light"
              id="hero-play-video"
            >
              <div className="relative flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 21 20"
                  className="w-4 h-4 xs:w-5 xs:h-5 absolute z-10 group-hover:text-slate-900 transition-colors"
                >
                  <path
                    fill="currentColor"
                    d="M14.979 9.06 8.197 4.82a1.11 1.11 0 0 0-1.697.941v8.477c0 .87.959 1.402 1.697.94l6.78-4.239a1.107 1.107 0 0 0 .002-1.88"
                  ></path>
                </svg>
                <div className="w-5 h-5 xs:w-7 xs:h-7 rounded-full bg-white"></div>
              </div>
              <span className="pr-1.5 xs:pr-3 group-hover:text-slate-900 transition-colors">
                See the launch video
              </span>
            </div>
          </button>
        </div>
        <div className="mt-3 xs:mt-6 mx-8 xl:mx-0 flex flex-col text-center gap-3 max-w-lg">
          <h1 className="hero-h1-grad text-balance text-6xl xs:text-xl font-bold text-slate-900 tracking-tight inline-block text-transparent bg-clip-text z-20">
            Disfruta tus años dorados al máximo
          </h1>
          <div style={{ opacity: 1 }}>
            <h2 className="text-balance text-3xl xs:text-[1.7rem]/8 font-normal text-[#b2b2bd] tracking-tight">
              Paquetes personalizados para tu alegría y estimulación
            </h2>
          </div>
          <div style={{ opacity: 1 }}>
            <a
              title="Get started for free - Limitless"
              href="https://app.limitless.ai"
            >
              <button
                className="shadow-button-light select-none active:shadow-none active:ring-[0.5px] active:ring-zinc-900/10 inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-[0.5px] border-black/15 hover:bg-gradient-primary-hover self-center mt-2 text-[1.05rem] px-4 pt-[0.75rem] pb-[0.85rem] sm:mt-4 sm:text-[1.15rem] sm:px-6 sm:pt-[0.85rem] sm:pb-[0.95rem] h-auto sm:h-auto -tracking-[0.01rem] rounded-xl font-semibold bg-gradient-to-b from-gray-800 to-gray-950 border-none shadow-none hover:[background-image:none] bg-black active:bg-gray-900 text-white leading-none"
                id="hero-get-started"
              >
                <div className="flex flex-row">
                  <div
                    className="flex gap-1 items-center justify-center font-normal"
                    style={{ width: 'auto', opacity: 1 }}
                  >
                    Suscribete Ahora

                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>

      <PricingSection />
    </div>

  );
}
