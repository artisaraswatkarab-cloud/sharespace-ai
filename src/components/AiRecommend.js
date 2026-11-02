'use client';
import { useState } from 'react';

export default function AiRecommend() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState(null);

  const handleAiSearch = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setSuggestion(null);

    // Simulated AI Recommendation Logic
    setTimeout(() => {
      setLoading(false);
      setSuggestion({
        matchedItem: 'Arduino Ultimate Starter Kit',
        category: 'Electronics & Lab Tools',
        reason: 'Based on your prompt, this kit contains microcontrollers, breadboards, and sensors ideal for prototyping.',
        owner: 'Robotics Club',
      });
    }, 1200);
  };

  return (
    <div className="my-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-800/40 shadow-xl max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">🤖</span>
        <h3 className="text-lg font-bold text-slate-100">AI Campus Matchmaker</h3>
        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
          Smart AI
        </span>
      </div>
      <p className="text-xs text-slate-400 mb-4">
        Describe what project or task you are working on, and AI will suggest the right resource.
      </p>

      <form onSubmit={handleAiSearch} className="flex gap-2">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. I need hardware components for an IoT mini-project..."
          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2.5 rounded-lg text-sm font-bold transition shrink-0 disabled:opacity-50"
        >
          {loading ? 'Analyzing...' : 'Ask AI'}
        </button>
      </form>

      {suggestion && (
        <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-sm">
          <p className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-1">
            ✨ AI Recommendation
          </p>
          <h4 className="font-bold text-slate-100 text-base">{suggestion.matchedItem}</h4>
          <p className="text-xs text-slate-400 mt-1">{suggestion.reason}</p>
          <div className="mt-3 flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-800">
            <span>Category: {suggestion.category}</span>
            <span>Owner: {suggestion.owner}</span>
          </div>
        </div>
      )}
    </div>
  );
}