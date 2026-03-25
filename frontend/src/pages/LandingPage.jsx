import { useState } from "react";

/* ─── SVG Icons ──────────────────────────────────────────────────────────────── */
const I = ({ d, size = 20, cls = "", fill = "none", sw = "1.8" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}
    stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
    className={cls}>
    {Array.isArray(d) ? d.map((p, i) => <path key={i} d={p} />) : <path d={d} />}
  </svg>
);
const MenuIco   = () => <I d="M4 6h16M4 12h16M4 18h16" size={22} />;
const CloseIco  = () => <I d="M18 6 6 18M6 6l12 12" size={22} />;
const MapIco    = () => <I d={["M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z","M12 10m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0"]} size={14} cls="inline" />;
const StarIco   = () => <svg width={14} height={14} viewBox="0 0 24 24" fill="#d4a044"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>;
const ArrowIco  = () => <I d="M5 12h14M12 5l7 7-7 7" size={16} />;
const LeafIco   = () => <I d="M2 22c1.25-6 9.35-9.76 14-7-1.5-3-6-5-12-2 4-7 14-9 20-4-3 1-6 4-8 8" size={20} cls="text-olive" />;
const HomeIco   = () => <I d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10" size={20} />;
const HeartIco  = () => <I d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" size={18} />;
const PhoneIco  = () => <I d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" size={20} />;
const SunIco    = () => <I d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" size={20} />;
const WifiIco   = () => <I d={["M5 12.55a11 11 0 0 1 14.08 0","M1.42 9a16 16 0 0 1 21.16 0","M8.53 16.11a6 6 0 0 1 6.95 0","M12 20h.01"]} size={20} />;
const ChevIco   = () => <I d="M9 18l6-6-6-6" size={16} />;
const QuoteIco  = () => (
  <svg width={32} height={32} viewBox="0 0 24 24" fill="#c4622d" opacity="0.15">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
  </svg>
);

/* ─── Decorative SVGs ────────────────────────────────────────────────────────── */
const WarliDivider = () => (
  <div className="flex items-center justify-center gap-4 my-6 opacity-40">
    <div className="flex-1 h-px bg-straw" />
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" stroke="#c4622d" strokeWidth="1.5">
      <circle cx="24" cy="12" r="4" />
      <line x1="24" y1="2" x2="24" y2="8" />
      <line x1="24" y1="16" x2="24" y2="22" />
      <line x1="14" y1="7" x2="20" y2="10" />
      <line x1="28" y1="14" x2="34" y2="17" />
      <line x1="14" y1="17" x2="20" y2="14" />
      <line x1="28" y1="10" x2="34" y2="7" />
    </svg>
    <div className="flex-1 h-px bg-straw" />
  </div>
);

const WarliBorder = () => (
  <div className="w-full overflow-hidden py-3 opacity-30">
    <div className="flex gap-6 justify-center flex-wrap">
      {[...Array(12)].map((_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#c4622d" strokeWidth="1.2">
          <circle cx="10" cy="10" r="3" />
          <line x1="10" y1="2" x2="10" y2="7" />
          <line x1="10" y1="13" x2="10" y2="18" />
          <line x1="2" y1="10" x2="7" y2="10" />
          <line x1="13" y1="10" x2="18" y2="10" />
        </svg>
      ))}
    </div>
  </div>
);

/* ─── Data ───────────────────────────────────────────────────────────────────── */
const NAV = ["Stays", "Experiences", "About Us", "Contact"];

const HERO_TAGS = ["🌾 Village Life", "🏺 Heritage Homes", "🔥 Bonfire Nights", "🌿 Farm Fresh"];

const VILLAGE_TYPES = [
  { emoji: "🏡", label: "Stone Cottages",   count: "84 stays",  color: "bg-[#f5ede2]" },
  { emoji: "🌾", label: "Farmstays",        count: "62 stays",  color: "bg-[#eef3e8]" },
  { emoji: "🏺", label: "Heritage Havelis", count: "48 stays",  color: "bg-[#fdf0e2]" },
  { emoji: "🌊", label: "Riverside Stays",  count: "39 stays",  color: "bg-[#e8f0f5]" },
  { emoji: "⛺", label: "Eco Camps",        count: "55 stays",  color: "bg-[#eef3e8]" },
  { emoji: "🪔", label: "Tribal Retreats",  count: "31 stays",  color: "bg-[#fdf0e2]" },
];

