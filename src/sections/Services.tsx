import { motion } from 'motion/react';
import { SERVICES } from '../constants';

export default function Services() {
  return (
    <section id="services" className="py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold font-display font-medium text-xs tracking-[0.4em] uppercase mb-4"
          >

          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-8"
          >
            ELEVATING OUR <br />
            <span className="text-glow-gold">SERVICES</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="glass-card p-10 group relative transition-all duration-500 overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-sm bg-gold/10 flex items-center justify-center text-gold mb-8 group-hover:bg-gold group-hover:text-black-pure transition-colors duration-500">
                <service.icon size={32} />
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-gold transition-colors">
                {service.title}
              </h3>

              <p className="text-white/50 leading-relaxed font-light">
                {service.description}
              </p>

              <div className="mt-8 flex items-center text-gold font-bold text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer">
                LEARN MORE <span className="ml-2">→</span>
              </div>

              {/* Background Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gold/5 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
