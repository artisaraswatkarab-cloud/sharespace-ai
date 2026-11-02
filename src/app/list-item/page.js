'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ListItemPage() {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Electronics',
    description: '',
    ownerName: '',
    contactEmail: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-cyan-500 flex items-center justify-center font-bold text-slate-950">
              S
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              ShareSpace <span className="text-cyan-400">AI</span>
            </span>
          </Link>
          <Link href="/" className="text-sm font-semibold text-slate-400 hover:text-white transition">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content Form */}
      <main className="max-w-2xl mx-auto my-12 px-6 w-full">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
          <h1 className="text-2xl font-bold text-slate-100 mb-2">List a Campus Resource</h1>
          <p className="text-sm text-slate-400 mb-6">
            Share lab tools, equipment, or academic material with fellow students.
          </p>

          {submitted ? (
            <div className="p-6 bg-cyan-950/50 border border-cyan-800/60 rounded-xl text-center">
              <span className="text-4xl mb-3 block">🎉</span>
              <h2 className="text-xl font-bold text-cyan-300">Resource Listed Successfully!</h2>
              <p className="text-sm text-slate-400 mt-2">
                Your item is now visible on the ShareSpace AI campus catalog.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2.5 rounded-lg text-sm font-bold transition"
              >
                List Another Item
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Item Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Raspberry Pi 4 Model B (4GB)"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 transition"
                >
                  <option value="Electronics">Electronics & Lab Tools</option>
                  <option value="Books">Books & Courseware</option>
                  <option value="Media Gear">Event & Project Gear</option>
                  <option value="Sports">Sports & Recreation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Description & Condition
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Describe condition, specifications, or borrowing rules..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Owner / Club Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. AI Research Lab / Arti"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. student@university.edu"
                    value={formData.contactEmail}
                    onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 py-3 rounded-lg text-sm font-bold transition shadow-lg shadow-cyan-500/20 mt-4"
              >
                Publish Resource Listing
              </button>
            </form>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-800 bg-slate-900/40 py-6 text-center text-xs text-slate-500">
        <p>© 2026 ShareSpace AI. Engineered for smart campus collaboration.</p>
      </footer>
    </div>
  );
}
