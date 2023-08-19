import { useState, useEffect } from 'react';
import desktop from '/images/bg-header-desktop.svg';
import mobile from '/images/bg-header-mobile.svg';

import FilterList from './FilterList';

const Header = ({ filters, clearFilters, clearFilter }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return (
    <div role="banner" className="w-full bg-desaturated-dark-cyan">
      <img src={isMobile ? mobile : desktop} alt="" />
      <div className={`${filters.length === 0 && 'hidden'} relative md:w-full lg:w-5/6 w-[340px] mx-auto`}>
        <div className="w-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex items-center justify-between bg-white rounded-md shadow-xl p-3">
          <div className="flex flex-wrap items-center gap-2">
            <FilterList filters={filters} clearFilter={clearFilter} />
          </div>
          <button onClick={() => clearFilters()} className='text-dark-grayish-cyan cursor-pointer'>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