const STAYS = [
  {
    name: "The Laterite Heritage Home",
    village: "Sindhudurg, Maharashtra",
    tagline: "Authentic stone courtyard with tribal art",
    type: "Heritage Homestay · 5 Rooms",
    price: "₹5,500",
    rating: 5.0, reviews: 284,
    tags: ["Laterite Stone", "Warli Art"],
    img: "/property/media__1774433086564.jpg",
    imgAlt: "/property/media__1774433086487.jpg",
    host: "Anjali Tai",
    hostAvatar: "AT",
  },
  {
    name: "The Stone Cottage",
    village: "Sindhudurg, Goa",
    tagline: "Wake up to village birdsong",
    type: "Heritage Homestay · 4 Rooms",
    price: "₹4,200",
    rating: 4.9, reviews: 124,
    tags: ["Laterite Stone", "Warli Art"],
    img: "https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=800&q=80",
    imgAlt: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    host: "Savita Tai",
    hostAvatar: "ST",
  },
  {
    name: "Warli Courtyard",
    village: "Kolhapur, Maharashtra",
    tagline: "A living museum of tribal art",
    type: "Cultural Retreat · 3 Rooms",
    price: "₹3,500",
    rating: 4.8, reviews: 89,
    tags: ["Warli Murals", "Swing Charpai"],
    img: "https://images.unsplash.com/photo-1590050752117-219cb8d75411?auto=format&fit=crop&w=800&q=80",
    imgAlt: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    host: "Ramkaka",
    hostAvatar: "RK",
  },
  {
    name: "Mango Grove Farmstay",
    village: "Ratnagiri, Maharashtra",
    tagline: "Sleep under a thousand stars",
    type: "Farmstay · 2 Cottages",
    price: "₹2,800",
    rating: 5.0, reviews: 56,
    tags: ["Farm Fresh", "Outdoor Kitchen"],
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    imgAlt: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    host: "Meena Bai",
    hostAvatar: "MB",
  },
  {
    name: "The Bamboo Nest",
    village: "Coorg, Karnataka",
    tagline: "Breathe in the forest air",
    type: "Eco Cabin · 1 Cabin",
    price: "₹3,900",
    rating: 4.9, reviews: 202,
    tags: ["Off-grid", "Trek Access"],
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    imgAlt: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    host: "Mahesh",
    hostAvatar: "MH",
  },
];

const EXPERIENCES = [
  { icon: "🌾", title: "Farm to Table", desc: "Pick vegetables at dawn, cook with the host family over a clay chulha — a meal you'll never forget." },
  { icon: "🎨", title: "Warli Art Workshop", desc: "Learn the ancient Warli tribal art from local women artists. Take your canvas home as a memory." },
  { icon: "🐄", title: "Village Morning Walk", desc: "Stroll through fields at sunrise, watch the cows head out, and sip freshly boiled chai on a charpai." },
  { icon: "🔥", title: "Bonfire & Stories", desc: "Gather under the open sky as elders share village folk tales. Star-lit nights, wood smoke, and warmth." },
  { icon: "🚲", title: "Bullock Cart Rides", desc: "Ride the fields on a traditional bullock cart — a slow, joyful journey through rural India." },
  { icon: "🪔", title: "Diya Making & Puja", desc: "Join the host family in their evening puja, light diyas, and feel the spiritual rhythm of village life." },
];

const TESTIMONIALS = [
  {
    name: "Ananya Sharma",
    from: "Pune",
    text: "Three days at the Stone Cottage felt like three months of healing. No WiFi, no noise — just the sound of rain on a laterite roof. VilStay changed how I think about travel.",
    rating: 5, avatar: "AS", stay: "The Stone Cottage, Sindhudurg",
  },
  {
    name: "Rohan & Priya",
    from: "Mumbai",
    text: "Our anniversary at the Warli Courtyard was magical. Savita Tai cooked the most authentic meals. The Warli paintings everywhere made every corner a photo. We cried leaving.",
    rating: 5, avatar: "RP", stay: "Warli Courtyard, Kolhapur",
  },
  {
    name: "Siddharth Joshi",
    from: "Bangalore",
    text: "Mango Grove farmstay is not just a stay — it's a time machine. I milked a cow, made chapati on a wooden chulha, and slept on a charpai. Best experience of my life.",
    rating: 5, avatar: "SJ", stay: "Mango Grove Farmstay",
  },
];

const STATS = [
  { val: "320+",  lab: "Village Homes", icon: "🏡" },
  { val: "180+",  lab: "Villages",       icon: "🗺️" },
  { val: "12K+",  lab: "Happy Guests",   icon: "😊" },
  { val: "4.9★",  lab: "Avg Rating",     icon: "⭐" },
];

