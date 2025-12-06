import { BackgroundBoxes } from './components/BackgroundBoxes';
import { CardSpotlight } from './components/CardSpotlight';
import { EncryptedText } from './components/encrypted-text';

export default function Profile() {
    return (
        <div className="min-h-screen w-full relative overflow-hidden">
            {/* Background Boxes Effect */}
            <BackgroundBoxes />

            {/* Animated scanline */}
            <div className="scanline"></div>

            {/* Top Navigation Bar */}
            <div className="absolute top-0 left-0 right-0 bg-ac-gray/80 backdrop-blur-md border-b border-ac-red/30 p-4 z-10">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-4 font-orbitron">
                        <h2 className="text-ac-red text-xl font-bold tracking-wider">ERRORGEIST DOSSIER</h2>
                    </div>
                    <button
                        onClick={() => window.location.reload()}
                        className="text-ac-cyan hover:text-ac-cyan-dark transition-colors font-orbitron text-sm font-semibold tracking-wider"
                    >
                        [ LOGOUT ]
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-6 pt-24 pb-12">
                {/* Header Profile Section */}
                <CardSpotlight className="bg-ac-gray/60 backdrop-blur-md p-8 mb-6">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Avatar/Photo Placeholder */}
                        <div className="w-32 h-32 bg-gradient-to-br from-ac-red to-ac-orange rounded-md flex items-center justify-center border-2 border-ac-red/40 flex-shrink-0">
                            <span className="text-6xl font-orbitron font-black text-ac-white">ES</span>
                        </div>

                        {/* Basic Info */}
                        <div className="flex-1">
                            <h1 className="font-orbitron text-4xl font-black mb-2">
                                <EncryptedText
                                    text="EGIE SUGINA"
                                    revealDelayMs={30}
                                    flipDelayMs={30}
                                    encryptedClassName="text-ac-red/40"
                                    revealedClassName="text-ac-red"
                                />
                            </h1>
                            <p className="font-orbitron text-xl font-bold mb-4">
                                <EncryptedText
                                    text="FULL STACK DEVELOPER"
                                    revealDelayMs={40}
                                    flipDelayMs={40}
                                    encryptedClassName="text-ac-cyan/40"
                                    revealedClassName="text-ac-cyan"
                                />
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="text-ac-red">▶</span>
                                    <span className="text-ac-white/60 font-mono">EMAIL:</span>
                                    <span className="text-ac-white">egi.sugina@nti.co.id</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-ac-red">▶</span>
                                    <span className="text-ac-white/60 font-mono">MOBILE:</span>
                                    <span className="text-ac-white">+62 81320276231</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-ac-red">▶</span>
                                    <span className="text-ac-white/60 font-mono">LOCATION:</span>
                                    <span className="text-ac-white">Pamanukan, Subang</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-ac-red">▶</span>
                                    <span className="text-ac-white/60 font-mono">EXPERIENCE:</span>
                                    <span className="text-ac-white">7+ Years</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardSpotlight>

                {/* Resume Summary */}
                <CardSpotlight className="bg-ac-gray/60 backdrop-blur-md p-8 mb-6">
                    <h2 className="font-orbitron text-2xl font-bold mb-4 flex items-center gap-2">
                        <span className="text-ac-cyan">[</span>
                        <EncryptedText
                            text="RESUME"
                            revealDelayMs={50}
                            flipDelayMs={40}
                            encryptedClassName="text-ac-red/40"
                            revealedClassName="text-ac-red"
                        />
                        <span className="text-ac-cyan">]</span>
                    </h2>
                    <div className="h-px bg-gradient-to-r from-ac-red via-ac-orange to-transparent mb-6"></div>

                    <p className="text-ac-white/80 leading-relaxed mb-4">
                        Full Stack Developer with <span className="text-ac-cyan font-bold">7+ years of experience</span> in building scalable web applications, backend APIs, and enterprise solutions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div className="bg-ac-darker/60 p-4 border border-ac-border/30">
                            <h3 className="text-ac-cyan font-orbitron font-bold mb-2">FRONT-END</h3>
                            <p className="text-sm">
                                <EncryptedText
                                    text="React, AngularJS, Tailwind CSS"
                                    revealDelayMs={45}
                                    encryptedClassName="text-ac-white/30"
                                    revealedClassName="text-ac-white/70"
                                />
                            </p>
                        </div>
                        <div className="bg-ac-darker/60 p-4 border border-ac-border/30">
                            <h3 className="text-ac-cyan font-orbitron font-bold mb-2">BACK-END</h3>
                            <p className="text-sm">
                                <EncryptedText
                                    text="Node.js, Java, Python"
                                    revealDelayMs={45}
                                    encryptedClassName="text-ac-white/30"
                                    revealedClassName="text-ac-white/70"
                                />
                            </p>
                        </div>
                        <div className="bg-ac-darker/60 p-4 border border-ac-border/30">
                            <h3 className="text-ac-cyan font-orbitron font-bold mb-2">DATABASE</h3>
                            <p className="text-sm">
                                <EncryptedText
                                    text="PostgreSQL, MongoDB, MSSQL, SQLite"
                                    revealDelayMs={45}
                                    encryptedClassName="text-ac-white/30"
                                    revealedClassName="text-ac-white/70"
                                />
                            </p>
                        </div>
                        <div className="bg-ac-darker/60 p-4 border border-ac-border/30">
                            <h3 className="text-ac-cyan font-orbitron font-bold mb-2">DEVOPS</h3>
                            <p className="text-sm">
                                <EncryptedText
                                    text="Docker, Git, CI/CD Pipelines"
                                    revealDelayMs={45}
                                    encryptedClassName="text-ac-white/30"
                                    revealedClassName="text-ac-white/70"
                                />
                            </p>
                        </div>
                    </div>
                </CardSpotlight>

                {/* Professional Experience */}
                <CardSpotlight className="bg-ac-gray/60 backdrop-blur-md p-8 mb-6">
                    <h2 className="font-orbitron text-2xl font-bold mb-4 flex items-center gap-2">
                        <span className="text-ac-cyan">[</span>
                        <EncryptedText
                            text="PROFESSIONAL EXPERIENCE"
                            revealDelayMs={50}
                            flipDelayMs={40}
                            encryptedClassName="text-ac-red/40"
                            revealedClassName="text-ac-red"
                        />
                        <span className="text-ac-cyan">]</span>
                    </h2>
                    <div className="h-px bg-gradient-to-r from-ac-red via-ac-orange to-transparent mb-6"></div>

                    {/* NTI Experience */}
                    <div className="mb-8 pb-8 border-b border-ac-border/30">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-orbitron text-xl font-bold">
                                    <EncryptedText
                                        text="Full Stack Developer"
                                        revealDelayMs={40}
                                        encryptedClassName="text-ac-white/40"
                                        revealedClassName="text-ac-white"
                                    />
                                </h3>
                                <p className="font-semibold">
                                    <EncryptedText
                                        text="PT. Neural Technologies Indonesia (NTI)"
                                        revealDelayMs={45}
                                        encryptedClassName="text-ac-cyan/40"
                                        revealedClassName="text-ac-cyan"
                                    />
                                </p>
                            </div>
                            <span className="text-ac-orange font-mono text-sm whitespace-nowrap">Sep 2018 – Present</span>
                        </div>

                        <p className="text-ac-white/70 mb-4">
                            <EncryptedText
                                text="Developing enterprise-grade web applications and data visualization solutions for major clients such as Telkomsel. Utilized React and Tailwind CSS for front-end development, and Node.js, Java, and Python for backend API development."
                                revealDelayMs={35}
                                encryptedClassName="text-ac-white/30"
                                revealedClassName="text-ac-white/70"
                            />
                        </p>

                        <div className="space-y-2">
                            <h4 className="text-ac-red font-orbitron text-sm font-bold mb-2">KEY ACCOMPLISHMENTS:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm">
                                    <span className="text-ac-cyan mt-1">▶</span>
                                    <EncryptedText
                                        text="Designed user-friendly front-end applications with React and Tailwind CSS"
                                        revealDelayMs={35}
                                        encryptedClassName="text-ac-white/30"
                                        revealedClassName="text-ac-white/70"
                                    />
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <span className="text-ac-cyan mt-1">▶</span>
                                    <EncryptedText
                                        text="Integrated backend systems using Node.js, Java, and Python for enterprise requirements"
                                        revealDelayMs={35}
                                        encryptedClassName="text-ac-white/30"
                                        revealedClassName="text-ac-white/70"
                                    />
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <span className="text-ac-cyan mt-1">▶</span>
                                    <EncryptedText
                                        text="Implemented scalable architecture ensuring system performance under high user loads"
                                        revealDelayMs={35}
                                        encryptedClassName="text-ac-white/30"
                                        revealedClassName="text-ac-white/70"
                                    />
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <span className="text-ac-cyan mt-1">▶</span>
                                    <EncryptedText
                                        text="Developed BI solutions using Grafana, Tableau, and Power BI"
                                        revealDelayMs={35}
                                        encryptedClassName="text-ac-white/30"
                                        revealedClassName="text-ac-white/70"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Hirata.id Experience */}
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-orbitron text-xl font-bold">
                                    <EncryptedText
                                        text="Full Stack Developer"
                                        revealDelayMs={40}
                                        encryptedClassName="text-ac-white/40"
                                        revealedClassName="text-ac-white"
                                    />
                                </h3>
                                <p className="font-semibold">
                                    <EncryptedText
                                        text="Hirata.id"
                                        revealDelayMs={45}
                                        encryptedClassName="text-ac-cyan/40"
                                        revealedClassName="text-ac-cyan"
                                    />
                                </p>
                            </div>
                            <span className="text-ac-orange font-mono text-sm whitespace-nowrap">Aug 2016 – Aug 2018</span>
                        </div>

                        <p className="text-ac-white/70 mb-4">
                            <EncryptedText
                                text="Developed web-based applications for major clients such as Pertamina Lubricants and Jakarta International Container Terminal (JICT). Used AngularJS for front-end and Node.js/Java for backend API development."
                                revealDelayMs={35}
                                encryptedClassName="text-ac-white/30"
                                revealedClassName="text-ac-white/70"
                            />
                        </p>

                        <div className="space-y-2">
                            <h4 className="text-ac-red font-orbitron text-sm font-bold mb-2">KEY ACCOMPLISHMENTS:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm">
                                    <span className="text-ac-cyan mt-1">▶</span>
                                    <EncryptedText
                                        text="Delivered enterprise-grade web applications for Pertamina Lubricants"
                                        revealDelayMs={35}
                                        encryptedClassName="text-ac-white/30"
                                        revealedClassName="text-ac-white/70"
                                    />
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <span className="text-ac-cyan mt-1">▶</span>
                                    <EncryptedText
                                        text="Delivered mobile solutions for Jakarta International Container Terminal (JICT)"
                                        revealDelayMs={35}
                                        encryptedClassName="text-ac-white/30"
                                        revealedClassName="text-ac-white/70"
                                    />
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <span className="text-ac-cyan mt-1">▶</span>
                                    <EncryptedText
                                        text="Modernized legacy systems by migrating them into scalable web platforms"
                                        revealDelayMs={35}
                                        encryptedClassName="text-ac-white/30"
                                        revealedClassName="text-ac-white/70"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </CardSpotlight>

                {/* Education */}
                <CardSpotlight className="bg-ac-gray/60 backdrop-blur-md p-8">
                    <h2 className="font-orbitron text-2xl font-bold mb-4 flex items-center gap-2">
                        <span className="text-ac-cyan">[</span>
                        <EncryptedText
                            text="EDUCATION & CERTIFICATIONS"
                            revealDelayMs={50}
                            flipDelayMs={40}
                            encryptedClassName="text-ac-red/40"
                            revealedClassName="text-ac-red"
                        />
                        <span className="text-ac-cyan">]</span>
                    </h2>
                    <div className="h-px bg-gradient-to-r from-ac-red via-ac-orange to-transparent mb-6"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-ac-darker/60 p-4 border border-ac-border/30">
                            <h3 className="text-ac-cyan font-orbitron font-bold mb-2 text-sm">EDUCATION</h3>
                            <p className="text-ac-white/80 text-sm">SMKN 2 Subang</p>
                            <p className="text-ac-white/60 text-xs">Software Engineering (RPL)</p>
                        </div>
                        <div className="bg-ac-darker/60 p-4 border border-ac-border/30">
                            <h3 className="text-ac-cyan font-orbitron font-bold mb-2 text-sm">CERTIFICATION</h3>
                            <p className="text-ac-white/80 text-sm">NDG Linux</p>
                            <p className="text-ac-white/60 text-xs">Unhatched & Essentials</p>
                        </div>
                        <div className="bg-ac-darker/60 p-4 border border-ac-border/30">
                            <h3 className="text-ac-cyan font-orbitron font-bold mb-2 text-sm">LANGUAGE</h3>
                            <p className="text-ac-white/80 text-sm">TOEFL Score: 487</p>
                            <p className="text-ac-white/60 text-xs">English Proficiency</p>
                        </div>
                    </div>

                    <div className="mt-6 bg-ac-darker/60 p-4 border border-ac-border/30">
                        <h3 className="text-ac-red font-orbitron font-bold mb-3 text-sm">RECENT TRAINING</h3>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-ac-white/80 text-sm">Next Generation Network Cisco IPv6</p>
                                <p className="text-ac-white/60 text-xs">UNSUB - Online</p>
                            </div>
                            <span className="text-ac-cyan font-mono text-xs">August 2023</span>
                        </div>
                    </div>
                </CardSpotlight>
            </div>

            {/* Bottom status bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-ac-gray/80 backdrop-blur-md border-t border-ac-red/30 p-3 z-10">
                <div className="container mx-auto flex justify-between items-center text-xs font-mono">
                    <div className="text-ac-white/60">
                        SYSTEM: ERRORGEIST PROFILE DATABASE v2.0
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-ac-cyan rounded-full animate-pulse"></div>
                            <span className="text-ac-cyan">STATUS: ACTIVE</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-ac-red rounded-full animate-pulse"></div>
                            <span className="text-ac-red">ACCESS: GRANTED</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
