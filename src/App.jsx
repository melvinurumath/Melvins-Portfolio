import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Play,
  ChevronRight,
  MonitorPlay,
  Smartphone,
  Camera,
  FolderArchive
} from 'lucide-react';

// --- CUSTOM STYLES FOR CINEMATIC ANIMATIONS & ANALOG GRAIN ---
const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Helvetica+Neue:wght@300;400;500;700&display=swap');

  :root {
    --cream: #F6F6F4;
    --cream-dark: #EAE6DF;
    --ink: #232323; /* Washed Black */
    --deep-green: #0A1B10; /* Ultra Deep Green */
    --gold: #BA9A5A; /* Analog Gold */
  }

  @keyframes blurIn {
    0% { filter: blur(20px); opacity: 0; transform: translateY(20px); }
    100% { filter: blur(0px); opacity: 1; transform: translateY(0); }
  }
  .animate-blur-in {
    animation: blurIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  .animate-blur-in-delayed {
    animation: blurIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
    opacity: 0;
  }

  /* Floating Animations for Hero Badges */
  @keyframes floatSlow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .float-1 { animation: floatSlow 4s ease-in-out infinite; }
  .float-2 { animation: floatSlow 5s ease-in-out infinite 1s; }
  .float-3 { animation: floatSlow 4.5s ease-in-out infinite 0.5s; }

  /* Dark Analog Film Grain for Light Theme */
  .film-grain {
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.25;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.6'/%3E%3C/svg%3E");
    mix-blend-mode: multiply;
  }

  /* Custom Scrollbar for Light Theme */
  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: var(--cream); border-left: 1px solid rgba(35,35,35,0.1); }
  ::-webkit-scrollbar-thumb { background: var(--deep-green); border-radius: 0px; }
  ::-webkit-scrollbar-thumb:hover { background: var(--ink); }

  /* Hairline Borders & Snap Shadows */
  .hairline { border: 1px solid var(--ink); }
  .snap-shadow {
    box-shadow: 0 0 0 var(--ink);
    transition: transform 0.1s ease-out, box-shadow 0.1s ease-out;
  }
  .snap-shadow:hover {
    transform: translate(-4px, -4px);
    box-shadow: 4px 4px 0 var(--ink);
  }
