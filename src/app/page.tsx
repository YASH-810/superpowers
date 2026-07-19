"use client";

import { useState } from "react";

interface Platform {
  title: string;
  category: 'DEV TOOLS' | 'DESIGN' | 'PRODUCTIVITY' | 'LEARNING' | 'LIFESTYLE';
  ref: string;
  description: string;
  benefits: string[];
  link: string;
}

const data: Platform[] = [
  {
    category: "DEV TOOLS",
    ref: "GITHUB",
    title: "GitHub Student Pack",
    description: "The best developer tools, free for students. Includes GitHub Pro, specialized packs, and partner offers.",
    benefits: [
      "Collaborate on software projects",
      "Track and merge changes",
      "Free GitHub Pro while you are a student"
    ],
    link: "https://education.github.com/pack"
  },
  {
    category: "DEV TOOLS",
    ref: "AZURE",
    title: "Azure Cloud Services",
    description: "Invent with purpose with Microsoft Azure's open and flexible cloud computing platform.",
    benefits: [
      "Cloud computing resources",
      "Free credits for students",
      "Learn industry-standard cloud platform"
    ],
    link: "https://azure.microsoft.com/free/students"
  },
  {
    category: "PRODUCTIVITY",
    ref: "PERPLEXITY",
    title: "Perplexity AI",
    description: "Access to Perplexity Pro and Comet AI browser for enhanced research and study.",
    benefits: [
      "Premium AI models",
      "Unlimited Pro searches",
      "Study tools like flashcards"
    ],
    link: "https://www.perplexity.ai"
  },
  {
    category: "DESIGN",
    ref: "FIGMA",
    title: "Figma Education",
    description: "Professional design tools for students and educators. Design, prototype, and collaborate in real-time.",
    benefits: [
      "Free Professional plan",
      "Shared team libraries",
      "Unlimited projects and files"
    ],
    link: "https://www.figma.com/education"
  },
  {
    category: "DEV TOOLS",
    ref: "JETBRAINS",
    title: "JetBrains IDEs",
    description: "Free access to professional developer tools including IntelliJ IDEA, WebStorm, PyCharm, and more.",
    benefits: [
      "All JetBrains IDEs included",
      "Free annual renewals",
      "Use for educational projects"
    ],
    link: "https://www.jetbrains.com/community/education/#students"
  },
  {
    category: "PRODUCTIVITY",
    ref: "NOTION",
    title: "Notion Plus Plan",
    description: "Organize your schoolwork, notes, tasks, and life all in one clean, customizable workspace.",
    benefits: [
      "Free Plus plan upgrade",
      "Unlimited file uploads",
      "30-day page history"
    ],
    link: "https://www.notion.so/product/notion-for-education"
  },
  {
    category: "DESIGN",
    ref: "CANVA",
    title: "Canva Pro Education",
    description: "Design anything in seconds with millions of premium templates, photos, fonts, and assets.",
    benefits: [
      "Access all premium templates",
      "Brand kits and magic resize",
      "Collaborate in real-time"
    ],
    link: "https://www.canva.com/education"
  },
  {
    category: "LEARNING",
    ref: "COURSERA",
    title: "Coursera for Students",
    description: "Learn in-demand skills from top companies and universities with guided projects and courses.",
    benefits: [
      "One free course per year",
      "Professional certificates",
      "Learn at your own pace"
    ],
    link: "https://www.coursera.org/for-students"
  },
  {
    category: "LIFESTYLE",
    ref: "SPOTIFY",
    title: "Spotify Student Discount",
    description: "Get Spotify Premium with ad-free music, offline playback, and showtime bundle for students.",
    benefits: [
      "Ad-free music listening",
      "Offline download support",
      "Includes Hulu/Showtime bundle"
    ],
    link: "https://www.spotify.com/student"
  },
  {
    category: "DEV TOOLS",
    ref: "AWS",
    title: "AWS Educate",
    description: "Cloud computing training, hands-on labs, and resources to build in-demand cloud skills.",
    benefits: [
      "Free hands-on cloud labs",
      "AWS promotional credits",
      "Access AWS job board"
    ],
    link: "https://aws.amazon.com/education/awseducate"
  },
  {
    category: "DESIGN",
    ref: "FRAMER",
    title: "Framer Education",
    description: "Design and publish responsive websites visually with the speed of layout, styling, and motion.",
    benefits: [
      "Free Framer Pro site",
      "Custom domains allowed",
      "No Framer badge on site"
    ],
    link: "https://www.framer.com/academy"
  },
  {
    category: "LEARNING",
    ref: "DUOLINGO",
    title: "Duolingo Super",
    description: "Learn languages faster with personalized practice, zero ads, and unlimited hearts for students.",
    benefits: [
      "Unlimited practice hearts",
      "Personalized mistake reviews",
      "Ad-free learning experience"
    ],
    link: "https://www.duolingo.com"
  }
];

