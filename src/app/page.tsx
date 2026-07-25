"use client";

import { useState } from "react";

interface Platform {
  title: string;
  category: 'DEV TOOLS' | 'DESIGN' | 'PRODUCTIVITY' | 'LEARNING' | 'LIFESTYLE';
  logo: string;
  description: string;
  benefits: string[];
  link: string;
}

const data: Platform[] = [
  {
    category: "DEV TOOLS",
    logo: "/logo/github.png",
    title: "GitHub Student Developer Pack",
    description: "Get free access to the best developer tools, cloud services, and resources based on Git Version Control.",
    benefits: [
      "Based on Git Version Control system",
      "Collaborate on software development projects",
      "Track and merge changes seamlessly",
      "Easily revert to earlier versions if needed"
    ],
    link: "https://education.github.com/pack"
  },
  {
    category: "DEV TOOLS",
    logo: "/logo/azure.png",
    title: "Microsoft Azure",
    description: "Invent with purpose and realize cost savings with Microsoft Azure's open and flexible cloud computing platform.",
    benefits: [
      "Free cloud compute credits for students",
      "Open and flexible cloud computing platform",
      "Access to popular developer cloud services"
    ],
    link: "https://portal.azure.com/"
  },
  {
    category: "LEARNING",
    logo: "/logo/perplexity.png",
    title: "Perplexity AI",
    description: "Perplexity Student Pack gives students access to Perplexity Pro and the Comet AI browser for research and study.",
    benefits: [
      "Access to Perplexity Pro & Comet AI browser",
      "Includes all premium AI models",
      "Unlimited Pro searches and file uploads",
      "Interactive study tools like flashcards and quizzes"
    ],
    link: "https://www.perplexity.ai/students"
  },
  {
    category: "DEV TOOLS",
    logo: "/logo/arduino.png",
    title: "Arduino",
    description: "Learn electronics and programming with discounted kits and educational tools ideal for STEM projects.",
    benefits: [
      "Discounted kits and educational tools",
      "Learn electronics and programming",
      "Ideal for hands-on STEM projects and prototyping"
    ],
    link: "https://www.arduino.cc/education/github-students/"
  },
  {
    category: "DESIGN",
    logo: "/logo/autocad.png",
    title: "AutoCAD & Autodesk",
    description: "Computer-aided design software used by engineers, architects, and construction professionals to create 2D/3D models.",
    benefits: [
      "Free educational software license",
      "Create 2D and 3D models of buildings and structures",
      "Industry-standard tools for engineers and architects"
    ],
    link: "https://www.autodesk.com/education/edu-software/overview"
  },
  {
    category: "DESIGN",
    logo: "/logo/figma.png",
    title: "Figma",
    description: "Collaborative interface design tool for creating UI/UX designs, wireframes, vector graphics, and prototypes.",
    benefits: [
      "Free Figma Pro for students & educators",
      "Real-time team collaboration on design projects",
      "Advanced interactive prototyping tools"
    ],
    link: "https://www.figma.com/education/"
  },
  {
    category: "DESIGN",
    logo: "/logo/canva.png",
    title: "Canva",
    description: "Graphic design platform for creating presentations, social media graphics, posters, and visual content easily.",
    benefits: [
      "Free Pro version for students and educators",
      "Access to millions of premium templates and assets",
      "Drag-and-drop presentation and graphic design"
    ],
    link: "https://www.canva.com/education/students/"
  },
  {
    category: "DESIGN",
    logo: "/logo/adobe.png",
    title: "Adobe Creative Cloud",
    description: "Suite of premium apps for image editing, illustration, video editing, sound design, PDFs, and fonts.",
    benefits: [
      "Special student discount pricing",
      "Includes Photoshop, Illustrator, Premiere Pro & more",
      "Access to Adobe Fonts and cloud storage"
    ],
    link: "https://www.adobe.com/in/creativecloud/buy/students.html"
  },
  {
    category: "PRODUCTIVITY",
    logo: "/logo/microsoft365.png",
    title: "Microsoft 365",
    description: "Suite of productivity tools including Word, Excel, PowerPoint, and Teams for coursework and collaboration.",
    benefits: [
      "Free access to Office 365 web and desktop apps",
      "Real-time document collaboration",
      "Essential productivity tools for students"
    ],
    link: "https://www.microsoft.com/en-us/education/products/office"
  },
  {
    category: "PRODUCTIVITY",
    logo: "/logo/onedrive.png",
    title: "Microsoft OneDrive",
    description: "Robust and simple-to-use cloud storage platform provided via Office 365 for managing and backup up files.",
    benefits: [
      "Included with student Office 365 account",
      "Secure cloud storage and file sync",
      "Free premium courses via select universities"
    ],
    link: "https://www.microsoft.com/en-in/microsoft-365/onedrive/graduation"
  },
  {
    category: "PRODUCTIVITY",
    logo: "/logo/googleone.png",
    title: "Google One (Gemini AI)",
    description: "Get access to Google's most powerful AI tools along with 2 TB of cloud storage across Google apps.",
    benefits: [
      "Gemini 2.5 Pro & Veo 3 Fast AI models",
      "Gemini built into Google Docs, Gmail, and Workspace",
      "Advanced tools like Flow AI filmmaking & NotebookLM",
      "2 TB Cloud Storage for Photos, Drive, and Gmail"
    ],
    link: "https://gemini.google/students/"
  },
  {
    category: "DEV TOOLS",
    logo: "/logo/intel.png",
    title: "Intel DevCloud",
    description: "Free access to AI/ML compute resources within Intel's cloud-based development environment.",
    benefits: [
      "Free access to AI/ML cloud compute resources",
      "Featuring high-performance CPUs, GPUs, and FPGAs",
      "Ideal for testing AI, HPC, and edge computing projects"
    ],
    link: "https://www.intel.com/content/www/us/en/developer/tools/devcloud/overview.html"
  },
  {
    category: "DEV TOOLS",
    logo: "/logo/unity.png",
    title: "Unity Student Plan",
    description: "Real-time 3D development platform for building 2D/3D games, VR/AR, and interactive experiences.",
    benefits: [
      "Latest version of Unity Pro Editor",
      "20% off all assets in the Unity Asset Store",
      "Free Odin Inspector and Validator license",
      "Synty asset bundle and Unity Cloud access"
    ],
    link: "https://unity.com/products/unity-student"
  },
  {
    category: "LEARNING",
    logo: "/logo/coursera.png",
    title: "Coursera",
    description: "Access free or discounted courses from top universities and companies covering technology and business.",
    benefits: [
      "Free or discounted courses from top universities",
      "Covers Data Science, Business, and Tech",
      "Build skills and earn professional certificates"
    ],
    link: "https://www.coursera.org"
  },
  {
    category: "DEV TOOLS",
    logo: "/logo/replit.png",
    title: "Replit",
    description: "Powerful online IDE to write, run, and deploy code in the browser with no setup required.",
    benefits: [
      "Supports 50+ programming languages",
      "Real-time multiplayer coding collaboration",
      "Browser-based environment on any device"
    ],
    link: "https://replit.com/edu"
  },
  {
    category: "DEV TOOLS",
    logo: "/logo/jetbrains.png",
    title: "JetBrains",
    description: "Suite of professional integrated development environments (IDEs) including IntelliJ, PyCharm, and WebStorm.",
    benefits: [
      "Free educational pack for all JetBrains IDEs",
      "Supports Java, Python, JavaScript, C++, and more",
      "Professional coding, debugging, and testing tools"
    ],
    link: "https://www.jetbrains.com/community/education/#students"
  },
  {
    category: "PRODUCTIVITY",
    logo: "/logo/lucid.png",
    title: "Lucidchart",
    description: "Web-based diagramming software used for creating flowcharts, diagrams, and visual presentations.",
    benefits: [
      "Free education account upgrade",
      "Create flowcharts, diagrams, and wireframes",
      "Visual presentation and collaboration tools"
    ],
    link: "https://www.lucidchart.com/pages/usecase/education"
  },
  {
    category: "PRODUCTIVITY",
    logo: "/logo/notion.png",
    title: "Notion",
    description: "Organize your schoolwork, notes, tasks, and life all in one clean, customizable workspace.",
    benefits: [
      "Free Plus plan upgrade",
      "Unlimited file uploads",
      "30-day page history"
    ],
    link: "https://www.notion.so/students"
  },
  {
    category: "LEARNING",
    logo: "/logo/zotero.png",
    title: "Zotero",
    description: "Free, open-source software for collecting, organizing, annotating, citing, and sharing research sources.",
    benefits: [
      "Free open-source research manager",
      "One-click citation capture via browser extension",
      "Organize references by DOI, ISBN, or metadata"
    ],
    link: "https://www.zotero.org"
  },
  {
    category: "DEV TOOLS",
    logo: "/logo/namecheap.png",
    title: "Namecheap",
    description: "Platform to buy domains, host websites, and manage SSL, email, and security tools for web development.",
    benefits: [
      "Free domain name offer for students",
      "Free WHOIS privacy protection",
      "Budget-friendly web hosting options"
    ],
    link: "https://nc.me/"
  },
  {
    category: "LEARNING",
    logo: "/logo/overleaf.png",
    title: "Overleaf",
    description: "Collaborative online LaTeX editor for writing, editing, and publishing scientific papers and documents.",
    benefits: [
      "Free Pro features for participating universities",
      "Real-time collaborative LaTeX editing",
      "Rich template gallery for academic papers"
    ],
    link: "https://www.overleaf.com/edu"
  },
  {
    category: "PRODUCTIVITY",
    logo: "/logo/grammarly.png",
    title: "Grammarly",
    description: "AI-powered writing assistant offering real-time grammar, spelling, clarity, and tone improvements.",
    benefits: [
      "Grammarly for Education features",
      "AI-powered writing assistance",
      "Improves academic essay quality and communication"
    ],
    link: "https://www.grammarly.com/students"
  },
  {
    category: "LEARNING",
    logo: "/logo/wolframalpha.png",
    title: "Wolfram Alpha Pro",
    description: "Computational knowledge engine providing step-by-step solutions for math, physics, and engineering.",
    benefits: [
      "Free Pro account with .edu / .ac.in email",
      "Step-by-step solutions for complex math & science",
      "Access expert algorithms and technical knowledge base"
    ],
    link: "https://www.wolframalpha.com/pro-for-students"
  },
  {
    category: "LEARNING",
    logo: "/logo/educative.png",
    title: "Educative",
    description: "Text-based interactive learning platform tailor-made for software developers and engineers.",
    benefits: [
      "Interactive text-based courses without video fluff",
      "Embedded in-browser code editors",
      "Tailor-made software engineering paths"
    ],
    link: "https://www.educative.io"
  },
  {
    category: "LEARNING",
    logo: "/logo/scrimba.png",
    title: "Scrimba",
    description: "Interactive code-learning platform featuring screencasts where you can pause and edit code directly.",
    benefits: [
      "Interactive tutorials for React, Vue, Node, and Web Dev",
      "Pause code cast and edit code in real-time",
      "Hands-on web development practice"
    ],
    link: "https://scrimba.com/github-education"
  },
  {
    category: "LEARNING",
    logo: "/logo/datacamp.png",
    title: "DataCamp",
    description: "Self-paced, in-browser learning platform for data science, Python, R, SQL, and AI skills.",
    benefits: [
      "Unlimited access to DataCamp Premium for students",
      "Interactive in-browser coding environments",
      "Self-paced courses in Data Science, Python & AI"
    ],
    link: "https://www.datacamp.com/pricing/student"
  },
  {
    category: "LIFESTYLE",
    logo: "/logo/dell.png",
    title: "Dell Student Store",
    description: "Exclusive student discount program on Dell laptops, desktop computers, and tech accessories.",
    benefits: [
      "Seasonal student discounts on laptops",
      "Special savings on desktops and monitors",
      "Dedicated Dell student store deals"
    ],
    link: "https://www.dell.com/en-in/lp/students"
  },
  {
    category: "LIFESTYLE",
    logo: "/logo/hp.png",
    title: "HP Education Store",
    description: "Dedicated education discounts on HP laptops, desktop computers, printers, and accessories.",
    benefits: [
      "Discounted student pricing on HP laptops",
      "Savings on printers and computer accessories",
      "Exclusive education store offers"
    ],
    link: "https://www.hp.com/in-en/shop/education-store"
  },
  {
    category: "LIFESTYLE",
    logo: "/logo/apple.png",
    title: "Apple Education Store",
    description: "Special education pricing on MacBooks, iPads, and accessories for university students.",
    benefits: [
      "Discounts on MacBooks and iPads",
      "Savings on Apple accessories",
      "Seasonal back-to-school bundle deals"
    ],
    link: "https://www.apple.com/in-edu/store"
  },
  {
    category: "PRODUCTIVITY",
    logo: "/logo/notability.png",
    title: "Notability",
    description: "Intuitive digital note-taking application for iOS featuring audio syncing, PDF annotation, and AI tools.",
    benefits: [
      "50% off via Apple Edu store",
      "Minimal, intuitive note-taking interface",
      "Powerful AI tools to enhance learning"
    ],
    link: "https://www.gingerlabs.com/"
  },
  {
    category: "PRODUCTIVITY",
    logo: "/logo/dropbox.png",
    title: "Dropbox Education",
    description: "Secure cloud storage, backup, and collaboration tools tailored for managing coursework efficiently.",
    benefits: [
      "Student discount via school partnerships",
      "Extra cloud storage capacity",
      "File backup and secure collaboration tools"
    ],
    link: "https://www.dropbox.com/education"
  },
  {
    category: "LIFESTYLE",
    logo: "/logo/youtube.png",
    title: "YouTube Premium Student",
    description: "Ad-free YouTube experience with background playback, offline downloads, and YouTube Music.",
    benefits: [
      "1-month free trial for students",
      "Ad-free video streaming & background play",
      "Includes YouTube Music Premium",
      "Offline video downloads on mobile devices"
    ],
    link: "https://www.youtube.com/premium/student"
  },
  {
    category: "LIFESTYLE",
    logo: "/logo/amazonprime.png",
    title: "Amazon Prime Student",
    description: "Student membership providing fast free delivery, Prime Video, Prime Music, and Prime Reading.",
    benefits: [
      "6 months of free Amazon Prime trial",
      "Free fast shipping on eligible items",
      "Access to Prime Video, Prime Music, and Prime Reading"
    ],
    link: "https://www.amazon.com/Amazon-Student/b?ie=UTF8&node=668781011"
  },
  {
    category: "LIFESTYLE",
    logo: "/logo/spotify.png",
    title: "Spotify Premium Student",
    description: "Discounted music and podcast streaming service with ad-free access and offline listening.",
    benefits: [
      "50% discount on Spotify Premium subscription",
      "Ad-free access to over 70 million songs and podcasts",
      "Personalized playlists and offline listening"
    ],
    link: "https://www.spotify.com/in-en/student/"
  },
  {
    category: "LIFESTYLE",
    logo: "/logo/imagica.png",
    title: "Imagicaa College Deal",
    description: "Theme park and water park destination in India featuring thrilling rides, attractions, and live events.",
    benefits: [
      "20% discount on Imagicaa Theme Park tickets",
      "10% discount on Imagicaa Water Park tickets",
      "Access to a range of thrilling rides and attractions"
    ],
    link: "https://www.imagicaaworld.com/offers/college-deal/"
  },
  {
    category: "LIFESTYLE",
    logo: "/logo/applemusic.png",
    title: "Apple Music Student",
    description: "Discounted Apple Music student subscription with ad-free listening and free Apple TV+ access.",
    benefits: [
      "Discounted student pricing for Apple Music",
      "Full access to over 100 million songs ad-free",
      "Includes limited-time free access to Apple TV+"
    ],
    link: "https://music.apple.com/in/student"
  }
];

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
    <div className="min-h-screen text-slate-100 flex flex-col justify-between py-[46px] px-[62px] relative bg-[#0A192F]">
      <div className="w-full mx-auto">
        {/* Simplified Hero Header */}
        <div className="relative w-full mb-10 lg:mb-14  bg-[#112240]/40  rounded-md p-8 lg:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 transition-colors duration-500 ">

          {/* Subtle background accent */}
          {/* <div className="absolute top-0 right-0 w-80 h-80 bg-[#58E2C5] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.06] pointer-events-none" /> */}

          {/* Text Content */}
          <div className="flex-1 w-full relative z-10 text-center md:text-left">
            <h1 className="text-[#CCD6F6] text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight mb-4">
              What's Your <span className="text-[#58E2C5]">Superpower?</span>
            </h1>
            <p className="text-[#8892B0] text-sm sm:text-base lg:text-lg font-medium max-w-xl mx-auto md:mx-0">
              Unlock the true potential of your <span className="text-white font-semibold">MES / Pillai University ID</span>. Everything you need—free for students.
            </p>
          </div>

          {/* Logo Display */}
          <div className="relative z-10 shrink-0 w-full border border-slate-700/50 p-5 rounded-xl md:w-auto flex justify-center md:justify-end">
            <img
              src="/logo/PillaiUnivLogo1.png"
              alt="Pillai University Logo"
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
          </div>
        </div>

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
                  className={`px-4 py-2 rounded-md text-xs font-bold tracking-wider transition-all duration-300 cursor-pointer ${isActive
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
            <div className="flex flex-wrap justify-center gap-6 p-5">
              {paginatedData.map((platform, index) => {
                const isFlipped = flippedCardIndex === index;
                return (
                  <div
                    className="h-[300px] w-[280px] [perspective:1000px] cursor-pointer select-none relative z-0 group"
                    key={index}
                    onClick={() => handleCardToggle(index)}
                  >

                    <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""
                      }`}>
                      {/* Front Side */}
                      <div className="absolute inset-0 w-full h-full rounded-md border border-slate-800  bg-[#112240]/40 p-6 flex flex-col items-center justify-between [backface-visibility:hidden]  transition-all duration-300 shadow-lg group">
                        <div className="flex flex-col items-center justify-center flex-grow py-4">
                          <div className="w-28 h-28 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                            <img src={platform.logo} alt={platform.title} className="w-16 h-16 object-contain" />
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
                      <div className="absolute inset-0 w-full h-full rounded-md border border-slate-800 bg-[#112240]/40 p-4 flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl transition-all duration-300  overflow-hidden">
                        <div className="flex-1 overflow-hidden">
                          {/* Header Row */}
                          <div className="flex justify-start items-center mb-2">
                            <span className="bg-[#58E2C5]/10 border border-[#58E2C5]/20 text-[#58E2C5] text-[9px] font-bold tracking-wider px-2 py-0.5 rounded uppercase">
                              {platform.category}
                            </span>
                          </div>

                          {/* Title & Description */}
                          <h2 className="text-[#CCD6F6] text-sm font-bold mb-1 tracking-tight">
                            {platform.title}
                          </h2>
                          <p className="text-[#8892B0] text-[11px] leading-snug mb-2">
                            {platform.description}
                          </p>

                          {/* Benefits */}
                          <div>
                            <h3 className="text-[#8892B0]/80 text-[9px] font-bold tracking-widest uppercase mb-1.5">
                              BENEFITS
                            </h3>
                            <ul className="space-y-1">
                              {platform.benefits.slice(0, 3).map((benefit, bIndex) => (
                                <li key={bIndex} className="flex items-start text-[11px] text-[#CCD6F6]">
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
                      className={`w-10 h-10 rounded-md border text-xs font-bold transition-all duration-300 flex items-center justify-center cursor-pointer ${isActive
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
                  className={`p-2.5 rounded-md border text-xs font-bold transition-all duration-300 flex items-center justify-center cursor-pointer ${currentPage === totalPages
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
