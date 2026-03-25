import { Code2, Database, Layers, Server } from "lucide-react";

const stack = [
  { icon: <Database className="text-green-400" />, name: "MongoDB", desc: "NoSQL database for flexible, scalable data storage." },
  { icon: <Server className="text-yellow-400" />, name: "Express.js", desc: "Minimal and fast Node.js web application framework." },
  { icon: <Layers className="text-blue-400" />, name: "React + Vite", desc: "Modern UI library with lightning-fast HMR via Vite." },
  { icon: <Code2 className="text-emerald-400" />, name: "Node.js", desc: "JavaScript runtime for building scalable server-side apps." },
];

const About = () => (
  <div className="min-h-screen pt-28 px-6 pb-20 max-w-4xl mx-auto">
    <div className="text-center mb-16 animate-fade-in">
      <h1 className="text-4xl font-extrabold text-white mb-4">
        About{" "}
        <span className="bg-gradient-to-r from-brand-400 to-blue-300 bg-clip-text text-transparent">
          VilStay
        </span>
      </h1>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        A production-ready MERN stack starter with Tailwind CSS, JWT authentication, 
        role-based access control, and a beautiful dark UI design system.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
      {stack.map((item, i) => (
        <div key={i} className="card p-6 flex items-start gap-4 hover:border-white/20 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
            {item.icon}
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">{item.name}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="card p-8 text-center bg-gradient-to-br from-brand-950/60 to-gray-900/60 border-brand-800/40">
      <h2 className="text-xl font-bold text-white mb-3">Built with ❤️</h2>
      <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
        This project was scaffolded as a complete MERN starter. Backend uses Express + MongoDB with 
        JWT auth. Frontend uses Vite + React + Tailwind CSS v3 with a custom design system.
      </p>
    </div>
  </div>
);

export default About;