const getLogo = (ref: string, sizeClass = "w-10 h-10") => {
  switch (ref) {
    case 'GITHUB':
      return (
        <svg className={`${sizeClass} text-slate-100`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      );
    case 'AZURE':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.784.85l-7.79 13.567L9.9 18.067H22.75L12.784.85z" fill="#008ad7"/>
          <path d="M1.25 18.067L9.04 4.496l3.895 6.784L5.14 23.15H1.25v-5.083z" fill="#50e6ff"/>
          <path d="M9.9 18.067l3.894-6.783 7.79 11.866H9.9v-5.083z" fill="#005a9e"/>
        </svg>
      );
    case 'PERPLEXITY':
      return (
        <svg className={`${sizeClass} text-[#39C0C8]`} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-.813-5.096M9 21h3m-3 0H6m9.813-5.096a12.048 12.048 0 003.062-7.904h-1.636a10.05 10.05 0 01-3.062 7.904m0 0L12 12m0 0L8.188 8.096A10.05 10.05 0 015.126 1.808h-1.636a12.048 12.048 0 003.062 7.904m9.262 6.192A9.972 9.972 0 0012 12m0 0a9.972 9.972 0 00-3.062-6.192M12 12V3m0 0L9.813 9.096m2.187-6.1V1.5" />
        </svg>
      );
    case 'FIGMA':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="none">
          <path d="M8 2c-2.21 0-4 1.79-4 4s1.79 4 4 4h4V6c0-2.21-1.79-4-4-4z" fill="#F24E1E"/>
          <path d="M8 10c-2.21 0-4 1.79-4 4s1.79 4 4 4h4v-8H8z" fill="#A259FF"/>
          <path d="M16 10c0-2.21-1.79-4-4-4v8c2.21 0 4-1.79 4-4z" fill="#1ABC9C"/>
          <path d="M12 18c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4h-4v4z" fill="#FF7262"/>
          <path d="M16 14c2.21 0 4-1.79 4-4s-1.79-4-4-4v8z" fill="#1ABC9C"/>
        </svg>
      );
    case 'JETBRAINS':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="currentColor">
          <rect width="24" height="24" rx="4" fill="#000000"/>
          <path d="M3 17.5L8.5 12L3.5 7L2 9.5L3 17.5Z" fill="#F42850"/>
          <path d="M21 6.5L14 3L11 8.5L17.5 16.5L21 6.5Z" fill="#3D45C4"/>
          <path d="M17.5 16.5L13.5 21L7.5 19.5L17.5 16.5Z" fill="#FFC800"/>
          <path d="M3.5 7L11.5 12L15 4L5.5 3L3.5 7Z" fill="#9932CC"/>
          <rect x="5.5" y="8" width="13" height="8" fill="#000000"/>
          <text x="6.5" y="14" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="monospace">JB</text>
        </svg>
      );
    case 'NOTION':
      return (
        <svg className={`${sizeClass} text-slate-100`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.17 2.019c.14-.154.34-.23.633-.23h14.394c.154 0 .285.03.393.093a.526.526 0 0 1 .232.259l1.705 17.84c.03.353-.069.608-.299.764-.176.108-.431.162-.764.162H5.666a.823.823 0 0 1-.506-.135.533.533 0 0 1-.225-.39L3.064 3.03c0-.123.015-.231.045-.325a.862.862 0 0 1 .18-.328l.88-.358zm13.12 1.34H11.52v.896h2.247v11.666H8.625l-3.328-11.44-.067-.225h-1.42v.898h.81l2.97 10.354c.12.449.337.674.652.674h7.027v-.898h-2.247V4.257h4.25v-.898z" />
        </svg>
      );
    case 'CANVA':
      return (
        <svg className={`${sizeClass} text-[#00C4CC]`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19c-.39.39-1.02.39-1.41 0L10.3 11.7c-.39-.39-.39-1.02 0-1.41l2.48-2.48c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41L12.41 11l1.78 1.78c.38.39.38 1.03 0 1.41z" />
        </svg>
      );
    case 'COURSERA':
      return (
        <svg className={`${sizeClass} text-[#0056D2]`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
        </svg>
      );
    case 'SPOTIFY':
      return (
        <svg className={`${sizeClass} text-[#1DB954]`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5.49 14.42c-.22.36-.68.48-1.04.26-2.73-1.67-6.17-2.05-10.22-1.12-.41.09-.82-.16-.92-.57-.09-.41.16-.82.57-.92 4.43-1.01 8.23-.58 11.29 1.29.36.22.48.69.26 1.06zm1.47-2.73c-.28.45-.87.6-1.32.32-3.13-1.92-7.9-2.48-11.59-1.36-.51.15-1.05-.14-1.21-.65-.15-.51.14-1.05.65-1.21 4.22-1.28 9.5-1.1 13.12 1.13.45.27.6.86.32 1.32-.01.01 0 0 0 0zm.13-2.88C15.22 8.5 8.8 8.29 5.09 9.42c-.59.18-1.22-.16-1.4-.75-.18-.59.16-1.22.75-1.4 4.27-1.3 11.36-1.06 16.03 1.72.53.31.71.99.4 1.52-.31.53-.99.71-1.52.4z"/>
        </svg>
      );
    case 'AWS':
      return (
        <svg className={`${sizeClass} text-[#FF9900]`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.69 13.59c-.44.29-1.01.07-1.16-.44-.24-.8-.92-1.47-1.8-1.59-.57-.08-1.18.17-1.48.65-.24.38-.22.88.06 1.25.32.42 1.01.69(1.62.59.39-.06.74-.29 1.05-.53.32-.24.73-.08.82.32.13.56-.25 1.09-.76 1.35a4.2 4.2 0 01-2.15.52c-1.59 0-3.03-.9-3.48-2.44a3.84 3.84 0 012.38-4.63c1.47-.56 3.19-.07 4.14 1.15.35.45.54 1.01.54 1.58.01.81-.35 1.53-1.08 1.97zm2.4-2.82l-.4.32a.4.4 0 01-.58-.06 3.97 3.97 0 00-3.03-1.35c-2.11 0-3.9 1.62-4.05 3.73-.13 1.8 1.14 3.42 2.93 3.69 1.53.23 3.03-.49 3.69-1.89a.4.4 0 01.53-.2l.46.22a.4.4 0 01.2.53C16.5 17.5 14.5 18.5 12 18.5c-3.59 0-6.5-2.91-6.5-6.5S8.41 5.5 12 5.5s6.5 2.91 6.5 6.5c0 1.1-.28 2.15-.79 3.08l-.12-.31z" />
        </svg>
      );
    case 'FRAMER':
      return (
        <svg className={`${sizeClass} text-[#0055FF]`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 2h14v6H5zm0 6h14v6H11l-6-6zm6 6h8v8l-8-8z" />
        </svg>
      );
    case 'DUOLINGO':
      return (
        <svg className={`${sizeClass} text-[#58CC02]`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
        </svg>
      );
    default:
      return (
        <svg className={`${sizeClass} text-slate-400`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-.813-5.096M9 21h3m-3 0H6" />
        </svg>
      );
  }
};

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
    const matchesSearch =
      platform.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      platform.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      platform.ref.toLowerCase().includes(searchQuery.toLowerCase()) ||
      platform.benefits.some(benefit => benefit.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const ITEMS_PER_PAGE = 8;
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen text-slate-100 flex flex-col justify-between  max-w-[1400px] py-[46px] px-[62px] relative bg-[#0A192F]">
      <div className="w-full mx-auto">
        <h1 className="text-[#CCD6F6] text-5xl m-4 font-bold">
          What's Your Superpower?
        </h1>
        <p className="text-[#58E2C5] text-xl font-semibold ml-4  mb-12">
          Unlock True Potential of your MES ID
        </p>

        {/* Filters and Search Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10 px-5">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
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
                  className={`px-4 py-2 rounded-md text-xs font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#58E2C5] text-[#0A192F] shadow-[0_0_15px_rgba(88,226,197,0.3)]'
                      : 'bg-[#112240]/40 text-[#8892B0] border border-slate-800 hover:border-slate-700 hover:text-[#CCD6F6]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
              {paginatedData.map((platform, index) => {
                const isFlipped = flippedCardIndex === index;
                return (
                  <div
                    className="h-[390px] w-full [perspective:1000px] cursor-pointer select-none relative z-0 group"
                    key={index}
                    onClick={() => handleCardToggle(index)}
                  >
                    {/* Green offset border behind card */}
                    <div className="absolute top-3 left-3 w-full h-full border-2 border-[#58E2C5]/60 rounded-md transition-colors duration-300 pointer-events-none -z-10" />

                    <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
                      isFlipped ? "[transform:rotateY(180deg)]" : ""
                    }`}>
                      {/* Front Side */}
                      <div className="absolute inset-0 w-full h-full rounded-md border border-slate-800 bg-[#16274b] p-6 flex flex-col items-center justify-between [backface-visibility:hidden] hover:border-[#58E2C5]/30 transition-all duration-300 shadow-lg group">
                        <div className="flex flex-col items-center justify-center flex-grow py-4">
                          <div className="w-24 h-24 rounded-md bg-[#0b121f] border border-slate-800 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#58E2C5]/20 group-hover:shadow-[0_0_25px_rgba(88,226,197,0.12)] transition-all duration-500">
                            {getLogo(platform.ref, "w-14 h-14")}
                          </div>
                          <h2 className="text-[#CCD6F6] text-xl font-bold text-center group-hover:text-white transition-colors duration-300 px-4">
                            {platform.title}
                          </h2>
                        </div>

                        <div className="w-full py-2.5 rounded-md text-center text-[10px] font-bold tracking-widest text-[#8892B0] group-hover:text-[#58E2C5] transition-all duration-300 uppercase">
                          Click to Reveal
                        </div>
                      </div>

                      {/* Back Side */}
                      <div className="absolute inset-0 w-full h-full rounded-md border border-slate-800 bg-[#0e1626] p-5 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl transition-all duration-300 hover:border-[#58E2C5]/20">
                        <div>
                          {/* Header Row */}
                          <div className="flex justify-start items-center mb-3">
                            <span className="bg-[#58E2C5]/10 border border-[#58E2C5]/20 text-[#58E2C5] text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md uppercase">
                              {platform.category}
                            </span>
                          </div>

                          {/* Title & Description */}
                          <h2 className="text-[#CCD6F6] text-xl font-bold mb-1.5 tracking-tight">
                            {platform.title}
                          </h2>
                          <p className="text-[#8892B0] text-xs leading-relaxed mb-3.5 line-clamp-3">
                            {platform.description}
                          </p>

                          {/* Chapter Benefits */}
                          <div className="mb-4">
                            <h3 className="text-[#8892B0]/80 text-[10px] font-bold tracking-widest uppercase mb-2">
                              CHAPTER BENEFITS
                            </h3>
                            <ul className="space-y-1.5">
                              {platform.benefits.map((benefit, bIndex) => (
                                <li key={bIndex} className="flex items-start text-xs text-[#CCD6F6]">
                                  <span className="text-[#58E2C5] font-semibold mr-2.5 select-none">&gt;</span>
                                  <span className="leading-normal">{benefit}</span>
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
                          className="w-full bg-[#182235] hover:bg-[#1b273f] text-[#CCD6F6] hover:text-[#58E2C5] border border-slate-800 hover:border-[#58E2C5]/30 font-bold py-2.5 px-4 rounded-md text-center text-[10px] tracking-widest transition-all duration-300 flex items-center justify-between cursor-pointer"
                        >
                          <span>REDEEM POWER</span>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
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
                  className={`p-2.5 rounded-md border text-xs font-bold transition-all duration-300 flex items-center justify-center cursor-pointer ${
                    currentPage === 1
                      ? 'border-slate-800/55 text-slate-600 bg-[#112240]/10 cursor-not-allowed'
                      : 'border-slate-800 text-[#8892B0] bg-[#112240]/40 hover:border-slate-700 hover:text-[#CCD6F6]'
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
                      className={`w-10 h-10 rounded-md border text-xs font-bold transition-all duration-300 flex items-center justify-center cursor-pointer ${
                        isActive
                          ? 'bg-[#58E2C5] text-[#0A192F] border-[#58E2C5] shadow-[0_0_15px_rgba(88,226,197,0.3)]'
                          : 'border-slate-800 text-[#8892B0] bg-[#112240]/40 hover:border-slate-700 hover:text-[#CCD6F6]'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`p-2.5 rounded-md border text-xs font-bold transition-all duration-300 flex items-center justify-center cursor-pointer ${
                    currentPage === totalPages
                      ? 'border-slate-800/55 text-slate-600 bg-[#112240]/10 cursor-not-allowed'
                      : 'border-slate-800 text-[#8892B0] bg-[#112240]/40 hover:border-slate-700 hover:text-[#CCD6F6]'
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
