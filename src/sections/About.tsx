import { motion } from 'motion/react';
import logo from '../assets/LOGO.png'

export default function About() {
  return (
    <section id="about" className="py-32 bg-transparent relative overflow-hidden">
      {/* Decorative text */}
      <div className="absolute top-0 left-0 w-full flex justify-center opacity-[0.02] pointer-events-none select-none">
        <span className="text-[20vw] font-display font-black leading-none text-white">ABOUT</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-gold font-display font-bold text-sm tracking-[0.3em] uppercase mb-6 flex items-center">
              <span className="w-8 h-[1px] bg-gold mr-4"></span>
              The Genesis
            </h4>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-10 leading-tight">
              8FINITY ELITE SOLUTIONS <br />
              <span className="text-gold italic">ABOUT</span>
            </h2>
            <p className="text-white/60 text-lg mb-6 font-light leading-relaxed">
              Where teamwork builds strength, friendship creates lasting bonds, and hard work leads us to endless achievements.
            </p>
            <p className="text-white/60 text-lg mb-6 font-light leading-relaxed">
              We are more than just a team — we are a family that supports, uplifts, and grows together. Every step we take is guided by unity, respect, and determination. Through dedication and trust in one another, we turn challenges into opportunities and dreams into reality.
            </p>
            <p className="text-white/60 text-lg mb-6 font-light leading-relaxed">
              We believe that with strong teamwork, genuine friendship, and continuous effort, success becomes infinite. May our journey be filled with growth, positivity, and countless blessings as we rise together.
            </p>
            <p className="text-white/60 text-lg mb-12 font-light leading-relaxed">
              Together, we are unstoppable. Together, we are 8FINITY ELITE SOLUTIONS
            </p>

            <div className="grid grid-cols-2 gap-8">
              {[
                { label: 'Founded', value: '2026' },
                { label: 'Projects', value: '2' },
                { label: 'People', value: '6' },
              ].map((stat, i) => (
                <div key={i} className="border-l-2 border-gold/30 pl-6">
                  <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gold/60 text-xs uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square relative overflow-hidden rounded-sm group">
              <img
                src={logo}
                alt="Office space"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-pure/40 to-transparent opacity-60" />

              {/* Floating element */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold/10 backdrop-blur-3xl rounded-full flex items-center justify-center p-8 border border-white/10"
              >
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