`;

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const caseCompetitions = [
    {
      company: "Bell Media",
      title: "Flip the Script",
      focus: "Corporate Strategy",
      date: "Jan 2025",
      desc: "Developed a disruptive strategy to modernize content delivery models, focusing on capturing Gen Z demographics for traditional media platforms.",
      logoId: "1MNWTJLDgSkp4Bve8fDyKAVHz3PDbsJ05",
      mediaId: "1RA9HS6H53jdyWF-2xWxFBU3T2QTKow9J"
    },
    {
      company: "Scotiabank",
      title: "Canada's Top Student",
      focus: "Tech (AI/ML) Strategy",
      date: "Nov 2024",
      desc: "Proposed a roadmap for integrating AI and Machine Learning into retail banking to enhance personalized customer journeys and predictive financial planning.",
      logoId: "15MNJTJzhjX4Hp7LQsKInmmJh9_ULLGQE",
      mediaId: "1vheOA6QNohb269rdKgyd6j0KKiS1m7nY"
    },
    {
      company: "Hellmann's",
      title: "BU252 IMC",
      focus: "Integrated Marketing",
      date: "Mar 2025",
      desc: "Crafted a 360-degree marketing campaign for Unilever, focusing on the synergy between digital engagement and traditional retail touchpoints.",
      logoId: "1_BIBkvcQUlVUun0QekdGu1b6CQZCNEXe",
      mediaId: "1-p7XO1MaP2e7e2y6SEbokDFZhB1zKood"
    },
    {
      company: "Laurier Marketing Assoc.",
      title: "LazCup",
      focus: "Marketing Strategy",
      date: "Jan 2024",
      desc: "Navigated a high-intensity marketing 'sprint' to deliver a creative brand-building strategy for industry partners.",
      logoId: "1_axl9NX0ptrWjOFleZzrLk7nEo-pMLsG",
      mediaId: "1eRGws2veu8igntJcfRt5r4mXpk2kALjY"
    },
    {
      company: "Sustainability In Business",
      title: "Greenovation Challenge",
      focus: "Sustainability Strategy",
      date: "Nov 2023",
      desc: "Built a circular economy business model that balanced environmental ESG goals with long-term corporate profitability.",
      logoId: "1W1Ob9MYilfXnnnyKdwdPE-32EKYeLBS_",
      mediaId: "1i8SvYqhDvFcpKeGWW40n8PvSHke1_nDY"
    }
  ];

  const coopExperiences = [
    {
      company: "MNP",
      role: "Analyst, Management Consultant",
      date: "Jan 2026 - Present",
      desc: "Driving process improvement and operational excellence strategies within the Value Creation Team.",
      mediaId: "1Zf04sfkVjQdoZ-WXVwgDvB5YK31vv4Jk"
    },
    {
      company: "Starr Insurance",
      role: "Underwriting Analyst",
      date: "May 2025 - Aug 2025",
      desc: "Evaluating financial lines and professional liability risks to structure comprehensive underwriting portfolios.",
      mediaId: "1eJE3cwnXH68BtExgEnUC1gCC_kLNjnNs"
    },
    {
      company: "Abilities to Work",
      role: "Summer Intern",
      date: "May 2024 - Jul 2024",
      desc: "Executed critical administrative, auditing, and marketing initiatives to optimize non-profit agency operations.",
      mediaId: "1a--lj47Adkm-qt9TR1J7cA-LVArCKaSW"
    }
  ];

  return (
    <div className="min-h-screen font-sans antialiased text-[#232323] bg-[#F6F6F4] selection:bg-[#0A1B10] selection:text-[#F6F6F4] overflow-x-hidden" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      <style>{customStyles}</style>
      <div className="film-grain"></div>

      {/* --- NAVIGATION (HERITAGE MINIMALISM) --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#F6F6F4]/90 backdrop-blur-2xl border-b border-[#232323]/10 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12 flex items-center justify-between text-xs font-medium tracking-[0.15em] uppercase text-[#232323]/50">
          <div className="flex items-center gap-4 text-[#232323]">
            <span className="font-semibold tracking-[0.2em] text-[#0A1B10]">Melvin</span>
          </div>
          <div className="hidden md:flex gap-12">
            <a href="#strategy" className="hover:text-[#0A1B10] transition-colors duration-500">Strategy</a>
            <a href="#archive" className="hover:text-[#0A1B10] transition-colors duration-500">Case Competitions</a>
            <a href="#creative" className="hover:text-[#0A1B10] transition-colors duration-500">Content Creation</a>
            <a href="#growth" className="hover:text-[#0A1B10] transition-colors duration-500">Impact</a>
            <a href="#experience" className="hover:text-[#0A1B10] transition-colors duration-500">Experience</a>
          </div>
          <a href="https://www.linkedin.com/in/melvin-urumath-11592b214/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#F6F6F4] bg-[#232323] border border-[#232323]/20 px-6 py-2 rounded-full hover:bg-[#0A1B10] transition-all duration-500">
            Connect
          </a>
        </div>
      </nav>

      {/* --- 01 // HERO SECTION (CENTERED LAYOUT & GLASS BUBBLES) --- */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 relative bg-gradient-to-b from-[#EAE6DF] to-[#F6F6F4] pt-32 pb-20 overflow-hidden">

        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60vh] bg-[#BA9A5A] opacity-[0.05] blur-[120px] pointer-events-none rounded-full"></div>

        <div className="max-w-[90rem] mx-auto w-full flex flex-col items-center text-center relative z-10">

          {/* Top Text Content */}
          <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-light tracking-tighter leading-[0.85] text-[#232323] mb-8 uppercase">
            Hi, I'm <br className="md:hidden" />
            <span className="font-bold text-[#0A1B10]">Melvin Urumath.</span>
          </h1>

          <div className="flex flex-col items-center justify-center mb-6">
            <p className="text-2xl md:text-4xl font-medium text-[#232323] tracking-tight max-w-2xl leading-snug">
              3rd Year BBA Student.
            </p>
            <p className="text-xl md:text-2xl font-medium text-[#232323]/60 tracking-tight mt-2">
              Wilfrid Laurier University.
            </p>
          </div>

          <p className="text-lg md:text-xl font-medium text-[#232323]/70 max-w-xl leading-relaxed tracking-wide mb-14">
            Consulting, Marketing and Analytics experience.
          </p>

          {/* Bold Middle Piece */}
          <div className="inline-block px-8 py-4 bg-[#0A1B10] text-[#F6F6F4] text-sm md:text-lg font-bold uppercase tracking-[0.2em] hairline mb-16 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            "DRIVEN BY CURIOSITY"
          </div>

          {/* Image & Floating Glass Bubbles */}
          <div className="relative flex justify-center items-center w-full max-w-lg mx-auto">

            {/* Background Arch/Shape */}
            <div className="absolute inset-0 bg-[#0A1B10] rounded-t-full rounded-b-[3rem] w-full max-w-[340px] mx-auto opacity-10 blur-xl transform rotate-3"></div>

            {/* Main Portrait Card - Glassmorphism & Blended Feature */}
            <div className="relative z-10 w-full max-w-[300px] md:max-w-[360px] aspect-[3/4] rounded-2xl bg-white/20 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-3 overflow-hidden group">
               <div className="absolute inset-0 bg-[#BA9A5A]/10 mix-blend-multiply z-10 pointer-events-none transition-opacity group-hover:opacity-0 duration-700"></div>
               <img
                 src="https://drive.google.com/thumbnail?id=1G1KaWZolgJilI4rsnAgcQP3inTg2x1Bp&sz=w1000"
                 className="w-full h-full object-cover rounded-xl grayscale-[15%] contrast-110 sepia-[5%] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700 object-center mix-blend-darken opacity-95"
                 alt="Melvin Urumath"
               />
               <div className="absolute bottom-6 left-6 z-20 text-[9px] font-bold uppercase tracking-widest text-[#232323] border border-[#232323]/10 px-3 py-1.5 bg-white/60 backdrop-blur-md rounded-full shadow-sm">
                 "WORK HARD PLAY HARD"
               </div>
            </div>

            {/* Floating Glass Bubbles */}
            <div className="absolute top-[10%] -left-4 md:-left-16 bg-white/80 backdrop-blur-md border border-white/50 px-5 py-3 text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-xl flex items-center gap-2 z-20 float-1 rounded-full text-[#232323]">
              <span className="text-[#0A1B10]">✦</span> Consulting
            </div>
            <div className="absolute top-[60%] -right-4 md:-right-16 bg-[#232323]/80 backdrop-blur-md border border-white/10 text-[#F6F6F4] px-5 py-3 text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-xl flex items-center gap-2 z-20 float-2 rounded-full">
              Marketing <span className="text-[#BA9A5A]">↗</span>
            </div>
            <div className="absolute bottom-[5%] left-[10%] md:-left-8 bg-[#0A1B10]/90 backdrop-blur-md border border-white/20 text-[#F6F6F4] px-5 py-3 text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-xl flex items-center gap-2 z-20 float-3 rounded-full">
              <span className="text-[#BA9A5A]">●</span> Analytics
            </div>

          </div>
        </div>
      </section>

      {/* --- 02 // STRATEGY (EDITORIAL SPREAD) --- */}
      <section id="strategy" className="py-32 px-6 lg:px-12 max-w-[90rem] mx-auto border-t border-[#232323]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6 text-[#232323]/50">
              <div className="w-8 h-[1px] bg-[#0A1B10] opacity-50"></div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#0A1B10]">Canadian Marketing League</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full mb-10 gap-8 sm:gap-4 relative">
              <a href="https://www.canadianmarketingleague.ca/2025-finals" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B59410] text-white text-[10px] font-bold uppercase tracking-widest hairline rounded-full shadow-[2px_2px_0px_rgba(35,35,35,1)] relative z-10 self-start hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(35,35,35,1)] transition-all duration-300">
                Season 17 | Top 10 Finalist
              </a>

              {/* Hovering CML Logo with Halo Effect - Far Right */}
              <div className="relative z-20 float-1 self-end sm:self-center">
                <div className="relative">
                  {/* The Halo Glow */}
                  <div className="absolute inset-0 bg-[#B59410] opacity-50 blur-2xl rounded-full scale-[2] pointer-events-none"></div>
                  {/* The Cutout Logo */}
                  <img
                    src="https://drive.google.com/thumbnail?id=1xtGcynX-7b7-4L_ywPfnpBAK49xplNnT&sz=w200"
                    alt="CML Logo"
                    className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] relative z-10 transform rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#232323] mb-8 leading-tight uppercase">
              Defending the <br/> <span className="text-[#0A1B10]">Xbox Strategy.</span>
            </h2>
            <p className="text-lg font-medium text-[#232323]/70 leading-relaxed mb-12">
              Four intense rounds. Four distinct cases. The culmination was building a bulletproof growth funnel for Xbox Game Pass and defending it live in front of 40+ CMOs and executives. It required absolute precision—stripping away corporate fluff and proving the numbers under the highest level of scrutiny.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              {[
                { name: 'Microsoft', id: '1XEqbcnpTjjzJ8KjjLjyJnq_p_AFrQBDP' },
                { name: 'Kraft Heinz', id: '1PLU2hvb7MBpZ_0kg6DS1fGMqnp1Avf8_' },
                { name: 'General Motors', id: '1yGJio9_etQbNwe0fG0lT00_5CRfPLSoL' },
                { name: 'Environics Analytics', id: '1ky-_FmN3EfVqHFeh8G78DAfVGdpb2Hgn' }
              ].map(brand => (
                <div key={brand.name} className="px-4 py-2 bg-white rounded-none hairline shadow-[2px_2px_0px_rgba(35,35,35,1)] flex items-center justify-center group cursor-default" title={brand.name}>
                  <img
                    src={`https://drive.google.com/thumbnail?id=${brand.id}&sz=w400`}
                    alt={brand.name}
                    className="h-4 md:h-5 w-auto object-contain transition-all duration-300 mix-blend-multiply"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Image Content - Cinematic Crop */}
          <div className="lg:col-span-7 relative group order-1 lg:order-2">
            <a href="https://www.linkedin.com/posts/melvin-urumath-11592b214_yo-melvin-do-you-want-to-compete-in-a-case-activity-7318376688797528064-vAF4?utm_source=share&utm_medium=member_desktop&rcm=ACoAADY-GOEBHDz8DbzsCaaCbe0HCten517bUzk" target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden rounded-sm bg-[#EAE6DF] hairline snap-shadow">
              <div className="absolute inset-0 bg-[#BA9A5A]/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
              <img
                src="https://drive.google.com/thumbnail?id=1RWJPc3w16aSOQAjcf7XGVyEiwiUUee0D&sz=w1600"
                alt="Melvin presenting Game Pass Strategy at Microsoft HQ"
                className="w-full h-[50vh] lg:h-[70vh] object-cover scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out filter grayscale-[30%] contrast-110 sepia-[10%]"
              />
              {/* Technical overlay */}
              <div className="absolute bottom-6 left-6 z-20 flex gap-4">
                <span className="text-[10px] font-bold tracking-widest uppercase bg-white/90 backdrop-blur-md px-3 py-1 hairline text-[#232323]">CML_FINALS.RAW</span>
                <span className="text-[10px] font-bold tracking-widest uppercase bg-[#232323] hairline text-white px-3 py-1">Top 10</span>
              </div>
            </a>
          </div>

        </div>
      </section>

      {/* --- 02.5 // CASE COMPETITIONS ARCHIVE --- */}
      <section id="archive" className="py-24 px-6 lg:px-12 max-w-[90rem] mx-auto border-t border-[#232323]/10">

        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6 text-[#BA9A5A]">
              <FolderArchive size={16} />
              <p className="text-xs font-bold tracking-[0.2em] uppercase">Strategic Briefs</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#232323] uppercase">Case Archive.</h2>
          </div>
          <div className="text-right max-w-sm">
            <p className="text-sm font-medium text-[#232323]/70 leading-relaxed tracking-wide">
              A rapid overview of competitive strategy formats, dissecting complex briefs into actionable architecture.
            </p>
          </div>
        </div>

        {/* Dynamic Grid Layout for Briefs */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {caseCompetitions.map((comp, idx) => (
            <div key={idx} className="bg-[#F6F6F4] hairline p-5 group snap-shadow flex flex-col relative h-full">

              {/* Image & Hover Logo Banner */}
              <div className="relative w-full aspect-[4/3] bg-[#EAE6DF] hairline mb-5 overflow-hidden">
                <div className="absolute inset-0 bg-[#0A1B10]/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                <img
                  src={`https://drive.google.com/thumbnail?id=${comp.mediaId}&sz=w800`}
                  alt={comp.title}
                  className="w-full h-full object-cover filter grayscale-[20%] contrast-110 sepia-[10%] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700 group-hover:scale-105"
                />

                {/* Glowing Halo Logo (Top Right) */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="absolute inset-0 bg-[#BA9A5A] opacity-0 group-hover:opacity-70 blur-xl rounded-full scale-[2] transition-opacity duration-500 pointer-events-none"></div>
                  <img
                    src={`https://drive.google.com/thumbnail?id=${comp.logoId}&sz=w200`}
                    alt={comp.company}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain relative z-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] bg-white/80 backdrop-blur-sm rounded-full p-2 hairline"
                  />
                </div>
              </div>

              {/* Text Meta */}
              <div className="flex-grow flex flex-col">
                <div className="flex justify-between items-center text-[9px] font-bold tracking-widest uppercase text-[#232323]/50 border-b border-[#232323]/10 pb-2 mb-3">
                  <span className="text-[#0A1B10]">{comp.focus}</span>
                  <span>{comp.date}</span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-[#232323] mb-1">
                  {comp.title}
                </h3>
                <h4 className="text-xs font-bold tracking-widest uppercase text-[#BA9A5A] mb-4">
                  {comp.company}
                </h4>

                <p className="text-sm font-medium text-[#232323]/80 leading-relaxed mb-4 mt-auto border-l-2 border-[#232323]/20 pl-3">
                  {comp.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* --- 03 // CREATIVE VISUAL ARCHIVE (THE GALLERY) --- */}
      <section id="creative" className="py-32 relative bg-[#EAE6DF] border-t border-[#232323]/10">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">

          <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-[#232323]/20 pb-12">
            <div>
              <div className="flex items-center gap-3 mb-6 text-[#0A1B10]">
                <Camera size={16} />
                <p className="text-xs font-bold tracking-[0.2em] uppercase">Personal Documentation of Life</p>
              </div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-[#232323] uppercase">MelvinsUtopia.</h2>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-[#232323]/70 leading-relaxed uppercase tracking-widest">
                Reflection. <br/>
                <span className="text-[#232323]">Premiere Pro.</span>
              </p>
            </div>
          </div>

          {/* ELEGANT VIDEO GALLERY */}
          <div className="flex flex-col gap-12">

            {/* 16:9 Landscape Video (Cinematic Standard) */}
            <div className="w-full max-w-5xl mx-auto flex flex-col gap-4">
              <div className="hairline bg-white/60 p-4 snap-shadow h-full flex flex-col">
                <div className="flex items-center justify-between text-[10px] font-bold tracking-widest uppercase text-[#232323] mb-4 border-b border-[#232323] pb-2">
                  <span>"FORMAT: 16:9 LANDSCAPE"</span>
                  <span className="text-[#0A1B10]">"M-UTOPIA_REEL_01"</span>
                </div>
                <div className="relative aspect-video w-full overflow-hidden hairline bg-[#232323] mt-auto">
                  <iframe
                    src="https://drive.google.com/file/d/1n-_sxx_rkq06QojJYoaW-eV2h6cOryJb/preview"
                    className="absolute top-0 left-0 w-full h-full scale-[1.02] filter contrast-110 saturate-[0.85]"
                    allow="autoplay"
                    title="Melvin's Utopia Cinematic Reel"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* 9:16 Portrait Videos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">

              {/* 9:16 Portrait Video 1 (Social/Vertical Standard 1080x1920) */}
              <div className="w-full max-w-[400px] mx-auto flex flex-col gap-4">
                <div className="hairline bg-white/60 p-4 snap-shadow h-full flex flex-col">
                  <div className="flex items-center justify-between text-[10px] font-bold tracking-widest uppercase text-[#232323] mb-4 border-b border-[#232323] pb-2">
                    <span>"9:16 VERTICAL"</span>
                    <span className="text-[#0A1B10]">"SOCIAL_DESIGN_02"</span>
                  </div>
                  <div className="relative aspect-[9/16] w-full overflow-hidden hairline bg-[#232323] mt-auto">
                    <iframe
                      src="https://drive.google.com/file/d/1txAzv9BJEqHhKhd9Gh_IxnOtDfr_4F8j/preview"
                      className="absolute top-0 left-0 w-full h-full scale-[1.02] filter contrast-110 saturate-[0.85]"
                      allow="autoplay"
                      title="Melvin's Utopia Vertical Design"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* 9:16 Portrait Video 2 (New Utopia Vertical 1080x1920) */}
              <div className="w-full max-w-[400px] mx-auto flex flex-col gap-4">
                <div className="hairline bg-white/60 p-4 snap-shadow h-full flex flex-col">
                  <div className="flex items-center justify-between text-[10px] font-bold tracking-widest uppercase text-[#232323] mb-4 border-b border-[#232323] pb-2">
                    <span>"9:16 VERTICAL"</span>
                    <span className="text-[#0A1B10]">"M-UTOPIA_V_03"</span>
                  </div>
                  <div className="relative aspect-[9/16] w-full overflow-hidden hairline bg-[#232323] mt-auto">
                    <iframe
                      src="https://drive.google.com/file/d/1kn8P_6G41NGo2HbO1GAT7kMZCsNFgEpc/preview"
                      className="absolute top-0 left-0 w-full h-full scale-[1.02] filter contrast-110 saturate-[0.85]"
                      allow="autoplay"
                      title="Melvin's Utopia Vertical 2"
                    ></iframe>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- 04 // COMMUNITY GROWTH LAB (EDITORIAL ARCHITECTURE) --- */}
      <section id="growth" className="py-32 px-6 lg:px-12 max-w-[90rem] mx-auto border-t border-[#232323]/10">

        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-[#232323]/20 pb-12">
          <div>
            <div className="flex items-center gap-3 mb-6 text-[#BA9A5A]">
              <div className="w-8 h-[1px] bg-[#BA9A5A]"></div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase">Data & Scale</p>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-[#232323] uppercase">Community Impact.</h2>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-[#232323]/70 leading-relaxed uppercase tracking-widest max-w-sm">
              Clubs & Organizations. <br/>
              <span className="text-[#232323]">Architecting Organic Growth.</span>
            </p>
          </div>
        </div>

        {/* --- Subsection 1: Alumni Mentorship Program --- */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-4 flex flex-col justify-center">

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full mb-8 gap-8 sm:gap-4 relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A1B10] text-[#F6F6F4] text-[10px] font-bold uppercase tracking-widest hairline rounded-none shadow-[2px_2px_0px_rgba(35,35,35,1)] relative z-10 self-start">
                  "ALUMNI MENTORSHIP PROGRAM"
                </div>

                {/* Hovering AMP Logo with Halo Effect - Far Right */}
                <div className="relative z-20 float-1 self-end sm:self-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#BA9A5A] opacity-50 blur-2xl rounded-full scale-[2] pointer-events-none"></div>
                    <img
                      src="https://drive.google.com/thumbnail?id=1OzLxkmqa_XBtNMmA0dHllgt5P-sTN-26&sz=w200"
                      alt="AMP Logo"
                      className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] relative z-10 transform rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-5xl md:text-6xl font-black tracking-tighter text-[#232323] mb-4 uppercase leading-none">
                130,000 <br/> <span className="text-[#BA9A5A]">Impressions.</span>
              </h3>
              <p className="text-xs font-bold tracking-widest uppercase text-[#232323]/50 mb-8">
                "IN 30 DAYS"
              </p>

              <p className="text-sm font-medium text-[#232323]/80 leading-relaxed mb-8 border-l-2 border-[#BA9A5A] pl-4">
                Engineered highly specific organic reach by dissecting and leveraging strict LinkedIn algorithmic behaviors.
              </p>

              <div className="flex items-center justify-between text-[10px] font-bold tracking-widest uppercase text-[#232323] border-t border-[#232323]/10 pt-4">
                <span>"FORMAT"</span>
                <span className="text-[#0A1B10]">"MEDIA CAMPAIGN"</span>
              </div>
            </div>

            {/* Media 1 */}
            <div className="lg:col-span-8 w-full">
              <div className="hairline bg-white/60 p-4 snap-shadow">
                <div className="relative aspect-video w-full overflow-hidden hairline bg-[#EAE6DF] group">
                  <div className="absolute inset-0 bg-[#BA9A5A]/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                  <img
                    src="https://drive.google.com/thumbnail?id=1h7ek3WaqB72MdqSan0_t0HthQtk70-zI&sz=w1600"
                    alt="Lazsoc Announcement"
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out filter grayscale-[20%] contrast-110 sepia-[10%]"
                  />
                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20 flex gap-4">
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-white/90 backdrop-blur-md px-3 py-1 hairline text-[#232323]">LAZSOC ANNOUNCEMENT</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* --- Subsection 2: Prism Resources --- */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-4 flex flex-col justify-center order-1 lg:order-2">

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full mb-8 gap-8 sm:gap-4 relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#232323] text-[#F6F6F4] text-[10px] font-bold uppercase tracking-widest hairline rounded-none shadow-[2px_2px_0px_rgba(35,35,35,1)] relative z-10 self-start">
                  "PRISM RESOURCES"
                </div>

                {/* Hovering PRISM Logo with Halo Effect - Far Right */}
                <div className="relative z-20 float-1 self-end sm:self-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#BA9A5A] opacity-50 blur-2xl rounded-full scale-[2] pointer-events-none"></div>
                    <img
                      src="https://drive.google.com/thumbnail?id=1HxlFdMscwFGpgbcXIo7XuF94895eb9ht&sz=w200"
                      alt="PRISM Resources Logo"
                      className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] relative z-10 transform rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-5xl md:text-6xl font-black tracking-tighter text-[#232323] mb-4 uppercase leading-none">
                The Most <br/> <span className="text-[#0A1B10]">Viewed Video.</span>
              </h3>
              <p className="text-xs font-bold tracking-widest uppercase text-[#232323]/50 mb-8">
                "RECORD ENGAGEMENT"
              </p>

              <p className="text-sm font-medium text-[#232323]/80 leading-relaxed mb-8 border-l-2 border-[#0A1B10] pl-4">
                Orchestrated end-to-end production—from scripting to final cut—while acting as the primary strategic liaison between HRL and PRISM Resources to align cross-departmental messaging.
              </p>

              <div className="flex items-center justify-between text-[10px] font-bold tracking-widest uppercase text-[#232323] border-t border-[#232323]/10 pt-4">
                <span>"FORMAT"</span>
                <span className="text-[#0A1B10]">"SHORT-FORM VERTICAL"</span>
              </div>
            </div>

            {/* Media Placeholders Grid */}
            <div className="lg:col-span-8 w-full order-2 lg:order-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Media 1 */}
                <div className="hairline bg-white/60 p-4 snap-shadow">
                  <div className="relative aspect-[9/16] w-full overflow-hidden hairline bg-[#232323]">
                    <iframe
                      src="https://drive.google.com/file/d/1bjmDNFWzsJJDVfIBnly642YqRaBNHP8S/preview"
                      className="absolute top-0 left-0 w-full h-full scale-[1.02] filter contrast-110 saturate-[0.85]"
                      allow="autoplay"
                      title="PRISM Resources HRL Liaison Video 1"
                    ></iframe>
                  </div>
                </div>

                {/* Media 2 */}
                <div className="hairline bg-white/60 p-4 snap-shadow">
                  <div className="relative aspect-[9/16] w-full overflow-hidden hairline bg-[#232323]">
                    <iframe
                      src="https://drive.google.com/file/d/1RkfNMGzDem0K8B-rM9Iux3edFXpu4GqZ/preview"
                      className="absolute top-0 left-0 w-full h-full scale-[1.02] filter contrast-110 saturate-[0.85]"
                      allow="autoplay"
                      title="PRISM Resources HRL Liaison Video 2"
                    ></iframe>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </section>

      {/* --- 05 // PROFESSIONAL EXPERIENCE (TIMELINE) --- */}
      <section id="experience" className="py-32 px-6 lg:px-12 max-w-[90rem] mx-auto border-t border-[#232323]/10">

        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-[#232323]/20 pb-12">
          <div>
            <div className="flex items-center gap-3 mb-6 text-[#0A1B10]">
              <div className="w-8 h-[1px] bg-[#0A1B10]"></div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase">Corporate Trajectory</p>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-[#232323] uppercase">Experience.</h2>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-[#232323]/70 leading-relaxed uppercase tracking-widest max-w-sm">
              Professional Co-ops. <br/>
              <span className="text-[#232323]">Applied Strategic Operations.</span>
            </p>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative w-full max-w-5xl mx-auto py-10">

          {/* Central Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#232323]/20 transform md:-translate-x-1/2"></div>

          {coopExperiences.map((exp, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-16 last:mb-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

              {/* Center Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#BA9A5A] rounded-full border-[4px] border-[#F6F6F4] transform -translate-x-1/2 z-10 shadow-[0_0_0_1px_rgba(35,35,35,0.2)]"></div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[45%]"></div>

              {/* Card Content */}
              <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-[#F6F6F4] hairline p-6 md:p-8 snap-shadow group relative overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
                  {/* Background overlay on hover */}
                  <div className="absolute inset-0 bg-[#BA9A5A]/5 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="flex justify-between items-start mb-6 border-b border-[#232323]/10 pb-4 relative z-10">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#232323] mb-1 leading-none">{exp.role}</h3>
                      <h4 className="text-[10px] font-bold tracking-widest uppercase text-[#BA9A5A] mt-2">{exp.company}</h4>
                    </div>
                    <img
                      src={`https://drive.google.com/thumbnail?id=${exp.mediaId}&sz=w200`}
                      alt={`${exp.company} Logo`}
                      className="w-12 h-12 md:w-16 md:h-16 object-contain transition-all duration-500 mix-blend-multiply ml-4 shrink-0"
                    />
                  </div>

                  <div className="text-[9px] font-bold tracking-widest uppercase text-[#232323] bg-white px-3 py-1.5 hairline mb-6 self-start shadow-sm relative z-10">
                    {exp.date}
                  </div>

                  <p className="text-sm font-medium text-[#232323]/80 leading-relaxed border-l-2 border-[#0A1B10] pl-4 relative z-10">
                    {exp.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-16 text-center border-t border-[#232323]/10 bg-[#0A1B10]">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#F6F6F4]/70">
          Conceptualized, Engineered & Filmed by Melvin Urumath. &copy; 2026.
        </p>
      </footer>

    </div>
  );
};

export default App;
