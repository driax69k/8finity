import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TEAM_FOUNDERS, TEAM_MEMBERS } from '../constants';
import { Facebook, Linkedin, X } from 'lucide-react';

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const allMembers = [...TEAM_FOUNDERS, ...TEAM_MEMBERS];

  return (
    <section id="team" className="py-32 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <h4 className="text-gold font-display font-medium text-xs tracking-[0.4em] uppercase mb-4">
            The Visionaries
          </h4>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            MEET THE <span className="text-glow-gold">FOUNDERS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {TEAM_FOUNDERS.map((founder, idx) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              onClick={() => setSelectedMember(founder)}
              className="flex flex-col md:flex-row items-center md:items-stretch bg-black-deep border border-white/5 group overflow-hidden cursor-pointer hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-full md:w-1/2 aspect-square overflow-hidden">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
              </div>
              <div className="w-full md:w-1/2 p-10 flex flex-col">
                <div className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                  {founder.role}
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-gold transition-colors">
                  {founder.name}
                </h3>
                <p className="text-white/50 font-light leading-relaxed line-clamp-6 whitespace-pre-line">
                  {founder.bio}
                </p>
                <div className="mt-auto pt-8 flex items-center space-x-4">
                  <div className="w-10 h-[1px] bg-gold" />
                  <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold group-hover:text-gold transition-colors">View Profile</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mb-16">
          <h4 className="text-silver font-display font-medium text-xs tracking-[0.4em] uppercase mb-4">
            Collective Genius
          </h4>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
            CORE <span className="text-glow-silver">MEMBERS</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(20%-1.6rem)] max-w-[240px]"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-sm relative mb-4 border border-transparent group-hover:border-silver/30 transition-all duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black-pure/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black-pure to-transparent">
                  <span className="text-[10px] text-silver font-bold uppercase tracking-widest">Details</span>
                </div>
              </div>
              <h3 className="text-lg font-display font-bold text-white group-hover:text-silver transition-colors">
                {member.name}
              </h3>
              <p className="text-white/40 text-xs uppercase tracking-widest font-medium">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Profile Detail Overlay */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black-pure/95 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="relative w-full max-w-5xl bg-black-deep border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-black-pure/50 hover:bg-gold/20 text-white hover:text-gold transition-all rounded-full border border-white/10"
              >
                <X size={24} />
              </button>

              {/* Profile Image */}
              <div className="w-full md:w-2/5 aspect-[4/5] md:aspect-auto overflow-hidden relative">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-deep via-transparent to-transparent md:hidden" />
              </div>

              {/* Profile Info */}
              <div className="w-full md:w-3/5 p-8 md:p-16 flex flex-col max-h-[80vh] overflow-y-auto custom-scrollbar">
                <div className="mb-8">
                  <h4 className="text-gold font-display font-medium text-xs tracking-[0.4em] uppercase mb-2">
                    {selectedMember.role}
                  </h4>
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                    {selectedMember.name}
                  </h3>
                  <div className="w-20 h-1 bg-gold/50 mb-8" />
                  <p className="text-white/70 text-lg leading-relaxed font-light mb-8 whitespace-pre-line">
                    {selectedMember.bio}
                  </p>
                </div>

                {selectedMember.skills && (
                  <div className="mb-8">
                    <h5 className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Core Expertise</h5>
                    <div className="flex flex-wrap gap-3">
                      {selectedMember.skills.map((skill: string) => (
                        <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 text-white/80 text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    {selectedMember.social?.linkedin && (
                      <a href={selectedMember.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors">
                        <Linkedin size={20} />
                      </a>
                    )}
                    {selectedMember.social?.facebook && (
                      <a href={selectedMember.social.facebook} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors">
                        <Facebook size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
