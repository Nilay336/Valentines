
import React, { useState, useEffect, useCallback } from 'react';
import { ValentineDay, DayConfig } from './types';
import { VALENTINE_DAYS } from './constants';
import HeartBackground from './components/HeartBackground';
import GlassCard from './components/GlassCard';
import { generateRomanticContent } from './services/geminiService';
import { Heart, Sparkles, Send, Loader2, ChevronRight, ChevronLeft, Calendar, Info } from 'lucide-react';

const App: React.FC = () => {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [aiResponse, setAiResponse] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentDay = VALENTINE_DAYS[currentDayIndex];

  const handleGenerate = useCallback(async () => {
    setIsLoading(true);
    const content = await generateRomanticContent(currentDay.prompt);
    setAiResponse(content);
    setIsLoading(false);
  }, [currentDay]);

  useEffect(() => {
    setAiResponse("");
    // Trigger auto-generation for the first time we visit a day to keep it magical
    handleGenerate();
  }, [currentDayIndex, handleGenerate]);

  const nextDay = () => {
    setCurrentDayIndex((prev) => (prev + 1) % VALENTINE_DAYS.length);
  };

  const prevDay = () => {
    setCurrentDayIndex((prev) => (prev - 1 + VALENTINE_DAYS.length) % VALENTINE_DAYS.length);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden pb-20">
      <HeartBackground />
      
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setCurrentDayIndex(0)}>
            <div className="bg-rose-500 p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform">
              <Heart className="text-white w-6 h-6 fill-current" />
            </div>
            <span className="font-serif text-2xl font-bold text-slate-800 tracking-tight">EternaLove</span>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 bg-white/80 rounded-full border border-rose-200 shadow-sm"
          >
            <Calendar className="w-6 h-6 text-rose-500" />
          </button>

          <div className="hidden md:flex gap-4 overflow-x-auto py-2 no-scrollbar">
            {VALENTINE_DAYS.map((day, idx) => (
              <button
                key={day.id}
                onClick={() => setCurrentDayIndex(idx)}
                className={`px-4 py-2 rounded-full transition-all text-sm font-semibold whitespace-nowrap ${
                  idx === currentDayIndex 
                    ? `bg-gradient-to-r ${day.color} text-white shadow-md scale-105` 
                    : "bg-white/80 text-slate-600 hover:bg-rose-100"
                }`}
              >
                {day.icon} {day.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Day Selector Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}>
          <div className="bg-white m-4 rounded-3xl p-6 shadow-2xl animate-in slide-in-from-top duration-300" onClick={e => e.stopPropagation()}>
            <div className="grid grid-cols-2 gap-3">
              {VALENTINE_DAYS.map((day, idx) => (
                <button
                  key={day.id}
                  onClick={() => {
                    setCurrentDayIndex(idx);
                    setIsMenuOpen(false);
                  }}
                  className={`p-3 rounded-2xl flex items-center gap-2 transition-all border ${
                    idx === currentDayIndex ? `border-rose-500 bg-rose-50 text-rose-700 font-bold` : "border-slate-100 text-slate-600"
                  }`}
                >
                  <span className="text-xl">{day.icon}</span>
                  <span className="text-xs">{day.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 mt-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Visuals & Info */}
          <div className="lg:col-span-7 space-y-6">
            <GlassCard className="p-0 overflow-hidden relative group">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={currentDay.visualUrl} 
                  alt={currentDay.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8">
                  <span className="text-rose-200 font-bold uppercase tracking-widest text-sm mb-1">{currentDay.date}</span>
                  <h1 className={`text-4xl md:text-6xl font-serif text-white drop-shadow-lg`}>
                    {currentDay.title}
                  </h1>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-lg text-slate-700 leading-relaxed italic font-light">
                  "{currentDay.description}"
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-xs font-bold border border-rose-100">#ValentineWeek</span>
                  <span className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-xs font-bold border border-rose-100">#LoveDaily</span>
                  <span className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-xs font-bold border border-rose-100">#{currentDay.title.replace(' ', '')}</span>
                </div>
              </div>

              {/* Day Navigation Controls */}
              <div className="flex border-t border-slate-100">
                <button 
                  onClick={prevDay}
                  className="flex-1 flex items-center justify-center gap-2 p-5 text-slate-500 hover:bg-slate-50 hover:text-rose-500 transition-colors border-r border-slate-100"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="text-sm font-semibold">Previous Day</span>
                </button>
                <button 
                  onClick={nextDay}
                  className="flex-1 flex items-center justify-center gap-2 p-5 text-slate-500 hover:bg-slate-50 hover:text-rose-500 transition-colors"
                >
                  <span className="text-sm font-semibold">Next Day</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </GlassCard>
          </div>

          {/* Right Side: Gemini Interaction */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <GlassCard className={`border-l-4 ${currentDay.id === ValentineDay.ROSE ? 'border-l-rose-500' : 'border-l-indigo-500'} h-full flex flex-col`}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-rose-500" />
                  <h3 className="font-serif text-xl font-bold text-slate-800">Love Generator</h3>
                </div>
                <button 
                  onClick={handleGenerate}
                  disabled={isLoading}
                  className="p-2 bg-rose-50 text-rose-600 rounded-full hover:bg-rose-100 transition-all disabled:opacity-50"
                  title="Generate New Message"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                </button>
              </div>

              <div className="flex-grow min-h-[300px] flex flex-col justify-center relative">
                {isLoading ? (
                  <div className="flex flex-col items-center justify-center text-center space-y-4">
                    <Loader2 className="w-12 h-12 text-rose-400 animate-spin" />
                    <p className="text-slate-400 italic">Whispering to the stars...</p>
                  </div>
                ) : (
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 text-4xl text-rose-200 opacity-50 font-serif">“</div>
                    <div className="text-slate-700 leading-relaxed font-cursive text-2xl md:text-3xl whitespace-pre-line p-2">
                      {aiResponse || "What shall we create for this day of love?"}
                    </div>
                    <div className="absolute -bottom-4 -right-4 text-4xl text-rose-200 opacity-50 font-serif">”</div>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="bg-white p-2 rounded-xl shadow-sm">
                    <Info className="w-4 h-4 text-rose-400" />
                  </div>
                  <p className="text-xs text-slate-500 leading-tight">
                    Every day of Valentine's week, our AI generates unique poems and romantic ideas based on the theme.
                  </p>
                </div>
                
                <button 
                  className={`w-full mt-4 py-4 rounded-2xl bg-gradient-to-r ${currentDay.color} text-white font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2`}
                  onClick={() => {
                    if (aiResponse) {
                      navigator.clipboard.writeText(aiResponse);
                      alert("Copied your romantic message!");
                    }
                  }}
                >
                  <Heart className="w-5 h-5 fill-current" />
                  Share the Love
                </button>
              </div>
            </GlassCard>

            {/* Quote of the Day */}
            <div className="bg-white/40 p-6 rounded-3xl border border-white/60 text-center">
              <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mb-2">Quote of the Day</p>
              <p className="text-slate-800 font-serif italic text-lg">
                "Where there is love, there is life." — Mahatma Gandhi
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Button for Contact/Support - Just visual flavor */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-rose-500 rounded-full shadow-2xl flex items-center justify-center text-white hover:rotate-12 transition-transform z-50">
        <Sparkles className="w-7 h-7" />
      </button>
    </div>
  );
};

export default App;