/* ─── Navbar ───────────────────────────────────────────────────────────────────── */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-cream/95 backdrop-blur border-b border-straw">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 group">
          <img
            src="/logo.jpg"
            alt="VilStay"
            className="h-11 w-11 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform duration-200"
          />
          <span className="text-[9px] text-clay font-semibold uppercase tracking-[0.15em] ml-1 hidden sm:block">Village Stays</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <a key={n} href={`#${n.toLowerCase().replace(/\s/g, "-")}`}
              className="text-sm font-medium text-clay hover:text-terra transition-colors duration-200">
              {n}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+91" className="flex items-center gap-2 text-sm text-clay hover:text-terra font-medium transition-colors">
            <PhoneIco /> +91 98765 43210
          </a>
          <button className="btn-terra text-sm py-2.5 px-6">Book a Stay</button>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg hover:bg-smoke transition-colors text-bark">
          {open ? <CloseIco /> : <MenuIco />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-cream/98 backdrop-blur shadow-2xl border-b border-t border-straw px-6 py-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1 mb-2">
            {NAV.map((n) => (
              <a key={n} href={`#${n.toLowerCase().replace(/\s/g,"-")}`} onClick={() => setOpen(false)}
                className="text-base font-bold text-clay hover:text-terra transition-colors py-2 border-b border-straw/50">{n}</a>
            ))}
          </div>
          <a href="tel:+91" className="flex items-center gap-2 text-sm text-clay hover:text-terra font-medium">
            <PhoneIco /> +91 98765 43210
          </a>
          <button className="btn-terra w-full mt-2 py-3.5 shadow-md">Book a Stay</button>
        </div>
      )}
    </header>
  );
};

