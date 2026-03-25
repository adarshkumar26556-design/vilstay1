import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-brand-400" />,
    title: "Lightning Fast",
    desc: "Built with Vite + React for blazing-fast performance and instant HMR.",
  },
  {
    icon: <Shield className="w-6 h-6 text-brand-400" />,
    title: "Secure by Default",
    desc: "JWT authentication, bcrypt password hashing, and role-based access control.",
  },
  {
    icon: <Globe className="w-6 h-6 text-brand-400" />,
    title: "Full MERN Stack",
    desc: "MongoDB, Express, React, Node.js — production-ready architecture.",
  },
];

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 text-center">
        {/* Glow blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-700/25 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-500/15 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-950 border border-brand-800 text-brand-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-brand-400 rounded-full animate-pulse" />
            MERN Stack · Tailwind CSS v3
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-blue-300 bg-clip-text text-transparent">
              VilStay
            </span>
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            A full-featured MERN stack starter with authentication, REST API, Tailwind CSS, 
            dark mode, and a premium design system — ready for your next big idea.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {user && (
              <Link to="/dashboard" className="btn-primary text-base px-8 py-3">
                Go to Dashboard <ArrowRight size={18} />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-white mb-3">Everything you need</h2>
          <p className="text-gray-400">A batteries-included starter to ship faster.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="card p-6 hover:border-brand-700/60 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-950/80 border border-brand-800/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
