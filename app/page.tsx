'use client';

import { useState } from 'react';
import Image from 'next/image';

const themes = {
  fullstack: {
    name: 'Fullstack',
    bg: 'bg-gradient-to-br from-blue-100 via-indigo-50 to-indigo-200',
    card: 'bg-white shadow-xl p-6 rounded-2xl transition-transform hover:-translate-y-1 hover:shadow-2xl border border-indigo-200',
    navBtn: (active: boolean) =>
      `px-5 py-2 font-semibold border-2 rounded-full shadow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 ` +
      (active
        ? 'bg-gradient-to-r from-indigo-600 to-blue-400 text-white border-indigo-600 scale-105 shadow-lg'
        : 'bg-white text-indigo-700 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-900'),
    badge: 'inline-block mb-2 px-4 py-1 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white text-sm rounded-full shadow',
    divider: 'w-24 h-1 rounded-full bg-gradient-to-r from-indigo-400 via-indigo-200 to-indigo-400 opacity-60',
    projectCard: 'border border-indigo-200 p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-white hover:shadow-lg transition-shadow',
    projectBadge: 'px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded',
    projectBadge2: 'px-2 py-1 bg-indigo-200 text-indigo-900 text-xs rounded',
    sectionTitle: 'text-indigo-700 font-semibold text-lg',
    footer: 'text-gray-500',
    text: 'text-gray-900',
    subtext: 'text-gray-700',
    highlight: 'text-indigo-600 hover:underline',
  },
  devops: {
    name: 'DevOps',
    bg: 'bg-gradient-to-br from-gray-900 via-gray-800 to-green-900',
    card: 'bg-gray-900/90 shadow-xl p-6 rounded-2xl transition-transform hover:-translate-y-1 hover:shadow-2xl border border-green-700',
    navBtn: (active: boolean) =>
      `px-5 py-2 font-semibold border-2 rounded-full shadow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 ` +
      (active
        ? 'bg-gradient-to-r from-green-700 to-green-400 text-white border-green-700 scale-105 shadow-lg'
        : 'bg-gray-900 text-green-300 border-green-700 hover:bg-green-900 hover:text-white'),
    badge: 'inline-block mb-2 px-4 py-1 bg-gradient-to-r from-green-700 to-green-400 text-white text-sm rounded-full shadow',
    divider: 'w-24 h-1 rounded-full bg-gradient-to-r from-green-400 via-green-700 to-green-400 opacity-60',
    projectCard: 'border border-green-700 p-4 rounded-xl bg-gradient-to-br from-green-900 to-gray-900 hover:shadow-lg transition-shadow',
    projectBadge: 'px-2 py-1 bg-green-800 text-green-300 text-xs rounded',
    projectBadge2: 'px-2 py-1 bg-green-400 text-green-900 text-xs rounded',
    sectionTitle: 'text-green-400 font-semibold text-lg',
    footer: 'text-green-200',
    text: 'text-gray-100',
    subtext: 'text-green-200',
    highlight: 'text-green-400 hover:underline',
  },
  hacker: {
    name: 'Hacker',
    bg: 'bg-gradient-to-br from-black via-gray-900 to-green-900',
    card: 'bg-black/90 shadow-xl p-6 rounded-2xl border border-green-600 transition-transform hover:-translate-y-1 hover:shadow-2xl',
    navBtn: (active: boolean) =>
      `px-5 py-2 font-semibold border-2 rounded-full shadow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 ` +
      (active
        ? 'bg-gradient-to-r from-green-600 to-green-400 text-black border-green-600 scale-105 shadow-lg'
        : 'bg-black text-green-400 border-green-600 hover:bg-green-900 hover:text-green-200'),
    badge: 'inline-block mb-2 px-4 py-1 bg-gradient-to-r from-green-600 to-green-400 text-black text-sm rounded-full shadow',
    divider: 'w-24 h-1 rounded-full bg-gradient-to-r from-green-400 via-green-700 to-green-400 opacity-60',
    projectCard: 'border border-green-600 p-4 rounded-xl bg-gradient-to-br from-black to-green-900 hover:shadow-lg transition-shadow',
    projectBadge: 'px-2 py-1 bg-green-900 text-green-400 text-xs rounded',
    projectBadge2: 'px-2 py-1 bg-green-400 text-black text-xs rounded',
    sectionTitle: 'text-green-400 font-semibold text-lg',
    footer: 'text-green-300',
    text: 'text-green-400',
    subtext: 'text-green-200',
    highlight: 'text-green-400 hover:underline',
  },
};

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [displayedSection, setDisplayedSection] = useState(0);
  const [theme, setTheme] = useState<'fullstack' | 'devops' | 'hacker'>('devops');
  const t = themes[theme];

  // Animation handler for tab change
  const handleTabChange = (index: number) => {
    if (index === currentSection) return;
    setAnimating(true);
    setTimeout(() => {
      setDisplayedSection(index);
      setAnimating(false);
      setCurrentSection(index);
    }, 250); // Animation duration
  };

  const sections = [
    {
      id: 'about',
      title: 'About Me',
      content: (
        <div className="space-y-4">
          <div className={t.card}>
            <div className="mb-4 flex items-center gap-2">
              <span className={t.sectionTitle + ' ' + t.text}>Who am I?</span>
              <span className={t.badge}>Full Stack Developer</span>
            </div>
            <div className={`text-2xl font-bold mb-2 ${t.text}`}>Egie Sugina</div>
            <div className={`mt-2 text-base space-y-2 ${t.subtext}`}>
              <p>Full Stack Developer with 7+ years of experience</p>
              <p>Specializing in React, Node.js, Python, and modern web technologies</p>
              <p>Experienced in building scalable applications for enterprise clients</p>
              <p>Passionate about creating efficient and user-friendly solutions</p>
              <p>Based in Subang, Indonesia</p>
              <p>SMKN 2 Subang - Rekayasa Perangkat Lunak (2013-2016)</p>
            </div>
            <div className={t.sectionTitle + ' mt-4 ' + t.text}>Personal Info</div>
            <div className={`mt-2 text-base space-y-1 ${t.subtext}`}>
              <p>Email: <a href="mailto:egiesugina704@gmail.com" className={t.highlight}>egiesugina704@gmail.com</a></p>
              <p>Phone: 081320276231</p>
              <p>Website: <a href="https://errorgeist.id/" className={t.highlight}>errorgeist.id</a></p>
              <p>LinkedIn: <a href="https://linkedin.com/in/egiesugina-857680179/" className={t.highlight}>linkedin.com/in/egiesugina-857680179/</a></p>
              <p>Address: Bongas, Pamanukan, Subang, Jawa Barat, Indonesia</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'skills',
      title: 'Skills',
      content: (
        <div className="space-y-6">
          <div className={t.card}>
            <div className={t.sectionTitle + ' ' + t.text}>Technical Skills</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className={t.text}>Frontend</h4>
                <ul className={'list-disc ml-5 ' + t.subtext}>
                  <li>React</li>
                  <li>AngularJS</li>
                  <li>HTML5/CSS3</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className={t.text}>Backend</h4>
                <ul className={'list-disc ml-5 ' + t.subtext}>
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>Express.js</li>
                  <li>Java</li>
                  <li>PHP</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className={t.text}>Database</h4>
                <ul className={'list-disc ml-5 ' + t.subtext}>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>MSSQL</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className={t.text}>DevOps & Tools</h4>
                <ul className={'list-disc ml-5 ' + t.subtext}>
                  <li>Docker</li>
                  <li>Git</li>
                  <li>CI/CD</li>
                  <li>DevOps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'experience',
      title: 'Experience',
      content: (
        <div className="space-y-4">
          <div className={t.card}>
            <div className={t.sectionTitle + ' ' + t.text}>Work Experience</div>
            <div className="space-y-6 text-base">
              <div>
                <div className="flex justify-between items-center">
                  <h4 className={t.text}>Full Stack Developer</h4>
                  <span className={t.subtext}>Sep 2018 - Sep 2025</span>
                </div>
                <div className={t.subtext + ' font-bold'}>PT. Neural Technologies Indonesia (NTI)</div>
                <div className={t.subtext}>Jakarta Selatan</div>
                <ul className={'list-disc ml-5 mt-2 ' + t.subtext}>
                  <li>Developed web applications for major telecom companies like Telkomsel</li>
                  <li>Built user-friendly front-end applications using React and Tailwind CSS</li>
                  <li>Integrated Node.js and Python backends for large-scale enterprise needs</li>
                  <li>Implemented scalable system architecture handling millions of users</li>
                  <li>Collaborated with cross-functional teams to identify business needs</li>
                  <li>Enhanced development efficiency through best coding practices and DevOps optimization</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <h4 className={t.text}>Full Stack Developer</h4>
                  <span className={t.subtext}>Aug 2016 - Aug 2018</span>
                </div>
                <div className={t.subtext + ' font-bold'}>Hirata.id</div>
                <div className={t.subtext}>Bandung</div>
                <ul className={'list-disc ml-5 mt-2 ' + t.subtext}>
                  <li>Developed web applications for major clients like Pertamina Lubricants and JICT</li>
                  <li>Used AngularJS as the main framework for front-end development</li>
                  <li>Integrated APIs and backend services for large-scale operational needs</li>
                  <li>Contributed to applications used by thousands of users effectively</li>
                  <li>Collaborated with cross-functional teams ensuring smooth project delivery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'education',
      title: 'Education',
      content: (
        <div className="space-y-4">
          <div className={t.card}>
            <div className={t.sectionTitle + ' ' + t.text}>Education</div>
            <div>
              <div className="flex justify-between items-center">
                <h4 className={t.text}>Rekayasa Perangkat Lunak (RPL)</h4>
                <span className={t.subtext}>Sep 2013 - Jul 2016</span>
              </div>
              <div className={t.subtext + ' font-bold'}>SMKN 2 Subang</div>
              <div className={t.subtext}>Subang</div>
              <ul className={'list-disc ml-5 mt-2 ' + t.subtext}>
                <li>Studied software development from requirements analysis to system design</li>
                <li>Mastered programming fundamentals: Java, PHP, HTML, CSS, and database management</li>
                <li>Participated in various projects and industrial work practices</li>
                <li>Gained hands-on experience building desktop and web-based applications</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'projects',
      title: 'Projects',
      content: (
        <div className="space-y-4">
          <div className={t.card}>
            <div className={t.sectionTitle + ' ' + t.text}>Key Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={t.projectCard}>
                <h4 className={t.text + ' mb-2'}>Telkomsel Applications</h4>
                <p className={t.subtext + ' text-sm mb-2'}>Large-scale web applications for Indonesia&apos;s leading telecom company</p>
                <div className="flex flex-wrap gap-1">
                  <span className={t.projectBadge}>React</span>
                  <span className={t.projectBadge}>Node.js</span>
                  <span className={t.projectBadge2}>Enterprise</span>
                </div>
              </div>
              <div className={t.projectCard}>
                <h4 className={t.text + ' mb-2'}>Pertamina Lubricants Platform</h4>
                <p className={t.subtext + ' text-sm mb-2'}>Web application for Indonesia&apos;s state-owned oil company</p>
                <div className="flex flex-wrap gap-1">
                  <span className={t.projectBadge}>AngularJS</span>
                  <span className={t.projectBadge}>Node.js</span>
                  <span className={t.projectBadge2}>Enterprise</span>
                </div>
              </div>
              <div className={t.projectCard}>
                <h4 className={t.text + ' mb-2'}>JICT Container Terminal</h4>
                <p className={t.subtext + ' text-sm mb-2'}>Operational system for Jakarta International Container Terminal</p>
                <div className="flex flex-wrap gap-1">
                  <span className={t.projectBadge}>AngularJS</span>
                  <span className={t.projectBadge}>Express.js</span>
                  <span className={t.projectBadge2}>Logistics</span>
                </div>
              </div>
              <div className={t.projectCard}>
                <h4 className={t.text + ' mb-2'}>errorgeist.id</h4>
                <p className={t.subtext + ' text-sm mb-2'}>Personal website and portfolio showcasing technical expertise</p>
                <div className="flex flex-wrap gap-1">
                  <span className={t.projectBadge}>React</span>
                  <span className={t.projectBadge}>Next.js</span>
                  <span className={t.projectBadge2}>Portfolio</span>
                </div>
              </div>
            </div>
            <div className={t.card + ' mt-6 p-4'}>
              <h4 className={t.sectionTitle + ' mb-2 ' + t.text}>Key Achievements:</h4>
              <ul className={'text-sm space-y-1 ' + t.subtext}>
                <li>Built applications serving millions of users in telecom industry</li>
                <li>Developed scalable solutions for enterprise-level clients</li>
                <li>Implemented modern DevOps practices and CI/CD pipelines</li>
                <li>Contributed to cross-functional teams and mentored junior developers</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'contact',
      title: 'Contact',
      content: (
        <div className="space-y-4">
          <div className={t.card}>
            <div className={t.sectionTitle + ' ' + t.text}>Contact Information</div>
            <div className={'space-y-3 text-base ' + t.subtext}>
              <div>Email: <a href="mailto:egiesugina704@gmail.com" className={t.highlight}>egiesugina704@gmail.com</a></div>
              <div>Phone: 081320276231</div>
              <div>Website: <a href="https://errorgeist.id/" className={t.highlight}>errorgeist.id</a></div>
              <div>LinkedIn: <a href="https://linkedin.com/in/egiesugina-857680179/" className={t.highlight}>linkedin.com/in/egiesugina-857680179/</a></div>
              <div>Address: Bongas, Pamanukan, Subang, Jawa Barat, Indonesia</div>
            </div>
            <div className={t.card + ' mt-6 p-4'}>
              <p className={t.sectionTitle + ' text-center ' + t.text}>
                Ready to build something amazing together?<br />
                <span className={t.text}>Let&apos;s connect and create innovative solutions!</span>
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={t.bg + ' min-h-screen transition-colors duration-500'}>
      {/* Theme Selector */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white/80 dark:bg-black/80 rounded-full shadow px-4 py-2 border border-gray-200 dark:border-gray-700">
        {Object.entries(themes).map(([key],index) => (
          <button
            key={key}
            onClick={() => setTheme(key as 'fullstack' | 'devops' | 'hacker')}
            className={`px-3 py-1 rounded-full font-semibold text-xs transition-all duration-200 border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              theme === key
                ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white border-blue-600 scale-105 shadow-lg'
                : 'bg-white text-blue-700 border-blue-200 hover:bg-blue-50 hover:text-blue-900'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg mb-4">
              <Image src="/foto.jpeg" alt="Egie Sugina Profile" width={256} height={256} className="object-cover w-full h-full" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2">Egie Sugina</h1>
            <span className={t.badge}>Full Stack Developer & Enterprise Solutions Specialist</span>
          </div>
          <nav className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => handleTabChange(index)}
                  className={t.navBtn(currentSection === index)}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </nav>
        </header>

        {/* Content */}
        <main className="max-w-4xl mx-auto">
          <div
            key={displayedSection}
            className={`transition-all duration-300 ${
              animating
                ? 'opacity-0 translate-y-4 pointer-events-none'
                : 'opacity-100 translate-y-0'
            }`}
          >
            {sections[displayedSection].content}
          </div>
        </main>

        {/* Footer */}
        <footer className={`text-center mt-16 text-sm ${t.footer}`}>
          <p>
            &copy; 2024 Egie Sugina - Built with ❤️ and lots of ☕
          </p>
        </footer>
      </div>
    </div>
  );
}
