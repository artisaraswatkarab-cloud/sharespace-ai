import Link from 'next/link';

export default function Home() {
  const categories = [
    { name: 'Electronics & Lab Tools', count: '120+ items', icon: '⚡' },
    { name: 'Books & Courseware', count: '450+ items', icon: '📚' },
    { name: 'Event & Project Gear', count: '85+ items', icon: '🛠️' },
    { name: 'Sports & Recreation', count: '60+ items', icon: '⚽' },
  ];

  const featuredResources = [
    {
      id: 1,
      title: 'Arduino Ultimate Starter Kit',
      category: 'Electronics',
      owner: 'Robotics Club',
      status: 'Available',
      image: '⚡',
    },
    {
      id: 2,
      title: 'DSLR Camera & Tripod Set',
      category: 'Media Gear',
      owner: 'Media Cell',
      status: 'In Use',
      image: '📷',
    },
    {
      id: 3,
      title: 'Deep Learning with Python (3rd Ed)',
      category: 'Books',
      owner: 'AI Research Lab',
      status: 'Available',
      image: '📖',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Navigation Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-cyan-500 flex items-center justify-center font-bold text-slate-950">
              S
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              ShareSpace <span className="text-cyan-400">AI</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link href="#explore" className="hover:text-cyan-400 transition">Explore</Link>
            <Link href="#categories" className="hover:text-cyan-400 transition">Categories</Link>
            <Link href="#how-it-works" className="hover:text-cyan-400 transition">How it Works</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-slate-300 hover:text-white transition">
              Sign In
            </button>
            <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-2 rounded-lg text-sm font-semibold transition shadow-lg shadow-cyan-500/20">
              List Resource
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center flex flex-col items-center justify-center my-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 text-xs font-semibold mb-6">
          <span>✨ Smart Campus Resource Sharing Platform</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl text-slate-100 leading-tight">
          Borrow, Share & Collaborate across Campus with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AI Precision</span>
        </h1>

        <p className="mt-6 text-slate-400 text-lg max-w-2xl">
          Instantly discover available lab equipment, academic materials, and project hardware provided by peers and department hubs.
        </p>

        {/* Search Bar */}
        <div className="mt-10 w-full max-w-xl flex items-center bg-slate-900 border border-slate-800 rounded-xl p-2 shadow-2xl focus-within:border-cyan-500 transition">
          <input
            type="text"
            placeholder="Search for microcontrollers, cameras, books..."
            className="w-full bg-transparent px-4 py-2 text-slate-100 placeholder-slate-500 focus:outline-none text-sm"
          />
          <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2.5 rounded-lg text-sm font-bold transition flex items-center gap-1 shrink-0">
            Search
          </button>
        </div>
      </section>

      {/* Categories Grid */}
      <section id="categories" className="py-12 bg-slate-900/50 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            Browse Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 transition cursor-pointer flex items-center gap-4"
              >
                <div className="text-2xl p-2 bg-slate-800 rounded-lg">{cat.icon}</div>
                <div>
                  <h3 className="font-semibold text-slate-200 text-sm">{cat.name}</h3>
                  <p className="text-xs text-slate-500">{cat.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section id="explore" className="py-16 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-100">Featured Campus Items</h2>
            <p className="text-slate-400 text-sm mt-1">Recently listed items ready for reservation</p>
          </div>
          <button className="text-sm font-semibold text-cyan-400 hover:underline">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredResources.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-700 transition"
            >
              <div>
                <div className="h-32 rounded-xl bg-slate-800 flex items-center justify-center text-4xl mb-4">
                  {item.image}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800 text-slate-400">
                    {item.category}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      item.status === 'Available'
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                        : 'bg-amber-950 text-amber-400 border border-amber-800'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <h3 className="font-bold text-slate-200 text-lg">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-1">Provider: {item.owner}</p>
              </div>

              <button className="mt-6 w-full py-2.5 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 font-semibold text-sm transition">
                Request Item
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-800 bg-slate-900/40 py-8 text-center text-xs text-slate-500">
        <p>© 2026 ShareSpace AI. Engineered for smart campus collaboration.</p>
      </footer>
    </div>
  );
}