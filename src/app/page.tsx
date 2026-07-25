"use client";

import { useState } from "react";
import data from "@/app/constants";


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleCardToggle = (index: number) => {
    setFlippedCardIndex(flippedCardIndex === index ? null : index);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setFlippedCardIndex(null);
  };

  const categories = ['ALL', 'DEV TOOLS', 'DESIGN', 'PRODUCTIVITY', 'LEARNING', 'LIFESTYLE'];

  const filteredData = data.filter((platform) => {
    const matchesCategory = selectedCategory === 'ALL' || platform.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      platform.title.toLowerCase().includes(q) ||
      platform.description.toLowerCase().includes(q) ||
      platform.category.toLowerCase().includes(q) ||
      platform.benefits.some(benefit => benefit.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  const ITEMS_PER_PAGE = 8;
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen text-slate-100 flex flex-col justify-between py-[46px] px-4 md:px-8 lg:px-[80px] relative bg-[#0A192F]">
      <div className="w-full mx-auto">
        {/* Header Bar */}
        <header className="flex items-center justify-between gap-5 my-8 px-4 md:px-0">
          <div>
            <h1 className="text-[#CCD6F6] text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              What's Your Superpower?
            </h1>
            <p className="text-[#8892B0] text-sm font-medium mt-3">
              Unlock the true potential of your <br className="md:hidden" /> MES / Pillai University ID
            </p>
          </div>
          <img
            src="/logo/PillaiUnivLogo1.png"
            alt="Pillai University Logo"
            className="h-14 w-auto object-contain shrink-0"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </header>

        {/* Green divider */}
        <hr className="border-0 h-[2px] bg-[#58E2C5]/60 mb-8 rounded-full md:w-full w-[90%] mx-auto" />

        {/* Filters and Search Row */}
        <div className="flex flex-col px-4 md:px-0 md:flex-row md:items-center md:justify-between gap-4 mb-10 ">
          {/* Category Filter Tabs */}
          <div className="overflow-x-auto md:overflow-visible pb-1 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex flex-nowrap md:flex-wrap gap-2 min-w-max md:min-w-0">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setFlippedCardIndex(null); // Reset flip state when category changes
                      setCurrentPage(1); // Reset page on category filter change
                    }}
                    className={`px-4 py-2 rounded-md text-xs font-bold tracking-wider transition-all duration-300 cursor-pointer ${isActive
                      ? 'bg-[#58E2C5] text-[#0A192F]'
                      : 'bg-[#112240]/40 text-[#58E2C5] border border-slate-800 hover:border-[#58E2C5]/40'
                      }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Input */}
          <div className="relative max-w-sm w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="SEARCH ALL TOOLS..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setFlippedCardIndex(null); // Reset flip state when search query changes
                setCurrentPage(1); // Reset page on search filter change
              }}
              className="w-full bg-[#112240]/20 hover:bg-[#112240]/40 focus:bg-[#112240]/60 border border-slate-800 focus:border-[#58E2C5]/50 text-xs font-semibold tracking-wider text-[#CCD6F6] placeholder-slate-500 rounded-md pl-10 pr-4 py-2.5 outline-none transition-all duration-300"
            />
          </div>
        </div>

        {/* Cards Grid */}
        {filteredData.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-5 justify-items-center">
              {paginatedData.map((platform, index) => {
                const isFlipped = flippedCardIndex === index;
                return (
                  <div
                    className="h-[310px] w-[270px] [perspective:1000px] border-[#58E2C5] cursor-pointer select-none relative z-0 group"
                    key={index}
                    onClick={() => handleCardToggle(index)}
                  >

                    <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""
                      }`}>
                      {/* Front Side */}
                      <div className="absolute inset-0 w-full h-full rounded-md border-2 border-[#58E2C5]/20 bg-[#112240]/40 p-6 flex flex-col items-center justify-between [backface-visibility:hidden] transition-all duration-300 shadow-lg group">
                        <div className="flex flex-col items-center justify-center flex-grow py-4">
                          <div className="w-28 h-28 flex items-center justify-center mb-6 ransition-all duration-500">
                            <img src={platform.logo} alt={platform.title} className="w-18 h-18 object-contain" />
                          </div>
                          <h2 className="text-[#CCD6F6] text-[22px] font-bold text-center group-hover:text-white transition-colors duration-300 px-4">
                            {platform.title}
                          </h2>
                        </div>

                        <div className="w-full py-2.5 rounded-md text-center text-[10px] font-bold tracking-widest text-[#58E2C5] transition-all duration-300 uppercase">
                          Click to Reveal
                        </div>
                      </div>

                      {/* Back Side */}
                      <div className="absolute inset-0 w-full h-full rounded-md border border-[#58E2C5] bg-[#112240]/40 p-4 flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl transition-all duration-300 overflow-hidden">
                        <div className="flex-1 overflow-hidden">
                          {/* Header Row */}
                          <div className="flex justify-start items-center mb-2">
                            <span className="bg-[#58E2C5]/10 border border-[#58E2C5]/20 text-[#58E2C5] text-[9px] font-bold tracking-wider px-2 py-0.5 rounded uppercase">
                              {platform.category}
                            </span>
                          </div>

                          {/* Title & Description */}
                          <h2 className="text-[#CCD6F6] text-xl font-bold mb-1 tracking-tight">
                            {platform.title}
                          </h2>
                          <p className="text-[#8892B0] text-[14px] leading-snug mb-2">
                            {platform.description}
                          </p>

                          {/* Benefits */}
                          <div>
                            <h3 className="text-[#8892B0]/80 text-[1px] font-bold tracking-widest uppercase mb-1.5">
                              BENEFITS
                            </h3>
                            <ul className="space-y-1">
                              {platform.benefits.slice(0, 3).map((benefit, bIndex) => (
                                <li key={bIndex} className="flex items-start text-[12px] text-[#CCD6F6]">
                                  <span className="text-[#58E2C5] font-semibold mr-2 select-none">&gt;</span>
                                  <span className="leading-tight">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Footer Action Button */}
                        <a
                          href={platform.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-full bg-[#182235] hover:bg-[#1b273f] text-[#CCD6F6] hover:text-[#58E2C5] border border-slate-800 hover:border-[#58E2C5]/30 font-bold py-2 px-3 rounded-md text-center text-[9px] tracking-widest transition-all duration-300 flex items-center justify-between cursor-pointer mt-2 shrink-0"
                        >
                          <span>REDEEM POWER</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12 mb-6">
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`p-2.5 rounded-md border text-xs font-bold transition-all duration-300 flex items-center justify-center cursor-pointer ${currentPage === 1
                    ? 'border-slate-800/55 text-slate-600 bg-[#112240]/10 cursor-not-allowed'
                    : 'border-slate-800 text-[#58E2C5] bg-[#112240]/40 hover:border-[#58E2C5]/40'
                    }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  const isActive = currentPage === page;
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-md border text-xs font-bold transition-all duration-300 flex items-center justify-center cursor-pointer ${isActive
                        ? 'bg-[#58E2C5] text-[#0A192F] border-[#58E2C5]'
                        : 'border-slate-800 text-[#58E2C5] bg-[#112240]/40 hover:border-[#58E2C5]/40'
                        }`}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`p-2.5 rounded-md border text-xs font-bold transition-all duration-300 flex items-center justify-center cursor-pointer ${currentPage === totalPages
                    ? 'border-slate-800/55 text-slate-600 bg-[#112240]/10 cursor-not-allowed'
                    : 'border-slate-800 text-[#58E2C5] bg-[#112240]/40 hover:border-[#58E2C5]/40'
                    }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-20">
            <svg className="w-12 h-12 text-[#8892B0]/40 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            <p className="text-[#8892B0] text-sm">No superpowers found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
