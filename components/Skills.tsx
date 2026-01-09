
import React from 'react';
import { Shirt, Palette, Layout, Terminal, ShieldCheck, Zap } from 'lucide-react';

const skills = [
  {
    icon: <Shirt className="text-brand-blue" size={32} />,
    name: "Anime T-Shirt Design",
    desc: "Creating unique, wearable anime illustrations that resonate with the community."
  },
  {
    icon: <Palette className="text-brand-orange" size={32} />,
    name: "Graphic Design",
    desc: "Mastering layout, color theory, and typography for diverse visual projects."
  },
  {
    icon: <Zap className="text-brand-blue" size={32} />,
    name: "Adobe Photoshop",
    desc: "Advanced photo manipulation and digital illustration for high-end results."
  },
  {
    icon: <Terminal className="text-brand-orange" size={32} />,
    name: "Basic HTML & CSS",
    desc: "Constructing the digital foundation for creative web experiences."
  },
  {
    icon: <ShieldCheck className="text-brand-blue" size={32} />,
    name: "Creative Branding",
    desc: "Developing cohesive visual identities that tell a powerful story."
  },
  {
    icon: <Layout className="text-brand-orange" size={32} />,
    name: "UI/UX Awareness",
    desc: "Designing with the end-user in mind for a seamless visual flow."
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Mastered Tools & Skills</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-light">
          Combining technical expertise with artistic vision to deliver premium quality results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="glass-card p-8 rounded-3xl group hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-150 transition-transform duration-500">
               {React.cloneElement(skill.icon as React.ReactElement<any>, { size: 120 })}
            </div>
            
            <div className="relative z-10">
              <div className="mb-6 p-4 bg-white/10 w-fit rounded-2xl border border-white/20">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                {skill.desc}
              </p>
            </div>
            
            <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${index % 2 === 0 ? 'from-brand-blue' : 'from-brand-orange'} to-transparent w-0 group-hover:w-full transition-all duration-500`}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
