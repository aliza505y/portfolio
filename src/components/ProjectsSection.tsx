import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  url: string;
  linkLabel: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Memes4U',
    category: 'ANDROID / ENTERTAINMENT APP',
    description:
      'An entertainment application designed for discovering and browsing meme content. The app provides a smooth and engaging user experience with categorized content and Firebase-based data management.',
    url: 'https://play.google.com/store/apps/details?id=com.alizaapps.memes247',
    linkLabel: 'CHECK ON PLAY STORE',
    tech: [
      'Kotlin',
      'Android SDK',
      'Firebase',
      'Realtime Database',
      'RecyclerView',
      'Glide',
      'XML',
    ],
    metrics: [
      { label: 'PLATFORM', value: 'Android' },
      { label: 'BACKEND', value: 'Firebase' },
      { label: 'CONTENT', value: 'Memes & Images' },
    ],
  },

  {
    number: '02',
    title: 'Status Saver',
    category: 'ANDROID / UTILITY APP',
    description:
      'An offline Android utility application built to help users browse and save WhatsApp statuses. Developed using Kotlin and XML, with Android Storage Access Framework (SAF) for secure file and media access.',
    url: 'https://play.google.com/store/apps/details?id=com.aliza.statussaver',
    linkLabel: 'CHECK ON PLAY STORE',
    tech: [
      'Kotlin',
      'Android SDK',
      'XML',
      'SAF',
      'RecyclerView',
      'Fragments',
      'MVVM',
    ],
    metrics: [
      { label: 'PLATFORM', value: 'Android' },
      { label: 'MODE', value: 'Offline' },
      { label: 'STORAGE', value: 'SAF' },
    ],
  },

  {
    number: '03',
    title: 'Nedo Finder',
    category: 'LOCAL BUSINESS / LOCATION PLATFORM',
    description:
      'A location-based platform designed to help users discover nearby shops and support small local businesses. The application focuses on showcasing shop locations, business details, and useful information to improve local business visibility.',
    url: 'https://github.com/aliza505y/nedo-finder',
    linkLabel: 'VIEW ON GITHUB',
    tech: [
      'Android',
      'Kotlin',
      'Google Maps',
      'Location',
      'Firebase',
    ],
    metrics: [
      { label: 'FOCUS', value: 'Local Businesses' },
      { label: 'FEATURE', value: 'Shop Locations' },
      { label: 'PURPOSE', value: 'Business Discovery' },
    ],
  },

  {
    number: '04',
    title: 'Tour',
    category: 'TRAVEL / FRONTEND PROJECT',
    description:
      'A travel-focused application featuring a modern and visually engaging user interface. The project focuses primarily on frontend development, screen design, layouts, and creating a smooth user experience for exploring travel-related content.',
    url: 'https://github.com/aliza505y/Tour',
    linkLabel: 'VIEW ON GITHUB',
    tech: [
      'Android',
      'Kotlin',
      'XML',
      'UI Design',
      'RecyclerView',
    ],
    metrics: [
      { label: 'TYPE', value: 'Travel App' },
      { label: 'FOCUS', value: 'Frontend' },
      { label: 'UI', value: 'Modern Design' },
    ],
  },

  {
    number: '05',
    title: 'Buy Now',
    category: 'E-COMMERCE APPLICATION',
    description:
      'An e-commerce application designed around a digital shopping experience. The project includes product browsing and a Buy Now flow, demonstrating mobile UI development and the core structure of an online shopping application.',
    url: 'https://github.com/aliza505y/Buy--now',
    linkLabel: 'VIEW ON GITHUB',
    tech: [
      'Android',
      'Kotlin',
      'XML',
      'RecyclerView',
      'E-Commerce',
    ],
    metrics: [
      { label: 'TYPE', value: 'E-Commerce' },
      { label: 'FEATURE', value: 'Buy Now Flow' },
      { label: 'PLATFORM', value: 'Android' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            A selection of mobile applications and digital experiences built to solve real-world problems.
          </p>
        </motion.div>

        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">

                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">

                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/25">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                        // PROJECT METRICS
                      </span>

                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#A8988B]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span>{project.linkLabel}</span>
                      <span className="text-xs">↗</span>
                    </a>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default ProjectsSection;