/* ─── Hero ─────────────────────────────────────────────────────────────────────── */
const Hero = () => (
  <section className="pt-16 overflow-hidden">
    {/* Full-bleed village atmosphere image */}
    <div className="relative h-[90vh] min-h-[560px]">
      <img
        src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
        alt="VilStay village resort"
        className="w-full h-full object-cover"
        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1596436889106-be35e843f6a6?auto=format&fit=crop&w=1600&q=80"; }}
      />
      {/* Warm overlay - dark at bottom, less dark at top */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2d1a0e]/40 via-[#2d1a0e]/20 to-[#2d1a0e]/80" />

    

      {/* Hero content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-16 pt-20 pb-16 max-w-5xl mx-auto left-0 right-0">
        <div className="animate-fade-up flex flex-col items-center w-full">
         
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium text-white leading-[1.15] mb-6 max-w-4xl tracking-wide drop-shadow-2xl"
            style={{ fontFamily: "'Lora', serif", textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}>
            Heritage Stays<br className="block sm:hidden"/> Village Experiences  <br className="hidden md:block" /> Intimate Moments
          </h1>

          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-light"
             style={{ textShadow: "0 2px 15px rgba(0,0,0,0.6)" }}>
            Escape the city. Sleep in stone cottages, eat from mud chulhas,  
            wake to temple bells — and rediscover the India you've forgotten.
          </p>

          

          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
           
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Village Types ───────────────────────────────────────────────────────────── */
const VillageTypes = () => (
  <section className="py-20 px-6 md:px-10 bg-cream">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="section-eyebrow mb-3">Discover by Type</p>
        <h2 className="section-heading text-4xl md:text-5xl mb-4">
          Every Village is a Story
        </h2>
        <p className="text-clay max-w-lg mx-auto leading-relaxed">
          From ancient stone havelis to bamboo forest camps — find the village that calls your name.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {VILLAGE_TYPES.map((v, i) => (
          <button key={i} className={`${v.color} rounded-2xl p-5 border border-straw text-center hover:border-terra/50 hover:-translate-y-1 transition-all duration-300 group`}>
            <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">{v.emoji}</span>
            <p className="text-sm font-bold text-bark mb-1">{v.label}</p>
            <p className="text-xs text-clay">{v.count}</p>
          </button>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Featured Stays ──────────────────────────────────────────────────────────── */
const FeaturedStays = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <section id="stays" className="py-20 px-6 md:px-10 bg-[#f9f1e7]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="section-eyebrow mb-3">Handpicked for You</p>
            <h2 className="section-heading text-3xl md:text-4xl">
              Our Favourite Village Stays
            </h2>
          </div>
          <button className="hidden sm:flex items-center gap-1 text-sm font-semibold text-terra hover:underline underline-offset-4">
            View all <ChevIco />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAYS.map((s, i) => (
            <div key={i} className="leaf-card overflow-hidden cursor-pointer"
              onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={hovered === i ? s.imgAlt : s.img}
                  alt={s.name}
                  className="w-full h-full object-cover transition-all duration-700 scale-100 hover:scale-105"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bark/50 via-transparent" />
                {/* Heart */}
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-cream/80 backdrop-blur flex items-center justify-center hover:bg-cream transition-colors text-terra">
                  <HeartIco />
                </button>
                {/* Tags */}
                <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
                  {s.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-full bg-cream/90 backdrop-blur text-[10px] font-bold text-terra">{t}</span>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-[10px] text-clay uppercase tracking-widest font-semibold mb-1 flex items-center gap-1">
                  <MapIco /> {s.village}
                </p>
                <h3 className="font-bold text-bark text-base mb-0.5" style={{ fontFamily: "Lora, serif" }}>{s.name}</h3>
                <p className="text-xs text-clay italic mb-2">{s.tagline}</p>
                <p className="text-xs text-clay mb-3">{s.type}</p>

                {/* Host + Rating */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-terra flex items-center justify-center text-white text-[10px] font-bold">{s.hostAvatar}</div>
                    <span className="text-xs text-clay">Host: <strong className="text-bark">{s.host}</strong></span>
                  </div>
                  <div className="flex items-center gap-1">
                    <StarIco /> <span className="text-xs font-bold text-bark">{s.rating}</span>
                    <span className="text-[10px] text-clay">({s.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-straw pt-3">
                  <div>
                    <span className="text-lg font-bold text-bark" style={{ fontFamily: "Lora, serif" }}>{s.price}</span>
                    <span className="text-xs text-clay">/night</span>
                  </div>
                  <button className="px-3 py-1.5 rounded-full bg-terra/10 border border-terra/20 text-terra text-xs font-bold hover:bg-terra hover:text-white transition-all duration-200">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Why Section ────────────────────────────────────────────────────────────── */
const WhySection = () => (
  <section className="py-20 px-6 md:px-10 bg-cream" id="about-us">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Bento image grid */}
        <div className="grid grid-cols-2 gap-4 h-[300px] md:h-[460px]">
          <div className="rounded-2xl overflow-hidden h-full">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80" alt="Stone cottage room"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80"; }} />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex-1 rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80" alt="Warli courtyard"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80"; }} />
            </div>
            {/* Warli art accent card */}
            <div className="flex-none h-28 rounded-2xl bg-[#3d2010] flex items-center justify-center overflow-hidden relative">
              <WarliBorder />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gold font-bold text-2xl" style={{ fontFamily: "Lora, serif" }}>4.9★</p>
                  <p className="text-white/70 text-xs">Guest Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="section-eyebrow mb-3">Why VilStay?</p>
          <h2 className="section-heading text-3xl md:text-4xl mb-5">
            Not a Hotel.<br />
            <em className="not-italic text-terra">A Home in a Village.</em>
          </h2>
          <p className="text-clay leading-relaxed mb-8 max-w-md">
            VilStay is India's first platform dedicated exclusively to authentic village stays. 
            We connect curious travelers with real host families living in beautiful rural India — 
            where food is cooked on a chulha, water comes from a well, and every evening ends under the stars.
          </p>
          <div className="space-y-5 mb-10">
            {[
              { icon: "🏡", title: "Host Families, Not Hotels", desc: "Stay with real village families. Eat their food. Live their life." },
              { icon: "✅", title: "Every Stay Verified", desc: "Our team visits every home before listing it. No surprises." },
              { icon: "🌿", title: "Village-First Promise", desc: "50% of every booking goes directly to the host family." },
              { icon: "📞", title: "24/7 Vilstay Support", desc: "Our local coordinators are always a call away during your stay." },
            ].map((w, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-smoke border border-straw flex items-center justify-center text-xl shrink-0">{w.icon}</div>
                <div>
                  <h4 className="font-bold text-bark text-sm mb-0.5">{w.title}</h4>
                  <p className="text-xs text-clay leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="btn-terra">
            Our Story <ArrowIco />
          </button>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Experiences ────────────────────────────────────────────────────────────── */
const Experiences = () => (
  <section id="experiences" className="py-20 px-6 md:px-10 bg-[#2d1a0e]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-terra text-xs font-bold uppercase tracking-[0.2em] mb-3">What You'll Do</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "Lora, serif" }}>
          Village Experiences
        </h2>
        <p className="text-white/50 max-w-lg mx-auto text-sm leading-relaxed">
          Every VilStay is more than a bed — it's an invitation to participate in real village life.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {EXPERIENCES.map((e, i) => (
          <div key={i} className="bg-[#3d2010] rounded-2xl p-6 border border-[#5a3520] hover:border-terra/50 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[#2d1a0e] border border-[#5a3520] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              {e.icon}
            </div>
            <h3 className="text-white font-bold text-base mb-2" style={{ fontFamily: "Lora, serif" }}>{e.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{e.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Testimonials ───────────────────────────────────────────────────────────── */
const Testimonials = () => (
  <section className="py-20 px-6 md:px-10 bg-cream">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <p className="section-eyebrow mb-3">Guest Letters</p>
        <h2 className="section-heading text-3xl md:text-4xl">
          Words from Our Guests
        </h2>
        <WarliDivider />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="bg-leaf rounded-2xl border border-straw p-7 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-5 right-5"><QuoteIco /></div>
            <div className="flex gap-0.5 mb-4">{[...Array(t.rating)].map((_, j) => <StarIco key={j} />)}</div>
            <p className="text-clay text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
            <div className="border-t border-straw pt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-terra flex items-center justify-center text-white text-xs font-bold shrink-0">{t.avatar}</div>
              <div>
                <p className="text-bark font-bold text-sm">{t.name}</p>
                <p className="text-clay text-xs">{t.from} · <em className="not-italic text-terra">{t.stay}</em></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Village Manifesto Banner ───────────────────────────────────────────────── */
const ManifestoBanner = () => (
  <section className="py-16 px-6 bg-terra relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <WarliBorder />
    </div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <p className="text-white/70 text-xs font-bold uppercase tracking-[0.2em] mb-4">The VilStay Promise</p>
      <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "Lora, serif" }}>
        "Slow down. Eat together.<br />
        <em className="not-italic text-gold">Sleep under the stars."</em>
      </h2>
      <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
        In a world of fast hotels, VilStay offers something rarer — the gentle rhythm of village life, 
        the warmth of a host family, and the beauty of rural India at its most honest.
      </p>
      <button className="inline-flex items-center gap-2 bg-white text-terra font-bold rounded-full px-9 py-4 text-sm shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
        Find Your Village Stay <ArrowIco />
      </button>
    </div>
  </section>
);

/* ─── CTA ────────────────────────────────────────────────────────────────────── */
const FinalCTA = () => (
  <section id="contact" className="py-0 relative">
    <div className="relative h-72 overflow-hidden">
      <img src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1600&q=80" alt="Village courtyard"
        className="w-full h-full object-cover"
        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1600&q=80"; }} />
      <div className="absolute inset-0 bg-bark/65" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "Lora, serif" }}>
          Ready to Find Your Village?
        </h2>
        <p className="text-white/70 mb-7 text-sm max-w-sm">
          Join 12,000+ travelers who've discovered India's most magical village homes.
        </p>
        <button className="btn-terra shadow-xl text-sm py-3.5 px-10">
          Explore Village Stays <ArrowIco />
        </button>
      </div>
    </div>
  </section>
);

/* ─── Footer ─────────────────────────────────────────────────────────────────── */
const Footer = () => (
  <footer className="bg-bark text-white py-14 px-6 md:px-10">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.jpg" alt="VilStay" className="h-11 w-11 rounded-full object-cover shadow-md" />
            <div>
              <span className="text-[9px] text-white/40 uppercase tracking-widest block">Village Stays · India</span>
            </div>
          </div>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-5">
            India's first dedicated village stay platform. Real homes, real hosts, real India.
          </p>
          <WarliDivider />
          <p className="text-white/30 text-xs mt-2">🌿 50% of every booking goes to the host family</p>
        </div>
        {[
          { title: "Explore",  links: ["Village Stays", "Farmstays", "Heritage Havelis", "Eco Camps", "Tribal Retreats"] },
          { title: "Company",  links: ["Our Story", "Host with Us", "Blog", "Press", "Contact"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l}><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-white/30">© 2026 VilStay. All Rights Reserved.</p>
        <p className="text-xs text-white/30">Made with ❤️ for rural India · Privacy · Terms</p>
      </div>
    </div>
  </footer>
);

/* ─── Main ───────────────────────────────────────────────────────────────────── */
const LandingPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <VillageTypes />
    <FeaturedStays />
    <WhySection />
    <Experiences />
    <Testimonials />
    <ManifestoBanner />
    <FinalCTA />
    <Footer />
  </div>
);

export default LandingPage;
