'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [matrixChars, setMatrixChars] = useState<string[]>([]);
  const [crtPowered, setCrtPowered] = useState(true);

  useEffect(() => {
    // Matrix rain effect
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const matrixInterval = setInterval(() => {
      const newChar = chars[Math.floor(Math.random() * chars.length)];
      setMatrixChars(prev => [...prev.slice(-50), newChar]);
    }, 100);

    return () => clearInterval(matrixInterval);
  }, []);

  const toggleCrt = () => {
    setCrtPowered(!crtPowered);
  };

  const sections = [
    {
      id: 'about',
      title: 'ABOUT_ME.exe',
      content: (
        <div className="space-y-4">
          <div className="terminal-window p-6 rounded-lg">
            <div className="mb-4">
              <span className="text-red-500">root@errorgeist:~$</span> whoami
            </div>
            <div className="typing-animation">
              <span className="text-green-400">Egie Sugina</span>
            </div>
            <div className="mt-4">
              <span className="text-red-500">root@errorgeist:~$</span> cat profile.txt
            </div>
            <div className="mt-2 text-sm space-y-2">
              <p>🎯 Full Stack Developer with 7+ years of experience</p>
              <p>🌐 Specializing in React, Node.js, Python, and modern web technologies</p>
              <p>🔒 Experienced in building scalable applications for enterprise clients</p>
              <p>🚀 Passionate about creating efficient and user-friendly solutions</p>
              <p>📍 Based in Bandung, Indonesia</p>
              <p>🎓 SMKN 2 Subang - Rekayasa Perangkat Lunak (2013-2016)</p>
            </div>
            <div className="mt-4">
              <span className="text-red-500">root@errorgeist:~$</span> cat personal.info
            </div>
            <div className="mt-2 text-sm space-y-1">
              <p>📧 Email: egiesugina704@gmail.com</p>
              <p>📱 Phone: 081320276231</p>
              <p>🌐 Website: https://errorgeist.id/</p>
              <p>💼 LinkedIn: linkedin.com/in/egiesugina-857680179/</p>
              <p>📍 Address: Bongas, Pamanukan, Subang, Jawa Barat, Indonesia</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'skills',
      title: 'SKILLS.dat',
      content: (
        <div className="space-y-6">
          <div className="terminal-window p-6 rounded-lg">
            <div className="mb-4">
              <span className="text-red-500">root@errorgeist:~$</span> ls skills/
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-yellow-400 font-bold">FRONTEND</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>React</span>
                    <span className="text-green-400">██████████ 100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AngularJS</span>
                    <span className="text-green-400">██████████ 100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>HTML5/CSS3</span>
                    <span className="text-green-400">██████████ 100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>JavaScript</span>
                    <span className="text-green-400">██████████ 100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>TypeScript</span>
                    <span className="text-green-400">██████████ 100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tailwind CSS</span>
                    <span className="text-green-400">██████████ 100%</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-yellow-400 font-bold">BACKEND</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Node.js</span>
                    <span className="text-green-400">██████████ 100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Python</span>
                    <span className="text-green-400">██████████ 100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Express.js</span>
                    <span className="text-green-400">██████████ 100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Java</span>
                    <span className="text-green-400">██████████ 100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PHP</span>
                    <span className="text-green-400">██████████ 100%</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-yellow-400 font-bold">DATABASE</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>PostgreSQL</span>
                    <span className="text-green-400">██████████ 100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>MongoDB</span>
                    <span className="text-green-400">██████████ 100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>MySQL</span>
                    <span className="text-green-400">██████████ 100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>MSSQL</span>
                    <span className="text-green-400">██████████ 100%</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-yellow-400 font-bold">DEVOPS & TOOLS</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Docker</span>
                    <span className="text-green-400">██████████ 100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Git</span>
                    <span className="text-green-400">██████████ 100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CI/CD</span>
                    <span className="text-green-400">██████████ 100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DevOps</span>
                    <span className="text-green-400">██████████ 100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'experience',
      title: 'EXPERIENCE.log',
      content: (
        <div className="space-y-4">
          <div className="terminal-window p-6 rounded-lg">
            <div className="mb-4">
              <span className="text-red-500">root@errorgeist:~$</span> cat experience.log
            </div>
            <div className="space-y-6 text-sm">
              <div className="border-l-2 border-green-400 pl-4">
                <div className="flex justify-between items-start">
                  <h4 className="text-yellow-400 font-bold">Full Stack Developer</h4>
                  <span className="text-green-400">Sep 2018 - Sep 2025</span>
                </div>
                <p className="text-gray-300 font-bold">PT. Neural Technologies Indonesia (NTI)</p>
                <p className="text-gray-400">Jakarta Selatan</p>
                <ul className="mt-3 space-y-2 text-xs">
                  <li>• Developed web applications for major telecom companies like Telkomsel</li>
                  <li>• Built user-friendly front-end applications using React and Tailwind CSS</li>
                  <li>• Integrated Node.js and Python backends for large-scale enterprise needs</li>
                  <li>• Implemented scalable system architecture handling millions of users</li>
                  <li>• Collaborated with cross-functional teams to identify business needs</li>
                  <li>• Enhanced development efficiency through best coding practices and DevOps optimization</li>
                </ul>
                <div className="mt-3">
                  <span className="text-yellow-400 text-xs">Technologies:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">Tailwind CSS</span>
                    <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">Node.js</span>
                    <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">Python</span>
                    <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">PostgreSQL</span>
                    <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">MongoDB</span>
                    <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">MSSQL</span>
                    <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">Docker</span>
                  </div>
                </div>
              </div>
              <div className="border-l-2 border-green-400 pl-4">
                <div className="flex justify-between items-start">
                  <h4 className="text-yellow-400 font-bold">Full Stack Developer</h4>
                  <span className="text-green-400">Aug 2016 - Aug 2018</span>
                </div>
                <p className="text-gray-300 font-bold">Hirata.id</p>
                <p className="text-gray-400">Bandung</p>
                <ul className="mt-3 space-y-2 text-xs">
                  <li>• Developed web applications for major clients like Pertamina Lubricants and JICT</li>
                  <li>• Used AngularJS as the main framework for front-end development</li>
                  <li>• Integrated APIs and backend services for large-scale operational needs</li>
                  <li>• Contributed to applications used by thousands of users effectively</li>
                  <li>• Collaborated with cross-functional teams ensuring smooth project delivery</li>
                </ul>
                <div className="mt-3">
                  <span className="text-yellow-400 text-xs">Technologies:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">AngularJS</span>
                    <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">HTML5</span>
                    <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">CSS3</span>
                    <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">JavaScript</span>
                    <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">Node.js</span>
                    <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">Express.js</span>
                    <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">MySQL</span>
                    <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'education',
      title: 'EDUCATION.log',
      content: (
        <div className="space-y-4">
          <div className="terminal-window p-6 rounded-lg">
            <div className="mb-4">
              <span className="text-red-500">root@errorgeist:~$</span> cat education.log
            </div>
            <div className="space-y-4 text-sm">
              <div className="border-l-2 border-green-400 pl-4">
                <div className="flex justify-between items-start">
                  <h4 className="text-yellow-400 font-bold">Rekayasa Perangkat Lunak (RPL)</h4>
                  <span className="text-green-400">Sep 2013 - Jul 2016</span>
                </div>
                <p className="text-gray-300 font-bold">SMKN 2 Subang</p>
                <p className="text-gray-400">Subang</p>
                <ul className="mt-3 space-y-2 text-xs">
                  <li>• Studied software development from requirements analysis to system design</li>
                  <li>• Mastered programming fundamentals: Java, PHP, HTML, CSS, and database management</li>
                  <li>• Participated in various projects and industrial work practices</li>
                  <li>• Gained hands-on experience building desktop and web-based applications</li>
                </ul>
                <div className="mt-3">
                  <span className="text-yellow-400 text-xs">Technologies Learned:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">Java</span>
                    <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">PHP</span>
                    <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">HTML</span>
                    <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">CSS</span>
                    <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">Database</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'projects',
      title: 'PROJECTS/',
      content: (
        <div className="space-y-4">
          <div className="terminal-window p-6 rounded-lg">
            <div className="mb-4">
              <span className="text-red-500">root@errorgeist:~$</span> ls projects/
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-green-400 p-4 rounded hover-scale">
                <h4 className="text-yellow-400 font-bold mb-2">Telkomsel Applications</h4>
                <p className="text-sm text-gray-300 mb-2">Large-scale web applications for Indonesia's leading telecom company</p>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">Node.js</span>
                  <span className="px-2 py-1 bg-green-400 text-black text-xs rounded">Enterprise</span>
                </div>
              </div>
              <div className="border border-green-400 p-4 rounded hover-scale">
                <h4 className="text-yellow-400 font-bold mb-2">Pertamina Lubricants Platform</h4>
                <p className="text-sm text-gray-300 mb-2">Web application for Indonesia's state-owned oil company</p>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">AngularJS</span>
                  <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">Node.js</span>
                  <span className="px-2 py-1 bg-green-400 text-black text-xs rounded">Enterprise</span>
                </div>
              </div>
              <div className="border border-green-400 p-4 rounded hover-scale">
                <h4 className="text-yellow-400 font-bold mb-2">JICT Container Terminal</h4>
                <p className="text-sm text-gray-300 mb-2">Operational system for Jakarta International Container Terminal</p>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">AngularJS</span>
                  <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">Express.js</span>
                  <span className="px-2 py-1 bg-green-400 text-black text-xs rounded">Logistics</span>
                </div>
              </div>
              <div className="border border-green-400 p-4 rounded hover-scale">
                <h4 className="text-yellow-400 font-bold mb-2">errorgeist.id</h4>
                <p className="text-sm text-gray-300 mb-2">Personal website and portfolio showcasing technical expertise</p>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">Next.js</span>
                  <span className="px-2 py-1 bg-green-400 text-black text-xs rounded">Portfolio</span>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-900/20 border border-green-400 rounded">
              <h4 className="text-yellow-400 font-bold mb-2">Key Achievements:</h4>
              <ul className="text-sm space-y-1">
                <li>• Built applications serving millions of users in telecom industry</li>
                <li>• Developed scalable solutions for enterprise-level clients</li>
                <li>• Implemented modern DevOps practices and CI/CD pipelines</li>
                <li>• Contributed to cross-functional teams and mentored junior developers</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'contact',
      title: 'CONTACT.info',
      content: (
        <div className="space-y-4">
          <div className="terminal-window p-6 rounded-lg">
            <div className="mb-4">
              <span className="text-red-500">root@errorgeist:~$</span> cat contact.info
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">📧</span>
                <span>egiesugina704@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">📱</span>
                <span>081320276231</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">🌐</span>
                <span>https://errorgeist.id/</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">💼</span>
                <span>linkedin.com/in/egiesugina-857680179/</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">📍</span>
                <span>Bongas, Pamanukan, Subang, Jawa Barat, Indonesia</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-900/20 border border-green-400 rounded">
              <p className="text-center text-sm">
                <span className="text-yellow-400">Ready to build something amazing together?</span>
                <br />
                <span className="text-green-400">Let's connect and create innovative solutions!</span>
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen bg-black relative overflow-hidden ${crtPowered ? 'crt-screen' : ''}`}>
      {/* CRT Monitor Frame */}
      <div className="crt-frame"></div>
      
      {/* Matrix background */}
      <div className="matrix-bg"></div>
      
      {/* Scanline effect */}
      <div className="scanline"></div>

      {/* Matrix rain characters */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        {matrixChars.map((char, index) => (
          <div
            key={index}
            className="matrix-rain absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {char}
          </div>
        ))}
      </div>

      {/* CRT Power Button */}
      <button 
        className="crt-power" 
        onClick={toggleCrt}
        title={crtPowered ? "Turn off CRT effects" : "Turn on CRT effects"}
      ></button>

      {/* Main content */}
      <div className={`relative z-10 container mx-auto px-4 py-8 ${crtPowered ? 'crt-power-on' : ''}`}>
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-bold glow-text mb-4">
            Egie Sugina
          </h1>
          <p className="text-xl md:text-2xl text-green-400 pulse-glow">
            Full Stack Developer & Enterprise Solutions Specialist
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setCurrentSection(index)}
                className={`px-4 py-2 border border-green-400 rounded hover:bg-green-400 hover:text-black transition-all duration-300 ${
                  currentSection === index ? 'bg-green-400 text-black' : 'text-green-400'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </nav>

        {/* Content */}
        <main className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            {sections[currentSection].content}
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center mt-16 text-sm text-green-400">
          <p className="pulse-glow">
            <span className="text-red-500">root@errorgeist:~$</span> echo "Thanks for visiting my digital lair!"
          </p>
          <p className="mt-2">
            © 2024 Egie Sugina - Built with ❤️ and lots of ☕
          </p>
        </footer>
      </div>
    </div>
  );
}
