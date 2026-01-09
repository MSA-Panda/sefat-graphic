
import React from 'react';
import { Mail, Send, Facebook, Instagram, Github, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 max-w-5xl mx-auto">
      <div className="glass-card rounded-[3rem] p-10 md:p-16 flex flex-col lg:flex-row gap-16">
        
        {/* Left: Info */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Let's build <br /> something <span className="text-blue-500">epic.</span></h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-light mb-12">
            Ready to bring your anime visual identity to life? Drop a message and let's discuss your next project.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="p-4 glass-card rounded-2xl group-hover:bg-blue-500/10 transition-colors">
                <Mail className="text-blue-500" size={24} />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email Me</div>
                <div className="text-lg font-medium">hello@sefatgraphic.com</div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Find me on social</div>
            <div className="flex gap-4">
              {[Facebook, Instagram, Github].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="p-4 glass-card rounded-2xl text-slate-600 dark:text-slate-300 hover:text-blue-500 hover:translate-y-[-4px] transition-all"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="flex-1 glass-card p-8 md:p-10 rounded-[2rem] border-white/10">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500/50 outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500/50 outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
              <textarea 
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500/50 outline-none focus:ring-4 focus:ring-blue-500/10 transition-all resize-none"
              ></textarea>
            </div>

            <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all group shadow-xl shadow-blue-500/20 active:scale-95">
              Send Message
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
