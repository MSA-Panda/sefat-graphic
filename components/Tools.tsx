
import React from 'react';

const tools = [
  { name: 'Photoshop', icon: 'Ps', color: 'bg-blue-600' },
  { name: 'Illustrator', icon: 'Ai', color: 'bg-orange-600' },
  { name: 'VS Code', icon: '</>', color: 'bg-blue-400' },
  { name: 'Figma', icon: 'Fg', color: 'bg-purple-500' },
  { name: 'After Effects', icon: 'Ae', color: 'bg-indigo-600' },
  { name: 'Lightroom', icon: 'Lr', color: 'bg-cyan-600' }
];

const Tools: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-12 text-center">
         <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-slate-400 mb-2">Workspace & Tools</h3>
         <div className="w-20 h-0.5 bg-brand-orange mx-auto"></div>
      </div>
      
      <div className="glass-card py-10 flex items-center justify-around flex-wrap gap-8 backdrop-blur-md border-y border-white/10">
        <div className="flex gap-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 px-8">
          {tools.map((tool, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 group">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl glass-card transition-all group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg relative overflow-hidden`}>
                <div className={`absolute inset-0 ${tool.color} opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                <span className="relative z-10">{tool.icon}</span>
              </div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
