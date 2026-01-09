
import React, { useState } from 'react';
import { ExternalLink, Search } from 'lucide-react';

type Category = 'All' | 'Anime T-Shirt' | 'Graphic Design' | 'Experimental';

const projects = [
  { id: 1, title: 'Neon Samurai', category: 'Anime T-Shirt', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, title: 'Lo-Fi Dreams', category: 'Graphic Design', image: 'https://images.unsplash.com/photo-1614850523296-e8c1d4704a96?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, title: 'Mecha Vibe', category: 'Anime T-Shirt', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, title: 'Cyber UI Kit', category: 'Experimental', image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1000&auto=format&fit=crop' },
  { id: 5, title: 'Zen Abstract', category: 'Graphic Design', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop' },
  { id: 6, title: 'Demon Slayer X Street', category: 'Anime T-Shirt', image: 'https://images.unsplash.com/photo-1520004434532-66841620c7b1?q=80&w=1000&auto=format&fit=crop' },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<Category>('All');

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

  return (
    <section id="works" className="py-24 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Featured Works</h2>
          <p className="text-slate-500 dark:text-slate-400 font-light">A curated selection of my visual art and streetwear designs.</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {['All', 'Anime T-Shirt', 'Graphic Design', 'Experimental'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as Category)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === cat 
                ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30' 
                : 'glass-card text-slate-600 dark:text-slate-300 hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <a 
            key={project.id}
            href="https://www.behance.net/mohammesefata"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-card rounded-[2rem] overflow-hidden aspect-[4/5] relative cursor-pointer block"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 backdrop-blur-[2px]">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <div className="flex gap-4">
                  <div className="p-3 bg-white/20 hover:bg-brand-blue/40 backdrop-blur-md rounded-xl text-white transition-all">
                    <Search size={20} />
                  </div>
                  <div className="p-3 bg-white/20 hover:bg-brand-orange/40 backdrop-blur-md rounded-xl text-white transition-all">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Primary Link to Behance */}
      <div className="mt-16 text-center">
        <a 
          href="https://www.behance.net/mohammesefata" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-white dark:bg-white/5 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-brand-blue hover:text-white transition-all shadow-lg border-b-4 border-brand-orange group"
        >
          Browse Full Portfolio on Behance
          <ExternalLink size={20} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
