import { useState, type FormEvent } from 'react';
import { BackgroundBoxes } from './components/BackgroundBoxes';
import { CardSpotlight } from './components/CardSpotlight';
import { HoverBorderGradient } from './components/HoverBorderGradient';

interface LoginFormData {
    pilotId: string;
    password: string;
}

interface LoginProps {
    onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
    const [formData, setFormData] = useState<LoginFormData>({
        pilotId: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Hardcoded authentication: egie / 123
        setTimeout(() => {
            if (formData.pilotId.trim().toLowerCase() === 'egie' && formData.password === '123') {
                console.log('Login successful:', formData);
                onLogin(); // Call the onLogin callback to navigate to Profile
            } else {
                setError('AUTHENTICATION FAILED - INVALID CREDENTIALS');
            }
            setIsLoading(false);
        }, 1500);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen w-full relative overflow-hidden flex items-center justify-center">
            {/* Background Boxes Effect */}
            <BackgroundBoxes />

            {/* Animated scanline */}
            <div className="scanline"></div>

            {/* Corner UI elements */}
            <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-ac-red/40 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-ac-red/40 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 border-l-2 border-b-2 border-ac-red/40 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-ac-red/40 pointer-events-none"></div>

            {/* Top status bar */}
            <div className="absolute top-0 left-0 right-0 bg-ac-gray/80 backdrop-blur-md border-b border-ac-red/30 p-4 z-10">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-4 font-orbitron">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-ac-red rounded-full animate-pulse"></div>
                            <span className="text-ac-red text-sm font-bold tracking-wider">SYSTEM ONLINE</span>
                        </div>
                    </div>
                    <div className="text-ac-white/60 text-xs font-mono">
                        CONNECTION: SECURE | ENCRYPTION: AES-256
                    </div>
                </div>
            </div>

            {/* Main login container */}
            <div className="relative z-10 w-full max-w-md px-6">
                <CardSpotlight className="bg-ac-gray/60 backdrop-blur-md p-8 relative">
                    {/* Inner border glow */}
                    <div className="absolute inset-0 border border-ac-red/20 pointer-events-none"></div>

                    {/* Header */}
                    <div className="mb-8 text-center">
                        <div className="inline-block mb-4 relative">
                            <div className="absolute inset-0 bg-ac-red/20 blur-xl"></div>
                            <h1
                                className="font-orbitron text-4xl font-black text-ac-red uppercase tracking-wider relative animate-flicker"
                                data-text="ERRORGEIST"
                            >
                                ERRORGEIST
                            </h1>
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-ac-red to-transparent mb-4"></div>
                        <p className="text-ac-cyan text-sm font-bold tracking-widest font-orbitron">
                            AUTHENTICATION SYSTEM
                        </p>
                        <div className="flex items-center justify-center gap-2 mt-2">
                            <div className="w-12 h-px bg-ac-red/50"></div>
                            <span className="text-ac-white/40 text-xs font-mono">v6.0.FR</span>
                            <div className="w-12 h-px bg-ac-red/50"></div>
                        </div>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Pilot ID */}
                        <div className="space-y-2">
                            <label
                                htmlFor="pilotId"
                                className="block text-ac-white font-orbitron text-sm font-bold tracking-wider uppercase"
                            >
                                <span className="text-ac-red">[</span> ID <span className="text-ac-red">]</span>
                            </label>
                            <div className="relative">
                                <input
                                    id="pilotId"
                                    type="text"
                                    name="pilotId"
                                    value={formData.pilotId}
                                    onChange={handleInputChange}
                                    placeholder="Enter Identification"
                                    className="input-field font-rajdhani text-lg"
                                    required
                                />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                    <div className="w-2 h-2 bg-ac-cyan rounded-full animate-pulse"></div>
                                </div>
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label
                                htmlFor="password"
                                className="block text-ac-white font-orbitron text-sm font-bold tracking-wider uppercase"
                            >
                                <span className="text-ac-red">[</span> ACCESS CODE <span className="text-ac-red">]</span>
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Enter Authorization Code"
                                    className="input-field font-rajdhani text-lg"
                                    required
                                />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                    <div className="w-2 h-2 bg-ac-cyan rounded-full animate-pulse"></div>
                                </div>
                            </div>
                        </div>

                        {/* Error message */}
                        {error && (
                            <div className="bg-ac-red/20 border border-ac-red/60 p-3 animate-flicker">
                                <p className="text-ac-red font-orbitron text-xs font-bold tracking-wider text-center">
                                    ⚠ {error}
                                </p>
                            </div>
                        )}

                        {/* Submit Button */}
                        <div className="w-full">
                            <HoverBorderGradient
                                as="div"
                                containerClassName="w-full"
                                className="w-full p-0"
                                duration={2}
                            >
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-ac-red hover:bg-ac-red-light 
                                     text-ac-white font-orbitron font-bold text-lg uppercase tracking-widest 
                                     py-4 transition-all duration-300 disabled:opacity-50 
                                     disabled:cursor-not-allowed border-0"
                                >
                                    {isLoading ? (
                                        <span className="flex items-center justify-center gap-3">
                                            <div className="w-5 h-5 border-2 border-ac-white/30 border-t-ac-white rounded-full animate-spin"></div>
                                            AUTHENTICATING...
                                        </span>
                                    ) : (
                                        <span className="relative z-10">
                                            ENGAGE SYSTEM
                                            <span className="ml-2 text-ac-cyan">▶</span>
                                        </span>
                                    )}
                                </button>
                            </HoverBorderGradient>
                        </div>
                    </form>

                    {/* Footer links */}


                    {/* System info */}
                    <div className="mt-6 p-4 bg-ac-darker/60 border border-ac-border/30 space-y-1">
                        <div className="flex justify-between items-center text-xs font-mono">
                            <span className="text-ac-white/40">SYSTEM STATUS:</span>
                            <span className="text-ac-cyan font-semibold">OPERATIONAL</span>
                        </div>
                        <div className="flex justify-between items-center text-xs font-mono">
                            <span className="text-ac-white/40">SECURITY LEVEL:</span>
                            <span className="text-ac-red font-semibold">MAXIMUM</span>
                        </div>
                        <div className="flex justify-between items-center text-xs font-mono">
                            <span className="text-ac-white/40">SERVER:</span>
                            <span className="text-ac-white/60">ERRORGEIST::NODE-SUBANG</span>
                        </div>
                    </div>
                </CardSpotlight>

                {/* Corner decorations on container */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-ac-cyan"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-ac-cyan"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-ac-cyan"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-ac-cyan"></div>
            </div>

            {/* Bottom status bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-ac-gray/80 backdrop-blur-md border-t border-ac-red/30 p-3 z-10">
                <div className="container mx-auto flex justify-between items-center text-xs font-mono">
                    <div className="text-ac-white/60">
                        ERRORGEIST PORTAL
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-ac-cyan rounded-full animate-pulse"></div>
                            <span className="text-ac-cyan">SECURITY ACTIVE</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-ac-red rounded-full animate-pulse"></div>
                            <span className="text-ac-red">SYSTEM READY</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
