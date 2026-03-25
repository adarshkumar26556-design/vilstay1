import { useParams, Link } from "react-router-dom";
import { STAYS } from "./LandingPage";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = STAYS[parseInt(id)];

  if (!property) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center flex-col gap-4">
        <h1 className="text-3xl text-bark font-bold">Property not found</h1>
        <Link to="/" className="text-terra hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream/50 pb-20">
      {/* Header / Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-straw px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-bark tracking-tight flex items-center gap-2 hover:-translate-x-1 transition-transform">
          ← Back
        </Link>
        <div className="flex gap-4">
          <button className="text-sm font-semibold text-terra underline underline-offset-4">Share</button>
          <button className="text-sm font-semibold text-terra underline underline-offset-4">Save</button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-24">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-bark mb-4" style={{ fontFamily: "Lora, serif" }}>
          {property.name}
        </h1>
        <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm text-clay font-medium mb-6">
          <span className="flex items-center gap-1 text-bark">
            ★ {property.rating} <span className="underline">({property.reviews} reviews)</span>
          </span>
          <span>·</span>
          <span className="underline">{property.village}</span>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-3xl overflow-hidden mb-12 h-[50vh] md:h-[60vh] shadow-xl shadow-bark/10">
          <img src={property.img} alt={property.name} className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity" />
          <img src={property.imgAlt} alt={property.name + " secondary"} className="w-full h-full object-cover hidden md:block cursor-pointer hover:opacity-95 transition-opacity" />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-bark mb-4">{property.type} hosted by {property.host}</h2>
            
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-straw">
              <div className="w-14 h-14 rounded-full bg-terra flex items-center justify-center text-white text-lg font-bold shadow-md">
                {property.hostAvatar}
              </div>
              <div>
                <p className="text-bark font-bold text-sm">Superhost · Authentic Experience</p>
                <p className="text-clay text-sm">Verified family deeply rooted in the village.</p>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-bark mb-4">About this home</h3>
              <p className="text-clay leading-relaxed mb-4">
                {property.tagline}. Step into a world of rustic charm and absolute tranquility. This heritage home has been lovingly preserved to offer guests a genuine taste of Indian village life while providing essential modern comforts.
              </p>
              <p className="text-clay leading-relaxed">
                Enjoy authentic home-cooked meals prepared straight from a mud chulha, sleep under traditional roofs, and wake up to the gentle sound of nature. Perfect for writers, retreat-seekers, and families.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-bark mb-5">What this place offers</h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {property.tags.map((tag, i) => (
                  <div key={i} className="flex items-center gap-3 text-clay text-sm font-medium">
                    <span className="w-6 h-6 rounded-full bg-leaf flex items-center justify-center text-terra text-xs">✓</span> {tag}
                  </div>
                ))}
                <div className="flex items-center gap-3 text-clay text-sm font-medium">
                  <span className="w-6 h-6 rounded-full bg-leaf flex items-center justify-center text-terra text-xs">✓</span> Farm-fresh Meals
                </div>
                <div className="flex items-center gap-3 text-clay text-sm font-medium">
                  <span className="w-6 h-6 rounded-full bg-leaf flex items-center justify-center text-terra text-xs">✓</span> Village Culture Walk
                </div>
              </div>
            </div>
          </div>

          {/* Booking Widget */}
          <div className="relative">
            <div className="sticky top-24 bg-white border border-straw rounded-3xl p-6 shadow-2xl shadow-bark/10">
              <div className="mb-6 flex justify-between items-end">
                <div>
                  <span className="text-2xl md:text-3xl font-bold text-bark" style={{ fontFamily: "Lora, serif" }}>{property.price}</span>
                  <span className="text-clay text-sm"> / night</span>
                </div>
              </div>

              <div className="grid grid-cols-2 border border-straw rounded-2xl overflow-hidden mb-6">
                <div className="px-4 py-3 border-r border-b border-straw">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-clay mb-0.5">Check-in</p>
                  <p className="text-sm text-bark font-medium">Add dates</p>
                </div>
                <div className="px-4 py-3 border-b border-straw">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-clay mb-0.5">Checkout</p>
                  <p className="text-sm text-bark font-medium">Add dates</p>
                </div>
                <div className="col-span-2 px-4 py-3">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-clay mb-0.5">Guests</p>
                  <p className="text-sm text-bark font-medium">1 guest</p>
                </div>
              </div>

              <a 
                href={`https://wa.me/918921653025?text=Hi%20VilStay!%20I%20would%20love%20to%20reserve%20a%20stay%20at%20*${encodeURIComponent(property.name)}*.\n\nCould%20you%20please%20help%20me%20with%20the%20details%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center items-center gap-2 bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#20bd5c] hover:-translate-y-0.5 transition-all shadow-xl shadow-[#25D366]/30 mb-4"
              >
                Reserve via WhatsApp
              </a>

              <p className="text-center text-xs text-clay">You won't be charged yet</p>
              
              <div className="border-t border-straw mt-6 pt-6 mb-2">
                <div className="flex justify-between font-bold text-bark">
                  <span>Total before taxes</span>
                  <span>{property.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PropertyDetails;
