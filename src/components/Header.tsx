import React from 'react'
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="xl:w-1/3 py-15 xl:sticky xl:top-0 xl:flex xl:max-h-screen xl:flex-col xl:justify-between xl:py-24">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Salwa Tsabitah
        </h1>
        <h2 className="mt-3 text-xl font-medium text-slate-200">
          Frontend Engineer
        </h2>
        <p className="mt-4 text-slate-400 leading-relaxed max-w-2/3 md:max-w-1/2 xl:max-w-xs">
          Building responsive, user-friendly web interfaces while expanding my
          technical horizons across the full software development lifecycle.
        </p>

        {/* nav */}
        <Navigation />
      </div>

      {/* Social Media */}
      <div className="hidden lg:block xl:mt-8 text-slate-400">
        {/* Icon GitHub/LinkedIn*/}
      </div>
    </header>
  );
}

export default Header