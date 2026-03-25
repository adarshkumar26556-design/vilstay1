import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Plus, Edit2, Trash2, MapPin, Star, MoreVertical } from "lucide-react";
import { STAYS } from "./LandingPage";

const Dashboard = () => {
  const [properties, setProperties] = useState(STAYS);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = (index) => {
    if (confirm("Are you sure you want to delete this property?")) {
      setProperties(properties.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f1e7] pb-12">
      {/* Top Nav */}
      <nav className="bg-white border-b border-straw px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-terra flex items-center justify-center">
            <Home className="text-white" size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-bark tracking-tight" style={{ fontFamily: "Lora, serif" }}>VilStay Admin</h1>
            <p className="text-[10px] uppercase tracking-widest text-clay font-bold">Property Management</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Link to="/" className="text-sm font-semibold text-clay hover:text-terra transition-colors">View Live Site</Link>
          <button className="flex items-center gap-2 bg-terra text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5" onClick={() => setIsEditing(!isEditing)}>
            <Plus size={16} /> Add Property
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-10">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Properties", value: properties.length },
            { label: "Active Bookings", value: "24" },
            { label: "Total Revenue", value: "₹1,45k" },
            { label: "Avg Rating", value: "4.9★" },
          ].map((stat, i) => (
            <div key={i} className="bg-white border border-straw p-5 rounded-2xl shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-clay mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-bark" style={{ fontFamily: "Lora, serif" }}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Properties Table */}
        <div className="bg-white border border-straw rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-straw bg-cream/30 flex justify-between items-center">
            <h2 className="text-lg font-bold text-bark">Your Listed Stays</h2>
            <input 
              type="text" 
              placeholder="Search properties..." 
              className="px-4 py-2 border border-straw rounded-lg text-sm bg-white outline-none focus:border-terra/50 w-64"
            />
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-cream/10 border-b border-straw">
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-clay">Property</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-clay">Location</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-clay">Price / Night</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-clay">Performance</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-clay text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-straw">
                {properties.map((p, i) => (
                  <tr key={i} className="hover:bg-cream/20 transition-colors group">
                    <td className="px-6 py-4 flex items-center gap-4">
                      <img src={p.img} alt={p.name} className="w-16 h-16 rounded-xl object-cover border border-straw" />
                      <div>
                        <p className="font-bold text-bark text-base" style={{ fontFamily: "Lora, serif" }}>{p.name}</p>
                        <p className="text-xs text-clay">{p.type}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-sm text-bark font-medium">
                        <MapPin size={14} className="text-terra" /> {p.village}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-bark">{p.price}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-sm text-bark font-bold">
                        <Star size={14} className="text-gold fill-gold" /> {p.rating}
                        <span className="text-xs text-clay font-normal ml-1">({p.reviews})</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-clay hover:text-terra bg-white rounded-lg border border-straw shadow-sm transition-colors">
                          <Edit2 size={16} />
                        </button>
                        <button onClick={() => handleDelete(i)} className="p-2 text-clay hover:text-red-500 bg-white rounded-lg border border-straw shadow-sm transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {properties.length === 0 && (
            <div className="px-6 py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center mx-auto mb-4 text-clay">
                <Home size={24} />
              </div>
              <h3 className="text-lg font-bold text-bark mb-2">No properties left</h3>
              <p className="text-sm text-clay mb-6">You've deleted all your listings. Add a new one.</p>
              <button className="bg-terra text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md" onClick={() => setProperties(STAYS)}>
                Restore Default Demo Stays
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
