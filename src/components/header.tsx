import React from 'react';
import Logo from './logo';

const Header = () => {
  return (
    <div className="group sticky top-0 z-50 flex items-center justify-center w-full bg-white/70 backdrop-blur-lg border-b border-transparent [&.stuck]:border-slate-800/10">
      <div className="py-4 px-6 md:py-1 [@media(min-width:1088px)]:px-0 w-full items-center flex md:grid md:grid-cols-[1fr_max-content_1fr] md:items-baseline max-w-5xl font-bold">
        <a className="flex gap-3 md:self-center md:items-inherit" id="nav-home" href="https://goldenmoment.ai">
          <span data-state="closed" style={{ WebkitTouchCallout: 'none' }}>
            <div className="text-primary/80 transition-colors -mt-[1px]" style={{ transform: 'none' }}>
              <Logo />
            </div>
          </span>
          <h2 className="tracking-tight font-bold text-lg text-slate-700">GoldenMoment</h2>
        </a>
        <div className="py-2 px-2 hidden md:flex gap-2 justify-center items-baseline font-semibold text-slate-600">
          <a
            className="hover:text-slate-800 hover:bg-slate-700/[8%] px-4 py-2 rounded-full transition-colors duration-100 ease-out"
            id="nav-desktop-meetings"
            href="/#meetings"
          >
            Meetings
          </a>
          <a
            className="hover:text-slate-800 hover:bg-slate-700/[8%] px-4 py-2 rounded-full transition-colors duration-100 ease-out"
            id="nav-desktop-pendant"
            href="/#pendant"
          >
            Pendant
          </a>
          <a
            className="hover:text-slate-800 hover:bg-slate-700/[8%] px-4 py-2 rounded-full transition-colors duration-100 ease-out"
            id="nav-desktop-privacy"
            href="/#privacy"
          >
            Privacy
          </a>
        </div>
        <div className="hidden md:flex gap-6 justify-end items-baseline font-medium text-slate-500/70">
          <a id="nav-desktop-get-started" title="Get Started with GoldenMoment" href="https://app.goldenmoment.ai">
            <div className="px-3 pb-px shadow-button-light select-none active:shadow-none active:ring-[0.5px] active:ring-zinc-900/10 inline-flex items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-[0.5px] border-black/15 h-8 sm:h-8 bg-white text-slate-800 hover:text-black hover:border-transparent hover:bg-slate-700/[8%] font-semibold rounded-lg group-[.stuck]:hover:bg-gray-700 group-[.stuck]:active:bg-gray-900 group-[.stuck]:bg-black group-[.stuck]:text-white shadow-none group-[.stuck]:border-transparent active:bg-gray-300 -translate-y-0.5 flex flex-row">
              <div className="flex gap-1 items-center justify-center" style={{ width: 'auto', opacity: 1 }}>
                Get Started
              </div>
            </div>
          </a>
        </div>
        <div className="flex grow md:hidden justify-end w-full">
          <button type="button" id="radix-:R29ja:" aria-haspopup="menu" aria-expanded="false" data-state="closed" className="outline-none text-slate-500">
            <div style={{ opacity: 1, transform: 'none' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                className="active:shadow-none active:ring-[0.5px] active:ring-zinc-900/10 p-1 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 group rounded-md hover:bg-black/5 h-10 w-12 flex items-center justify-center transition-colors text-slate-500/60 group-hover:text-slate-900 active:text-black h-8 w-8"
              >
                <rect width="16" height="1.5" x="2" y="5.5" fill="currentColor" rx="0.75"></rect>
                <rect width="16" height="1.5" x="2" y="9.25" fill="currentColor" rx="0.75"></rect>
                <rect width="16" height="1.5" x="2" y="13" fill="currentColor" rx="0.75"></rect>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

