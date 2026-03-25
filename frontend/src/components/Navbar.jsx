import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LogOut, Home, Users, Info } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center font-bold text-sm">
            V
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-brand-400 to-brand-200 bg-clip-text text-transparent">
            VilStay
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="nav-link flex items-center gap-1.5">
            <Home size={16} /> Home
          </Link>
          <Link to="/about" className="nav-link flex items-center gap-1.5">
            <Info size={16} /> About
          </Link>
          {user?.role === "admin" && (
            <Link to="/dashboard" className="nav-link flex items-center gap-1.5">
              <Users size={16} /> Dashboard
            </Link>
          )}
        </div>

        {/* Auth buttons */}
        <div className="flex items-center gap-3">
          {user && (
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-sm font-bold">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-medium text-gray-300">{user.name}</span>
              </div>
              <button onClick={handleLogout} className="btn-secondary text-sm py-2 px-4">
                <LogOut size={16} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
